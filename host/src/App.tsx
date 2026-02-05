import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom"
import Remote from "./Remote"

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: (
      <div>
        Welcome to the Host app!
        <br />
        <div>
          <Link to="/remote">Go to the Remote App</Link>
        </div>
        <br />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "remote/*",
        Component: () => <Remote />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
