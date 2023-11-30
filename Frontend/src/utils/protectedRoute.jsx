import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, Component, redirectUrl }) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectUrl} replace />;
  }
  return <Component />;
};

export default ProtectedRoute;
