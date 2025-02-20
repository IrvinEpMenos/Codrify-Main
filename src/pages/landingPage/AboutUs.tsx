import "./css/AboutUSLanding.css";
import {useTranslation} from "react-i18next";
import Group from "../../assets/icon/Group.svg";
import PuntosBlancos from "../../assets/img/PuntosBlancos.png";
import GradientText from '../../../reactBits/GradientText/GradientText';


export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <section className="sect-about">
      <img src={PuntosBlancos} alt="Puntos blancos" className="Puntos-Blancos" />
      <img src={PuntosBlancos} alt="Puntos Blancos2" className="Puntos-Blancos2" />
      <img src={PuntosBlancos} alt="Puntos Blancos3" className="Puntos-Blancos3" />

      <img src={Group} alt="Icono de usuario" className="about-icon" />

      <div className="about-header">
        <h2>{t("Sobre Nosotros")}</h2>
      </div>

      <div className="about-content">
        <h3>
            <strong>{t("¿Quiénes Somos?")}</strong>
        </h3>
        <p>
          {t("En Codrify Consulting, somos una firma de consultoría tecnológica dedicada a transformar el potencial de las pequeñas y medianas empresas (pymes) mediante la implementación de herramientas innovadoras como la inteligencia artificial, la automatización y tecnologías digitales avanzadas.")}
        </p>

        <div className="about-banner">
        <GradientText colors={["#4AA0B3", "#017274", "#0A516D", "#1B75A1", "#A3D5FF"]}animationSpeed={3}showBorder={false}className="custom-class">
          <h1>
            " <span>{t("innovamos")}</span>{t("tu negocio")}<br />
            <span>{t("transformamos")}</span> {t("tu futuro")} "
          </h1>
          </GradientText>
        </div>
      </div>
    </section>
  );
};
