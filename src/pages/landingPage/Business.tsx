import "./css/Business.css";
import { useTranslation } from "react-i18next";
import motor from "../../assets/img/motornegocio.jpg"
import PixelTransition from "../../../reactBits/PixelTransition/PixelTransition"
import { Link } from "react-router-dom";

export default function Business() {
    const { t } = useTranslation();
    return (
        <div className="business-container">
            {/* Logo y Título */}
            <div className="header">
                <div className="logo">
                    <div className="logo-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <path d="M25.5312 5.34375C25.5312 6.72917 23.4708 7.125 21.9688 7.125C15.7736 7.125 9.256 11.2564 8.40578 16.6295C8.30327 17.2773 7.78084 17.8125 7.125 17.8125H3.5625M4.75 24.3438C5.68274 24.6547 7.27484 25.8692 8.83577 26.1458C9.51149 26.2655 10.2038 26.6964 10.3772 27.3603C10.7368 28.7373 11.0287 29.7251 10.0938 32.0625M20.4544 30.0353C19.2669 30.0353 14.5169 27.4228 14.5169 19.3478C14.5169 12.8165 18.6731 11.0353 24.6106 11.0353C28.1731 11.0353 30.5481 12.8165 30.5481 16.9728C30.5481 21.129 26.3919 20.1875 24.6106 21.9688C22.8294 23.75 24.6106 30.0353 20.4544 30.0353ZM34.4375 19C34.4375 27.5259 27.5259 34.4375 19 34.4375C10.4741 34.4375 3.5625 27.5259 3.5625 19C3.5625 10.4741 10.4741 3.5625 19 3.5625C27.5259 3.5625 34.4375 10.4741 34.4375 19Z" stroke="white" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>
                <br /><br /><br />
                {/* <h1>Codrify:</h1> */}
                <h2 className="h2a">{t("El motor de tu negocio")}</h2>
                <p className="ppp">{t("Tu socio en la transformación digital.")}</p>
            </div>

            {/* Espaciado adicional */}
            <div className="spacer"></div>
            
            <PixelTransition
                firstContent={
                    <Link to="/contacto">
                    <img
                        src={motor}
                        alt="default pixel transition content, a cat!"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    </Link>
                }
                secondContent={
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111"
                        }}
                    >
                        <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>{t("¡Haz click para comenzar con nosotros!")}</p>
                    </div>
                }
                gridSize={12}
                pixelColor='#050520'
                animationStepDuration={0.4}
                className="custom-pixel-card"
            />

            {/* Imagen Principal */}
            {/* <div className="main-image">
                <img src={motor} alt="" />
                <h3 className="centered-text">CODRIFY</h3>
            </div> */}

            {/* Espaciado adicional */}
            <div className="spacer"></div>

        </div>
    );
}