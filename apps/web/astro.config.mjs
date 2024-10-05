import storefront from "@withstorefront/astro";
import { shopify } from "@withstorefront/shopify";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_ACCESS_TOKEN } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site: "https://withstorefront.com",
  integrations: [
    storefront(
      shopify({
        domain: SHOPIFY_STORE_DOMAIN,
        accessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      }),
    ),
  ],
});
