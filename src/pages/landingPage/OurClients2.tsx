import "./css/comentarios.css";
import { useTranslation } from "react-i18next";

import Carousel from '../../../reactBits/Carousel/Carousel'

const OurClients2 = () => {
  const { t } = useTranslation();
  return (
    <div className="clientes-container">

      {/* Mami, ya vi como me miras
      Te lo repito por si se te olvida
      Envíale un mensaje que diga
      Que no te deje sola
      Porque puede perderte
      Si algún día vuelve a verte */}

      <div className="logo">
        <div className="logo-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M30.25 15.2084C30.2554 17.2982 29.7672 19.3597 28.825 21.225C27.7079 23.4603 25.9904 25.3404 23.8651 26.6547C21.7398 27.9691 19.2906 28.6657 16.7917 28.6667C14.7019 28.6722 12.6403 28.1839 10.775 27.2417L1.75 30.25L4.75833 21.225C3.81614 19.3597 3.32788 17.2982 3.33333 15.2084C3.3343 12.7095 4.03097 10.2602 5.34531 8.13492C6.65964 6.00961 8.53974 4.29219 10.775 3.17505C12.6403 2.23285 14.7019 1.7446 16.7917 1.75005H17.5833C20.8836 1.93212 24.0007 3.32508 26.3378 5.66224C28.675 7.99939 30.0679 11.1165 30.25 14.4167V15.2084Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <br /><br />

      <div className="clientes-header">
        <h1>{t("Más que palabras,")}</h1><br />
        <h1 className="colorCom">{t("son historias de éxito.")}</h1>
        <h3>{t("Escucha lo que nuestros clientes tienen que decir.")}</h3>
      </div>

      <div style={{ height: '600px', position: 'relative' }}>
        <Carousel
          baseWidth={400}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={true}
        />
      </div>
    </div>
  );
};

export default OurClients2;
