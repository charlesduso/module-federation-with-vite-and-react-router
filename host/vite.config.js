import { defineConfig } from "vite"
import { federation } from "@module-federation/vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  server: {
    origin: "http://localhost:2000",
    port: 2000,
  },
  base: "http://localhost:2000",
  resolve: {
    alias: [
      { find: "react-router-dom", replacement: "react-router" },
      { find: /^react-router-dom\/(.*)/, replacement: "react-router/$1" },
    ],
  },
  plugins: [
    react(),
    federation({
      name: "customer-portal",
      remotes: {
        delivery: "delivery@http://localhost:2001/remoteEntry.js",
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
  ],
})
