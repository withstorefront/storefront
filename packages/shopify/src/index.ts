import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import { Provider, StorefrontAdapter } from "@withstorefront/storefront";
import pkg from "../package.json";
import { getProductQuery, getProductsQuery } from "./queries/products.js";
import {
  idToGuid,
  normalizeCart,
  normalizeCollection,
  normalizeMenu,
  normalizePage,
  normalizeProduct,
} from "./normalize.js";
import { getCartQuery } from "./queries/cart.js";
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from "./mutations/cart.js";
import { getMenuQuery } from "./queries/site.js";
import { getPageQuery, getPagesQuery } from "./queries/page.js";
import { getCollectionQuery } from "./queries/collection.js";

export interface ShopifyOptions {
  domain: string;
  accessToken: string;
}

export function shopify(
  options: ShopifyOptions,
): StorefrontAdapter<ShopifyOptions> {
  return {
    name: pkg.name,
    params: options,
  };
}

function cartIdToGuid(cartId: string) {
  return idToGuid("Cart", cartId);
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function shopifyProvider(options: ShopifyOptions): Provider {
  const client = createStorefrontApiClient({
    storeDomain: options.domain,
    apiVersion: "2024-10",
    privateAccessToken: options.accessToken,
  });

  return {
    cart: {
      async get(cartId) {
        const { data, errors, extensions } = await client.request(
          getCartQuery,
          {
            variables: {
              cartId: cartIdToGuid(cartId),
            },
          },
        );

        // Old carts becomes `null` when you checkout.
        if (!data?.cart) {
          return null;
        }

        return normalizeCart(data.cart);
      },
      async addItem(cartId, item) {
        if (!cartId) {
          const { data, errors, extensions } = await client.request(
            createCartMutation,
            {
              variables: {
                lineItems: [
                  {
                    quantity: item.quantity || 1,
                    merchandiseId: item.variantId || item.productId,
                  },
                ],
              },
            },
          );

          if (!data?.cartCreate?.cart) {
            return null;
          }

          return normalizeCart(data.cartCreate.cart);
        }

        const { data, errors, extensions } = await client.request(
          addToCartMutation,
          {
            variables: {
              cartId: cartIdToGuid(cartId),
              lineItems: [
                {
                  quantity: item.quantity || 1,
                  merchandiseId: item.variantId || item.productId,
                },
              ],
            },
          },
        );

        if (!data?.cartLinesAdd?.cart) {
          console.error(errors);
          return null;
        }

        return normalizeCart(data.cartLinesAdd.cart);
      },
      async updateItem(cartId, item) {
        const { data, errors, extensions } = await client.request(
          editCartItemsMutation,
          {
            variables: {
              cartId: cartIdToGuid(cartId),
              lineItems: [item],
            },
          },
        );

        if (!data?.cartLinesUpdate?.cart) {
          return null;
        }

        return normalizeCart(data.cartLinesUpdate.cart);
      },
      async removeItem(cartId, lineId) {
        const { data, errors, extensions } = await client.request(
          removeFromCartMutation,
          {
            variables: {
              cartId: cartIdToGuid(cartId),
              lineIds: [lineId],
            },
          },
        );

        if (!data?.cartLinesRemove?.cart) {
          return null;
        }

        return normalizeCart(data.cartLinesRemove.cart);
      },
    },
    checkout: {
      async get(cartId) {
        return null;
      },
      async submit(checkout) {
        return null;
      },
    },
    products: {
      // TODO: support search params
      async getAll(params) {
        const { data, errors, extensions } =
          await client.request(getProductsQuery);

        if (!data) {
          return [];
        }

        const products = data.products.edges.map((edge) =>
          normalizeProduct(edge.node),
        );

        return products;
      },
      async getOne(params) {
        const { data, errors, extensions } = await client.request(
          getProductQuery,
          {
            variables: {
              handle: params.slug,
            },
          },
        );

        if (!data?.product) {
          return null;
        }

        return normalizeProduct(data.product);
      },
    },
    collections: {
      async getOne(params) {
        const { data, errors, extensions } = await client.request(
          getCollectionQuery,
          {
            variables: {
              handle: params.slug,
            },
          },
        );

        if (!data?.collection) {
          return null;
        }

        return normalizeCollection(data.collection);
      },
    },
    site: {
      async getMenu(id: string) {
        const { data, errors, extensions } = await client.request(
          getMenuQuery,
          {
            variables: {
              handle: id,
            },
          },
        );

        if (!data?.menu) {
          return null;
        }

        return normalizeMenu(data.menu);
      },
      async getPage(id: string) {
        const { data, errors, extensions } = await client.request(
          getPageQuery,
          {
            variables: {
              handle: id,
            },
          },
        );

        if (!data?.pageByHandle) {
          return null;
        }

        return normalizePage(data.pageByHandle);
      },
      async getAllPages() {
        const { data, errors, extensions } =
          await client.request(getPagesQuery);

        if (!data?.pages.edges) {
          return [];
        }

        return data.pages.edges.map(({ node }) => normalizePage(node));
      },
    },
  };
}
