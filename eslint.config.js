import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  {
    ignores: ["dist", "node_modules"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
    },
    plugins: {
      import: importPlugin,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/core-modules": [
        "node:path",
        "node:url",
        "@vitejs/plugin-react",
        "vite",
        "react",
        "react-dom",
      ],
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"],
            ["@components", "./src/components"],
            ["@sections", "./src/sections"],
            ["@styles", "./src/styles"],
            ["@utils", "./src/utils"],
            ["@assets", "./src/assets"],
            ["@assets/images", "./src/assets/images"],
            ["@assets/fonts", "./src/assets/fonts"],
          ],
          extensions: [".js", ".jsx"],
        },
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.vite.rules,
      "import/no-unresolved": "error",
      "import/order": [
        "error",
        {
          alphabetize: { order: "asc", caseInsensitive: true },
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
      "react/prop-types": "off",
    },
  },
];
