import productFragment from "../fragments/product.js";

const collectionFragment = `#graphql
  fragment collection on Collection {
    handle
    title
    description
    updatedAt
  }
`;

export const getCollectionQuery = `#graphql
  query getCollection($handle: String!, $sortKey: ProductCollectionSortKeys, $reverse: Boolean) {
    collection(handle: $handle) {
      ...collection
      products(sortKey: $sortKey, reverse: $reverse, first: 100) {
        edges {
          node {
            ...product
          }
        }
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
      }
    }
  }
  ${collectionFragment}
  ${productFragment}
`;
