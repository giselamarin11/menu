import React from "react";
import './VerifyCode.css';
import { useNavigate } from "react-router-dom";

function VerifyCode() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefaul();
        // Aquí validar el código 
        // Si es correcto, redirige al cambio de contraseña
        navigate('/reset-password');

    };

    retunr(
        <div className='verify-container'>
            <div className='verify-card'>
                <div className='verify-logo'>
                    <img src="/src/assets/logo.png" alt="Logo Inmosoft" />
                </div>
                <form className="verity-form" onSubmit={handleSubmit}>
                    <p className="verify-instructions">
                        Ingresa el codigo que enviamos a su correo electronico.

                    </p>

                    <input type="text"
                        placeholder="Codigo de verificación"
                        required />
                    <button type="submit" className="verify-button">
                        Verificar
                    </button>


                </form>

                <a href="/recover" className="back-link">Volver</a>


            </div>


        </div>


    );


}
export default VerifyCode;