import axios from "axios";

const getArticles = () => {
  return axios
    .get("https://abcodesnorthcodersncnewsapp.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

const getArticlesByTopic = (topic) => {
  return axios
    .get(
      `https://abcodesnorthcodersncnewsapp.onrender.com/api/articles?topic=${topic}`
    )
    .then(({ data }) => {
      return data.articles;
    });
};

const getArticleByID = ({ articleId }) => {
  return axios
    .get(
      `https://abcodesnorthcodersncnewsapp.onrender.com/api/articles/${articleId}`
    )
    .then(({ data }) => {
      return data.article;
    });
};

const getCommentsByID = ({ articleId }) => {
  return axios
    .get(
      `https://abcodesnorthcodersncnewsapp.onrender.com/api/articles/${articleId}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

const patchArticleVote = ({ articleId }, vote) => {
  return axios.patch(
    `https://abcodesnorthcodersncnewsapp.onrender.com/api/articles/${articleId}`,
    { inc_vote: vote }
  );
};

const getUsers = () => {
  return axios
    .get("https://abcodesnorthcodersncnewsapp.onrender.com/api/users")
    .then(({ data }) => {
      return data.users;
    });
};

const postComment = ({ articleId }, newComment, user) => {
  return axios.post(
    `https://abcodesnorthcodersncnewsapp.onrender.com/api/articles/${articleId}/comments`,
    { body: newComment, username: user }
  );
};

const getTopics = () => {
  return axios
    .get("https://abcodesnorthcodersncnewsapp.onrender.com/api/topics")
    .then(({ data }) => {
      const topics = data.topics;
      const topicsArray = topics.map((topic) => {
        return topic.slug;
      });
      return topicsArray;
    });
};

export {
  getArticles,
  getArticlesByTopic,
  getArticleByID,
  getCommentsByID,
  patchArticleVote,
  getUsers,
  postComment,
  getTopics,
};
