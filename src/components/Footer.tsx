import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>GIGA SPORTS SHOP</h4>

            <p>
              High quality sports equipment for cricket, football, badminton and
              fitness lovers.
            </p>
          </div>

          <div className="col-md-4">
            <h4>Quick Links</h4>

            <p>
              <Link className="text-white" to="/">
                Home
              </Link>
            </p>

            <p>
              <Link className="text-white" to="/products">
                Products
              </Link>
            </p>

            <p>
              <Link className="text-white" to="/contact">
                Contact
              </Link>
            </p>
          </div>

          <div className="col-md-4">
            <h4>Follow Us</h4>

            <p>Instagram</p>

            <p>TikTok</p>

            <p>WhatsApp Channel</p>
          </div>
        </div>

        <hr />

        <p className="text-center">
          © 2026 GIGA SPORTS SHOP. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
