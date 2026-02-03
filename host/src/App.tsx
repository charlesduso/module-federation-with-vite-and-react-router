import { createBrowserRouter, Link, Outlet } from "react-router"
import { RouterProvider } from "react-router/dom"
import Delivery from "./Delivery"
import { createInstance } from "@module-federation/runtime"
import BridgeReactPlugin from "@module-federation/bridge-react/plugin"

const mf = createInstance({
  name: "customer-portal",
  remotes: [],
  plugins: [BridgeReactPlugin()],
})

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Home
        <div>
          <Link to="/delivery">Go to Delivery App</Link>
        </div>
        <br />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "delivery/*",
        Component: () => <Delivery basename="/delivery" />,
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}
