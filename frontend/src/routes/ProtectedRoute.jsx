import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, profile }) {

  const user = JSON.parse(localStorage.getItem("user"))

  if (!user) {
    return <Navigate to="/login" />
  }

  if (profile && user.id_profile !== profile) {
    return <Navigate to="/" />
  }

  return children
}