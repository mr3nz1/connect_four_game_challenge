import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Features from "./pages/Features.tsx";
import Pricing from "./pages/Pricing.tsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/features",
      element: <Features />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
