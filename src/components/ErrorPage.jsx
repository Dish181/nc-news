import {Link} from 'react-router-dom'

const ErrorPage = ({message}) => {
    return (
        <div className="error-page">
            <h1>404: Not found</h1>
            {!message ? <p>The page you're looking for doesn't exist, click <Link to="/">here</Link> to go home</p> : <p>{message}</p>}
        </div>
    )
}

export default ErrorPage