import { getArticles } from "./ApiRequests";
import { useState, useEffect } from "react";
import ArticlePreCard from "./3a.ArticlePreCard";
import { Link, useSearchParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  let [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sort_by')
  const orderBy = searchParams.get('order')

  useEffect(() => {
    getArticles(sortBy, orderBy).then((articles) => {
      setArticles(articles);
    });
  }, [searchParams]);

  return (
    <div>
      <li className="dropdown">
        <button className="dropbtn">Sort By</button>
        <div className="dropdown-content">
          <Link key="datesort" to="/articles?order=DESC&sort_by=created_at">
            date
          </Link>
          <Link key="votesort" to="/articles?order=DESC&sort_by=votes">
            votes
          </Link>
          <Link key="commentsort" to="/articles?order=DESC&sort_by=comment_count">
            comments
          </Link>
        </div>
      </li>
      <li className="dropdown">
        <button className="dropbtn">Order</button>
        <div className="dropdown-content">
          <Link key="desc" to={sortBy ? `/articles?order=DESC&sort_by=${sortBy}`: '/articles?order=DESC'}>
            Descending
          </Link>
          <Link key="asc" to={sortBy ? `/articles?order=ASC&sort_by=${sortBy}`: '/articles?order=ASC'}>
            Ascending
          </Link>
        </div>
      </li>
      <ul className="Articles">
        <ArticlePreCard articles={articles} />
      </ul>
    </div>
  );
};

export default Articles;
