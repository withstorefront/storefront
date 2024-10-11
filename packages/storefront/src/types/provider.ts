import { Cart, CartLineItem, SelectedOption } from "./cart.js";
import { Checkout } from "./checkout.js";
import { Product } from "./product.js";

/**
 * Base cart item body used for cart mutations
 */
export interface CartItemBody {
  /**
   *  The unique identifier for the product variant.
   */
  variantId: string;
  /**
   *  The unique identifier for the product, if the variant is not provided.
   */
  productId?: string;
  /**
   * The quantity of the product variant.
   */
  quantity?: number;

  /**
   * The product variant's selected options.
   */
  optionsSelected?: SelectedOption[];
}

export type ProductFilter = "featured" | "best_selling" | "newest";

export interface Provider {
  cart: {
    get: (cartId: string) => Promise<Cart | null>;
    addItem: (cartId: string, item: CartItemBody) => Promise<Cart | null>;
    updateItem: (cartId: string, item: CartLineItem) => Promise<Cart | null>;
    removeItem: (cartId: string, item: CartLineItem) => Promise<Cart | null>;
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
}
