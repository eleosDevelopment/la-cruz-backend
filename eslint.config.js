// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import ts from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": ts,
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      ...ts.configs.recommended.rules,
      // ...ts.configs['recommended-requiring-type-checking'].rules, // Uncomment if you use this

      // --- EXPLICITLY TURN OFF INDENTATION RULES ---
      // Prettier handles indentation, so disable ESLint's indentation rules to avoid conflict.
      indent: "off", // For JavaScript files (if this block applies to them too, otherwise move)
      "@typescript-eslint/indent": "off", // For TypeScript files

      // --- Other ESLint rules ---
      "no-console": "off",
      "no-debugger": "warn",
      "no-empty-function": "warn",
      "no-duplicate-imports": "error",

      "no-unused-vars": "off", // Turn off base ESLint rule
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        {
          assertionStyle: "as",
          objectLiteralTypeAssertions: "allow-as-parameter",
        },
      ],
      "@typescript-eslint/no-floating-promises": "warn",

      // No other style rules here that Prettier manages (like semi, quotes, arrow-parens)
    },
  },

  // This MUST be the last configuration in the array to ensure it correctly disables
  // conflicting rules from all previous configs.
  pluginPrettierRecommended,

  {
    ignores: ["dist/", "node_modules/", "build/", ".next/"],
  },
  {
    rules: {},
  },
];
