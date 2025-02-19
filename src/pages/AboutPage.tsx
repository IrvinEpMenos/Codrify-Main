import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
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
)
;

const AboutSection: React.FC = () => {
  const { t } = useTranslation(); // ✅ Hook para traducciones
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" })
  useEffect(() => {
      window.scrollTo(0, 2); // Esto hace que la página se cargue desde el inicio
    }, []);

  return (
    <section className="about-section">
      <h1>{t("about_title")}</h1> {/* ✅ Traducción */}
      <div className={`cards-container ${isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}`}>
        <Card
          title={t("vision_title")}
          imgSrc={cohete}
          imgAlt="IconCohete"
          imgClass="Icon-ch"
          text={t("vision_text")}
        />
        <Card
          title={t("mission_title")}
          imgSrc={foco}
          imgAlt="IconFoco"
          imgClass="Icon-fc"
          text={t("mission_text")}
        />
      </div>
      <div className="history">
        <h2>{t("history_title")}</h2>
        <div>
          <img src={book} alt="IconBook" className="Icon-bk" />
        </div>
        <p>{t("history_text1")}</p>
        <p className="history-text">{t("history_text2")}</p>
      </div>
    </section>
  );
};

export default AboutSection;
