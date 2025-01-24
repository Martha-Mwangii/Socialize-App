import React from 'react'; // Import React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes for routing
import Navbar from './components/Navbar/Navbar'; // Import Navbar component
import Home from './components/Home/Home'; // Import Home component
import NewsFeed from './components/NewsFeed/NewsFeed'; // Import NewsFeed component
import Notifications from './components/Notifications/Notifications'; // Import Notifications component
import UserProfile from './components/Profile/UserProfile'; // Import UserProfile component
import './App.css'; // Import CSS for styling

const App = () => { // Functional component for the root of the app
  return (
    <Router> {/* Router component to enable routing */}
      <Navbar /> {/* Navbar component */}
      <Routes> {/* Routes component to define routes */}
        <Route path="/" element={<Home />} /> {/* Route for the home page */}
        <Route path="/newsfeed" element={<NewsFeed />} /> {/* Route for the news feed */}
        <Route path="/notifications" element={<Notifications />} /> {/* Route for notifications */}
        <Route path="/profile" element={<UserProfile />} /> {/* Route for the user profile */}
      </Routes>
    </Router>
  );
};

export default App; 