import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./1.Header";
import Home from "./2.Home";
import Topics from "./3.Topics";
import Articles from "./4.Articles";
import Users from "./5.Users";
import Article from "./6.Article";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles"
               element={<Articles />}/>
        <Route path="/users" element={<Users />} />
        <Route path={`/articles/:articleId`} element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
