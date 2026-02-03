import { createRemoteAppComponent } from "@module-federation/bridge-react"
import { loadRemote } from "@module-federation/runtime"

const Delivery = createRemoteAppComponent({
  loader: () => loadRemote("delivery/export-app"),
  loading: <div>Loading...</div>,
  fallback: () => <div>Failed to load delivery module</div>,
})

export default Delivery
