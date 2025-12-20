import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedPages = ({ children }) => {
  const authenticated = !!localStorage.getItem("admin_token");

  if (!authenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedPages;
