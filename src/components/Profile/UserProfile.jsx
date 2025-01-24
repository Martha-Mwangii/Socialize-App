import React from "react"; // Import React
import ProfileHeader from "./ProfileHeader"; // Import ProfileHeader component
import image from "../../assets/images.jpeg"; // Import user  image
import "./UserProfile.css"; // Import CSS for styling

const UserProfile = () => { // Functional component for the user profile
  const user = { // User data is already given
    name: "Jane Sunny",
    bio: "Thee Reader | Novel Enthusiast",
    avatar: image,
    followers: 80,
    following: 120,
  };

  return (
    <div className="user-profile"> {/* Container for the user profile */}
      <ProfileHeader user={user} /> {/* ProfileHeader component */}
      <div className="profile-stats"> {/* Container for profile statistics */}
        <p>Followers: {user.followers}</p> {/* Displays tthe number of followers */}
        <p>Following: {user.following}</p> {/* Displays the number of people profile holder is following */}
      </div>
    </div>
  );
};

export default UserProfile; 
