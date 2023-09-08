import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "./ApiRequests";

const NavBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);
  return (
    <nav className="NavBarBox">
      <ul className="NavBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li className="dropdown">
          <button className="dropbtnTopic">Topics</button>
          <div className="dropdown-content">
            {topics.map((topic) => {
              return (
                <Link key={topic} to={`/articles/${topic}`}>
                  {topic}
                </Link>
              );
            })}
          </div>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
