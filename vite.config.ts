





import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/my-frontend-portfolio/",
  plugins: [react(), tailwindcss()],
  test: {
    environment: "node",
  },
});













