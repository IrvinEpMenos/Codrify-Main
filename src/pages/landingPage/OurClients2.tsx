import "./css/comentarios.css";
import { useTranslation } from "react-i18next";
import irvin from "../../assets/img/IRVIN.jpeg"
import jona from "../../assets/img/JONA.jpeg"
import irvin2 from "../../assets/img/IRVIN2.jpeg"

const OurClients2 = () => {
  const { t } = useTranslation();
  return (
    <div className="clientes-container">

      <div className="logo">
        <div className="logo-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M30.25 15.2084C30.2554 17.2982 29.7672 19.3597 28.825 21.225C27.7079 23.4603 25.9904 25.3404 23.8651 26.6547C21.7398 27.9691 19.2906 28.6657 16.7917 28.6667C14.7019 28.6722 12.6403 28.1839 10.775 27.2417L1.75 30.25L4.75833 21.225C3.81614 19.3597 3.32788 17.2982 3.33333 15.2084C3.3343 12.7095 4.03097 10.2602 5.34531 8.13492C6.65964 6.00961 8.53974 4.29219 10.775 3.17505C12.6403 2.23285 14.7019 1.7446 16.7917 1.75005H17.5833C20.8836 1.93212 24.0007 3.32508 26.3378 5.66224C28.675 7.99939 30.0679 11.1165 30.25 14.4167V15.2084Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <br /><br />

      <div className="clientes-header">
        <h1>{t("La voz de nuestros clientes es")}</h1>
        <h1 className="colorCom">{t("nuestra mejor publicidad.")}</h1>
        <h3>{t("Opiniones de algunos de ellos")}</h3>
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
