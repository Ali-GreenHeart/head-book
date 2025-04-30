import axios, { HttpStatusCode } from "axios"
import { BE_URL, mwCheckLoggedUser } from ".."
import { IUser } from "@/interface/user"
import { IBackendErrorMessage } from "@/interface/utils"


export const getUsersCount = async () => {
    const { data }: { data: IUser[] } = await axios.get(`${BE_URL}/users`)
    return data.length;
}

export const getUserInfo = async () => {
    // your code here
}

export const getFriends: () => Promise<number> = async () => {
    const loggedInUserId = await mwCheckLoggedUser()
    if (!loggedInUserId) {
        const err: IBackendErrorMessage = {
            message: "You are not logged in!",
            status: HttpStatusCode.Unauthorized
        }
        throw err;
    }
    const { data }: { data: IUser[] } = await axios.get(`${BE_URL}/users?id=${loggedInUserId}`)
    return data[0].friends?.length || 0;
}
