export const getMenuQuery = `#graphql
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      handle
      items {
        title
        url
      }
    }
  }
`;
