import { defineConfig } from "eslint-define-config";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
      },
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
    // extends: ["@ml-cli-kit/eslint-config"], // Uncomment if you have a shared config
  },
]);
