import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";

function PostList(props){
    return (
        <React.Fragment>
            {Object.values(props.postList).map((post) =>
            {
                return <Post
                whenPostClicked = {props.onPostSelection}
                whenUpvoteClicked = {props.onUpvoteClicked}
                whenDownvoteClicked = {props.onDownvoteClicked}
                username={post.username}
                title={post.title}
                body={post.body}
                date={post.date}
                upvotes={post.upvotes}
                downvotes={post.downvotes}
                id={post.id}
                key={post.id}/>
            })}
        </React.Fragment>
    );
}

PostList.propTypes = {
    postList: PropTypes.object,
    onPostSelection: PropTypes.func,
    whenUpvoteClicked: PropTypes.func,
    whenDownvoteClicked: PropTypes.func,
};

export default PostList;