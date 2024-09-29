import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Pages
import Home from "@/pages/home"
import EngineerPage from "@/pages/engineer"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calculo-engenharia",
    element: <EngineerPage />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
