import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function Post(props){
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root} onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.title}</h3>
        <p>by {props.username}</p>
        <CardContent>
          <p>{props.body}</p>
        </CardContent>
        <CardActions>
          <button onClick = {()=> props.whenUpvoteClicked(props.id)} type="submit">Upvote</button>
          <p>Upvotes: {props.upvotes}</p>
          <button onClick = {()=> props.whenDownvoteClicked(props.id)} type="submit">Downvote</button>
          <p>Downvotes: {props.downvotes}</p>
        </CardActions>
      </Card>
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