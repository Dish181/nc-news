import {useState, useEffect} from 'react'
import { getComments } from '../../api'
import CommentCard from './CommentCard'

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
                {comments.map((comment) => {
                    return (
                        <CommentCard 
                        key={comment.comment_id}
                        author={comment.author} 
                        created_at={comment.created_at}
                        body={comment.body}
                        votes={comment.votes}/>
                    )
                })}
            </div>
        )
    }
}

export default CommentsContainer