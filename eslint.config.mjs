import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.plugins("airbnb", "react", "react-hooks", "jsx-a11y", "import"),
  ...compat.config({
    plugins: ["airbnb"],
    extends: "standard",
    env: {
      es2020: true,
      node: true,
    },
    rules: {
      semi: "error",
    },
  }),
];

export default eslintConfig;
