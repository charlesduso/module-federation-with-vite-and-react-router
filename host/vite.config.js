import { defineConfig } from "vite"
import { federation } from "@module-federation/vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  server: {
    origin: "http://localhost:2000",
    port: 2000,
  },
  base: "http://localhost:2000",
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        remote: {
          name: "remote",
          entry: "http://localhost:2001/remoteEntry.js",
          type: "module",
        },
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
  ],
  build: {
    target: "chrome89",
  },
})
