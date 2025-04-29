import React from 'react';
import NotificationItem from './notificationItem';

const NotificationsList = () => {
  const notifications: any = []
  return (
    <div>
      {notifications.map((notif: any) => (
        <NotificationItem key={notif.id} notification={notif} />
      ))}
    </div>
  );
};

export default NotificationsList;
