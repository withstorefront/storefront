import { Cart, CartLineItem, SelectedOption } from "./cart.js";
import { Checkout } from "./checkout.js";
import { Collection } from "./collection.js";
import { Page } from "./page.js";
import { Product, ProductFacet } from "./product.js";
import { Menu } from "./site.js";

/**
 * Base cart item body used for cart mutations
 */
export type CartItemBody =
  | {
      /**
       *  The unique identifier for the product variant.
       */
      variantId: never;
      /**
       *  The unique identifier for the product, if the variant is not provided.
       */
      productId: string;
      /**
       * The quantity of the product variant.
       */
      quantity?: number;

      /**
       * The product variant's selected options.
       */
      optionsSelected?: SelectedOption[];
    }
  | {
      /**
       *  The unique identifier for the product variant.
       */
      variantId: string;
      /**
       *  The unique identifier for the product, if the variant is not provided.
       */
      productId: string;
      /**
       * The quantity of the product variant.
       */
      quantity?: number;

      /**
       * The product variant's selected options.
       */
      optionsSelected?: SelectedOption[];
    };

export type CartLineItemBody = Partial<CartLineItem> &
  Required<Pick<CartLineItem, "id">>;

export type ProductFilter = "featured" | "best_selling" | "newest";

export interface Provider {
  cart: {
    get: (cartId: string) => Promise<Cart | null>;
    addItem: (
      cartId: string | null | undefined,
      item: CartItemBody,
    ) => Promise<Cart | null>;
    updateItem: (
      cartId: string,
      item: CartLineItemBody,
    ) => Promise<Cart | null>;
    removeItem: (cartId: string, lineId: string) => Promise<Cart | null>;
  };
  checkout: {
    get: (cartId: string) => Promise<Checkout | null>;
    submit: (checkout: Checkout) => Promise<Checkout | null>;
  };
  products: {
    getAll(params: {
      relevance?: ProductFilter;
      ids?: string[];
      first?: number;
    }): Promise<Product[]>;
    getOne(params: { slug: string }): Promise<Product | null>;
  };
  collections: {
    getOne(params: {
      slug: string;
      first?: number;
      relevance?: ProductFilter;
    }): Promise<{
      collection: Collection;
      products: Product[];
      facets: ProductFacet[];
    } | null>;
  };
  site: {
    getMenu(id: string): Promise<Menu | null>;
    getPage(id: string): Promise<Page | null>;
    getAllPages(): Promise<Page[]>;
  };
}
