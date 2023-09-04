import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./1.Header";
import Home from "./2.Home";
import Topics from "./3.Topics";
import Articles from "./4.Articles";
import Users from "./5.Users";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route
          path="/articles"
          element={<Articles articles={articles} setArticles={setArticles} />}
        />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
