import { defineMiddleware } from "astro:middleware";
import { CART_ID_COOKIE } from "./consts";
import { storefront } from "./storefront";
import type { Cart } from "@withstorefront/storefront";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
  const cartId = context.cookies.get(CART_ID_COOKIE)?.value;

  let cart: Cart | null = null;

  if (cartId) {
    cart = await storefront.cart.get(cartId);
  }

  context.locals.cart = cart;

  return next();
});
