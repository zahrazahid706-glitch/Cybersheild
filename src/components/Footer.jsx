
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>CYBERSHIELD</h2>
        <p>
          Learn about cybersecurity, online safety,
          privacy and digital protection.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>

      <p className="footer-bottom">
        © 2026 CyberShield. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
