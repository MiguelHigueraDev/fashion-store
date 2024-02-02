import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types'

const SideMenu = ({ isOpen, toggleMenu }) => {
  if (isOpen) {
    return (
      <>
        <div
          className="fixed w-screen h-screen z-40 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
        <div className="fixed min-w-[150px] max-w-[250px] z-[500] bg-white h-screen left-0 p-4">
            <ul className="flex flex-col gap-3">
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/women" onClick={toggleMenu}>Women</Link></li>
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/men" onClick={toggleMenu}>Men</Link></li>
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/jewelry" onClick={toggleMenu}>Jewelry</Link></li>
            </ul>
        </div>
      </>
    );
  }
};

SideMenu.propTypes = {
    isOpen: PropTypes.bool,
    toggleMenu: PropTypes.func
}

export default SideMenu;
