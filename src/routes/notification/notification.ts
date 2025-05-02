import { BE_URL } from "@/api";
import { Notification } from "@/interface/notification";
import axios from "axios";



export const getNotifications = async (userId : string ) : Promise<Notification[]> => {

    const { data} = await axios.get(`${BE_URL}/users/${userId}`);
    return data.notifications || [];
}   