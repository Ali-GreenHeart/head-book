import { IUser } from "@/interface/user"
import axios from "axios"
import { BE_URL, mwCheckLoggedUser } from ".."
import { Notification } from "@/interface/notification";


export const getUsersCount = async () => {
    const { data }: { data: IUser[] } = await axios.get(`${BE_URL}/users`)
    return data.length;
}

export const getUserInfo = async () => {
    const loggedInUserId = await mwCheckLoggedUser()
    const { data }: { data: IUser[] } = await axios.get(`${BE_URL}/users?id=${loggedInUserId}`)
    return data[0];
}

export const getFriends: () => Promise<string[]> = async () => {
    const loggedInUserId = await mwCheckLoggedUser()

    const { data }: { data: IUser[] } = await axios.get(`${BE_URL}/users?id=${loggedInUserId}`)
    return data[0].friends!;
}

export const getNotifications = async (userId: string): Promise<Notification[]> => {
    const { data } = await axios.get(`${BE_URL}/users/${userId}`);
    return data.notifications || [];
}
// kim -> auth.id
// kime -> user.id
// message
export const createNotification = async (authUser: any, targetUser: any, userId: any) => {
    const newNotification = {
        id: Date.now().toString(),
        message: "You have been added by " + authUser.name,
        isRead: false,
    };

    const updatedNotifications = targetUser.notifications
        ? [...targetUser.notifications, newNotification]
        : [newNotification];
    await axios.patch(`${BE_URL}/users/${userId}`, {
        notifications: updatedNotifications,
    });
}
export const readNotification = async (userId: string, notificationId: string) => {
    const user = await axios.get(`${BE_URL}/users/${userId}`)
    if (user.data.notifications) {
        let updatedNotifications = user.data
            .notifications
            .map((notif: Notification) => {
                if (notif.id === notificationId) {
                    return { ...notif, isRead: true }
                }
                return notif;
            })
        await axios.patch(`${BE_URL}/users/${userId}`, {
            notifications: updatedNotifications,
        });
    }
}
