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

const patchArticleVote = ({articleId}, vote) => {
  return axios
  .post(`https://abcodesnorthcodersncnewsapp.onrender.com/api/articles/${articleId}`,{inc_vote: vote})
}

const getUsers = () => {
  return axios
  .get(`https://abcodesnorthcodersncnewsapp.onrender.com/api/users`)
  .then(( {data} ) => {
  return data.users
  });
}

const postComment = ({articleId}, newComment, user) => {
  return axios
  .post(`https://abcodesnorthcodersncnewsapp.onrender.com/api/articles/${articleId}/comments/FART`,{body: newComment, username:user})
}

export {getArticles, getArticleByID, getCommentsByID, patchArticleVote, getUsers, postComment}
