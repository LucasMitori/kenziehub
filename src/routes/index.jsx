import { Navigate, Route, Routes } from "react-router-dom";
import HubPage from "../pages/hubPage/hubPage";
import LoginPage from "../pages/LoginPage/loginPage";
import RegisterPage from "../pages/RegisterPage/registerPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/userHub" element={<HubPage />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
);

export default RoutesMain;
