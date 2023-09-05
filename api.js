import axios from "axios";

const getArticles = () => {
    return axios.get('https://dish-nc-news.onrender.com/api/articles')
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

const getComments = (article_id) => {
    return axios.get(`https://dish-nc-news.onrender.com/api/articles/${article_id}/comments`)
    .then(({data}) => {
        return data.comments
    })
}

const voteArticle = (article_id, votes) => {
    return axios.patch(`https://dish-nc-news.onrender.com/api/articles/${article_id}`, {inc_votes: votes})
    .then(({data}) => {
        return data
    })
}

export {getArticles, getArticle, getComments, voteArticle}