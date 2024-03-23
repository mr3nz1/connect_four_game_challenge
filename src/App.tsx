import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Pricing from "./pages/Pricing.tsx";
import Stories from "./pages/Stories.tsx";
import Features from "./pages/Features.tsx";
import { useEffect } from "react";

export default function App() {
  // const location = useLocation();
  const options = {
    root: null,
    threshold: 0.5,
    rootMargin: "-10px",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is entering the viewport
          if (entry.boundingClientRect.top < entry.rootBounds!.top) {
            entry.target.classList.add("slideDown");
          } else {
            entry.target.classList.add("slideUp");
          }
        } else {
          // Element is leaving the viewport
          if (entry.boundingClientRect.bottom < entry.rootBounds!.bottom) {
            entry.target.classList.remove("slideDown");
          } else {
            entry.target.classList.remove("slideUp");
          }
        }
      });
    });

    const hiddenItems = document.querySelectorAll(".hidden")!;
    hiddenItems.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn");
        } else {
          entry.target.classList.remove("fadeIn");
        }
      });
    }, options);

    const hiddenItems = document.querySelectorAll(".hidden-fadeIn")!;
    hiddenItems.forEach((element) => {
      observer.observe(element);
    });
  }, []);

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
