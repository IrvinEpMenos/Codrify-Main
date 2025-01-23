import React from "react";
import "./css/About.css";
import cohete from "../assets/icon/cohete.svg";
import foco from "../assets/icon/foco.svg";
import book from "../assets/icon/book.svg";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <h1>Sobre Nosotros</h1>
      <div className="cards-container">
        <div className="card">
          <h2>Visión</h2>
          <div><img src={cohete} alt="IconCohete" className="Icon-ch"/></div>
          <p>
            Ser la consultora tecnológica líder para pymes, integrando
            soluciones innovadoras con enfoque humano. Aspiramos a transformar
            digitalmente empresas, simplificando procesos, fomentando
            innovación y generando impacto positivo en clientes y negocios.
          </p>
        </div>
        <div className="card">
          <h2>Misión</h2>
          <div><img src={foco} alt="IconFoco" className="Icon-fc"/></div>
          <p>
            En Codrify Consulting, transformamos pymes en líderes competitivos
            con soluciones tecnológicas innovadoras y personalizadas,
            optimizando procesos y potenciando su crecimiento en un mundo
            dinámico.
          </p>
        </div>
      </div>
      <div className="history">
        <h2>Nuestra Historia</h2>
        <div><img src={book} alt="IconBook" className="Icon-bk"/></div>
        <p>
          Codrify Consulting nació con una misión clara: empoderar a las
          pequeñas y medianas empresas mediante la tecnología. Desde el
          principio, vimos que la inteligencia artificial y las soluciones
          digitales no debían ser exclusivas de las grandes corporaciones, sino
          herramientas accesibles para todos.
        </p>
        <p>
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
