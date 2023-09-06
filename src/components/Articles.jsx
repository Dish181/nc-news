import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import FiltersModal from "./FiltersModal";
import {useParams} from 'react-router-dom'
import SortBy from "./SortBy";
import {useSearchParams} from 'react-router-dom'
import SortAndFilter from "./SortAndFilter";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false)
  const {topic_slug} = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  

  useEffect(() => {
    setIsLoading(true)
    getArticles(topic_slug, searchParams).then((articles) => {
      setIsLoading(false)
      setArticles(articles);
    });
  }, [topic_slug, searchParams]);

  const openFilters = (event) => {
    event.preventDefault()
    setIsFilterActive(() => {
      return !isFilterActive
    })
  }

  if(isLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <>
      <div className="sort-and-filter">
      <button className="filters-button" onClick={openFilters}>Filters</button>
      {topic_slug ? <p>Currently viewing: {topic_slug}</p> : null}
      <SortBy setSearchParams={setSearchParams}/>
      {isFilterActive ? <FiltersModal setIsFilterActive={setIsFilterActive}/> : null}
      </div>
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
      </>
    );
  }
};

export default Articles;
