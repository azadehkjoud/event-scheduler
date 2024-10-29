/* eslint-disable react/prop-types */
//this component is used to ensure only authenticated users can access the CreateEventPage.
// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = Boolean(localStorage.getItem("apiToken"));

  return isAuthenticated ? children : <Navigate to="/signin" />;
}

export default ProtectedRoute;
