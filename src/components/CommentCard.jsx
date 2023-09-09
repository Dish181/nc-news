import { deleteComment } from "../../api";
import { loggedInUser } from "../../user";
import { useState } from "react";
import {DeleteIcon} from '@chakra-ui/icons'
import {IconButton} from '@chakra-ui/react'

const CommentCard = ({
  author,
  created_at,
  body,
  votes,
  comment_id,
  setComments,
  userAvatar
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null)

  const handleDelete = (comment_id) => {
    setErr(null)
    setIsLoading(true);
    deleteComment(comment_id).then(() => {
      setIsLoading(false);
      setComments((comments) => {
        return comments.filter((comment) => {
            return comment.comment_id !== comment_id
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
      <div className="comment-top">
        <div className="comment-author-details">
        <img src={userAvatar} className="user-avatar"/>
      {author === loggedInUser.username ? (
        <p>from <span className="you">You</span></p>
      ) : (
        <p className="comment-author">from {author}</p>
      )}
      </div>
      <p className="comment-timestamp">on {new Date(created_at).toLocaleDateString()}</p>
      </div>
      <p className="comment-body">{body}</p>
      <div className="comment-footer">
      <p className="comment-votes">{votes} votes</p>
      <div className="delete-container">
      {author === loggedInUser.username ? (
        <IconButton onClick={(event) => { handleDelete(comment_id)}} color='white' height='40px' width='40px' backgroundColor='red' icon={ <DeleteIcon id={comment_id} margin='auto' boxSize='20' />} />
      ) : null}
      {isLoading ? <p>Deleting comment...</p> : null}
      {err ? <p>{err}</p> : null}
      </div>
      </div>
    </div>
  );
};

export default CommentCard;
