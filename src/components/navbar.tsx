// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Usar Link de React Router
import './Navbar.css';
import logo from '../assets/img/logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/acerca">Acerca</Link>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
