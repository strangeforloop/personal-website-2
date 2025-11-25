import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import './Articles.css'

function Articles() {
  return (
    <div className="articles-page">
      <header className="articles-header">
        <h1>Articles</h1>
        <p>Thoughts, tutorials, and insights on web development and technology</p>
      </header>

      <div className="articles-list">
        {articles.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-content">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-date">{article.date}</p>
              <p className="article-excerpt">{article.excerpt}</p>
              <Link
                to={`/articles/${article.slug}`}
                // target="_blank"
                rel="noopener noreferrer"
                className="read-more-btn"
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Articles

