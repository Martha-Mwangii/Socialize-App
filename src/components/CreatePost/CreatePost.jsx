import React, { useState } from "react"; 
import "./CreatePost.css"; // Import CSS for styling

const CreatePost = ({ addPost }) => { // this functional component accepts addPost as a prop
  const [newPost, setNewPost] = useState(""); // State to manage the new post input

  const handleSubmit = (e) => { // Function to handle form submission
    e.preventDefault(); // Prevent default form submission behavior
    if (newPost.trim()) { 
      addPost(newPost); //Calls the addPost function passed as a prop
      setNewPost(""); //Clears the input field after submission
    }
  };

  return (
    <div className="create-post"> {/* div Container for the create post form */}
      <form onSubmit={handleSubmit}> {/* Form element with onSubmit eventhandler */}
        <textarea
          value={newPost} // assigns textarea value to newPost state
          onChange={(e) => setNewPost(e.target.value)} // Updates state once the input changes
          placeholder="Post Something!" // Placeholder text for the textarea
        />
        <button type="submit">Post</button> {/*the submit button */}
      </form>
    </div>
  );
};

export default CreatePost;
