import "./css/OurServices.css";
import { useTranslation } from "react-i18next";
import cerebro from "../../assets/img/cerebro.png";
import UIUX from "../../assets/icon/UIUXICON.svg";
import nut from "../../assets/icon/nut.svg";
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
            <p>{t("Creamos interfaces modernas, únicas y funcionales que mejoran la experiencia de usuario y refuerzan la identidad de tu marca.")}</p>
          </div>
      </PixelCard>
      <PixelCard variant="blue">
          <div className="card-stats">
            <h3>{t("Plan Estratégico Personalizado")}</h3>
            <img src={stats} alt="stats" className="icon-servstats" />
            <p>{t("Diseñamos estrategias tecnológicas a medida, alineadas con los objetivos de tu empresa para maximizar su potencial.")}</p>
          </div>
          </PixelCard>
          <PixelCard variant="blue">
          <div className="card-cerebro">
            <h3>{t("Automatización con Inteligencia Artificial")}</h3>
            <img src={cerebro} alt="cerebro" className="icon-servcerebro" />
            <p>{t("Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en tiempo real.")}</p>
          </div>
          </PixelCard>
          <PixelCard variant="blue">
          <div className="card-nut">
            <h3>{t("Implementaciones Tecnológicas")}</h3>
            <img src={nut} alt="Tuerquita" className="icon-servnut" />
            <p>{t("Desarrollamos soluciones digitales personalizadas para optimizar tus procesos y modernizar tu negocio.")}</p>
          </div>
          </PixelCard>
      </div>
    </>
  );
}
