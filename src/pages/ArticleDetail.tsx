import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getArticleBySlug } from '../data/articles'
import './ArticleDetail.css'

function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) {
    return (
      <div className="article-detail">
        <div className="article-not-found">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="article-detail">
      <article className="article-full">
        <header className="article-header">
          <h1 className="article-title">{article.title}</h1>
          <p className="article-date">{article.date}</p>
          {article.tags && article.tags.length > 0 && (
            <div className="article-tags">
              {article.tags.map((tag, index) => (
                <button key={index} className="article-tag" type="button">
                  {tag}
                </button>
              ))}
            </div>
          )}
        </header>
        <div className="article-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}

export default ArticleDetail

