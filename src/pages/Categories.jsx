
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
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600",
      title: "Online Safety",
      description: "Learn how to stay safe while browsing, shopping and using social media."
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
      title: "Cybersecurity",
      description: "Understand cyber threats, malware, hacking and digital protection."
    },
    {
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600",
      title: "Privacy",
      description: "Discover ways to protect your personal data and online identity."
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
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
            <img
              src={category.image}
              alt={category.title}
              className="category-image"
            />
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
