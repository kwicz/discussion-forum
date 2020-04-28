import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditPostForm(props){
  const { post } = props;

  function handleEditPostFormSubmission(event){
    event.preventDefault();
    console.log("reached handle edit Post form submission function");
    props.onEditPost({
        username: event.target.username.value,
        title: event.target.title.value,
        body: event.target.body.value,
        date: event.target.date.value,
        upvotes: event.target.upvotes.value,
        downvotes: event.target.downvotes.value,
        id: post.id
    });
  }
  
  return( 
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post Details" />
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func
}

export default EditPostForm;