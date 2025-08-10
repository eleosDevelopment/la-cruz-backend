// prettier.config.js
/** @type {import("prettier").Options} */
const config = {
  useTabs: false,
  tabWidth: 2,
  singleQuote: false, // <-- Change this to false for double quotes
  trailingComma: "all",
  printWidth: 80,
  semi: true,
};

export default config;
