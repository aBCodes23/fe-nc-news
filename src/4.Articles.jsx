import axios from "axios";
import { useEffect } from "react";
import ArticlePreCard from "./4a.ArticlePreCard";

const Articles = ({ articles, setArticles }) => {
  useEffect(() => {
    axios
      .get("https://abcodesnorthcodersncnewsapp.onrender.com/api/articles")
      .then(({ data }) => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <ul class="Articles">
      <ArticlePreCard articles={articles} />
    </ul>
  );
};

export default Articles;
