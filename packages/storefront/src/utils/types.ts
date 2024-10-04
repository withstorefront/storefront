/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Core fetcher added by CommerceProvider
 */
export type Fetcher<T = any, B = any> = (
  options: FetcherOptions<B>,
) => T | Promise<T>;

export interface FetcherOptions<Body = any> {
  url?: string;
  query?: string;
  method?: string;
  variables?: any;
  body?: Body;
}
