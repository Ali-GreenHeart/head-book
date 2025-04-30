import ContentWrapper from "@/components/layout/content-wrapper";
import { lazy } from "react";
import { Route, Routes } from "react-router";
import ProtectedRoutes from "./auth/ProtectedRoutes";
// import RegisterPage from "./auth/register";
const Dashboard = lazy(() => import("./dashboard/dashboard"));
const RegisterPage = lazy(() => import("./auth/register"))
const LoginPage = lazy(() => import("./auth/login"))
const PersonPage = lazy(() => import("./person"))
const Home = lazy(() => import("./home"))
const Friends = lazy(() => import('./friends/friends'))
const EditPage = lazy(() => import('./edit/editPage'))
const People = lazy(() => import("./people"))
const NotificationsList = lazy(() => import("./notification/notificationList"))

const WebRouting = ({ }) => {
  return (
    <>
      <Routes>
        {/* Routes for landing pages */}
        <Route Component={ContentWrapper}>
          <Route Component={Home} path="/" />
          <Route Component={RegisterPage} path="/register" />
          <Route Component={LoginPage} path="/login" />
          <Route Component={Friends} path="/friends" />

          <Route Component={Home} path="/contact" />
          <Route Component={PersonPage} path="/users/:id" />
          <Route Component={Friends} path="/friends" />
          <Route Component={EditPage} path="/edit" />
          <Route Component={People} path="/people" />
          <Route Component={NotificationsList} path="/notification" />
        </Route>
        <Route Component={ProtectedRoutes}>
          <Route Component={Dashboard} path="/dashboard" />
        </Route>
        {/* <Route Component={<Dashboard />}>
                </Route> */}
      </Routes>
    </>
  )
}
export default WebRouting
