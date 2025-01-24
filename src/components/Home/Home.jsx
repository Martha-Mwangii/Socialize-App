import React from "react";
import image from "../../assets/image.jpeg"; // Import the image for the home page
import "./Home.css"; 

const Home = () => { //Functional component for the home page
  return (
    <div className="home"> {/* Container for the home page */}
      <h1>Welcome to Socialize</h1> {/* the message displayed */}
      <img src={image} alt="Home" className="full-width-image" /> {/*  image is set to the full width of the device */}
      <p>Explore Socialize using the navigation bar above.</p> {/* text displayed at the bottom of the home page */}
    </div>
  );
};

export default Home; 