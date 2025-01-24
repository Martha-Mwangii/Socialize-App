import React, { useState } from 'react'; // Import React and useState hook
import Comment from './Comment'; // Import Comment component
import AddComment from './AddComment'; // Import AddComment component

const CommentsSection = ({ comments, postId, removeComment }) => { // this functional component accepts comments, postId, and removeComment as props
  const [commentList, setCommentList] = useState(comments); // this state manages the list of comments

  const addComment = (newComment) => { // the  function to add a new comment
    setCommentList([...commentList, { id: commentList.length + 1, text: newComment }]); // Update the comment list
  };

  const handleRemoveComment = (commentId) => { // the function to remove a comment
    setCommentList(commentList.filter(comment => comment.id !== commentId)); // Filters/removes the comment to be removed
    if (removeComment) { // checks the  removeComment prop
      removeComment(postId, commentId); // Calls the removeComment function
    }
  };

  return (
    <div className="comments-section"> {/* Container for the comments section */}
      {commentList.map((comment) => ( // Map through the comment list
        <Comment
          key={comment.id} // Unique key for each comment
          comment={comment} // Passes comment data to the Comment component
          removeComment={() => handleRemoveComment(comment.id)} // Passes removeComment function
        />
      ))}
      <AddComment addComment={addComment} /> {/*AddComment component responsible for adding new comments */}
    </div>
  );
};

export default CommentsSection; 
