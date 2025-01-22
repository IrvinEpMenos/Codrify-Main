import React from "react";
import "./Footer.css";
import logo from "../assets/img/logoDeTecho.svg";
import tel from "../assets/icon/Vector.svg";
import ubi from "../assets/icon/location-marker.svg";
import email from "../assets/icon/mail.svg";
import instagram from "../assets/icon/instagram.svg";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
            <h1><img src={logo} alt="logo" className="footer-logo" /></h1>
        </div>
        <div className="footer-links">
          <h2>Enlaces</h2>
          <ul>
            <li><a href="#legal">Aviso Legal</a></li>
            <li><a href="#quality">Política de Calidad</a></li>
            <li><a href="#privacy">Política de Privacidad</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contacto</h2>
          <ul>
            <li><img src={tel} alt="telefono" />+52 755 111 80 92</li>
            <li><img src={ubi} alt="ubicacion" />Puebla</li>
            <li><img src={email} alt="email" />codrifyconsulting@outlook.com</li>
            <li><img src={instagram} alt="insta" />cod.rify</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Codrify Consulting</p>
      </div>
    </footer>
  );
}

export default Footer;
