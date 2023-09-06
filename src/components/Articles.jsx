import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import FiltersModal from "./FiltersModal";
import {useParams, useNavigate} from 'react-router-dom'

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false)
  const {topic_slug} = useParams()
  

  useEffect(() => {
    setIsLoading(true)
    getArticles(topic_slug).then((articles) => {
      setIsLoading(false)
      setArticles(articles);
    });
  }, [topic_slug]);

  const openModal = (event) => {
    event.preventDefault()
    setIsModalActive(() => {
      return !isModalActive
    })
  }
  
  if(isLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <>
      <button className="filters-button" onClick={openModal}>Filters</button>
      {isModalActive ? <FiltersModal setIsModalActive={setIsModalActive}/> : null}
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
      </>
    );
  }
};

export default Articles;
