import { createRemoteAppComponent } from "@module-federation/bridge-react"

const Remote = createRemoteAppComponent({
  loader: () => import("remote/export-app"),
  loading: <div>Loading...</div>,
  fallback: () => <div>Failed to load remote module</div>,
})

export default Remote
