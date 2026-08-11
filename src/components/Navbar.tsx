import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* LOGO */}

        <Link className="navbar-brand" to="/">
          🏆 GIGA SPORTS
        </Link>

        {/* MOBILE BUTTON */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* NAVIGATION */}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* HOME */}

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {/* PRODUCTS */}

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            {/* ABOUT */}

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>

            {/* CONTACT */}

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            {/* CART */}

            <li className="nav-item">
              <Link className="nav-link cart-link" to="/cart">
                <FaShoppingCart /> Cart
                {totalItems > 0 && (
                  <span className="cart-badge">{totalItems}</span>
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
