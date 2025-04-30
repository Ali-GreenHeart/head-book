import { loginUser } from "@/api/auth";
import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

export interface IAuthContext {
    id: string;
    token: string;
}
interface IProps {
    children: React.ReactNode;
}
interface IAuthProvider {
    loading: boolean;
    auth: IAuthContext;
    logOutFunction: () => void;
    logInFunction: (values: any) => void;
}
export const AuthContext = createContext({} as IAuthProvider);


const AuthContextProvider: React.FC<IProps> = ({ children }) => {
    const [data, setData] = useState({} as IAuthContext)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const logInFunction = async (values: any) => {
        const { token } = await loginUser(values)
        console.log('token-login', token)
        const id = token.slice(-4)
        localStorage.setItem('head-book-token', token)
        setData({ id, token })
        navigate("/dashboard")

    }
    const logOutFunction = async () => {
        localStorage.removeItem('head-book-token')
        setData({} as IAuthContext)
        navigate("/login")
    }
    useEffect(() => {
        const token = localStorage.getItem('head-book-token');
        console.log('token', token);
        if (token) {
            const id = token.slice(-4);
            setData({ id, token });
        }
        setLoading(false)
    }, [])

    return <AuthContext.Provider value={{ auth: data, logOutFunction, logInFunction, loading }}>
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider;
