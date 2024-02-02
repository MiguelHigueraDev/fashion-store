import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Category from "./routes/Category";
import Index from "./routes/Index";
import Product from "./routes/Product";

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
      path: 'product/:product',
      element: <Product />
    }
    
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
