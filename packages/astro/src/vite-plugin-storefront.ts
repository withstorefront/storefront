import type { Plugin } from "vite";
import type { StorefrontAdapter } from "@withstorefront/storefront";

export function vitePluginStorefront<T extends object>({
  name,
  params,
}: StorefrontAdapter<T>): Plugin {
  const virtualModuleId = `virtual:storefront`;
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "@withstorefront/astro",
    async resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return `
                import { createStorefront } from "@withstorefront/storefront";
                import integration from "${name}";

                export const storefront = integration(${JSON.stringify(params)});
                `;
      }
    },
  };
}
