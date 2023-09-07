import { Link } from "react-router-dom";

const ArticlePreCardByTopic = ({ articlesByTopic }) => {
  return articlesByTopic.map((article) => {
    return (
      <li className="ArticlePreCard" key={article.article_id}>
        <img
          className="ArticlePreCardImage"
          src={article.article_img_url}
          alt={`Picture related to ${article.title}`}
        />
        <Link to={`/article/${article.article_id}`}>
          <h3>{article.title}</h3>
        </Link>
        <p>by {article.author}</p>
        <p>date: {new Date(article.created_at).toUTCString()}</p>
        <p>number of comments: {article.comment_count}</p>
        <p>votes: {article.votes}</p>
      </li>
    );
  });
};

export default ArticlePreCardByTopic;
