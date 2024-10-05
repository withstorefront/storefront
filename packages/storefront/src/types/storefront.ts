import { Cart, CartLineItem } from "./cart.js";
import { Checkout } from "./checkout.js";
import { AddressFields, CardFields } from "./customer.js";
import type { CartItemBody } from "./provider.js";

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
    addItem(body: CartItemBody): Cart | null;
    updateItem(lineItem: CartLineItem): Cart | null;
    removeItem(lineItem: CartLineItem): Cart | null;
  };
  checkout: {
    get(cartId: string): Checkout | null;
    submit(checkout: CheckoutBody): Checkout | null;
  };
}
