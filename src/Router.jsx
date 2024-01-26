import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Cart from "./routes/Cart";
import Category from "./routes/Category";
import Index from "./routes/Index";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: 'category/:category',
      element: <Category />,
    },
    {
      path: 'cart',
      element: <Cart />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
