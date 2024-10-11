import cartFragment from "../fragments/cart.js";

export const getCartQuery = `#graphql
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${cartFragment}
`;
