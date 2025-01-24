import React, { useState } from 'react'; // Import React and useState hook

const AddComment = ({ addComment }) => { //This functional component accepts addComment as a prop
  const [newComment, setNewComment] = useState(''); // this state manages the new comment input

  const handleSubmit = (e) => { // the function to handle form submission
    e.preventDefault(); //Prevent default helps in the behaviour of submission of the form
    if (newComment.trim()) { //Check if the comment is not empty
      addComment(newComment); //Calls the addComment function passed as a prop
      setNewComment(''); //Clears the input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Form element with onSubmit event handler */}
      <input
        type="text"
        value={newComment} // assigns the input value to newComment state
        onChange={(e) => setNewComment(e.target.value)} //Update state when the input changes
        placeholder="Add a comment..." // the placeholder text for the input field
      />
      <button type="submit">Comment</button> {/* the submit button with its text as "comment" */}
    </form>
  );
};

export default AddComment; 