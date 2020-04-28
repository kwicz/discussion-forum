import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import { act } from 'react-dom/test-utils'
import PropTypes from 'prop-types';

class PostControl extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost !== null) {
      this.setState({
        selectedPost: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, username, title, date, upvotes, downvotes } = newPost;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      username: username,
      title: title,
      date: date,
      upvotes: upvotes,
      downvotes: downvotes,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }
  
  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedItem: null});
  }
  
  handleWhenUpvoteClicked = (id) => {
    const { dispatch } = this.props;
    const currentlySelectedPost = Object.value(this.props.masterPostList).filter(post => post.id === id)[0];
    const action = {
      type: 'ADD_ITEM',
      id: id,
      username: currentlySelectedPost.username,
      titke: currentlySelectedPost.title,
      date: currentlySelectedPost.date,
      upvotes: currentlySelectedPost.upvotes + 1,
      downvotes: currentlySelectedPost.downvotes
    }
    dispatch(action);
    this.setState({selectedPost: null})
  }
  
  handleWhenDownvoteClicked = (id) => {
    const { dispatch } = this.props;
    const currentlySelectedPost = Object.value(this.props.masterPostList).filter(post => post.id === id)[0];
    const action = {
      type: 'ADD_ITEM',
      id: id,
      username: currentlySelectedPost.username,
      titke: currentlySelectedPost.title,
      date: currentlySelectedPost.date,
      upvotes: currentlySelectedPost.upvotes,
      downvotes: currentlySelectedPost.downvotes - 1
    }
    dispatch(action);
    this.setState({selectedPost: null})
  }
  
  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditPostForm 
        post = {this.state.selectedPost}
        onEditPost = {this.handleEditingPostInList} />
      buttonText = "return to posts";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail 
        post = {this.state.selectedPost} 
        onClickingDelete = {this.handleDeletingPost}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "return to posts";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm 
        onNewPostCreation={this.handleAddingNewPostToList}/>
      buttonText = "return to posts";
    } else {
      currentlyVisibleState = <PostList 
        postList={this.props.masterPostList}
        whenPostClicked={this.handleChangingSelectedPost}
        whenUpvoteClicked={this.handleWhenUpvoteClicked}
        whenDownvoteClicked={this.handleWhenDownvoteClicked} />
      buttonText = "Add a post";
  }

  return (
    <React.Fragment>
    <div>
      <div className="adjustableButton">
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
      <div className="storeFront">
        {currentlyVisibleState}
      </div>
    </div>
  </React.Fragment>

  );
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;





