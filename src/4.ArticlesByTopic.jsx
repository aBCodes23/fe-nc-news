import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "./ApiRequests";
import { useState, useEffect } from "react";
import ArticlePreCardByTopic from "./4a.ArticlePreCardByTopic";

const ArticlesByTopic = () => {
  const { topic } = useParams();
  const [articlesByTopic, setArticlesByTopic] = useState([]);

  useEffect(() => {
    getArticlesByTopic(topic)
    .then((articles) => {
      setArticlesByTopic(articles);
    });
  }, [topic]);

  return (
    <div>
    <h2>{topic} articles</h2>
    <ul className="Articles">
      <ArticlePreCardByTopic articlesByTopic={articlesByTopic} />
    </ul>
    </div>
  );
};

export default ArticlesByTopic;
