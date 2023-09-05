import {getArticles} from './apis'
import { useState, useEffect } from "react";
import ArticlePreCard from "./4a.ArticlePreCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(()=> {
    getArticles()
    .then((articles)=>{
      setArticles(articles)
    })
  }, [])


  return (
    <ul className="Articles">
      <ArticlePreCard articles={articles}/>
    </ul>
  );
};

export default Articles;
