import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router"

const ProtectedRoutes = () => {
    const { auth, loading } = useContext(AuthContext)
    console.log('auye', auth)

    if (loading) {
        return <p>loading...</p>
    }
    if (!auth.id) {
        return <Navigate to="/login" />
    }
    return <Outlet />
}
export default ProtectedRoutes
