const CommentCard = ({author, created_at, body, votes}) => {
    return (
        <div className="comment-card">
            <p className="comment-author">from {author}</p>
            <p className="comment-timestamp">at {created_at}</p>
            <p className="comment-body">{body}</p>
            <p className="comment-votes">{votes}</p>
        </div>
    )
}

export default CommentCard