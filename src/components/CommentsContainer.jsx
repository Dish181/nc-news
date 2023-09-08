import {useState, useEffect} from 'react'
import { getComments, getUsers } from '../../api'
import CommentCard from './CommentCard'
import PostComment from './PostComment'

const CommentsContainer = ({article_id}) => {
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        Promise.all([getUsers(), getComments(article_id)])
        .then(([users, comments]) => {
            setUsers(users)
            setComments(comments)
            const imagelessComments = comments
            const imageComments = imagelessComments.map((comment) => {
                const matchingUser = users.find((user) => {
                    return user.username === comment.author
                })
                return {...comment, userAvatar: matchingUser.avatar_url}
            })
            setIsLoading(false)
            setComments(imageComments)
        })
        // getUsers()
        // .then((users) => {
        //     setUsers(users)
        // })
        // .then(() => {
        //     return getComments(article_id)
        // })
        // .then((comments) => {
        //     console.log(users, 'users')
        //     const imagelessComments = comments
        //     console.log(imagelessComments, 'assigned comments to var')
        //     const imageComments = imagelessComments.map((comment) => {
        //         const matchingUser = users.find((user) => {
        //             return user.username === comment.author
        //         })
        //         return {...comment, userAvatar: matchingUser.avatar_url}
        //     })
        //     setIsLoading(false)
        //     setComments(imageComments)
        // })
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
                        comments={comments}
                        userAvatar={comment.userAvatar}
                        />
                    )
                })}
            </div>
        )
    }
}

export default CommentsContainer