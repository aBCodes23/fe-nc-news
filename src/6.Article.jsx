import { getArticleByID, getArticleVotes, patchArticleVote } from "./apis";
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
        setArticleVote(article.votes)
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const handleAddVote = () => {
    setArticleVote((currentCount) => currentCount + 1);
    setErr(null);
    patchArticleVote(articleId, 1).catch((err) => {
      setArticleVote((currentCount) => currentCount - 1);
      setErr("Something went wrong, please try again.");
    });
  };

  const handleSubVote = () => {
    setArticleVote((currentCount) => currentCount - 1);
    setErr(null);
    patchArticleVote(articleId, -1).catch((err) => {
      setArticleVote((currentCount) => currentCount + 1);
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
            handleAddVote()
          }}
        >
          ⬆
        </button>
        <p>Votes: {articleVote}</p>
        <button
          onClick={() => {
            handleSubVote();
          }}
        >
          ⬇
        </button>
      </article>
      <ul className="CommentParent">
        <h2>Comments: </h2>
        <CommentCard articleId={articleId} />
      </ul>
    </div>
  );
};
export default Article;
