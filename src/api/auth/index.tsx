import { RegisterFormValues } from "@/interface/register"
import axios from "axios"
const BE_URL = process.env.REACT_BE_API_URL

export const registerUser = async (values: Partial<RegisterFormValues>) => {
    delete values["confirmPassword"];
    axios.post(`${BE_URL}/users`, values).then(() => {
        console.log('xos geldin!')
    })
}

