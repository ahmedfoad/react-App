import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand: "eslint . --ext .js,.jsx",
        useFlatConfig: true, // since you're on ESLint 9 flat config
      },
    }),
  ],
});
