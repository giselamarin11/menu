//  Importacciones de cada una de las páginas de la aplicación.
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; //  Importa React para usar JSX y componentes.
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/inicio/Inicio';
import Login from './pages/login/Login';
import Register from './pages/Register/register';
import Recover from './pages/recover/Recover';
import VerifyCode from './pages/recover/VerifyCode';
import ResetPassword from './pages/recover/ResetPassword';


function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

 // Rutas principales de la aplicacion 
  return (
    <div className="app-container">
      {!isLoginPage && <Navbar />}

  
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;

// Importa herramientas de enrutamiento: Router: habilita rutas. Routes: contenedor de rutas. Route: define una ruta.
//  useLocation: permite saber en qué página estás.







