
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import articles from "../data/articles";

function Article() {
  const { id } = useParams();

  const article = articles.find(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | CyberShield`;

      document.querySelector('meta[name="description"]')?.setAttribute(
        "content",
        article.description
      );
    }
  }, [article]);

  if (!article) {
    return <h2 className="article-not-found">Article not found!</h2>;
  }

  return (
    <section className="article-page">
      <div className="article-content">

        <span className="article-category">
          {article.category}
        </span>

        <h1>{article.title}</h1>

        <p className="article-description">
          {article.description}
        </p>

        {article.image && (
          <img
            src={article.image}
            alt={article.imageAlt || article.title}
            className="article-image"
          />
        )}

        <div className="article-body">
          {article.content.map((section, index) => (
            <div key={index}>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </div>
          ))}
        </div>

        <Link to="/blog" className="back-to-blog">
          ← Back to Blog
        </Link>

      </div>
    </section>
  );
}

export default Article;
