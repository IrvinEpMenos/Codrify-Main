import "./css/OurClients.css";
import LogoWall from '../../../reactBits/LogoWall/LogoWall';
import coca from '../../assets/img/coca2.png'
import pepsi from '../../assets/img/pepsi.png'
import big from '../../assets/img/bigCola.png'
import royal from '../../assets/img/royal.png'

// Datos de clientes con imágenes y descripciones
const logoImgs = [
    { imgUrl: coca, altText: "React Bits Logo" },
    { imgUrl: pepsi, altText: "React Bits Logo" },
    { imgUrl: big, altText: "React Bits Logo" },
    { imgUrl: royal, altText: "React Bits Logo" },
    { imgUrl: coca, altText: "React Bits Logo" },
    { imgUrl: pepsi, altText: "React Bits Logo" },
    { imgUrl: big, altText: "React Bits Logo" },
    { imgUrl: royal, altText: "React Bits Logo" }
  ];

const OurClients = () => {
    return (
        <div className="our-clients">
            <div className="container-top">
                <h1>Nuestros Clientes</h1>
            </div>

            {/* Carrusel de imágenes con animación */}
            <div style={{ height: '600px', width: '100%', position: 'relative' }}>
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
