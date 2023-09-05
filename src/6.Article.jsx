import { getArticleByID } from "./apis";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  let articleId = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleByID(articleId)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true)
      });
  }, []);

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error!</h1>

  return (
    <article className="Article" key={article.article_id}>
      <img
        className="ArticleImage"
        src={article.article_img_url}
        alt={`Picture related to ${article.title}`}
      />
      <h2>{article.title}</h2>
      <p>by {article.author}</p>
      <p>topic: {article.topic}</p>
      <p>{article.body}</p>
    </article>
  );
};

export default Article;
