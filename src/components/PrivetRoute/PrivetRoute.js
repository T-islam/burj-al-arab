import React from "react";
import { Navigate } from "react-router-dom";
const PrivetRoute = (props) => {
  const { isLogin } = props;
  return !isLogin ? <Navigate to="/login" replace /> : props.children;
};

export default PrivetRoute;
