import "./css/AboutUSLanding.css";
import Group from "../../assets/icon/Group.svg";
import PuntosBlancos from "../../assets/img/PuntosBlancos.png";
export default function AboutUs() {
    return (
      <section className="about-section">
        <img src={PuntosBlancos} alt="Puntos blancos" className="Puntos-Blancos" />
        <img src={PuntosBlancos} alt="Puntos Blancos2"  className="Puntos-Blancos2"/>
        <img src={PuntosBlancos} alt="Puntos Blancos2"  className="Puntos-Blancos3"/>
      <img src={Group} alt="Icono de usuario" className="about-icon" />

      <svg className="curved-line" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M 120 30 Q 10 10, 10 70 L 20 400 Q 30 180, 50 200"
        stroke="rgba(255, 255, 255, 0.5)" strokeWidth="3" fill="none"/>
      </svg>
      <div className="about-header">
        <h2>Sobre Nosotros</h2>
      </div>

      <div className="about-content">
        <h3>
          <strong>¿Quiénes Somos?</strong>
        </h3>
        <p>
        En Codrify Consulting, somos una firma de consultoría tecnológica dedicada a transformar el potencial de las pequeñas y medianas empresas (pymes) 
        mediante la implementación de herramientas innovadoras como la inteligencia artificial, la automatización y tecnologías digitales avanzadas.
        </p>

        <div className="about-banner">
          <h1>
            " <span className="highlight">innovamos</span> tu negocio <br />
            <span className="highlight">transformamos</span> tu futuro "
          </h1>
        </div>
      </div>
    </section>
  );
};