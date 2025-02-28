import "./css/proyectos.css";
import ex1 from "../../assets/img/proyecto1.jpeg";
import ex2 from "../../assets/img/proyecto2.png";
import ex3 from "../../assets/img/proyecto3.png";
import { useTranslation } from "react-i18next";
import TiltedCard from "../../../reactBits/TiltedCard/TiltedCard";

const Cards = () => {
  const { t } = useTranslation();
  const items = [
    { id: 1, title: "Posicionamiento de Marca", image: ex1 },
    { id: 2, title: "SmartHive", image: ex2 },
    { id: 3, title: "EatApp", image: ex3 },
  ];

  return (
    <div className="main-container">
        <br />
      <h1 className="title31">{t("Nuestros más recientes")}</h1>
      <br />
      <h1 className="title3">{t("éxitos")}</h1>
      <div className="tilted-cards-container">
        {items.map((item) => (
          <TiltedCard
            key={item.id}
            imageSrc={item.image}
            altText="s"
            captionText={item.title}
            containerHeight="450px"
            containerWidth="450px"
            imageHeight="350px"
            imageWidth="350px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text">{item.title}</p>}
          />
        ))}
      </div>
      <div className="logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
        >
          <path
            d="M25.5312 5.34375C25.5312 6.72917 23.4708 7.125 21.9688 7.125C15.7736 7.125 9.256 11.2564 8.40578 16.6295C8.30327 17.2773 7.78084 17.8125 7.125 17.8125H3.5625M4.75 24.3438C5.68274 24.6547 7.27484 25.8692 8.83577 26.1458C9.51149 26.2655 10.2038 26.6964 10.3772 27.3603C10.7368 28.7373 11.0287 29.7251 10.0938 32.0625M20.4544 30.0353C19.2669 30.0353 14.5169 27.4228 14.5169 19.3478C14.5169 12.8165 18.6731 11.0353 24.6106 11.0353C28.1731 11.0353 30.5481 12.8165 30.5481 16.9728C30.5481 21.129 26.3919 20.1875 24.6106 21.9688C22.8294 23.75 24.6106 30.0353 20.4544 30.0353ZM34.4375 19C34.4375 27.5259 27.5259 34.4375 19 34.4375C10.4741 34.4375 3.5625 27.5259 3.5625 19C3.5625 10.4741 10.4741 3.5625 19 3.5625C27.5259 3.5625 34.4375 10.4741 34.4375 19Z"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Cards;
