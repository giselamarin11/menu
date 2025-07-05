import React from 'react';
import './Inicio.css';
import { Link } from 'react-router-dom';

function Inicio() {
    return (
        <div className='inicio-conteiner'>
            <div className='inicio-card'>
                
                <img src='/src/assets/logo.png' alt='logo inmosoft' className='logo' />
                
                <br></br>

                <p>¿ No Estas Registrado?</p>
                

                <Link to='/register' className='btn btn-primary'>Crea Una Cuenta</Link>
                <br></br>
                
                <p>Si Estás Registrado </p>
                <Link to='/login' className='btn btn-secondary'>Ingresa</Link>


            </div>

        </div>

    );

}

export default Inicio;
