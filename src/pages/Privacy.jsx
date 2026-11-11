
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | CyberShield";

    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Read the CyberShield Privacy Policy to understand how information, contact messages, cookies and external links are handled."
    );
  }, []);

  return (
    <section className="article-page">
      <div className="article-content">
        <span className="article-category">CYBERSHIELD</span>
        <h1>Privacy Policy</h1>
        <p className="article-description">
          Your privacy matters to us. This page explains how CyberShield
          handles information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          CyberShield is an educational website. We do not ask visitors
          to provide sensitive personal information to read our articles.
        </p>

        <h2>How We Use Information</h2>
        <p>
          Information voluntarily submitted through our contact form
          may be used to understand and respond to your message.
        </p>

        <h2>Cookies</h2>
        <p>
          Our website may use basic browser technologies to improve
          the browsing experience.
        </p>

        <h2>External Links</h2>
        <p>
          Our articles may contain links to external websites.
          We are not responsible for their privacy practices.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this policy, please visit our
          <Link to="/contact"> Contact page</Link>.
        </p>

        <Link to="/" className="back-to-blog">← Back to Home</Link>
      </div>
    </section>
  );
}

export default Privacy;
