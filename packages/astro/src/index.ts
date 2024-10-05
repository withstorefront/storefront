import type { StorefrontAdapter } from "@withstorefront/storefront";
import { AstroIntegration } from "astro";
import { vitePluginStorefront } from "./vite-plugin-storefront.js";

export function useStorefront() {
  if (!globalThis.storefrontInstance) {
    console.error("storefrontInstance has not been initialized correctly");
  }
  return globalThis.storefrontInstance;
}

export default function storefrontAdapter<T extends object>(
  adapter: StorefrontAdapter<T>,
): AstroIntegration {
  return {
    name: "@withstorefront/astro",
    hooks: {
      "astro:config:setup": ({ injectScript, updateConfig }) => {
        updateConfig({
          vite: {
            plugins: [vitePluginStorefront(adapter)],
          },
        });

        injectScript(
          "page-ssr",
          `
          import { storefront } from "virtual:storefront";
          globalThis.storefrontInstance = storefront;
          `,
        );
      },
    },
  };
}
