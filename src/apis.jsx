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

const getCommentsByID = ({articleId}) => {
  return axios
  .get(`https://abcodesnorthcodersncnewsapp.onrender.com/api/articles/${articleId}/comments`)
  .then(( {data} ) => {
  return data.comments
  });
}

export {getArticles, getArticleByID, getCommentsByID}
