// Navbar.tsx
import React from 'react';
import './Navbar.css'; // Archivo CSS para estilos
import logo from '../assets/img/logo.svg'; // Importar imagen

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/About">Nosotros</a>
        </li>
        <li>
          <a href="/Services">Servicios</a>
        </li>
        <li>
          <a href="/Contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
