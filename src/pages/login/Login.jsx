// Login.jsx
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login-container'>
      <div className='login-card'>
        <div className="login-logo">
          
          <img src="/src/assets/logo.png" alt="Logo Inmosoft" />
        </div>
        <form className='login-form'>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Contraseña" required />
          <div className='forgot-password'>
            <br>
            </br>
            <div className='forgot-password'>
              <Link to="/recover">¿Olvidaste tu contraseña?</Link>
            </div>
            <br>
            </br>
            <br>
            </br>
          </div>
          <button type="submit" className='login-button'>Ingresar</button>
        </form>

      </div>
    </div>
  );
}

export default Login;
