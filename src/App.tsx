import "./index.css";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.tsx";
import Pricing from "./pages/Pricing.tsx";
import Stories from "./pages/Stories.tsx";
import Features from "./pages/Features.tsx";

export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/stories",
      element: <Stories />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/features",
      element: <Features />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
