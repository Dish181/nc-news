import axios from "axios";

const getArticles = (requestUrl) => {
    return axios.get(requestUrl)
    .then(({data}) => {
        return data.articles
    })
}

const getArticle = (article_id) => {
    return axios.get(`https://dish-nc-news.onrender.com/api/articles/${article_id}`)
    .then(({data}) => {
        return data.article
    })
}

export {getArticles, getArticle}