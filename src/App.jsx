import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignupPage from "./components/SIgnupPage";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/adminPage/AdminPage";
import PublicRoute from "./components/routes/publicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage/>
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
