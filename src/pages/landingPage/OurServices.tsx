import "./css/OurServices.css";
import cerebro from "../../assets/icon/cerebro.png";
import UIUX from "../../assets/icon/UI-UXICON.svg";
import nut from "../../assets/icon/nut-implementaciones.svg";
import stats from "../../assets/icon/stats-plan.svg";
export default function Services() {
  return (
    <section className="services">
      <h2 className="title">Nuestros Servicios</h2>
      <p className="subtitle">Todo lo que necesitas - en un solo sitio.</p>
      <div className="services-container">
        <div className="service-item1">
          <span className="icon"><img src={UIUX} alt="" /></span>
          <div>
            <h3 className="service-title">Diseño UI/UX</h3>
            <p className="service-description">Creamos interfaces modernas, únicas y funcionales que mejoran la experiencia de usuario y refuerzan la identidad de tu marca.</p>
          </div>
        </div>
        <div className="service-item2">
          <span className="icon"><img src={stats} alt="" /></span>
          <div>
            <h3 className="service-title">Plan Estratégico Personalizado</h3>
            <p className="service-description">Diseñamos estrategias tecnológicas a medida, alineadas con los objetivos de tu empresa para maximizar su potencial.</p>
          </div>
        </div>
        <div className="service-item3">
          <span className="icon"><img src={nut} alt="" /></span>
          <div>
            <h3 className="service-title">Implementaciones Tecnológicas</h3>
            <p className="service-description">Desarrollamos soluciones digitales personalizadas para optimizar tus procesos y modernizar tu negocio.</p>
          </div>
        </div>
        <div className="service-item4">
          <span className="icon"><img src={cerebro} alt="" /></span>
          <div>
            <h3 className="service-title">Automatización con Inteligencia Artificial</h3>
            <p className="service-description">Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en tiempo real.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
