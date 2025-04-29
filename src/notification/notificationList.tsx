import React from 'react';
import { Notification } from './types';
import NotificationItem from './NotificationItem';

const NotificationsList: React.FC<{ notifications: Notification[] }> = ({ notifications }) => {
  return (
    <div>
      {notifications.map((notif) => (
        <NotificationItem key={notif.id} notification={notif} />
      ))}
    </div>
  );
};

export default NotificationsList;
