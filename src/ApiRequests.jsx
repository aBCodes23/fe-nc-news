import axios from "axios";

const getArticles = (sortBy, orderBy, topic) => {
  return axios
    .get("https://abcodesnorthcodersncnewsapp.onrender.com/api/articles", {
      params: { sort_by: sortBy, order: orderBy, topic: topic },
    })
    .then(({ data }) => {
      return data.articles;
    })
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

const deleteComment = (commentId) => {
return axios
.delete(`https://abcodesnorthcodersncnewsapp.onrender.com/api/comments/${commentId}`)
.catch((err)=>{console.log(err)})}

export {
  getArticles,
  getArticleByID,
  getCommentsByID,
  patchArticleVote,
  getUsers,
  postComment,
  getTopics,
  deleteComment
};
