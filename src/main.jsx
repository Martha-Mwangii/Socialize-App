import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App'; 
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render( // Render the app
  <React.StrictMode> {/* StrictMode for highlighting potential issues */}
    <App /> {/*Renders the App component */}
  </React.StrictMode>
);