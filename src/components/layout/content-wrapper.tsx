import {  Outlet, useLocation } from "react-router"
import Navbar from "./navbar"

const ContentWrapper = ({ }) => {
    const l = useLocation()
    return (
        <>
            {!l.pathname.includes('/dashboard') && <Navbar />}
            <Outlet />
            {/* <Footer/> */}
        </>
    )
}
export default ContentWrapper
