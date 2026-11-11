
import { Link } from "react-router-dom";

function BlogCard({ article }) {
  return (
    <article className="blog-card">

      <img
        src={article.image}
        alt={article.imageAlt || article.title}
        className="blog-card-image"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/600x400/111827/22D3EE?text=CyberShield";
        }}
      />

      <div className="blog-card-content">

        <span className="blog-category">
          {article.category}
        </span>

        <h3>{article.title}</h3>

        <p>{article.description}</p>

        <Link
          to={`/article/${article.id}`}
          className="read-more"
        >
          Read Article →
        </Link>

      </div>
    </article>
  );
}

export default BlogCard;
