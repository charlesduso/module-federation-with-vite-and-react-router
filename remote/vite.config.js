import { defineConfig } from "vite"
import { federation } from "@module-federation/vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  server: {
    origin: "http://localhost:2001",
    port: 2001,
  },
  base: "http://localhost:2001",
  preview: {
    port: 2001,
  },
  resolve: {
    alias: [
      { find: "react-router-dom", replacement: "react-router" },
      { find: /^react-router-dom\/(.*)/, replacement: "react-router/$1" },
    ],
  },
  plugins: [
    federation({
      name: "delivery",
      manifest: true,
      exposes: {
        "./export-app": "./src/export-app.tsx",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
      },
    }),
    react(),
  ],
})
