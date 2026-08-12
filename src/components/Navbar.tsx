import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag, FaChevronDown } from "react-icons/fa";

import { useCart } from "../context/CartContext";

import "./Navbar.css";

function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="premium-navbar">
      {/* Top Navigation */}

      <div className="navbar-top">
        {/* Search */}

        <Link
          to="/products"
          className="navbar-icon search-icon"
          aria-label="Search products"
        >
          <FaSearch />
        </Link>

        {/* Logo */}

        <Link to="/" className="premium-logo">
          GIGA
          <span>SPORTS</span>
        </Link>

        {/* Right Icons */}

        <div className="navbar-right-icons">
          <Link to="/login" className="navbar-icon" aria-label="Account">
            <FaUser />
          </Link>

          <Link
            to="/cart"
            className="navbar-icon cart-navbar-icon"
            aria-label="Shopping cart"
          >
            <FaShoppingBag />

            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>

      {/* Main Menu */}

      <nav className="premium-menu">
        <Link to="/" className="premium-menu-link active">
          Home
        </Link>

        <Link
          to="/products?category=Cricket"
          className="premium-menu-link menu-with-arrow"
        >
          Cricket
          <FaChevronDown />
        </Link>

        <Link to="/products?category=Football" className="premium-menu-link">
          Football/Soccer
        </Link>

        <Link to="/products?category=Badminton" className="premium-menu-link">
          Badminton
        </Link>

        <Link to="/products?category=Gym" className="premium-menu-link">
          Gym Equipment
        </Link>

        <Link to="/products?category=Running" className="premium-menu-link">
          Running
        </Link>

        <Link
          to="/products?category=Sports Clothing"
          className="premium-menu-link"
        >
          Sports Wear
        </Link>

        <Link to="/products?category=Sports Bags" className="premium-menu-link">
          Sports Bags
        </Link>

        <Link to="/products" className="premium-menu-link">
          All Products
        </Link>

        <Link to="/about" className="premium-menu-link">
          About
        </Link>

        <Link to="/contact" className="premium-menu-link">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
