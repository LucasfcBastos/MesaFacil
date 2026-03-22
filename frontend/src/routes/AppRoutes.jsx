import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/HomePage";
import UserRegistration from "../pages/auth/UserRegistration.jsx";
import UserLogin from "../pages/auth/UserLogin.jsx";

import UserConsumerMy from "../pages/user/UserMy.jsx";
import UserConsumerFilter from "../pages/user/UserFilter.jsx";
import UserConsumerReserva from "../pages/user/UserReserva.jsx";

import UserRestaurantPerfil from "../pages/restaurant/UserMy.jsx";
import UserRestaurantReserva from "../pages/restaurant/UserReserva.jsx";
import UserRestaurantMesa from "../pages/restaurant/UserMesa.jsx";

import NotFound from "../pages/NotFound.jsx"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />

        <Route path="/client/my"
        element={<ProtectedRoute profile={1}>
          <UserConsumerMy />
        </ProtectedRoute>}/>
        <Route path="/client/list/restaurates"
        element={<ProtectedRoute profile={1}>
          <UserConsumerFilter />
        </ProtectedRoute>}/>
        <Route path="/client/list/reservas"
        element={<ProtectedRoute profile={1}>
          <UserConsumerReserva />
        </ProtectedRoute>}/>

        <Route path="/restaurante/perfil"
        element={<ProtectedRoute profile={2}>
          <UserRestaurantPerfil />
        </ProtectedRoute>}/>
        <Route path="/restaurante/reservas"
        element={<ProtectedRoute profile={2}>
          <UserRestaurantReserva />
        </ProtectedRoute>}/>
        <Route path="/restaurante/mesas"
        element={<ProtectedRoute profile={2}>
          <UserRestaurantMesa />
        </ProtectedRoute>}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}