import type { Card } from "./customer.js";
import type { CartLineItem } from "./cart.js";

export interface Checkout {
  /**
   * Indicates if the checkout has payment information collected.
   */
  hasPayment: boolean;
  /**
   * Indicates if the checkout has shipping information collected.
   */
  hasShipping: boolean;
  /**
   * The unique identifier for the address that the customer has selected for shipping.
   */
  addressId: string;
  /**
   * The list of payment cards that the customer has available.
   */
  payments?: Card[];
  /**
   * The unique identifier of the card that the customer has selected for payment.
   */
  cardId?: string;
  /**
   * List of items in the checkout.
   */
  lineItems?: CartLineItem[];
}
