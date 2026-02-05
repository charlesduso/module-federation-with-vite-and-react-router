import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/delivery",
    element: (
      <div>
        Delivery Remote App <Outlet />
      </div>
    ),
    children: [{ path: "orders", element: <div>Orders Page</div> }],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
