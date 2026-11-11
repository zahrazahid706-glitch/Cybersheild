
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions | CyberShield";

    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Read CyberShield's Terms and Conditions covering website usage, educational content, acceptable use and external links."
    );
  }, []);

  return (
    <section className="article-page">
      <div className="article-content">
        <span className="article-category">CYBERSHIELD</span>

        <h1>Terms & Conditions</h1>

        <p className="article-description">
          Welcome to CyberShield. By accessing and using this website,
          you agree to the following terms and conditions.
        </p>

        <h2>1. Website Purpose</h2>
        <p>
          CyberShield is an educational website that provides information
          about cybersecurity, online safety, privacy and digital security.
        </p>

        <h2>2. Use of Content</h2>
        <p>
          The articles and educational materials on this website are
          provided for general information and awareness. You may read
          and use this content for personal learning purposes.
        </p>

        <h2>3. Acceptable Use</h2>
        <p>
          You agree not to misuse this website, attempt unauthorized
          access or interfere with its normal operation.
        </p>

        <h2>4. Accuracy of Information</h2>
        <p>
          We aim to provide useful and accurate educational information.
          However, cybersecurity practices and threats can change over time.
        </p>

        <h2>5. External Links</h2>
        <p>
          This website may contain links to external websites.
          CyberShield does not control or guarantee the content
          of those websites.
        </p>

        <h2>6. Changes to These Terms</h2>
        <p>
          These terms may be updated when necessary. Any changes
          will be published on this page.
        </p>

        <h2>7. Contact</h2>
        <p>
          For questions about these terms, please visit our
          <Link to="/contact"> Contact page</Link>.
        </p>

        <Link to="/" className="back-to-blog">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}

export default Terms;
