import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserRegistration from "../pages/auth/UserRegistration.jsx";
import UserLogin from "../pages/auth/UserLogin.jsx";
import UserMy from "../pages/user/UserMy.jsx";
import NotFound from "../pages/NotFound.jsx"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />

        <Route path="/client/my" element={<UserMy />} />
        <Route path="/restaurante/my" element={<UserMy />} />

        {/* Rota privada
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        Rota de erro */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}