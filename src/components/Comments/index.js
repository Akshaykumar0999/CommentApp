import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import './index.css'

import CommentsList from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
    counter: 0,
  }

  enterName = event => {
    this.setState({name: event.target.value})
  }

  enterComment = event => {
    this.setState({comment: event.target.value})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteCommentItem = id => {
    const {commentList} = this.state
    const updatedListAfterDelete = commentList.filter(
      eachComment => eachComment.id !== id,
    )
    // this.setState({commentList: updatedListAfterDelete})
    this.setState(prevState => ({
      commentList: updatedListAfterDelete,
      counter: prevState.counter - 1,
    }))
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const firstLetterIs = name[0]
    const timeIs = formatDistanceToNow(new Date())
    const newCommentItem = {
      id: uuidv4(),
      name,
      comment,
      firstLetter: firstLetterIs,
      time: timeIs,
      isLiked: false,
      classNameOfBackgroundColor: initialContainerBackgroundClassNames,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newCommentItem],
      counter: prevState.counter + 1,
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentList, counter, name, comment} = this.state

    return (
      <div className="app-container">
        <div className="cards-container">
          <div className="comment-inputs-card">
            <h1 className="Heading-comment">Comments</h1>
            <div className="comment-card">
              <form className="comment-details" onSubmit={this.addComment}>
                <p className="description-cmt">
                  Say something about 4.0 Technologies
                </p>
                <input
                  className="input-cmt-title"
                  type="text"
                  onChange={this.enterName}
                  placeholder="Your Name"
                  value={name}
                />
                <textarea
                  className="text-area-card"
                  rows="5"
                  cols="20"
                  onChange={this.enterComment}
                  placeholder="Your Comment"
                  value={comment}
                />
                <button className="button" type="submit">
                  Add Comment
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                className="cmt-image"
                alt="comments"
              />
            </div>
          </div>

          <div className="comments-cards">
            <div className="comments-tag">
              <div className="name-counter">
                <p className="counter">{counter}</p>
                <p className="description-cmt">Comments</p>
              </div>
              <ul className="ul-card-items">
                {commentList.map(eachComment => (
                  <CommentsList
                    commentsListDetails={eachComment}
                    key={eachComment.id}
                    toggleIsLiked={this.toggleIsLiked}
                    deleteCommentItem={this.deleteCommentItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
