import React from "react";
import { useMediaQuery } from "react-responsive";
import "./css/About.css";
import cohete from "../assets/icon/cohete.svg";
import foco from "../assets/icon/foco.svg";
import book from "../assets/icon/book.svg";

const Card: React.FC<{ title: string; imgSrc: string; text: string; imgAlt: string; imgClass: string }> = ({
  title,
  imgSrc,
  text,
  imgAlt,
  imgClass,
}) => (
  <div className="card">
    <h2>{title}</h2>
    <div>
      <img src={imgSrc} alt={imgAlt} className={imgClass} />
    </div>
    <p>{text}</p>
  </div>
);

const AboutSection: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" });

  return (
    <section className="about-section">
      <h1>Sobre Nosotros</h1>
      <div
        className={`cards-container ${
          isMobile ? "mobile" : isTablet ? "tablet" : "desktop"
        }`}
      >
        <Card
          title="Visión"
          imgSrc={cohete}
          imgAlt="IconCohete"
          imgClass="Icon-ch"
          text="Ser la consultora tecnológica líder para pymes, integrando soluciones innovadoras con enfoque humano. Aspiramos a transformar digitalmente empresas, simplificando procesos, fomentando innovación y generando impacto positivo en clientes y negocios."
        />
        <Card
          title="Misión"
          imgSrc={foco}
          imgAlt="IconFoco"
          imgClass="Icon-fc"
          text="En Codrify Consulting, transformamos pymes en líderes competitivos con soluciones tecnológicas innovadoras y personalizadas, optimizando procesos y potenciando su crecimiento en un mundo dinámico."
        />
      </div>
      <div className="history">
        <h2>Nuestra Historia</h2>
        <div>
          <img src={book} alt="IconBook" className="Icon-bk" />
        </div>
        <p>
          Codrify Consulting nació con una misión clara: empoderar a las
          pequeñas y medianas empresas mediante la tecnología. Desde el
          principio, vimos que la inteligencia artificial y las soluciones
          digitales no debían ser exclusivas de las grandes corporaciones, sino
          herramientas accesibles para todos.
        </p>
        <p className="history-text">
          Lo que comenzó como un proyecto apasionado se transformó en una firma
          líder que decodifica lo complejo y convierte la tecnología en
          oportunidades reales. Hoy, ayudamos a las pymes a crecer, innovar y
          destacar en un mundo digital, demostrando que el futuro está al
          alcance de cualquier negocio con la visión adecuada.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
