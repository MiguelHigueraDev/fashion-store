import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../Router";

const Cart = ({ isOpen, toggleCart }) => {
  const {
    cartItems,
    updateQuantity,
    addQuantity,
    removeQuantity,
    removeProduct,
  } = useContext(ShopContext);

  const handleInputChange = (e, product) => {
    updateQuantity(product, e.target.value);
  };

  const handleAdd = (product) => {
    addQuantity(product);
  };

  const handleRemove = (product) => {
    removeQuantity(product);
  };

  const handleRemoveProduct = (product) => {
    removeProduct(product);
  };

  if (isOpen) {
    return (
      <>
        <div
          className="fixed w-screen min-h-screen z-40 bg-black opacity-50"
          onClick={toggleCart}
        ></div>
        <div className="fixed min-w-[250px] md:min-w-[300px] max-w-[300px] z-50 bg-white min-h-screen h-full overflow-y-auto right-0 p-4">
          <div className="flex justify-between text-xl font-bold mb-3">
            {cartItems.length > 0 ? (
              <p>Your cart</p>
            ) : (
              <p>Your cart is empty</p>
            )}
            <button onClick={toggleCart}>X</button>
          </div>

          <div className="flex flex-col gap-3">
            {cartItems.map((product) => (
              <div
                className="flex gap-3 justify-between flex-grow border-2 p-3 border-gray-300 rounded-md"
                key={product.id}
              >
                <div className="text-start space-y-2 flex-grow">
                  <div className="flex gap-3 justify-between">
                    <p className="text-sm">{product.title}</p>
                    <div className="w-[70px] h-[70px] flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        width="50px"
                        height="50px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>Quantity: </p>
                    <div className="flex gap-1">
                      <button
                        className="rounded-md p-2 bg-gray-200 hover:bg-gray-100 active:bg-gray-100 font-bold text-md w-[30px]"
                        onClick={() => handleRemove(product)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        step="1"
                        className="border-2 border-gray-300 h-10 w-[40px] md:w-[60px] rounded-md p-2"
                        value={product.quantity}
                        onInput={(e) => handleInputChange(e, product)}
                      />
                      <button
                        className="rounded-md p-2 bg-gray-200 hover:bg-gray-100 active:bg-gray-100 font-bold text-md w-[30px]"
                        onClick={() => handleAdd(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-lg">
                      ${Math.round(product.price * product.quantity)}
                    </p>
                    <button
                      onClick={() => handleRemoveProduct(product)}
                      className="rounded-md p-2 bg-red-300 hover:bg-red-200 active:bg-red-100 font-bold text-md"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cartItems.length > 0 && (
            <>
              <div className="text-end mt-2 p-1">
                <p className="text-xl">
                  Total:{" "}
                  <span className="font-bold">
                    $
                    {Math.round(cartItems.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    ))}
                  </span>
                </p>
              </div>
              <div className="mt-5">
                <button className="btn w-full tracking-wide">Checkout</button>
              </div>
            </>
          )}
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
