import { PropTypes } from "prop-types";

const Cart = ({ isOpen, toggleCart, products }) => {
  if (isOpen) {
    return (
      <>
        <div
          className="fixed w-screen h-screen z-40 bg-black opacity-50"
          onClick={toggleCart}
        ></div>
        <div className="fixed max-w-[300px] z-50 bg-white h-screen right-0 p-4">
          {products.map((product) => (
            <div className="flex gap-3" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                width="50px"
                height="50px"
                className="w-[50px] h-[50px]"
              />
              <div>
                <p>{product.title}</p>
                <p>${product.price}</p>
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
  products: PropTypes.array,
};

export default Cart;
