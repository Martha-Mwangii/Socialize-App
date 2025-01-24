import React from 'react'; 
import './Comment.css'; 

const Comment = ({ comment, removeComment }) => { // this functional component  accepts comment and removeComment as props
  return (
    <div className="comment"> {/* the container for the comment */}
      <p>{comment.text}</p> {/* Displays the comment text */}
      <button onClick={removeComment} className="remove-button">Remove</button> {/* Button to remove the comment with its event handlers */}
    </div>
  );
};

export default Comment; 