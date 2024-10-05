import { type Fetcher, FetcherError } from "@withstorefront/storefront";
import { ShopifyOptions } from "./index.js";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export function getError(errors: any[] | null, status: number) {
  errors = errors ?? [{ message: "Failed to fetch Shopify API" }];
  return new FetcherError({ errors, status });
}

export async function getAsyncError(res: Response) {
  const data = await res.json();
  return getError(data.errors, res.status);
}

const handleFetchResponse = async (res: Response) => {
  if (res.ok) {
    const { data, errors } = await res.json();

    if (errors && errors.length) {
      throw getError(errors, res.status);
    }

    return data;
  }

  throw await getAsyncError(res);
};

export default function fetcher(options: ShopifyOptions): Fetcher {
  return async ({
    url = options.domain,
    method = "POST",
    variables,
    query,
  }) => {
    const { locale, ...vars } = variables ?? {};
    return handleFetchResponse(
      await fetch(url, {
        method,
        body: JSON.stringify({ query, variables: vars }),
        headers: {
          "X-Shopify-Storefront-Access-Token": options.accessToken!,
          "Content-Type": "application/json",
          ...(locale && {
            "Accept-Language": locale,
          }),
        },
      }),
    );
  };
}
