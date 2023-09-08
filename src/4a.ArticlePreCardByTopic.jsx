import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const ArticlePreCardByTopic = ({ articlesByTopic }) => {
  let [searchParams] = useSearchParams();
const sortBy = searchParams.get("sort_by");
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
        <br />
        <hr />
        <br />
        {sortBy==='votes' ? <p>Votes: {article.votes}</p> : null}
        {sortBy==='comment_count' ? <p>Comments: {article.comment_count}</p> : null}
        <p>{new Date(article.created_at).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </li>
    );
  });
};

export default ArticlePreCardByTopic;
