import "./css/AboutUSLanding.css";
import { useTranslation } from "react-i18next";
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

      <div className="about-content">
        <h3>
            <strong>{t("¿Quiénes Somos?")}</strong>
        </h3>
        <p>
          {t("En Codrify Consulting, potenciamos a las pequeñas y medianas empresas (pymes) a través de la transformación tecnológica. Somos una firma de consultoría especializada en impulsar la eficiencia, el crecimiento y la competitividad mediante la implementación de inteligencia artificial, automatización y tecnologías digitales avanzadas. Nuestro enfoque estratégico y práctico ayuda a las empresas a optimizar sus procesos, mejorar la toma de decisiones y prepararse para el futuro digital.")}
        </p>
        <div className="about-banner">
          <h1>
          <GradientText colors={["#4AA0B3", "#017274", "#0A516D", "#1B75A1", "#A3D5FF"]}animationSpeed={3}showBorder={false}className="custom-class">
            "<span>{t("Innovamos")}</span> {t("tú negocio")}<br />
            <span>{t("Transformamos")}</span> {t("tú futuro")}"
            </GradientText>
          </h1>
        </div>
      </div>
    </section>
  );
};
