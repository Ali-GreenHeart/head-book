import React, { useState } from 'react';

const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => {
  const [isRead, setIsRead] = useState(notification.isRead);

  const handleReadToggle = () => {
    setIsRead(!isRead);
  };

  return (
    <div className={`notification ${isRead ? 'read' : 'unread'}`}>
      <p>{notification.message}</p>
      <button onClick={handleReadToggle}>{isRead ? 'Mark as Unread' : 'Mark as Read'}</button>
    </div>
  );
};

export default NotificationItem;