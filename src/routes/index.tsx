import ContentWrapper from "@/components/layout/content-wrapper"
import { Route, Routes } from "react-router"
import { lazy } from "react";
// import RegisterPage from "./auth/register";
const RegisterPage = lazy(() => import("./auth/register"))
const LoginPage = lazy(() => import("./auth/login"))
const PersonPage = lazy(() => import("./person"))
const Home = lazy(() => import("./home"))

const WebRouting = ({ }) => {
    return (
        <>
            <Routes>
                {/* Routes for landing pages */}
                <Route Component={ContentWrapper}>
                    <Route Component={Home} path="/" />
                    <Route Component={RegisterPage} path="/register" />
                    <Route Component={LoginPage} path="/login" />
                    <Route Component={Home} path="/contact" />
                    <Route Component={PersonPage} path="/users/:id" /> 
                    
                </Route>
                {/* <Route Component={<Dashboard />}>

                </Route> */}
            </Routes>
        </>
    )
}
export default WebRouting
