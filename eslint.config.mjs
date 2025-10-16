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
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Allow unused parameters (common in event handlers from docs)
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^(_|e$|event$)",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }],
      
      // Allow any type (common in component libraries)
      "@typescript-eslint/no-explicit-any": "off",
      
      // Allow missing dependencies in useEffect (for stable callbacks)
      "react-hooks/exhaustive-deps": "off",
      
      // Allow unescaped entities (for apostrophes, quotes)
      "react/no-unescaped-entities": "off",
      
      // Allow unused vars for common UI library patterns
      "no-unused-vars": "off",
      
      // Allow img tags (disable Next.js img optimization warning)
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
