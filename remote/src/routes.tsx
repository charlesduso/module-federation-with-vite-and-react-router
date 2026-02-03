import { Outlet, type RouteObject } from "react-router-dom"

export const routes: RouteObject[] = [
  {
    path: "/delivery",
    element: (
      <div>
        Delivery Remote App <Outlet />
      </div>
    ),
    children: [{ path: "orders", element: <div>Orders Page</div> }],
  },
]
