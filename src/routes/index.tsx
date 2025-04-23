import ContentWrapper from "@/components/layout/content-wrapper"
import { Route, Routes } from "react-router"
import Home from "./home";

const WebRouting = ({ }) => {
    return (
        <>
            <Routes>
                {/* Routes for landing pages */}
                <Route Component={ContentWrapper}>
                    <Route Component={Home} path="/" />
                    <Route Component={Home} path="/about" />
                    <Route Component={Home} path="/contact" />
                </Route>
                {/* <Route Component={<Dashboard />}>

                </Route> */}
            </Routes>
        </>
    )
}
export default WebRouting
