import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css'; 

const Navbar = () => { // the functional component for the navbar
  return (
    <nav className="navbar"> 
      <ul className="nav-links"> {/*List of navigation links */}
        <li><Link to="/">Home</Link></li> {/*Link to the home page */}
        <li><Link to="/newsfeed">News Feed</Link></li> {/*Link to the news feed */}
        <li><Link to="/notifications">Notifications</Link></li> {/*Link to notifications */}
        <li><Link to="/profile">Profile</Link></li> {/*Link to the profile page */}
      </ul>
    </nav>
  );
};

export default Navbar; 