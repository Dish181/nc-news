import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    getArticles().then((articles) => {
      setIsLoading(false)
      setArticles(articles);
    });
  }, []);
  
  if(isLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <div className="articles-container">
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              article_id={article.article_id}
              author={article.author}
              article_img_url={article.article_img_url}
              created_at={article.created_at}
              title={article.title}
            />
          );
        })}
      </div>
    );
  }
};

export default Articles;
