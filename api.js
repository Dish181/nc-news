import axios from "axios";
import { loggedInUser } from "./user";

const getArticles = (topic_slug) => {
    let request = `https://dish-nc-news.onrender.com/api/articles`
    topic_slug ? request += `?topic=${topic_slug}` : request
    return axios.get(request)
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

const addComment = (article_id, comment) => {
    return axios.post(`https://dish-nc-news.onrender.com/api/articles/${article_id}/comments`, {username: loggedInUser.username, body: comment})
    .then(({data}) => {
        return data.postedComment
    })
}

const getTopics = () => {
    return axios.get('https://dish-nc-news.onrender.com/api/topics')
    .then(({data}) => {
        return data.topics
    })
}

export {getArticles, getArticle, getComments, voteArticle, addComment, getTopics}