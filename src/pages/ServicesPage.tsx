import React, { useState } from 'react';
import './css/Services.css';
import { Link } from 'react-router-dom';
import cebro from '../assets/img/cerebro.png';


const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };
  return (
    <div className="services-container">
      <h1 className="services-title">NUESTROS SERVICIOS</h1>
      <p className="services-description">
        En Codrify, ofrecemos una amplia gama de servicios de consultoría de software para ayudarte a alcanzar tus objetivos tecnológicos y empresariales.
      </p>
      <div className="services-list">
        <div
          className={`service-item ${selectedService === 0 ? 'selected' : ''}`}
          onClick={() => handleCardClick(0)}
        >
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <circle cx="37.5" cy="37.5" r="35.5" stroke="url(#gradient)" stroke-width="4" />
              <path d="M37.5 11.5C23.75 11.5 12.5 23 12.5 37.5C12.5 52 23.75 63.5 37.5 63.5C51.25 63.5 62.5 52 62.5 37.5C62.5 23 51.25 11.5 37.5 11.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.5 57V36L37.5 16L48.5 36V57" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.5 36C26.5 36 30 39 33 39C36 39 37.5 36 37.5 36C37.5 36 39 39 42 39C45 39 48.5 36 48.5 36" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#B0E0E6" />
                  <stop offset="1" stop-color="#87CEFA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="service-text">
            <h2>Diseño UI/UX</h2>

            {selectedService !== 0 && (
              <p>
                Creamos interfaces modernas, únicas y funcionales que mejoran la experiencia de usuario y refuerzan la identidad de tu marca.
              </p>
            )}

            {selectedService === 0 && (
              <div className="service-details">
                <p>Más información sobre Diseño UI/UX...</p>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/p38WgakuYDo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`service-item ${selectedService === 1 ? 'selected' : ''}`}
          onClick={() => handleCardClick(1)}
        >
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
            {selectedService !== 1 && (
              <p>
                Desarrollamos soluciones digitales personalizadas para optimizar tus procesos y modernizar tu negocio.
              </p>
            )}

            {selectedService === 1 && (
              <div className="service-details">
                <p>Más información sobre Implementaciones Tecnológicas.</p>
                <p>Detalles adicionales que se muestran cuando se selecciona este servicio.</p>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/p38WgakuYDo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

          </div>
        </div>
        <div
          className={`service-item ${selectedService === 2 ? 'selected' : ''}`}
          onClick={() => handleCardClick(2)}
        >
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <circle cx="37.5" cy="37.5" r="35.5" stroke="url(#gradient)" stroke-width="4" />
              <image href={cebro} x="11" y="11" width="53" height="53" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6A00F4" />
                  <stop offset="1" stop-color="#AEB5F1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="service-text">
            <h2>Automatización con Inteligencia Artificial</h2>

            {selectedService !== 2 && (
              <p>
                Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en menos tiempo.
              </p>
            )}

            {selectedService === 2 && (
              <div className="service-details">
                <p>Más información sobre Automatización con Inteligencia Artificial</p>
                <p>Detalles adicionales que se muestran cuando se selecciona este servicio.</p>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/p38WgakuYDo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`service-item ${selectedService === 3 ? 'selected' : ''}`}
          onClick={() => handleCardClick(3)}
        >
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <circle cx="37.5" cy="37.5" r="35.5" stroke="url(#gradient)" stroke-width="4" />
              <svg x="16" y="16" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.875 28.875V39.875H8.25V28.875H6.875ZM4.125 28.1875C4.125 27.0484 5.04841 26.125 6.1875 26.125H8.9375C10.0766 26.125 11 27.0484 11 28.1875V40.5625C11 41.7016 10.0766 42.625 8.9375 42.625H6.1875C5.04841 42.625 4.125 41.7016 4.125 40.5625V28.1875Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.125 20.625V39.875H27.5V20.625H26.125ZM23.375 19.9375C23.375 18.7984 24.2984 17.875 25.4375 17.875H28.1875C29.3266 17.875 30.25 18.7984 30.25 19.9375V40.5625C30.25 41.7016 29.3266 42.625 28.1875 42.625H25.4375C24.2984 42.625 23.375 41.7016 23.375 40.5625V19.9375Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.75 11V39.875H37.125V11H35.75ZM33 10.3125C33 9.17341 33.9234 8.25 35.0625 8.25H37.8125C38.9516 8.25 39.875 9.17341 39.875 10.3125V40.5625C39.875 41.7016 38.9516 42.625 37.8125 42.625H35.0625C33.9234 42.625 33 41.7016 33 40.5625V10.3125Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4.125V39.875H17.875V4.125H16.5ZM13.75 3.4375C13.75 2.29841 14.6734 1.375 15.8125 1.375H18.5625C19.7016 1.375 20.625 2.29841 20.625 3.4375V40.5625C20.625 41.7016 19.7016 42.625 18.5625 42.625H15.8125C14.6734 42.625 13.75 41.7016 13.75 40.5625V3.4375Z" fill="white" />
              </svg>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6A00F4" />
                  <stop offset="1" stop-color="#AEB5F1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="service-text">
            <h2>Plan Estratégico Personalizado</h2>

            {selectedService !== 3 && (
              <p>
                Diseñamos estrategias tecnológicas a medida, alineadas con los objetivos de tu empresa para maximizar su potencial.
              </p>
            )}

            {selectedService === 3 && (
              <div className="service-details">
                <p>Más información sobre Plan Estratégico Personalizado</p>
                <p>Detalles adicionales que se muestran cuando se selecciona este servicio.</p>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/p38WgakuYDo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

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
