import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import Men from "./page/Men.jsx";
import Women from "./page/Women.jsx";
import Kids from "./page/Kids.jsx";
import { ProductProvider } from "./context/ProductProvider.jsx";
import SingleProducts from "./page/SingleProducts.jsx";
import Checkout from "./page/checkout.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Contact />,
        path: "contact",
      },
      {
        element: <Men />,
        path: "men",
      },
      {
        element: <Women />,
        path: "women",
      },
      {
        element: <Kids />,
        path: "kids",
      },
      {
        element: <SingleProducts />,
        path: "singleProduct/:id",
      },
      {
        element: <Checkout />,
        path: "checkout",
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    ,
  </ProductProvider>,
);
