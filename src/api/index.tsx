import { IUser } from "@/interface/user"
import { IBackendErrorMessage } from "@/interface/utils"
import axios, { HttpStatusCode } from "axios"

export const BE_URL = process.env.REACT_BE_API_URL

// mw - middleWare
export const mwCheckLoggedUser = async () => {
    const token = localStorage.getItem('head-book-token')
    if (token) {
        const id = token.slice(-4)
        const { data }: { data: IUser[] } = await axios.get(`${BE_URL}/users?id=${id}`)
        if (data.length) {
            return data[0].id;
        }
    }
}
