import React from 'react';
import './css/Services.css';
import { Link } from 'react-router-dom';
import hexa from '../assets/img/icono2serv.svg';

const ServicesPage: React.FC = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">NUESTROS SERVICIOS</h1>
      <p className="services-description">
        En Codify, ofrecemos una amplia gama de servicios de consultoría de software para ayudarte a alcanzar tus objetivos tecnológicos y empresariales.
      </p>
      <div className="services-list">
        <div className="service-item">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <circle cx="37.5" cy="37.5" r="35.5" stroke="url(#gradient)" stroke-width="4" />

              <path d="M37.5 11.5C23.75 11.5 12.5 23 12.5 37.5C12.5 52 23.75 63.5 37.5 63.5C51.25 63.5 62.5 52 62.5 37.5C62.5 23 51.25 11.5 37.5 11.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.5 57V36L37.5 16L48.5 36V57" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.5 36C26.5 36 30 39 33 39C36 39 37.5 36 37.5 36C37.5 36 39 39 42 39C45 39 48.5 36 48.5 36" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6A00F4" />
                  <stop offset="1" stop-color="#AEB5F1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="service-text">
            <h2>Diseño UI/UX</h2>
            <p>
              Creamos interfaces modernas, únicas y funcionales que mejoran la experiencia de usuario y refuerzan la identidad de tu marca.
            </p>
          </div>

        </div>
        <div className="service-item">

          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <circle cx="37.5" cy="37.5" r="35.5" stroke="url(#gradient)" stroke-width="4" />
              <img src="{hexa}" alt="logo" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6A00F4" />
                  <stop offset="1" stop-color="#AEB5F1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="service-text">
            <h2>Implementaciones Tecnológicas</h2>
            <p>
              Desarrollamos soluciones digitales personalizadas para optimizar tus procesos y modernizar tu negocio.
            </p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">🤖</div>
          <div className="service-text">
            <h2>Automatización con Inteligencia Artificial</h2>
            <p>
              Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en menos tiempo.
            </p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-icon">📊</div>
          <div className="service-text">
            <h2>Plan Estratégico Personalizado</h2>
            <p>
              Diseñamos estrategias tecnológicas a medida, alineadas con los objetivos de tu empresa para maximizar su potencial.
            </p>
          </div>
        </div>
      </div>
      <div className="cta-section">
        <p>
          ¿No estás seguro de qué servicio necesitas? Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tu negocio.
        </p>
        <button className="cta-button">
          <Link to="/contacto" style={{ color: 'inherit', textDecoration: 'none' }}>
            Solicita una consulta gratuita
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
