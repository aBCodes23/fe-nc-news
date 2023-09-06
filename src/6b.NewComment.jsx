import { postComment } from "./ApiRequests";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./Context/userContext";

const NewComment = ({ articleId }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [articleComment, setArticleComment] = useState();
  const [err, setErr] = useState(null);

  const handleInput = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setArticleComment(newComment)
    setErr(null);
    postComment(articleId, newComment, user)
      .then(() => {
        setNewComment("");
      })
      .catch((err) => {
        setErr("Something went wrong, please try again");
        articleComment()
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {err ? <p>{err}</p> : null}
        <label htmlFor="body">New Comment:</label>
        <input
          value={newComment}
          type="text"
          name="body"
          onChange={handleInput}
        />
        <button type="submit">Post</button>
      </form>
      {articleComment ? (
        <li className="Comment">
          <p>{articleComment}</p>
          <p>by {user}</p>
          <p>{new Date(Date.now()).toUTCString()}</p>
          <p>💘 0 ⬇ </p>
        </li>
      ) : null}
    </div>
  );
};

export default NewComment;
