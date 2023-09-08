import { useEffect, useState } from "react";
import { getCommentsByID, deleteComment } from "./ApiRequests";
import NewComment from "./6b.NewComment";
import { useContext } from "react";
import { UserContext } from "./Context/userContext";

const CommentCard = ({ articleId }) => {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getCommentsByID(articleId)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const handleDelete = (comment_id, author) => {
    if (user != author) {
      const popup = document.getElementById(`popup${comment_id}`);
      popup.classList.toggle("show");
      setTimeout(()=>{popup.classList.toggle("hide")}, 3000);
      return;
    }
    setComments((currComments) => {
      const commentsWithoutDelete = currComments.filter((comment) => {
        return comment.comment_id != comment_id;
      });
      return commentsWithoutDelete;
    });
    setErr(null);
    deleteComment(comment_id).catch((err) => {
      setErr("Something went wrong, please try again");
      setComments(comments);
      console.log(err);
    });
  };

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error!</h1>;

  return (
    <div>
      <NewComment articleId={articleId} setComments={setComments} />
      {comments.map((comment) => {
        return (
          <li className="Comment" key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>by {comment.author}</p>
            <p>{new Date(comment.created_at).toUTCString()}</p>
            <p>💘 {comment.votes} ⬇ </p>
            <button
              className="popup"
              onClick={() => {
                handleDelete(comment.comment_id, comment.author);
              }}
            >
              Delete Comment
              <span className="popuptext" id={`popup${comment.comment_id}`}>
                You are not the author of this comment
              </span>
            </button>
            {err ? <p>{err}</p> : null}
          </li>
        );
      })}
    </div>
  );
};

export default CommentCard;
