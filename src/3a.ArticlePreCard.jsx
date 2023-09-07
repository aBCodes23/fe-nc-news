import { Link } from "react-router-dom";

const ArticlePreCard = ({ articles }) => {
  return articles.map((article) => {
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
        <p>topic: {article.topic}</p>
      </li>
    );
  });
};

export default ArticlePreCard;
