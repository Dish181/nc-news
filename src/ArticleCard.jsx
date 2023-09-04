const ArticleCard = ({article_id, author, article_img_url, created_at, title}) => {
    return (
        <div className="article-card">
            <img src={article_img_url} className="card-img"/>
            <p className="timestamp">Posted at {created_at}</p>
            <h2 className="card-title">{title}</h2>
            <p className="card-author">By {author}</p>
        </div>
    )
}

export default ArticleCard