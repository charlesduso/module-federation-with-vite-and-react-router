import { createRemoteAppComponent } from "@module-federation/bridge-react"

export const Delivery = createRemoteAppComponent({
  loader: () => import("delivery/export-app"),
  loading: <div>Loading...</div>,
  fallback: () => <div>Failed to load delivery module</div>,
})
