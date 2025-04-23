import { Outlet } from "react-router"
import Navbar from "./navbar"

const ContentWrapper = ({ }) => {
    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Footer/> */}
        </>
    )
}
export default ContentWrapper
