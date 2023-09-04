import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api";

const ArticleView = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then((article) => {
      setIsLoading(false);
      setArticle(article);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
        <div className="article-view">
            <h2 className="article-title">{article.title}</h2>
            <div className="article-details">
                <p className="article-timestamp">{article.created_at}</p>
                <p className="article-author">by {article.author}</p>
                <p className="votes">{article.votes}</p>
            </div>
            <img className="article-img" src={article.article_img_url}/>
            <p>{article.body}</p>
        </div>
    );
  }
};

export default ArticleView;
