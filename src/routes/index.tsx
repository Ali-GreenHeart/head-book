import ContentWrapper from "@/components/layout/content-wrapper";
import { Route, Routes } from "react-router";
import { lazy } from "react";

// Lazily-loaded components
const RegisterPage = lazy(() => import("./auth/register"));
const LoginPage = lazy(() => import("./auth/login"));
const Home = lazy(() => import("./home"));


const WebRouting = () => {
  return (
    <Routes>
      {/* Routes for landing pages */}
      <Route element={<ContentWrapper />}>
        <Route element={<Home />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<Home />} path="/contact" />

      </Route>
    </Routes>
  );
};

export default WebRouting;
