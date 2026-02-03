import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import Delivery from "./Delivery"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    children: [
      {
        path: "delivery/*",
        Component: () => <Delivery />,
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}
