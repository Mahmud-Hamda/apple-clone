import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite configuration for the apple-clone React app.
 * @type {import("vite").UserConfig}
 */
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Windows files shared into WSL do not emit native change events.
      usePolling: true,
      interval: 300,
    },
  },
});
