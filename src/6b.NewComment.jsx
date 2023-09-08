import { postComment } from "./ApiRequests";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./Context/userContext";
import { getCommentsByID } from "./ApiRequests";

const NewComment = ({ articleId, setComments }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);

  const handleInput = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments((currComments) => {
      return [
        {
          comment_id: Date.now(),
          body: newComment,
          article_id: articleId,
          author: user,
          votes: 0,
          created_at: new Date(Date.now()).toUTCString(),
        },
        ...currComments,
      ];
    });
    setErr(null);
    postComment(articleId, newComment, user)
      .then(() => {
        getCommentsByID(articleId).then((comments)=>{setComments(comments)})
        setNewComment("");
      })
      .catch((err) => {
        setErr("Something went wrong, please try again");
        setComments(comments);
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {err ? <p>{err}</p> : null}
      <label htmlFor="body">New Comment:</label>
      <input
        value={newComment}
        type="text"
        name="body"
        onChange={handleInput} required
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default NewComment;
