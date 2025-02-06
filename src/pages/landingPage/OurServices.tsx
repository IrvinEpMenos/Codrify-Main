import "./css/OurServices.css";
import cerebro from "../../assets/icon/cerebro.png";
import UIUX from "../../assets/icon/UIUXICON.svg";
import nut from "../../assets/icon/nut.svg";
import stats from "../../assets/icon/stats.svg";
export default function Services() {
  return (
    <section className="serv">
      <h2 className="title">Nuestros Servicios</h2>
      <p className="subtitle">Todo lo que necesitas - en un solo sitio.</p>
        <div className="serv-items">
            <h3 className="serv-title1"> <img src={UIUX} alt="UI/UX" className="icon-servuiux" />Diseño UI/UX</h3>
            <p className="serv-description1">Creamos interfaces modernas, únicas y funcionales que mejoran la experiencia de usuario y refuerzan la identidad de tu marca.</p>
          </div>
        <div className="serv-items">
            <h3 className="serv-title2"><img src={stats} alt="stats" className="icon-servstats"/>Plan Estratégico Personalizado</h3>
            <p className="serv-description2">Diseñamos estrategias tecnológicas a medida, alineadas con los objetivos de tu empresa para maximizar su potencial.</p>
        </div>
        <div className="serv-items">
            <h3 className="serv-title3"><img src={nut} alt="Tuerquita" className="icon-servnut" />Implementaciones Tecnológicas</h3>
            <p className="serv-description3">Desarrollamos soluciones digitales personalizadas para optimizar tus procesos y modernizar tu negocio.</p>
        </div>
        <div className="serv-items">
            <h3 className="serv-title4"><img src={cerebro} alt="cerebro" className="icon-servcerebro" />Automatización con Inteligencia Artificial</h3>
            <p className="serv-description4">Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en tiempo real.</p>
        </div>
    </section>
  );
}