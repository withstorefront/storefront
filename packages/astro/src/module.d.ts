import type { Storefront } from "@withstorefront/storefront";

declare global {
  /* eslint-disable-next-line no-var */
  var storefrontInstance: Storefront;
}
