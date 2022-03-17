import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  let token = localStorage.getItem("token");
  // console.log(token);

  const isAuthenticated = token !== "" ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
