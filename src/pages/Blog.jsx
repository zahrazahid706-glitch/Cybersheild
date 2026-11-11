
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import articles from "../data/articles";
import BlogCard from "../components/BlogCard";

function Blog() {
  const [searchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "All";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(selectedCategory);

  useEffect(() => {
    document.title = "Cybersecurity Blog | CyberShield";

    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Explore CyberShield's cybersecurity articles about online safety, cyber threats, digital privacy and security guides."
    );
  }, []);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || article.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="blog-page">
      <div className="blog-heading">
        <p>CYBERSHIELD ARTICLES</p>
        <h1>Explore Our <span>Blog</span></h1>
        <p>
          Explore cybersecurity knowledge and protect your digital world.
        </p>
      </div>

      <div className="blog-filters">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Online Safety">Online Safety</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Privacy">Privacy</option>
          <option value="Security Guides">Security Guides</option>
        </select>
      </div>

      <div className="blog-grid">
        {filteredArticles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <p className="no-results">
          No articles found. Try another search.
        </p>
      )}
    </section>
  );
}

export default Blog;
