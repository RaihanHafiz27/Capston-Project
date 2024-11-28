import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Jika tidak ada token, arahkan ke halaman login
    return <Navigate to="/signin" replace />;
  }

  // Jika ada token, render children (halaman yang dilindungi)
  return children;
};
