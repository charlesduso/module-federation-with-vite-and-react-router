import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/remote",
    element: (
      <div>
        Remote app
        <br />
        <Outlet />
      </div>
    ),
    children: [
      { path: "sub-page", element: <div>Sub-page of the Remote app</div> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
