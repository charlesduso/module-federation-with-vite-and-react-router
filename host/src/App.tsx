import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter(
  [
    {
      id: "root",
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
      children: [],
    },
  ],
  {
    async patchRoutesOnNavigation({ patch, path }) {
      if (path.startsWith("/delivery")) {
        const { routes } = await import("delivery/routes")
        patch("root", routes)
      }
    },
  },
)

export default function App() {
  return <RouterProvider router={router} />
}
