import React from 'react';
import './Register.css';

function Register() {
    return (
        <div className='resgister-container'>
            <div className='register-card'>
                
                <div className='register-logo'>
                    <img src='/src/assets/logo.png' alt='Logo Inmosoft' />
                </div>

                
                <form className='register-form'>
                    <p className='register-title'>Crea Tu Cuenta Y Encuentra Tu Hogar Ideal</p>
                    <input type="text" placeholder="Nombre" required />
                    <input type="text" placeholder="Apellido" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Contraseña" required />
                    <input type="password" placeholder="Confirmar Contraseña" required />
                    <button type="submit" className='register-button'>Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default Register;














