import { getNotifications, readNotification } from "@/api/dashboard";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthContext";
import { Notification } from "@/interface/notification";
import { Eye } from "lucide-react";
import { useContext, useEffect, useState } from "react";

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

  const onEyeClick = async (nId: string) => {
    readNotification(auth.id, nId);
    const updatedNotifications = notifications
      .map((not) => ({ ...not, isRead: true }))
    setNotifications(updatedNotifications)
  }
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
                className={`flex justify-between p-4 rounded-lg shadow-md ${notification.isRead ? "bg-gray-100" : "bg-blue-100"
                  }`}
              >
                <p>
                  {notification.message}
                </p>
                <Button onClick={() => onEyeClick(notification.id)}>
                  <Eye />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Notifications;
