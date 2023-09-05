import { getArticleByID } from "./apis";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./6a.CommentCard";

const Article = () => {
  let articleId = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticleByID(articleId)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

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
      </article>
      <ul className="CommentParent">
      <h2>Comments: </h2>
        <CommentCard articleId={articleId} />
      </ul>
    </div>
  );
};

export default Article;
