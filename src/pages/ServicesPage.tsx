import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './css/Services.css';
import { Link } from 'react-router-dom';
import cebro from '../assets/img/cerebro.png';


const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 2); // Esto hace que la página se cargue desde el inicio
  }, []);

  const handleCardClick = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  return (
    <div className="services-container">
      <h1 className="services-title">{t("NUESTROS SERVICIOS")}</h1>
      <p className="services-description">
        {t("En Codrify, ofrecemos una amplia gama de servicios de consultoría de software para ayudarte a alcanzar tus objetivos tecnológicos y empresariales.")}
      </p>
      <div className="services-list">
        <div
          className={`service-item ${selectedService === 0 ? 'selected' : ''}`}
          onClick={() => handleCardClick(0)}
        >
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <circle cx="37.5" cy="37.5" r="35.5" stroke="url(#gradient)" strokeWidth="4" />
              <path d="M37.5 11.5C23.75 11.5 12.5 23 12.5 37.5C12.5 52 23.75 63.5 37.5 63.5C51.25 63.5 62.5 52 62.5 37.5C62.5 23 51.25 11.5 37.5 11.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.5 57V36L37.5 16L48.5 36V57" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.5 36C26.5 36 30 39 33 39C36 39 37.5 36 37.5 36C37.5 36 39 39 42 39C45 39 48.5 36 48.5 36" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0E0E6" />
                  <stop offset="1" stopColor="#87CEFA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* TARJETA 1 */}
          <div className="service-text">
            <h2>{t("Diseño UI/UX")}</h2>

            {selectedService !== 0 && (
              <p>
                {t("Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario, optimizan la navegación y potencian la conversión.")}
              </p>
            )}

            {selectedService === 0 && (
              <div className="service-details">
                <p>{t("Un buen diseño UI/UX no solo hace que tu sitio web luzca increíble, sino que también garantiza una navegación fluida y una interacción intuitiva para los usuarios. En Codrify Consulting, diseñamos interfaces que combinan estética, funcionalidad y estrategia para mejorar la retención, aumentar las conversiones y fortalecer tu marca en el mundo digital.")}</p>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6FQrWFLHtiY?si=ksgNTJcAduM5F2Ej"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          {selectedService === 0 && (
            <div className="arrow-icon">
              <i className="fa-solid fa-arrow-up-long"></i>
            </div>
          )}
          {selectedService !== 0 && (
            <div className="arrow-icon">
              <i className="fa-solid fa-arrow-down-long"></i>
            </div>
          )}
        </div>
        {/* TARJETA 2 */}
        <div
          className={`service-item ${selectedService === 1 ? 'selected' : ''}`}
          onClick={() => handleCardClick(1)}
        >
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <circle cx="37.5" cy="37.5" r="35.5" stroke="url(#gradient)" strokeWidth="4" />
              <svg x="12" y="12" width="51" height="51" viewBox="0 0 64 64" fill="none">
                
                <rect x="8" y="12" width="48" height="32" rx="2" stroke="white" strokeWidth="4" />
                <circle cx="14" cy="16" r="2" fill="white" />
                <circle cx="20" cy="16" r="2" fill="white" />
                <circle cx="26" cy="16" r="2" fill="white" />

                
                <path d="M24 26L18 32L24 38" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40 26L46 32L40 38" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 24L28 40" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6A00F4" />
                  <stop offset="1" stopColor="#AEB5F1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="service-text">
            <h2>{t("Creación de Sitios Web")}</h2>
            {selectedService !== 1 && (
              <p>
                {t("Diseñamos sitios web profesionales, optimizados y personalizados para potenciar tu presencia digital.")}
              </p>
            )}

            {selectedService === 1 && (
              <div className="service-details">
                <p>{t("Tu sitio web es la carta de presentación de tu negocio en el mundo digital. En Codrify Consulting, creamos sitios web modernos, funcionales y optimizados para ofrecer una experiencia intuitiva, atractiva y orientada a la conversión. Ya sea una página corporativa, un e-commerce o una plataforma a medida, garantizamos diseño responsivo, velocidad y alto rendimiento para que tu negocio destaque en internet.")}</p>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rtHScOwQxp0?si=PTbt8l7UTjX-6z6A"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

          </div>
          {selectedService === 1 && (
            <div className="arrow-icon">
              <i className="fa-solid fa-arrow-up-long"></i>
            </div>
          )}
          {selectedService !== 1 && (
            <div className="arrow-icon">
              <i className="fa-solid fa-arrow-down-long"></i>
            </div>
          )}
        </div>
        {/* TARJETA 3 */}
        <div
          className={`service-item ${selectedService === 2 ? 'selected' : ''}`}
          onClick={() => handleCardClick(2)}
        >
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <circle cx="37.5" cy="37.5" r="35.5" stroke="url(#gradient)" strokeWidth="4" />
              <image href={cebro} x="11" y="11" width="53" height="53" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6A00F4" />
                  <stop offset="1" stopColor="#AEB5F1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="service-text">
            <h2>{t("Automatización con Inteligencia Artificial")}</h2>

            {selectedService !== 2 && (
              <p>
                {t("Integramos IA y automatización para optimizar procesos, reducir costos y mejorar la toma de decisiones.")}
              </p>
            )}

            {selectedService === 2 && (
              <div className="service-details">
                <p>{t("Aprovecha el poder de la inteligencia artificial y la automatización para hacer tu negocio más eficiente. Implementamos soluciones que optimizan flujos de trabajo, reducen costos operativos y permiten tomar decisiones estratégicas en menos tiempo, impulsando la rentabilidad y el crecimiento.")}</p>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8RrxZYy2kzY?si=Serwtgghe_TCmVdD"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          {selectedService === 2 && (
            <div className="arrow-icon">
              <i className="fa-solid fa-arrow-up-long"></i>
            </div>
          )}
          {selectedService !== 2 && (
            <div className="arrow-icon">
              <i className="fa-solid fa-arrow-down-long"></i>
            </div>
          )}
        </div>
        {/* TARJETA 4 */}
        <div
          className={`service-item ${selectedService === 3 ? 'selected' : ''}`}
          onClick={() => handleCardClick(3)}
        >
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <circle cx="37.5" cy="37.5" r="35.5" stroke="url(#gradient)" strokeWidth="4" />
              <svg x="16" y="16" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.875 28.875V39.875H8.25V28.875H6.875ZM4.125 28.1875C4.125 27.0484 5.04841 26.125 6.1875 26.125H8.9375C10.0766 26.125 11 27.0484 11 28.1875V40.5625C11 41.7016 10.0766 42.625 8.9375 42.625H6.1875C5.04841 42.625 4.125 41.7016 4.125 40.5625V28.1875Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M26.125 20.625V39.875H27.5V20.625H26.125ZM23.375 19.9375C23.375 18.7984 24.2984 17.875 25.4375 17.875H28.1875C29.3266 17.875 30.25 18.7984 30.25 19.9375V40.5625C30.25 41.7016 29.3266 42.625 28.1875 42.625H25.4375C24.2984 42.625 23.375 41.7016 23.375 40.5625V19.9375Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M35.75 11V39.875H37.125V11H35.75ZM33 10.3125C33 9.17341 33.9234 8.25 35.0625 8.25H37.8125C38.9516 8.25 39.875 9.17341 39.875 10.3125V40.5625C39.875 41.7016 38.9516 42.625 37.8125 42.625H35.0625C33.9234 42.625 33 41.7016 33 40.5625V10.3125Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M16.5 4.125V39.875H17.875V4.125H16.5ZM13.75 3.4375C13.75 2.29841 14.6734 1.375 15.8125 1.375H18.5625C19.7016 1.375 20.625 2.29841 20.625 3.4375V40.5625C20.625 41.7016 19.7016 42.625 18.5625 42.625H15.8125C14.6734 42.625 13.75 41.7016 13.75 40.5625V3.4375Z" fill="white" />
              </svg>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6A00F4" />
                  <stop offset="1" stopColor="#AEB5F1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="service-text">
            <h2>{t("Plan Estratégico Personalizado")}</h2>

            {selectedService !== 3 && (
              <p>
                {t("Diseñamos estrategias tecnológicas a medida para maximizar el potencial de tu empresa.")}
              </p>
            )}

            {selectedService === 3 && (
              <div className="service-details">
                <p>{t("Cada empresa es única, y por eso creamos planes estratégicos personalizados que se alinean con tus objetivos de negocio. Te ayudamos a implementar soluciones tecnológicas innovadoras que optimizan recursos, mejoran la eficiencia y te preparan para un crecimiento sostenible en un mercado digitalizado.")}</p>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/1yPz9z_t49Q"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

          </div>
          {selectedService === 3 && (
            <div className="arrow-icon">
              <i className="fa-solid fa-arrow-up-long"></i>
            </div>
          )}
          {selectedService !== 3 && (
            <div className="arrow-icon">
              <i className="fa-solid fa-arrow-down-long"></i>
            </div>
          )}
        </div>

        {/* TARJETA 5 */}
        <div
          className={`service-item ${selectedService === 4 ? 'selected' : ''}`}
          onClick={() => handleCardClick(4)}
        >
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <circle cx="37.5" cy="37.5" r="35.5" stroke="url(#gradient)" strokeWidth="4" />
              <svg x="11" y="11" width="53" height="53" viewBox="0 0 53 53" fill="none">
                <path d="M37.8286 6.625L49.1838 26.5L37.8286 46.375H15.1711L3.81583 26.5L15.1711 6.625H37.8286ZM15.1711 3.3125C14.5872 3.31269 14.0137 3.4672 13.5088 3.76039C13.0039 4.05357 12.5854 4.47501 12.2958 4.982L0.940576 24.857C0.654739 25.3574 0.504395 25.9237 0.504395 26.5C0.504395 27.0763 0.654739 27.6426 0.940576 28.143L12.2958 48.018C12.5854 48.525 13.0039 48.9464 13.5088 49.2396C14.0137 49.5328 14.5872 49.6873 15.1711 49.6875H37.8286C38.4124 49.6873 38.9859 49.5328 39.4908 49.2396C39.9958 48.9464 40.4142 48.525 40.7038 48.018L52.0624 28.143C52.3482 27.6426 52.4986 27.0763 52.4986 26.5C52.4986 25.9237 52.3482 25.3574 52.0624 24.857L40.7038 4.982C40.4142 4.47501 39.9958 4.05357 39.4908 3.76039C38.9859 3.4672 38.4124 3.31269 37.8286 3.3125H15.1711Z" fill="white" />
                <path d="M22.6842 19.653C21.7348 20.1928 20.9016 20.9151 20.2324 21.7782C19.5633 22.6413 19.0715 23.6283 18.7853 24.6823C18.4992 25.7363 18.4243 26.8364 18.5651 27.9195C18.7059 29.0025 19.0595 30.047 19.6056 30.9928C20.1516 31.9386 20.8794 32.767 21.747 33.4304C22.6145 34.0938 23.6047 34.5791 24.6606 34.8582C25.7164 35.1374 26.8171 35.2049 27.8991 35.057C28.9812 34.909 30.0233 34.5485 30.9655 33.9961C32.852 32.8902 34.2245 31.0829 34.7834 28.9688C35.3424 26.8546 35.0424 24.6052 33.949 22.7113C32.8556 20.8175 31.0575 19.4331 28.947 18.8601C26.8366 18.2871 24.5853 18.5722 22.6842 19.653ZM16.788 32.6215C15.9956 31.3019 15.474 29.8378 15.2534 28.3145C15.0329 26.7912 15.1179 25.2393 15.5034 23.7492C15.8889 22.2591 16.5673 20.8606 17.499 19.6355C18.4306 18.4103 19.5969 17.3829 20.9298 16.6132C22.2627 15.8435 23.7355 15.3469 25.2624 15.1524C26.7892 14.9579 28.3395 15.0693 29.8228 15.4803C31.3061 15.8912 32.6927 16.5933 33.9018 17.5458C35.1109 18.4982 36.1182 19.6819 36.865 21.0277C38.3782 23.6892 38.7773 26.8411 37.9751 29.7957C37.173 32.7502 35.2347 35.2676 32.5834 36.7984C29.9321 38.3292 26.7829 38.7492 23.823 37.9666C20.8632 37.1841 18.333 35.2626 16.7847 32.6215H16.788Z" fill="white" />
              </svg>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6A00F4" />
                  <stop offset="1" stopColor="#AEB5F1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="service-text">
            <h2>{t("Implementaciones Tecnológicas")}</h2>

            {selectedService !== 4 && (
              <p>
                {t("Modernizamos tu negocio con soluciones digitales personalizadas que optimizan procesos y mejoran la eficiencia.")}
              </p>
            )}

            {selectedService === 4 && (
              <div className="service-details">
                <p>{t("Impulsa la transformación digital de tu empresa con implementaciones tecnológicas a medida. Diseñamos soluciones innovadoras que optimizan procesos, mejoran la productividad y fortalecen la competitividad, asegurando un crecimiento sostenible en la era digital.")}</p>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rtHScOwQxp0?si=PTbt8l7UTjX-6z6A"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

          </div>
          {selectedService === 4 && (
            <div className="arrow-icon">
              <i className="fa-solid fa-arrow-up-long"></i>
            </div>
          )}
          {selectedService !== 4 && (
            <div className="arrow-icon">
              <i className="fa-solid fa-arrow-down-long"></i>
            </div>
          )}
        </div>
      </div>
      {/* fin */}
      <div className="cta-section">
        <p>
          {t("¿No estás seguro de qué servicio necesitas? Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tu negocio.")}
        </p>
        <button className="cta-button">
          <Link to="/contacto" style={{ color: 'inherit', textDecoration: 'none' }}>
            {t("Solicita una consulta gratuita")}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
