import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 5174,
    host: "0.0.0.0",
  },
  preview: {
    port: process.env.PORT || 5174,
    host: "0.0.0.0",
  },
});
