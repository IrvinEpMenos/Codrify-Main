import "./css/OurServices.css";
import { useTranslation } from "react-i18next";
import cerebro from "../../assets/img/cerebro.png";
import UIUX from "../../assets/icon/UIUXICON.svg";
import stats from "../../assets/icon/stats.svg";
import PixelCard from '../../../reactBits/PixelCard/PixelCard';

export default function Services() {
  const { t } = useTranslation();
  return (
    <>
      <div className="serv">
        <h2 className="title">{t("Nuestros Servicios")}</h2>
        <p className="subtitle">{t("Todo lo que necesitas - en un solo sitio.")}</p>
      </div>
      <div className="serv-cards">
      <PixelCard variant="blue">
          <div className="card-UIUX">
            <h3>{t("Diseño UI/UX")}</h3>
            <img src={UIUX} alt="UI/UX"/>
            <p>{t("Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario, optimizan la navegación y potencian la conversión.")}
            </p>
          </div>
      </PixelCard>
      <PixelCard variant="blue">
          <div className="card-stats">
            <h3>{t("Plan Estratégico Personalizado")}</h3>
            <img src={stats} alt="stats" className="icon-servstats" />
            <p>{t("Diseñamos estrategias tecnológicas a medida para maximizar el potencial de tu empresa.")}</p>
          </div>
          </PixelCard>
          <PixelCard variant="blue">
          <div className="card-cerebro">
            <h3>{t("Automatización con Inteligencia Artificial")}</h3>
            <img src={cerebro} alt="cerebro" className="icon-servcerebro" />
            <p>{t("Integramos IA y automatización para optimizar procesos, reducir costos y mejorar la toma de decisiones.")}</p>
          </div>
          </PixelCard>
          <PixelCard variant="blue">
          <div className="card-web">
            <h3>{t("Creación de Sitios Web")}</h3>
            <svg className="icon-serv-web" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 75 75" fill="none">
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
            </svg>
            <p>{t("Diseñamos sitios web profesionales, optimizados y personalizados para potenciar tu presencia digital.")}</p>
          </div>
          </PixelCard>
      </div>
    </>
  );
}
