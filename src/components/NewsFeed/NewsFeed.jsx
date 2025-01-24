import React, { useState } from "react"; // Import React and useState hook
import Post from "../CreatePost/Post"; 
import CreatePost from "../CreatePost/CreatePost";
import "./NewsFeed.css";

const NewsFeed = () => { // the functional component for the news feed
  const [posts, setPosts] = useState([ // State to manage the list of posts
    { id: 1, author: 'Justus Mane', content: 'Looks Good!', likes: 6, comments: [] },
    { id: 2, author: 'Jane Dante', content: 'You Gotta Try!', likes: 70, comments: [] },
    { id: 3, author: 'Lynne Dustin', content: 'Days!', likes: 15, comments: [] },
  ]);

  const addPost = (newPost) => { // Function to add a new post
    setPosts([...posts, { id: posts.length + 1, author: 'Janet JJane', content: newPost, likes: 0, comments: [] }]); // Updates the posts list and author is set to Janet
  };

  const removeComment = (postId, commentId) => { // Function to remove a comment
    setPosts(posts.map(post => // Maps through the posts
      post.id === postId ? { ...post, comments: post.comments.filter(comment => comment.id !== commentId) } : post // Filters out the comment to be removed
    ));
  };

  return (
    <div className="news-feed"> 
      <CreatePost addPost={addPost} /> {/*the createPost component for adding new posts */}
      {posts.map((post) => ( // Maps through the posts
        <Post key={post.id} post={post} removeComment={removeComment} /> // Renders each post
      ))}
    </div>
  );
};

export default NewsFeed; 
