import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="sports-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="sports-logo">
          ⚡ <span>GIGA SPORTS</span>
        </Link>

        {/* Navigation */}
        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/categories">Categories</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/cart" className="cart-link">
            <FaShoppingCart />
            Cart
            <span className="cart-count">{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
