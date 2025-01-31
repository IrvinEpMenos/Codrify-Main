import "./css/AboutUSLanding.css";
import Group from "../../assets/icon/Group.svg";
export default function AboutUs() {
    return (
        <section className="about-section">
            <img src={Group} alt="Icono de usuario" className="about-icon" />
      <div className="about-header">
        <h2>Sobre Nosotros</h2>
      </div>
        <div className="about-content">
        <h3>
          <strong>¿Quiénes Somos?</strong>
        </h3>
        <p>
          En Codrify Consulting, somos una firma de consultoría tecnológica dedicada a transformar el
          potencial de las pequeñas y medianas empresas (pymes) mediante la implementación de
          herramientas innovadoras como la inteligencia artificial, la automatización y tecnologías digitales avanzadas.
        </p>
      </div>
      <div className="about-banner" style={{ backgroundImage: `)` }}>
        <h1>
          " <span className="highlight">innovamos</span> tu negocio <br />
          <span className="highlight">transformamos</span> tu futuro "
        </h1>
      </div>
    </section>
  );
};