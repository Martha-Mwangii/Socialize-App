import React, { useState } from 'react'; 
import NotificationItem from '../NotificationItem/NotificationItem'; // Import NotificationItem component

const Notifications = () => { // Functional component for the notifications page
  const [notifications, setNotifications] = useState([ //State to manage the list of notifications
    { id: 1, text: 'Dave liked your post' },
    { id: 2, text: 'Janet commented on your post' },
    { id: 3, text: 'Dante viewed your post' },
  ]);

  const removeNotification = (notificationId) => { // the  Function to remove a notification
    setNotifications(notifications.filter(notification => notification.id !== notificationId)); // Filters out the notification to be removed
  };

  return (
    <div className="notifications"> 
      <h3>Notifications</h3> {/* heading for the notifications*/}
      {notifications.map((notification) => ( //Maps through the notifications
        <NotificationItem
          key={notification.id} // Unique key for each notification
          notification={notification} // Passs notification data to the NotificationItem component
          removeNotification={() => removeNotification(notification.id)} // Pass removeNotification function
        />
      ))}
    </div>
  );
};

export default Notifications; 
