import axios from "axios";

const getArticles = (requestUrl) => {
    return axios.get(requestUrl)
    .then(({data}) => {
        return data.articles
    })
}

export {getArticles}