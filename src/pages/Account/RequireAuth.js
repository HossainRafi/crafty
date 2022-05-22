import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (loading) {
    return (
      <p className="flex justify-center">
        <Loading/>
      </p>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
