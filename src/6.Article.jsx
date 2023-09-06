import {
  getArticleByID,
  patchArticleVote,
} from "./ApiRequests";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./6a.CommentCard";

const Article = () => {
  let articleId = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [articleVote, setArticleVote] = useState(0);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticleByID(articleId)
      .then((article) => {
        setArticle(article);
        setArticleVote(article.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const handleVote = (vote) => {
    setArticleVote((currentCount) => currentCount + vote);
    setErr(null);
    patchArticleVote(articleId, vote).catch((err) => {
      setArticleVote((currentCount) => currentCount - vote);
      setErr("Something went wrong, please try again.");
    });
  };

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error!</h1>;

  return (
    <div>
      <article className="Article" key={article.article_id}>
        <img
          className="ArticleImage"
          src={article.article_img_url}
          alt={`Picture related to ${article.title}`}
        />
        <h2>{article.title}</h2>
        <p>by {article.author} </p>
        <p>{new Date(article.created_at).toUTCString()}</p>
        <p>topic: {article.topic}</p>
        <p>{article.body}</p>
        {err ? <p>{err}</p> : null}
        <button
          onClick={() => {
            handleVote(1);
          }}
        >
          ⬆
        </button>
        <p>Votes: {articleVote}</p>
        <button
          onClick={() => {
            handleVote(-1);
          }}
        >
          ⬇
        </button>
      </article>
      <div className="CommentParent">
        <h2>Comments: </h2>
        <CommentCard articleId={articleId} />
      </div>
    </div>
  );
};
export default Article;
