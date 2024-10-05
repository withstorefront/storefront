export interface ErrorData {
  message: string;
  code?: string;
}

export type ErrorProps = {
  code?: string;
} & (
  | { message: string; errors?: never }
  | { message?: never; errors: ErrorData[] }
);

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Core fetcher used internally by integration Providers
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

/* eslint-enable @typescript-eslint/no-explicit-any */
