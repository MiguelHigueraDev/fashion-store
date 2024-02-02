import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../Router";

const Cart = ({ isOpen, toggleCart }) => {
  const { cartItems } = useContext(ShopContext)

  if (isOpen) {
    return (
      <>
        <div
          className="fixed w-screen h-screen z-40 bg-black opacity-50"
          onClick={toggleCart}
        ></div>
        <div className="fixed min-w-[200px] max-w-[300px] z-50 bg-white h-screen right-0 p-4">
          {cartItems.length > 0 ? <p className="text-xl font-bold mb-3">Your cart</p>
          : <p className="text-xl font-bold mb-3">Your cart is empty</p>}
          {cartItems.map((product) => (
            <div className="flex gap-3" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                width="50px"
                height="50px"
                className="w-[50px] h-[50px]"
              />
              <div>
                <p className="text-sm">{product.title}</p>
                <p>${product.price * product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};
Cart.propTypes = {
  isOpen: PropTypes.bool,
  toggleCart: PropTypes.func,
};

export default Cart;
