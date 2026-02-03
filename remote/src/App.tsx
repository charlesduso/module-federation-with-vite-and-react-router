import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>Welcome, to Delivery!</div>,
    },
  ],
  {
    basename: "/",
  },
)

export default function App() {
  return <RouterProvider router={router} />
}
