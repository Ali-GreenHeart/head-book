import { AuthContext } from "@/context/AuthContext";
import { Notification } from "@/interface/notification";
import { useContext, useEffect, useState } from "react";
import { getNotifications } from "@/routes/notification/notification";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";

const Notifications = () => {
  const { auth } = useContext(AuthContext);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications(auth.id);
        setNotifications(data.reverse()); // newest first
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    if (auth.id) {
      fetchNotifications();
    }
  }, [auth.id]);

  console.log("Notifications", notifications);
  return (
    <>
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Notifications</h1>
        {notifications.length === 0 ? (
          <p>No notifications yet.</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-4 rounded-lg shadow-md ${
                  notification.isRead ? "bg-gray-100" : "bg-blue-100"
                }`}
              > <div>                
              </div>
                {notification.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Notifications;
