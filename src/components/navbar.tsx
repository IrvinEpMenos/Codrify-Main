import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/img/logoblanco.svg';
import mexicoFlag from '../assets/icon/mexico.svg';
import usaFlag from '../assets/icon/usa.svg';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState('es');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <header className='header-link'>
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>
        <div className='hamburger-menu' onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
        </div>
        <div className={`oval-container ${menuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li className='li-text'><Link to="/">Inicio</Link></li>
            <li className='li-text'><Link to="/acerca">Nosotros</Link></li>
            <li className='li-text'><Link to="/servicios">Servicios</Link></li>
            <div className='oval-container1'><li><Link to="/contacto">Contacto</Link></li></div>
          </ul>
        </div>
        <div className='language-dropdown'>
          <div className='language-select' onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src={language === 'es' ? mexicoFlag : usaFlag} alt={language === 'es' ? "Español" : "Inglés"} className="flag-icon" />
          </div>
          {dropdownOpen && (
            <ul className='language-options'>
              {language !== 'es' && (
                <li className='language-option' onClick={() => handleLanguageChange('es')}>
                  <img src={mexicoFlag} alt="Español" className="flag-iconmx" />
                </li>
              )}
              {language !== 'en' && (
                <li className='language-option' onClick={() => handleLanguageChange('en')}>
                  <img src={usaFlag} alt="Inglés" className="flag-icon" />
                </li>
              )}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;