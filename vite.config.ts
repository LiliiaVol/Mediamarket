import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/server": {
        target: "http://localhost", // ваш сервер з PHP
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, ""), // якщо потрібно, змінюємо шлях
      },
    },
  },
});
