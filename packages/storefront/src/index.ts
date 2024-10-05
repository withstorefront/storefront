export type * from "./types/index.d.ts";
export * from "./errors.js";

import type { Provider } from "./types/provider.js";
import type { Storefront } from "./types/storefront.js";

export interface StorefrontAdapter<T extends object> {
  name: string;
  params: T;
}

export function createStorefront<P extends Provider>(
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  provider: P,
): Storefront | null {
  return null;
}
