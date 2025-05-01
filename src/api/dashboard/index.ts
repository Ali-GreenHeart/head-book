import { IUser } from "@/interface/user"
import axios from "axios"
import { BE_URL, mwCheckLoggedUser } from ".."


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
