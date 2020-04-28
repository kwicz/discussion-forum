import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props){
    const { post, onClickingDelete } = props;

    return(
        <React.Fragment>
            <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>{post.username}</p>
        <p>{post.date}</p>
        <p>{post.upvotes}</p>
        <p>{post.downvotes}</p>
        <button onClick={()=> onClickingDelete(post.id)}>Remove post</button>
        <button onClick={ props.onClickingEdit }>Update post Details</button>
        </div>

        </React.Fragment>
    );
}

PostDetail.propTypes = {
    post: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
};

export default PostDetail;
