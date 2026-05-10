import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
