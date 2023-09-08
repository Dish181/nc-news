import {Link} from 'react-router-dom'

const ArticleCard = ({article_id, author, article_img_url, created_at, title, comment_count, votes}) => {
    return (
        <Link to={`/articles/${article_id}`} >
        <div className="article-card">
            <img src={article_img_url} className="card-img"/>
            <p className="timestamp">{new Date(created_at).toLocaleDateString()}</p>
            <h2 className="card-title">{title}</h2>
            <p className="card-author">By {author}</p>
            <p className="card-votes">{votes} votes</p>
            <p className="card-comments">{comment_count} comments</p>
        </div>
        </Link>
    )
}

export default ArticleCard