import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import "./Footer.css";
import logo from "../assets/img/logoDeTecho.svg";
import tel from "../assets/icon/Vector.svg";
import ubi from "../assets/icon/location-marker.svg";
import email from "../assets/icon/mail.svg";
import instagram from "../assets/icon/instagram.svg";


const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
            <h1><img src={logo} alt="logo" className="footer-logo-img" /></h1>
        </div>
        <div className="footer-links">
            <h2>{t("Enlaces")}</h2>
          <div className="footer-separator"></div>
            <ul>
            <li><Link to="https://drive.google.com/file/d/1vv300IjVB-hf1bqJV8aru18c3oPmmnlP/view?usp=sharing" target="_blank" rel="noopener noreferrer">{t("Aviso Legal")}</Link></li>
            <li><Link to="https://drive.google.com/file/d/12wNCksdWSbCR4MYJkCWdm93HwLkSQAFm/view?usp=sharing" target="_blank" rel="noopener noreferrer">{t("Política de Calidad")}</Link></li>
            <li><Link to="https://drive.google.com/file/d/1_Min5op-negwjwpCJabeB8XBugeIqlEO/view?usp=sharing" target="_blank" rel="noopener noreferrer">{t("Política de Privacidad")}</Link></li>
            </ul>
        </div>
        <div className="footer-contact">
            <h2>{t("Contacto")}</h2>
          <div className="footer-separator"></div>
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
