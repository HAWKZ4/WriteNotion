import React from "react";
import { Navigate } from "react-router-dom";


export const ProtectedRoutes = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth") || false);
  // We used is auth variable inside the protected routes to ensure that the variable is updated when the 
  // isAuth is really updated
  return isAuth ? children : <Navigate to="/" />;
};
