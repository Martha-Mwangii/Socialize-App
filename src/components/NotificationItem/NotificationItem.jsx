import React from 'react'; 
import './NotificationItem.css'; 

const NotificationItem = ({ notification, removeNotification }) => { //this functional component accepts notification and removeNotification as props
  return (
    <div className="notification-item">
      <p>{notification.text}</p> {/* Displays the notification text */}
      <button onClick={removeNotification} className="remove-button">Remove</button> {/* Button to remove the notification */}
    </div>
  );
};

export default NotificationItem; 