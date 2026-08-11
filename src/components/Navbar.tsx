import { Link } from "react-router-dom";
import { FaShoppingCart, FaBolt } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        <Link to="/" className="brand">
          <FaBolt className="brand-icon" />
          GIGA SPORTS SHOP
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/cart" className="cart-link">
            <FaShoppingCart />
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
