import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaBars } from "react-icons/fa";

function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        {/* Website Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          🏏 GIGA SPORTS SHOP
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        {/* Navigation Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/order-tracking">
                📦 Track Order
              </Link>
            </li>

            {/* Cart */}
            <li className="nav-item ms-lg-2">
              <Link className="nav-link position-relative" to="/cart">
                <FaShoppingCart /> Cart
                {cartCount > 0 && (
                  <span className="badge bg-danger rounded-pill ms-1">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
