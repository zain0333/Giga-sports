import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaBalanceScale } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  // Total number of products in cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        {/* =========================
            LOGO
        ========================== */}
        <Link to="/" className="navbar-brand fw-bold">
          🏏 GIGA SPORTS
        </Link>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* =========================
            NAVIGATION
        ========================== */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {/* Home */}
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            {/* Products */}
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>

            {/* Compare */}
            <li className="nav-item">
              <Link to="/compare" className="nav-link">
                <FaBalanceScale className="me-1" />
                Compare
              </Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>

            {/* =========================
                SEARCH
            ========================== */}
            <li className="nav-item ms-lg-2 my-2 my-lg-0">
              <Link
                to="/products"
                className="btn btn-light"
                title="Search Products"
              >
                <FaSearch />
              </Link>
            </li>

            {/* =========================
                CART
            ========================== */}
            <li className="nav-item ms-lg-2">
              <Link to="/cart" className="nav-link position-relative">
                <FaShoppingCart className="me-1" />
                Cart
                {/* Cart Badge */}
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
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
