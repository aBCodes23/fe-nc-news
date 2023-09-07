import { useEffect, useState } from "react";
import { getCommentsByID } from "./ApiRequests";
import NewComment from "./6b.NewComment";

const CommentCard = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error!</h1>;

  return (
    <div>
      <NewComment articleId={articleId} setComments={setComments}/>
      {comments.map((comment) => {
        return (
          <li className="Comment" key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>by {comment.author}</p>
            <p>{new Date(comment.created_at).toUTCString()}</p>
            <p>💘 {comment.votes} ⬇ </p>
          </li>
        );
      })}
    </div>
  );
};

export default CommentCard;
