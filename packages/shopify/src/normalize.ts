import type {
  Product,
  ProductFacet,
  Cart,
  CartLineItem,
  Menu,
  Page,
  Collection,
  Image,
} from "@withstorefront/storefront";
import type {
  ProductVariantConnection,
  ImageConnection,
  Image as ShopifyImage,
  MoneyV2,
  ProductOption,
  Cart as ShopifyCart,
  Collection as ShopifyCollection,
  BaseCartLineEdge,
  Menu as ShopifyMenu,
  Filter,
} from "../types/storefront.types.js";

import { colorMap } from "./colors.js";
import {
  GetPageQuery,
  GetProductQuery,
} from "../types/storefront.generated.js";

const money = ({ amount, currencyCode }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode,
  };
};

const normalizeProductOption = ({
  id,
  name: displayName,
  optionValues,
}: ProductOption) => {
  return {
    __typename: "MultipleChoiceOption",
    id,
    displayName: displayName.toLowerCase(),
    values: optionValues.map((value) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let output: any = {
        label: value,
      };
      if (displayName.match(/colou?r/gi)) {
        const mappedColor =
          colorMap[value.name.toLowerCase().replace(/ /g, "")];
        if (mappedColor) {
          output = {
            ...output,
            hexColors: [mappedColor],
          };
        }
      }
      return output;
    }),
  };
};

const normalizeProductImage = ({
  url,
  altText: alt,
  width,
  height,
}: ShopifyImage): Image => {
  return {
    url,
    alt: alt as string | undefined,
    width: width as number | undefined,
    height: height as number | undefined,
  };
};

const normalizeProductImages = ({ edges }: ImageConnection) =>
  edges?.map(({ node }) => normalizeProductImage(node));

const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {
  return edges?.map(
    ({
      node: {
        id,
        selectedOptions,
        sku,
        title,
        price,
        compareAtPrice,
        requiresShipping,
        availableForSale,
      },
    }) => {
      return {
        id,
        name: title,
        sku,
        price: +price.amount,
        listPrice: +compareAtPrice?.amount,
        requiresShipping,
        availableForSale,
        options: selectedOptions,
      };
    },
  );
};

export function normalizeProduct({
  id,
  title: name,
  vendor,
  images,
  featuredImage,
  variants,
  description,
  descriptionHtml,
  handle,
  priceRange,
  options,
}: GetProductQuery["product"]): Product {
  return {
    id,
    name,
    vendor,
    path: `/${handle}`,
    slug: handle?.replace(/^\/+|\/+$/g, ""),
    price: money(priceRange?.minVariantPrice),
    images: normalizeProductImages(images),
    featuredImage: featuredImage && normalizeProductImage(featuredImage),
    variants: variants ? normalizeProductVariants(variants) : [],
    options: options
      ? options
          .filter((o: ProductOption) => o.name !== "Title") // By default Shopify adds a 'Title' name when there's only one option. We don't need it. https://community.shopify.com/c/Shopify-APIs-SDKs/Adding-new-product-variant-is-automatically-adding-quot-Default/td-p/358095
          .map((o: ProductOption) => normalizeProductOption(o))
      : [],
    description: description || "",
    ...(descriptionHtml && { descriptionHtml }),
  };
}

function guidToId(guid: string) {
  return guid.slice(guid.lastIndexOf("/") + 1);
}

export function idToGuid(type: string, id: string) {
  return `gid://shopify/${type}/${id}`;
}

export function normalizeCart(cart: ShopifyCart): Cart {
  return {
    id: guidToId(cart.id),
    url: cart.checkoutUrl,
    customerId: "",
    email: "",
    createdAt: cart.createdAt,
    currency: {
      code: cart.cost.totalAmount.currencyCode,
    },
    taxesIncluded: true, // TODO
    lineItems: cart.lines.edges.map(normalizeLineItem),
    lineItemsSubtotalPrice: +cart.cost.subtotalAmount.amount,
    subtotalPrice: +cart.cost.subtotalAmount.amount,
    totalPrice: cart.cost.totalAmount.amount,
    totalQuantity: cart.totalQuantity,
    discounts: [],
  };
}

function normalizeLineItem({ node }: BaseCartLineEdge): CartLineItem {
  const { id, cost, merchandise, quantity } = node;
  const image = merchandise.image || merchandise.product.featuredImage;
  return {
    id,
    variantId: String(merchandise.product.id),
    productId: String(merchandise.product.id),
    name: `${merchandise.product.title}`,
    quantity,
    image: image ? normalizeProductImage(image) : undefined,
    variant: {
      id: String(merchandise.id),
      sku: merchandise.sku ?? "",
      name: merchandise.title == "Default Title" ? "" : merchandise.title,
      image: merchandise.image
        ? normalizeProductImage(merchandise.image)
        : undefined,
      requiresShipping: merchandise.requiresShipping ?? false,
      price: cost.totalAmount.amount,
      options: merchandise.selectedOptions,
    },
    discounts: [],
    subtotalPrice: cost.totalAmount.amount,
    options:
      merchandise.title == "Default Title" ? [] : merchandise.selectedOptions,
  };
}

export function normalizeMenu(menu: ShopifyMenu): Menu {
  return {
    id: menu.handle,
    items: menu.items.map(({ title, url }) => ({
      name: title,
      url: new URL(url).pathname,
    })),
  };
}

export function normalizePage(page: GetPageQuery["pageByHandle"]): Page {
  return {
    id: page.handle,
    name: page.title,
    body: page.body,
  };
}

export function normalizeCollection(collection: ShopifyCollection): {
  collection: Collection;
  products: Product[];
  facets: ProductFacet[];
} {
  return {
    collection: {
      slug: collection.handle,
      name: collection.title,
      description: collection.description,
    },
    products: collection.products.edges.map(({ node }) =>
      normalizeProduct(node),
    ),
    facets: collection.products.filters.map((filter) =>
      normalizeProductFilter(filter),
    ),
  };
}

export function normalizeProductFilter(filter: Filter): ProductFacet {
  if (filter.type == "PRICE_RANGE") {
    const parsedValue = JSON.parse(filter.values[0].input) as {
      price: { min: number; max: number };
    };
    return {
      id: filter.id,
      label: filter.label,
      type: "PRICE_RANGE",
      value: parsedValue.price,
    };
  }

  return {
    id: filter.id,
    label: filter.label,
    type: "MULTI_SELECT",
    values: filter.values.map((value) => ({
      id: value.id,
      label: value.label,
      value: value.input,
      productCount: value.count,
    })),
  };
}
