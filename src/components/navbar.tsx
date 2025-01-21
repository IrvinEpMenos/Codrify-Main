// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/img/logoblanco.svg';

const Navbar: React.FC = () => {
  return (
    <header className='header-link'>
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className='oval-container'>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/acerca">Nosotros</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <div className='language-selector'>
      <select>
        <option value='es'>Español</option>
        <option value='en'>English</option>
      </select>
    </div>
      </ul>
      </div>
    </nav>
    </header>

  );
};

export default Navbar;
