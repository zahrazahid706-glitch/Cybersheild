
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

  useEffect(() => {
    document.title = "CyberShield | Cybersecurity & Online Safety";

    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Learn about cybersecurity, online safety, digital privacy and practical security guides with CyberShield."
    );
  }, []);

  return (
    <main className="home">
      <section className="hero">
        <p className="hero-tag">
          CYBERSHIELD | CYBERSECURITY AWARENESS
        </p>

        <h1>
          Protect Your Digital Life
          <span> Stay Safe Online</span>
        </h1>

        <p className="hero-description">
          Explore cybersecurity knowledge, understand online threats,
          protect your privacy and learn practical ways to stay secure
          in today's digital world.
        </p>

        <Link to="/blog" className="hero-btn">
          Explore Articles →
        </Link>
      </section>

      <section className="categories-section">
        <h2>Explore Cybersecurity Topics</h2>
        <p>
          Learn essential digital safety practices through our
          cybersecurity guides and educational articles.
        </p>

        <div className="category-grid">

          <Link to="/blog?category=Online%20Safety" className="category-card">
            <span>🔐</span>
            <h3>Online Safety</h3>
            <p>Learn how to browse safely and protect your digital accounts.</p>
          </Link>

          <Link to="/blog?category=Cybersecurity" className="category-card">
            <span>🛡️</span>
            <h3>Cybersecurity</h3>
            <p>Understand cyber threats, digital attacks and protection methods.</p>
          </Link>

          <Link to="/blog?category=Privacy" className="category-card">
            <span>🔒</span>
            <h3>Privacy</h3>
            <p>Learn how to protect personal information online.</p>
          </Link>

          <Link to="/blog?category=Security%20Guides" className="category-card">
            <span>💻</span>
            <h3>Security Guides</h3>
            <p>Explore practical guides to protect your devices and information.</p>
          </Link>

        </div>
      </section>
    </main>
  );
}

export default Home;
