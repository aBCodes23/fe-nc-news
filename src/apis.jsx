import axios from "axios";

const getArticles = () => {
    return axios
      .get("https://abcodesnorthcodersncnewsapp.onrender.com/api/articles")
      .then(({ data }) => {
      return data.articles
      });
  }

const getArticleByID = ({articleId}) => {
  return axios
  .get(`https://abcodesnorthcodersncnewsapp.onrender.com/api/articles/${articleId}`)
  .then(({ data }) => {
  return data.article
  });
}

export {getArticles, getArticleByID}
