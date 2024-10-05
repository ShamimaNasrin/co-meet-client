import { ReactNode, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  useCurrentToken,
  useCurrentUser,
  logOut,
} from "../redux/features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
  requiredRole?: "user" | "admin";
};

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    if (!token || (requiredRole && user?.role !== requiredRole)) {
      dispatch(logOut()); // Clears any invalid token or user state
    }
  }, [token, user, requiredRole, dispatch]);

  // Redirect to login if user is not authenticated
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Redirect if user does not have the required role
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  // Render protected content for authorized users
  return <>{children}</>;
};

export default ProtectedRoute;
