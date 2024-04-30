import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Adjust the path to where your AuthContext is located

function PrivateRoute({ children }) {
  const { user } = useAuth(); // Retrieve user from the auth context
  const location = useLocation();

  if (!user) {
    // If there is no user logged in, redirect to the login page
    // The state includes the path they were trying to access, to redirect them back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // If the user is logged in, render the requested route
}

export default PrivateRoute;
