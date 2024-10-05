import { Provider, StorefrontAdapter } from "@withstorefront/storefront";
import pkg from "../package.json";

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

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function shopifyProvider(options: ShopifyOptions): Provider {
  return {
    cart: {
      async get(cartId) {
        return null;
      },
      async addItem(item) {
        return null;
      },
      async updateItem(item) {
        return null;
      },
      async removeItem(item) {
        return null;
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
      async getAll(params) {
        return [];
      },
      async getAllByPath(first) {
        return [];
      },
      async getOne(params) {
        return null;
      },
    },
  };
}
