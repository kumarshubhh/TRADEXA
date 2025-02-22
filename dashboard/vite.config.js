import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5174,
    host: "0.0.0.0",
  },
  preview: {
    port: process.env.PORT || 5174,
    host: "0.0.0.0",
  },
  optimizeDeps: {
    include: ["@mui/icons-material"], // Force include MUI icons
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
