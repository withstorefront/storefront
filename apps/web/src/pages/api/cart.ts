import type { APIRoute } from "astro";
import { storefront } from "../../storefront";
import { CART_ID_COOKIE } from "../../consts";
import {
  sendJSON,
  StatusBadRequest,
  StatusForbidden,
  StatusInternalServerError,
  StatusOK,
  StatusTemporaryRedirect,
} from "./_responses";

function intOrDefault(value: string | undefined, fallback: number): number {
  if (typeof value === "undefined") {
    return fallback;
  }

  return parseInt(value);
}

export const GET: APIRoute = async (context) => {
  const cartId = context.cookies.get(CART_ID_COOKIE)?.value;

  if (!cartId) {
    return new Response(null, {
      status: StatusBadRequest,
    });
  }

  const cart = await storefront.cart.get(cartId);

  if (!cart) {
    return new Response(null, {
      status: StatusForbidden,
    });
  }

  return new Response(JSON.stringify(cart), { status: StatusOK });
};

export const POST: APIRoute = async (context) => {
  const formData = await context.request.formData();
  const productId = formData.get("productId")?.toString();
  const variantId = formData.get("variantId")?.toString();
  const quantity = intOrDefault(formData.get("quantity")?.toString(), 1);

  if (!productId || !variantId) {
    return sendJSON(
      { message: "Missing required fields" },
      { status: StatusBadRequest },
    );
  }

  const cartId = context.cookies.get(CART_ID_COOKIE)?.value;

  const cart = await storefront.cart.addItem(cartId, {
    variantId,
    productId,
    quantity,
  });

  if (!cart) {
    return sendJSON(
      { message: "Error adding product to cart" },
      { status: StatusInternalServerError },
    );
  }

  context.cookies.set(CART_ID_COOKIE, cart.id, {
    domain: import.meta.env.DEV ? undefined : context.site?.toString(),
    secure: import.meta.env.PROD,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });

  return sendJSON(cart, {
    status: StatusTemporaryRedirect,
    headers: {
      Location: new URL(context.request.headers.get("Referer")!).pathname,
    },
  });
};

export const PUT: APIRoute = async (context) => {
  const formData = await context.request.formData();
  const lineId = formData.get("lineId")?.toString();
  const quantity = intOrDefault(formData.get("quantity")?.toString(), 1);

  if (!lineId) {
    return sendJSON(
      { message: "Missing required fields" },
      { status: StatusBadRequest },
    );
  }

  const cartId = context.cookies.get(CART_ID_COOKIE)?.value;

  if (!cartId) {
    return sendJSON(
      { message: "Missing required fields" },
      { status: StatusBadRequest },
    );
  }

  const cart = await storefront.cart.updateItem(cartId, {
    id: lineId,
    quantity,
  });

  if (!cart) {
    return sendJSON(
      { message: "Error updating product in cart" },
      { status: StatusInternalServerError },
    );
  }

  return sendJSON(cart, {
    status: StatusTemporaryRedirect,
    headers: {
      Location: new URL(context.request.headers.get("Referer")!).pathname,
    },
  });
};

export const DELETE: APIRoute = async (context) => {
  const formData = await context.request.formData();
  const lineId = formData.get("lineId")?.toString();

  if (!lineId) {
    return sendJSON(
      { message: "Missing required fields" },
      { status: StatusBadRequest },
    );
  }

  const cartId = context.cookies.get(CART_ID_COOKIE)?.value;

  if (!cartId) {
    return sendJSON(
      { message: "Missing required fields" },
      { status: StatusBadRequest },
    );
  }

  const cart = await storefront.cart.removeItem(cartId, lineId);

  if (!cart) {
    return sendJSON(
      { message: "Error removing product from cart" },
      { status: StatusInternalServerError },
    );
  }

  return sendJSON(cart, {
    status: StatusTemporaryRedirect,
    headers: {
      Location: new URL(context.request.headers.get("Referer")!).pathname,
    },
  });
};
