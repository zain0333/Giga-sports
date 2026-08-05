import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          GIGA SPORTS SHOP
        </Link>

        <div>
          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-warning" to="/cart">
            <FaShoppingCart /> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
