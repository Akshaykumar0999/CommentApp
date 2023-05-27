// Write your code here]
import './index.css'

const CommentsList = props => {
  const {commentsListDetails, toggleIsLiked, deleteCommentItem} = props

  const {
    id,
    name,
    comment,
    firstLetter,
    time,
    isLiked,
    classNameOfBackgroundColor,
  } = commentsListDetails

  const imgUrlsIs = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeButton = () => {
    toggleIsLiked(id)
  }

  const onClickDeleteItem = () => {
    deleteCommentItem(id)
  }

  const classNameOfFirstLetterElement =
    classNameOfBackgroundColor[
      Math.ceil(Math.random() * classNameOfBackgroundColor.length - 1)
    ]

  const likeClassNameIS = isLiked ? 'act-like' : ''
  return (
    <li className="display-comment">
      <div className="name-time-comment-card">
        <div className={`First-letter ${classNameOfFirstLetterElement}`}>
          {firstLetter}
        </div>
        <div className="name-comment-card">
          <div className="name-time-card">
            <p className="name">{name}</p>
            <p className="time">{time}</p>
          </div>
          <p className="comment-text">{comment}</p>
        </div>
      </div>
      <div className="delete-like-btn-card">
        <div className="image-container">
          <img className="like-img" src={imgUrlsIs} alt="like" />
          <button
            type="button"
            className={`like-unlike-btn ${likeClassNameIS}`}
            onClick={likeButton}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="dlt-btn"
          onClick={onClickDeleteItem}
          data-testid="delete"
        >
          <img
            className="dlt-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentsList
