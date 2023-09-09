import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api";
import { voteArticle } from "../../api";

import CommentsContainer from "./CommentsContainer";

const ArticleView = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);
  const [inactive, setInactive] = useState("");
  const [err, setErr] = useState(null);
  const [articleErr, setArticleErr] = useState(null)
  const { article_id } = useParams();


  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then((article) => {
      setIsLoading(false);
      setArticle(article);
      setVotes(article.votes);
    })
    .catch((err) => {
      setIsLoading(false)
      setArticleErr(err)
    });
  }, []);

  const handleUpVote = (event) => {
    event.preventDefault();
    setErr(null);
    if (voted) {
      setVotes((votes) => {
        return votes - 1;
      });
      setInactive("");
      setVoted(false);
      voteArticle(article_id, -1).catch((err) => {
        setVotes((votes) => {
          return votes + 1;
        });
        setInactive("downvote");
        setVoted(true);
        setErr(`Sorry, we couldn't remove your vote. Please try again.`);
      });
    } else {
      setVotes((votes) => {
        return votes + 1;
      });
      setInactive("downvote");
      setVoted(true);
      voteArticle(article_id, 1).catch((err) => {
        setVotes((votes) => {
          return votes - 1;
        });
        setInactive("");
        setVoted(false);
        setErr(`Sorry, we couldn't take your vote. Please try again.`);
      });
    }
  };

  const handleDownVote = (event) => {
    event.preventDefault();
    setErr(null);
    if (voted) {
      setVotes((votes) => {
        return votes + 1;
      });
      setInactive("");
      setVoted(false);
      voteArticle(article_id, 1).catch((err) => {
        setVotes((votes) => {
          return votes - 1;
        });
        setInactive("");
        setVoted(true);
        setErr(`Sorry, we couldn't remove your vote. Please try again.`);
      });
    } else {
      setVotes((votes) => {
        return votes - 1;
      });
      setInactive("upvote");
      setVoted(true);
      voteArticle(article_id, -1).catch((err) => {
        setVotes((votes) => {
          return votes + 1;
        });
        setInactive("");
        setVoted(false);
        setErr(`Sorry, we couldn't take your vote. Please try again.`);
      });
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (articleErr){
    return (
      <div className="article-error">
      <h1>Error code: {articleErr.response.status}</h1>
      <p>{articleErr.response.data.msg}</p>
      </div>
    )
  } else {
    return (
      <>
      <div className="article-view">
        <h2 className="article-title">{article.title}</h2>
        <div className="article-details">
          <div className="timestamp-and-author">
            <p className="article-timestamp">{new Date(article.created_at).toLocaleDateString()}</p>
            <p className="article-author">by {article.author}</p>
          </div>
          <div className="votes-container">
            {err ? <p>{err}</p> : null}
            <button
              className={`${inactive === "upvote" ? "inactive" : "active"} vote-button`}
              id="upvote"
              onClick={handleUpVote}
              disabled={inactive === "upvote"}
              value={1}
            >
              Upvote
            </button>
            <button
              className={`${inactive === "downvote" ? "inactive" : "active"} vote-button`}
              id="downvote"
              onClick={handleDownVote}
              disabled={inactive === "downvote"}
              value={-1}
            >
              Downvote
            </button>
            <p className={votes >= 0 ? "positive" : "negative"}>
              {" "}
              Votes: {votes}
            </p>
          </div>
        </div>
        <img className="article-img" src={article.article_img_url} />
        <p>{article.body}</p>
        </div>
        <CommentsContainer article_id={article_id} />
      </>
    );
  }
};
export default ArticleView;
