import { FaInstagram, FaTiktok, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h2>🏆 GIGA SPORTS SHOP</h2>

      <p>Your trusted online sports shop.</p>

      <div className="social-links">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>

      <p className="copyright">© 2026 GIGA SPORTS SHOP. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
