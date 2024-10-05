import type { Plugin } from "vite";

export function vitePluginStorefrontOptions(options: object): Plugin {
  const virtualModuleId = `virtual:storefront-options`;
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "@withstorefront/storefront-options",
    async resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return `export default ${JSON.stringify(options)}`;
      }
    },
  };
}
