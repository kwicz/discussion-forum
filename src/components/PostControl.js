import React from 'react';
import NewPostForm from '';
import PostList from '';
import PostDetails from '';
import EditPostForm from '';

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

}

handleAddingNewPostToList = (newPost) => {
  const ( dispatch ) = this.props;
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