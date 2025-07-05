import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
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

export default Navbar


