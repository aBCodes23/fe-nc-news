import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./1.Header";
import Home from "./2.Home";
import Articles from "./3.Articles";
import ArticlesByTopic from "./4.ArticlesByTopic";
import Users from "./5.Users";
import Article from "./6.Article";
import ErrorPage from "./8.ErrorPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:topic" element={<ArticlesByTopic />} />
        <Route path="/users" element={<Users />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
