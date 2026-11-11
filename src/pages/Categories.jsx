
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Categories() {
  useEffect(() => {
    document.title = "Cybersecurity Categories | CyberShield";

    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Browse CyberShield categories covering online safety, cybersecurity, digital privacy and practical security guides."
    );
  }, []);

  const categories = [
    {
      icon: "🔐",
      title: "Online Safety",
      description: "Learn how to stay safe while browsing, shopping and using social media."
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      description: "Understand cyber threats, malware, hacking and digital protection."
    },
    {
      icon: "🔒",
      title: "Privacy",
      description: "Discover ways to protect your personal data and online identity."
    },
    {
      icon: "💻",
      title: "Security Guides",
      description: "Explore practical guides for passwords, devices and secure accounts."
    }
  ];

  return (
    <section className="categories-page">
      <div className="categories-heading">
        <p>EXPLORE CYBERSHIELD</p>
        <h1>Browse <span>Categories</span></h1>
        <p>Choose a topic and improve your digital security knowledge.</p>
      </div>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="categories-card" key={index}>
            <span className="categories-icon">{category.icon}</span>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <Link to="/blog">Explore Articles →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
