import {useState, useEffect} from 'react'
import { getComments } from '../../api'
import CommentCard from './CommentCard'
import PostComment from './PostComment'

const CommentsContainer = ({article_id}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getComments(article_id)
        .then((comments) => {
            setIsLoading(false)
            setComments(comments)
        })
    }, [])


    if(isLoading) {
        return <p>Loading comments...</p>
    } else {
        return (
            <div className="comments-container">
                <h2>{comments.length} Comments</h2>
                <PostComment setComments={setComments}/>
                {!comments.length ? <p>Start the conversation! Leave a comment on this article above.</p> : null}
                {comments.map((comment) => {
                    return (
                        <CommentCard 
                        key={comment.comment_id}
                        author={comment.author} 
                        created_at={comment.created_at}
                        body={comment.body}
                        votes={comment.votes}
                        comment_id={comment.comment_id}
                        setComments={setComments}
                        comments={comments}/>
                    )
                })}
            </div>
        )
    }
}

export default CommentsContainer