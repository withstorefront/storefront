import { Cart, CartLineItem } from "./cart.js";
import { Checkout } from "./checkout.js";
import { Collection } from "./collection.js";
import { AddressFields, CardFields } from "./customer.js";
import { Page } from "./page.js";
import { Product } from "./product.js";
import type { CartItemBody, ProductFilter } from "./provider.js";
import { Menu } from "./site.js";

export interface CheckoutBody {
  /**
   * The unique identifier for the cart.
   */
  cartId?: string;
  /**
   * The Card information.
   * @see CardFields
   */
  card: CardFields;
  /**
   * The Address information.
   * @see AddressFields
   */
  address: AddressFields;
}

export interface Storefront {
  cart: {
    get(cartId: string): Cart | null;
    addItem(cartId: string, body: CartItemBody): Cart | null;
    updateItem(cartId: string, lineItem: CartLineItem): Cart | null;
    removeItem(cartId: string, lineItem: CartLineItem): Cart | null;
  };
  checkout: {
    get(cartId: string): Checkout | null;
    submit(checkout: CheckoutBody): Checkout | null;
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
    }): Promise<{ collection: Collection; products: Product[] } | null>;
  };
  site: {
    getMenu(id: string): Promise<Menu | null>;
    getPage(id: string): Promise<Page | null>;
    getAllPages(): Promise<Page[]>;
  };
}
