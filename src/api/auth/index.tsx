import { LoginFormValues, RegisterFormValues } from "@/interface/auth";
import { IUser } from "@/interface/user";
import { IBackendErrorMessage } from "@/interface/utils";
import axios, { HttpStatusCode } from "axios";
import { BE_URL } from "..";
import { useNavigate } from "react-router";





export const registerUser = async (values: Partial<RegisterFormValues>) => {
    delete values["confirmPassword"];
    axios.post(`${BE_URL}/users`, values).then(() => {
        console.log('xos geldin!')
    })
}

export const loginUser = async (values: Partial<LoginFormValues>) => {
    const { data }: { data: IUser[] } = await axios.get(`${BE_URL}/users?username=${values.username}`)
    if (!data.length) {
        const err: IBackendErrorMessage = {
            message: "User not found!",
            status: HttpStatusCode.NotFound,
        }
        throw err;
    }

    const user = data[0];
    if (values.password !== user.password) {
        const err: IBackendErrorMessage = {
            message: "Password is wrong!",
            status: HttpStatusCode.Unauthorized
        }
        throw err;
    }
    const token = crypto.randomUUID() + user.id
    return {
        message: "Successfully!",
        status: 200,
        token
    }

}

export const logOut = () => {
    console.log('salam')
    const navigate = useNavigate()
    localStorage.removeItem('head-book-token');
    navigate('/login')
}
