import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2022",
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Vendor chunking keeps the initial bundle lean.
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("framer-motion") || id.includes("motion-dom"))
            return "motion-vendor";
          if (
            id.includes("react-router") ||
            id.includes("react-dom") ||
            id.includes("/react/") ||
            id.includes("scheduler")
          )
            return "react-vendor";
          if (
            id.includes("@tanstack") ||
            id.includes("axios") ||
            id.includes("zustand")
          )
            return "data-vendor";
          if (
            id.includes("react-hook-form") ||
            id.includes("@hookform") ||
            id.includes("/zod/")
          )
            return "form-vendor";
          return undefined;
        },
      },
    },
  },
});
