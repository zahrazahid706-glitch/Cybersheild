
import { useEffect } from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";

function Home() {
  useEffect(() => {
    document.title = "CyberShield | Cybersecurity & Online Safety";

    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Learn about cybersecurity, online safety, digital privacy and practical security guides with CyberShield."
    );
  }, []);

  const categories = [
    {
      title: "Online Safety",
      description: "Learn safe internet habits and protect your digital life.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600",
      icon: "🛡️",
    },
    {
      title: "Cybersecurity",
      description: "Understand cyber threats and ways to protect your devices.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
      icon: "🔐",
    },
    {
      title: "Privacy",
      description: "Keep your personal information private and secure.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600",
      icon: "🔒",
    },
    {
      title: "Security Guides",
      description: "Follow practical guides for stronger account security.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
      icon: "🔑",
    },
  ];

  const latestArticles = articles.slice(0, 5);

  return (
    <main className="home">

      <section className="hero">
        <div className="hero-content">
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
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000"
            alt="Cybersecurity and digital protection"
          />
        </div>
      </section>

      <section className="categories-section">
        <div className="section-heading">
          <p>EXPLORE CYBERSHIELD</p>
          <h2>
            Learn to Stay <span>Protected</span>
          </h2>
          <p>
            Discover useful cybersecurity topics and improve your online safety.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.title}>
              <img
                className="category-image"
                src={category.image}
                alt={category.title}
                loading="lazy"
              />

              <span>{category.icon}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>

              <Link
                to={`/blog?category=${encodeURIComponent(category.title)}`}
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="latest-articles">
        <div className="section-heading">
          <p>OUR LATEST CONTENT</p>
          <h2>
            Latest <span>Articles</span>
          </h2>
          <p>
            Explore helpful articles and learn how to stay safe in the digital world.
          </p>
        </div>

        <div className="articles-grid">
          {latestArticles.map((article) => (
            <article className="blog-card" key={article.id}>
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                loading="lazy"
              />

              <div className="blog-card-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>

                <Link to={`/article/${article.id}`}>
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="latest-articles-button">
          <Link to="/blog" className="hero-btn">
            Explore All Articles →
          </Link>
        </div>
      </section>

      <section className="home-cta">
        <h2>Make Your Digital World Safer</h2>

        <p>
          Explore our articles and take the first step towards better online security.
        </p>

        <Link to="/blog" className="hero-btn">
          Read Our Blog →
        </Link>
      </section>

    </main>
  );
}

export default Home;
