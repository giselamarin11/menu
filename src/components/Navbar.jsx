import React from 'react';
import { Link } from 'react-router-dom'; //  navegar entre páginas sin recargar.
import './Navbar.css';



function Navbar() {  // componente funcional que muestra la barra de navegación.
    return (
        <nav>
            <div className="navbar-container">
                <div className="logo"> 
                    <Link to="/">
                    <img src="/src/assets/logo.png" alt="Logo" />  
                    </Link>
                </div>
                 
                <ul className="nav-links">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/register">Registre</Link></li>    
                    <li><Link to="/Login">Login</Link></li>
                </ul> 


            </div>  
        </nav>
    )
}
// Lista de enlaces de navegación para ir a las rutas principales.

export default Navbar //  este componente sea usado en otros archivos como en App.jsx


