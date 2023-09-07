import { deleteComment } from "../../api";
import { loggedInUser } from "../../user";
import { useState } from "react";

const CommentCard = ({
  author,
  created_at,
  body,
  votes,
  comment_id,
  setComments,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null)

  const handleDelete = (event) => {
    event.preventDefault();
    setErr(null)
    setIsLoading(true);
    const commentToDelete = +event.target.id
    deleteComment(commentToDelete).then(() => {
      setIsLoading(false);
      setComments((comments) => {
        return comments.filter((comment) => {
            return comment.comment_id !== commentToDelete
        })
      })
    })
    .catch((err) => {
        setIsLoading(false)
        setErr('Your comment could not be deleted at this time, please try again')
    });
  };

  return (
    <div className="comment-card">
      {author === loggedInUser.username ? (
        <p>from You</p>
      ) : (
        <p className="comment-author">from {author}</p>
      )}
      <p className="comment-timestamp">at {created_at}</p>
      <p className="comment-body">{body}</p>
      <p className="comment-votes">{votes} votes</p>
      {author === loggedInUser.username ? (
        <button id={comment_id} onClick={handleDelete} disabled={isLoading}>
          Delete
        </button>
      ) : null}
      {isLoading ? <p>Deleting comment...</p> : null}
      {err ? <p>{err}</p> : null}
    </div>
  );
};

export default CommentCard;
