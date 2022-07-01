import React, { useState, useContext } from "react";
import { TypeAuthProvider } from "../hooks/tipos";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { Home } from "../pages/Home/"
import { DetalhesFilme } from "../pages/Filme"
import { Login } from "../pages/Login"
import { Cadastrar } from "../pages/Cadastrar"
import { Perfil } from "../pages/Perfil"
import { AuthProvider } from "../contexts/Auth/AuthProvider"
import { RequireAuth } from "../contexts/Auth/RequireAuth"





export function AppRoutes() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<DetalhesFilme />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/perfil" element={<RequireAuth><Perfil /></RequireAuth>} />
        </Routes>
      </AuthProvider >
    </Router>

  )

}