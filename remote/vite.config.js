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
  plugins: [
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./export-app": "./src/export-app.tsx",
      },
      bridge: {
        enableBridgeRouter: true,
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
      },
    }),
    react(),
  ],
  build: {
    target: "chrome89",
  },
})
