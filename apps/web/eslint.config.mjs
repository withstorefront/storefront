import eslintPluginAstro from "eslint-plugin-astro";
import eslint from "eslint-config";
import globals from "globals";

export default [
  ...eslint,
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
