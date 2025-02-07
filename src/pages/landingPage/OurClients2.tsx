import React from "react";
import "./css/comentarios.css";
import irvin from "../../assets/img/IRVIN.jpeg"
import jona from "../../assets/img/JONA.jpeg"
import irvin2 from "../../assets/img/IRVIN2.jpeg"

const OurClients2 = () => {
  return (
    <div className="clientes-container">
      <div className="clientes-header">
        <h1>La voz de nuestros clientes es</h1>
        <h1 className="colorCom">nuestra mejor publicidad.</h1>
        <h3>Opiniones de algunos de ellos</h3>
      </div>

      <div className="slider">
        {/* Inputs radio para controlar el slider */}
        <input type="radio" name="slider" id="slide1" defaultChecked />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />

        {/* Contenedor de las slides */}
        <div className="slides">
          {/* Slide 1 */}
          <div className="slide testimonio" id="s1">
            <img src={irvin} alt="Irvin Sanchez" className="avatar" />
            <h3>Irvin Sanchez Ayala</h3>
            <p className="cargo">UX Designer @Brello</p>
            <p className="comentario">
              "Codrify convirtió mi idea en un negocio exitoso. Su enfoque
              personalizado fue clave para nuestro éxito"
            </p>
          </div>
          {/* Slide 2 */}
          <div className="slide testimonio" id="s2">
            <img
              src={jona}
              alt="Jonathan Morales"
              className="avatar"
            />
            <h3>Jonathan Morales</h3>
            <p className="cargo">Creative Director @Yo</p>
            <p className="comentario">
              "Gracias a Codrify, nuestras ventas aumentaron un 30% en seis meses.
              Son verdaderos expertos"
            </p>
          </div>
          {/* Slide 3 */}
          <div className="slide testimonio" id="s3">
            <img
              src={irvin2}
              alt="Damaris Fierro"
              className="avatar"
            />
            <h3>Damaris Fierro</h3>
            <p className="cargo">UI Designer @Boo</p>
            <p className="comentario">
              "Codrify ha sido nuestro socio estratégico, ayudándonos a desarrollar
              soluciones innovadoras y escalables"
            </p>
          </div>
        </div>

        {/* Flechas de navegación */}
        <div className="arrows">
          {/* Para slide 1: izquierda muestra slide 3 y derecha muestra slide 2 */}
          <label htmlFor="slide3" className="arrow left slide1">
            &#10094;
          </label>
          <label htmlFor="slide2" className="arrow right slide1">
            &#10095;
          </label>

          {/* Para slide 2: izquierda muestra slide 1 y derecha muestra slide 3 */}
          <label htmlFor="slide1" className="arrow left slide2">
            &#10094;
          </label>
          <label htmlFor="slide3" className="arrow right slide2">
            &#10095;
          </label>

          {/* Para slide 3: izquierda muestra slide 2 y derecha muestra slide 1 */}
          <label htmlFor="slide2" className="arrow left slide3">
            &#10094;
          </label>
          <label htmlFor="slide1" className="arrow right slide3">
            &#10095;
          </label>
        </div>
      </div>
    </div>
  );
};

export default OurClients2;
