import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  // const addNewComment = event => {
  //   // stretch comment 
  //   const newComment = event.target.value;
  //   props.setNewComment(newComment);
  // }

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */ comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
      {/* <input type="text" placeholder="Comment here" onChange={addNewComment} /> */}
    </div>
  );
};

export default Comments;
