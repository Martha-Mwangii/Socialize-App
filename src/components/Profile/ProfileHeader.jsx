import React from 'react'; // Import React
import "./ProfileHeader.css"; 

const ProfileHeader = ({ user }) => { // the functional component accepts user as a prop
  return (
    <div className="profile-header"> 
      <img src={user.avatar} alt={user.name} className="profile-avatar" /> {/* for the profile page at the top */}
      <h2>{user.name}</h2> {/* User name for the profile holder */}
      <p>{user.bio}</p> 
    </div>
  );
};

export default ProfileHeader; 
