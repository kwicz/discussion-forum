import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.title}</h3>
        <p>by {props.username}</p>
        <p>{props.body}</p>
        <button onClick = {()=> props.whenUpvoteClicked(props.id)} type="submit">Upvote</button>
        <p>Upvotes: {props.upvotes}</p>
        <button onClick = {()=> props.whenDownvoteClicked(props.id)} type="submit">Downvote</button>
        <p>Downvotes: {props.downvotes}</p>
      </div>
    </React.Fragment>
  )
}

Post.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  upvotes: PropTypes.number,
  downvotes: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
  whenUpvoteClicked: PropTypes.func,
  whenDownvoteClicked: PropTypes.func
}

export default Post;