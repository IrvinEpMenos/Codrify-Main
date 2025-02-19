import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importar traducción
import "./Navbar.css";
import logo from "../assets/img/logoBlanco.svg";
import mexicoFlag from "../assets/icon/mexico.svg";
import usaFlag from "../assets/icon/USA.svg";
import "../il8n";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 500, 0.3);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <header className="header-link">
      <nav className={`navbar ${menuOpen ? "active" : ""}`} style={{ opacity }}>
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar ${menuOpen ? "active" : ""}`}></span>
          <span className={`bar ${menuOpen ? "active" : ""}`}></span>
          <span className={`bar ${menuOpen ? "active" : ""}`}></span>
        </div>
        <div className={`oval-container ${menuOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            <li className="li-text">
              <Link to="/">{t("home")}</Link>
            </li>
            <li className="li-text">
              <Link to="/acerca">{t("about")}</Link>
            </li>
            <li className="li-text">
              <Link to="/servicios">{t("services")}</Link>
            </li>
            <div className="oval-container1">
              <li><Link to="/contacto">{t("contact")}</Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="language-dropdown">
          <div className="language-select" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img
              src={i18n.language === "es" ? mexicoFlag : usaFlag}
              alt={i18n.language === "es" ? "Español" : "Inglés"}
              className="flag-icon"
            />
          </div>
          {dropdownOpen && (
            <ul className="language-options">
              {i18n.language !== "es" && (
                <li className="language-option" onClick={() => handleLanguageChange("es")}>
                  <img src={mexicoFlag} alt="Español" className="flag-iconmx" />
                </li>
              )}
              {i18n.language !== "en" && (
                <li className="language-option" onClick={() => handleLanguageChange("en")}>
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
