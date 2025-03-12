import "./css/OurClients.css";
import { useTranslation } from "react-i18next";
import LogoWall from '../../../reactBits/LogoWall/LogoWall';
import sea from '../../assets/img/logo1.webp'
import aim from '../../assets/img/logo2.webp'
// import penka from '../../assets/img/logo3.webp'
import gbm from '../../assets/img/logo4.webp'
import zt from '../../assets/img/logo5.webp'

// Datos de clientes con imágenes y descripciones
const logoImgs = [
    { imgUrl: sea, altText: "React Bits Logo" },
    { imgUrl: aim, altText: "React Bits Logo" },  
    { imgUrl: gbm, altText: "React Bits Logo" },
    { imgUrl: zt, altText: "React Bits Logo" },
    { imgUrl: sea, altText: "React Bits Logo" },
    { imgUrl: aim, altText: "React Bits Logo" },
    { imgUrl: gbm, altText: "React Bits Logo" },
    { imgUrl: zt, altText: "React Bits Logo" }
  ];

const OurClients = () => {
    const { t } = useTranslation();
    return (
        <div className="our-clients">
            <div className="container-top">
                <h1>{t("Nuestros Clientes")}</h1>
            </div>

            {/* Carrusel de imágenes con animación */}
            <div style={{ height: '300px', width: '100%', position: 'relative' }}>
                <LogoWall
                    items={logoImgs}
                    direction='horizontal'
                    pauseOnHover={false}
                    size='clamp(8rem, 1rem + 20vmin, 25rem)'
                    duration='60s'
                    bgColor='#050520'
                    bgAccentColor='#050520'
                />
            </div>
        </div>
    );
};

export default OurClients;
