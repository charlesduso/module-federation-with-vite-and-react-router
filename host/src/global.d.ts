declare module "delivery/routes" {
  import type { Route } from "react-router-dom"
  export const routes: Route[]
}

declare module "delivery/export-app" {
  import { ComponentType } from "react"
  const ExportedApp: ComponentType
  export default ExportedApp
}
