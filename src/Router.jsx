import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
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
    
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
