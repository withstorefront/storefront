import cartFragment from "../fragments/cart.js";

export const addToCartMutation = `#graphql
  mutation addToCart($cartId: ID!, $lineItems: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lineItems) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

export const createCartMutation = `#graphql
  mutation createCart($lineItems: [CartLineInput!]) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

export const editCartItemsMutation = `#graphql
  mutation editCartItems($cartId: ID!, $lineItems: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lineItems) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;

export const removeFromCartMutation = `#graphql
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`;
