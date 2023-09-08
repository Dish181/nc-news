import {useState} from 'react'
import {useParams} from 'react-router-dom'
import { addComment } from '../../api'


const PostComment = ({setComments}) => {
    const [comment, setComment] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(null)
    const {article_id} = useParams()
    const handleTyping = (event) => {
        setErr(null)
        setComment(event.target.value)
    }
    
    const handleClear = (event) => {
        event.preventDefault()
        setComment('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setErr(null)
        setIsLoading(true)
        addComment(article_id, comment)
        .then((comment) => {
            setComment('')
            setIsLoading(false)
            setComments((comments) => {
                return [comment, ...comments]
            })
        })
        .catch((err) => {
            setIsLoading(false)
            setErr(`There was a problem posting your comment. Please try again.`)
        })
        
    }
    
    if(isLoading) {
        return <p>Adding comment...</p>
    } else {
        return (
            <form className="post-comment" onSubmit={handleSubmit}>
                <label className="comment-label" htmlFor="comment">Add a comment</label>
                <input id='comment' value={comment} onChange={handleTyping}></input>
                <div className='comment-buttons'>
                <button onClick={handleClear} className={comment ? null : 'inactive'} disabled={!comment}>Clear</button>
                <button disabled={!comment} className={comment ? null : 'inactive'}>Comment</button>
                {err ? <p>There was a problem adding your comment, please try again</p> : null}
                </div>
            </form>
        )
    }
}

export default PostComment