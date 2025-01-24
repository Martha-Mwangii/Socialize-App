import React, { useState } from "react"; // Import React and useState hook
import CommentsSection from "../Comments/CommentsSection"; // Import CommentsSection component


const Post = ({ post, removeComment }) => { //the Functional component accepts post and removeComment as props
  const [likes, setLikes] = useState(post.likes); // this state manage the number of likes

  const handleLike = () => { // the function that handle like button once its clicked
    setLikes(likes + 1); // Increases the likes count by 1 each time
  };

  return (
    <div className="post"> {/* div Container for the post */}
      <div className="post-header"> {/* Container for the post header */}
        <h3>{post.author}</h3> {/*Displays the author of the post */}
      </div>
      <div className="post-content"> {/* Container for the content posted */}
        <p>{post.content}</p> {/*Displays the post content */}
      </div>
      <div className="post-actions"> {/* Container for post actions (the like button) */}
        <button onClick={handleLike}>Like ({likes})</button> {/* Like button whose likes increase once clicked */}
      </div>
      <CommentsSection comments={post.comments} postId={post.id} removeComment={removeComment} /> {/*the component for CommentsSection  */}
    </div>
  );
};

export default Post; 
