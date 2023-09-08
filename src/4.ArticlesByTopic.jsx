import { useParams, useSearchParams, Link } from "react-router-dom";
import { getArticles } from "./ApiRequests";
import { useState, useEffect } from "react";
import ArticlePreCardByTopic from "./4a.ArticlePreCardByTopic";

const ArticlesByTopic = () => {
  const { topic } = useParams();
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  let [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticles(sortBy, orderBy, topic)
    .then((articles) => {
      setArticlesByTopic(articles);
      setIsLoading(false);
    })
    .catch((err)=>{
      setIsLoading(false);
      setIsError(true);
    })
  }, [topic, searchParams]);

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error - Topic does not exist</h1>;

  return (
    <div>
      <li className="dropdown">
        <button className="dropbtn">Sort By</button>
        <div className="dropdown-content">
          <Link
            key="datesort"
            to={`/articles/${topic}?order=DESC&sort_by=created_at`}
          >
            date
          </Link>
          <Link
            key="votesort"
            to={`/articles/${topic}?order=DESC&sort_by=votes`}
          >
            votes
          </Link>
          <Link
            key="commentsort"
            to={`/articles/${topic}?order=DESC&sort_by=comment_count`}
          >
            comments
          </Link>
        </div>
      </li>
      <li className="dropdown">
        <button className="dropbtn">Order</button>
        <div className="dropdown-content">
          <Link
            key="desc"
            to={
              sortBy
                ? `/articles/${topic}?order=DESC&sort_by=${sortBy}`
                : `/articles/${topic}?&order=DESC`
            }
          >
            Descending
          </Link>
          <Link
            key="asc"
            to={
              sortBy
                ? `/articles/${topic}?order=ASC&sort_by=${sortBy}`
                : `/articles/${topic}?&order=ASC`
            }
          >
            Ascending
          </Link>
        </div>
      </li>
      <h2>{topic} articles</h2>
      <ul className="Articles">
        <ArticlePreCardByTopic articlesByTopic={articlesByTopic} />
      </ul>
    </div>
  );
};

export default ArticlesByTopic;
