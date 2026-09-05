import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaBalanceScale, FaRobot, FaBoxOpen, FaTrophy } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useAchievement } from "../context/AchievementContext";

function Navbar() {
  const { cart } = useCart();
  const { totalPoints, triggerAchievement } = useAchievement();

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

            {/* Bundles */}
            <li className="nav-item">
              <Link
                to="/bundles"
                className="nav-link d-inline-flex align-items-center gap-1"
                style={{
                  color: "#34d399",
                  fontWeight: 700,
                }}
              >
                <FaBoxOpen style={{ color: "#34d399" }} />
                Bundles
                <span
                  className="badge rounded-pill ms-1 bg-danger"
                  style={{
                    fontSize: "0.62rem",
                    padding: "3px 6px",
                  }}
                >
                  SAVE
                </span>
              </Link>
            </li>

            {/* AI Coach */}
            <li className="nav-item">
              <Link
                to="/ai-coach"
                className="nav-link d-inline-flex align-items-center gap-1"
                style={{
                  color: "#ffc078",
                  fontWeight: 700,
                  textShadow: "0 0 10px rgba(241, 115, 0, 0.4)",
                }}
              >
                <FaRobot style={{ color: "#f17300" }} />
                AI Coach
                <span
                  className="badge rounded-pill ms-1"
                  style={{
                    backgroundColor: "#f17300",
                    fontSize: "0.65rem",
                    padding: "3px 6px",
                  }}
                >
                  PRO
                </span>
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
                GIGA POINTS BADGE
            ========================== */}
            <li className="nav-item ms-lg-2 my-2 my-lg-0">
              <button
                type="button"
                className="btn btn-sm d-inline-flex align-items-center gap-1 shadow-sm"
                onClick={() =>
                  triggerAchievement({
                    title: "🎉 Achievement Unlocked!",
                    points: 500,
                    subtitle: "🏆 You earned 500 GIGA Points!",
                    badge: "DAILY ATHLETE REWARD",
                  })
                }
                title="Your GIGA Points (Click to claim reward)"
                style={{
                  background: "linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.35) 100%)",
                  border: "1px solid rgba(245, 158, 11, 0.6)",
                  color: "#fbbf24",
                  borderRadius: "20px",
                  padding: "5px 12px",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  cursor: "pointer",
                }}
              >
                <FaTrophy style={{ color: "#fbbf24" }} />
                <span>{totalPoints.toLocaleString()} PTS</span>
              </button>
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
