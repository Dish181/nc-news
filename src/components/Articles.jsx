import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import {useParams} from 'react-router-dom'



const Articles = ({searchParams}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {topic_slug} = useParams()
  
  

  useEffect(() => {
    setIsLoading(true)
    getArticles(topic_slug, searchParams).then((articles) => {
      setIsLoading(false)
      setArticles(articles);
    });
  }, [topic_slug, searchParams]);

 

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
              comment_count={article.comment_count}
              votes={article.votes}
            />
          );
        })}
      </div>
    );
  }
};

export default Articles;
