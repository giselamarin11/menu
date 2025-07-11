import React, { useState } from 'react';
import './Inicio.css';
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const [rol, setRol] = useState('');  //  guardar el valor seleccionado por el usuario en el desplegable.


  const navigate = useNavigate(); // que permite redireccionar al usuario a otra ruta

  const handleRegister = () => {
    if (rol) navigate('/register');
  };

  const handleLogin = () => {
    if (rol) navigate('/login');
  };
   //  verifican si se ha elegido un rol y luego redirigen a la página correspondiente.

  return (
    <div className="inicio-container">
      <div className="inicio-card">
        <img src="/src/assets/logo.png" alt="logo inmosoft" className="logo" />

        <p className="rol-title">Selecciona Tu Rol </p>

        <select value={rol} onChange={(e) => setRol(e.target.value)} className="rol-select">
          <option value="">-- Selecciona un rol --</option>
          <option value="admin">Administrador</option>
          <option value="agente">Agente Inmobiliario</option>
          <option value="cliente">Cliente</option>
        </select>
    

        {rol && (
          <>
            <button className="btn btn-primary" onClick={handleRegister}>
              Crear una cuenta
            </button>
            <button className="btn btn-secondary" onClick={handleLogin}>
              Ingresar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Inicio;


// Este componente muestra la página principal o de inicio. Desde aquí, los usuarios pueden registrarse o ingresar si ya tienen una cuenta.
// Todo está organizado con clases de CSS, y los botones navegan a través de react-router-dom sin recargar la página.”
