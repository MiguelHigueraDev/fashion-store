import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Category from "./routes/Category";
import Index from "./routes/Index";
import Product from "./routes/Product";
import { createContext, useState } from "react";

// Create context to access cartItems from all routes
export const ShopContext = createContext({
  cartItems: [],
  addToCart : () => {}
})

const Router = () => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, quantity = 1) => {
    // Check if product already exists in cart
    if (cartItems.find(item => item.id === product.id)) {
      // Already exists, add 1 to its quantity
      setCartItems(cartItems.map(item => item.id === product.id ? {...item, quantity: parseInt(item.quantity) + parseInt(quantity)} : item))
      return
    }
    // Create product with base quantity (1)
    setCartItems(cartItems => [...cartItems, {...product, quantity}])
  }

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

  return (
    <ShopContext.Provider value={{cartItems, addToCart}}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  )
};

export default Router;
