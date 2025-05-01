import { IUser } from "@/interface/user"
import axios from "axios"
import { BE_URL } from ".."



export const getUsers = async () => {
    const { data }: { data: IUser[] } = await axios.get(`${BE_URL}/users`)
    return data;
}
export const addFriend = async (userId: string, authId: string) => {
    let isAdded = false;
    let friends = (await axios.get(`${BE_URL}/users/${authId}`)).data?.friends
    if (!friends?.length) {
        friends = []
    }
    if (friends.includes(userId)) {
        friends = friends.filter((_id: string) => _id !== userId)
        isAdded = false;
    } else {
        friends = [...friends, userId]
        isAdded = true;
    }
    await axios.patch(`${BE_URL}/users/${authId}`, {
        friends
    })
    return isAdded;
}
