/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("access_token");
  // kalau token tidak ada
  if (!token) {
    return <Navigate to="/login" />;
  }

  // kalau token ada
  return <>{children}</>;
}
