import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./css/video.css";
import ShinyText from "../../../reactBits/ShinyText/ShinyText";
import StarBorder from "../../../reactBits/StarBorder/StarBorder";
import backMobile from "../../assets/img/back2.png";
import backTablet from "../../assets/img/back1.png";
import backDesktop from "../../assets/img/back.png";

const AniText: React.FC = () => {
  const { t } = useTranslation(); // Get the translation function
  const texts: string[] = [
    t("El futuro es ahora"),
    t("Tu éxito nuestra misión"),
    t("Es hora de evolucionar"),
    t("Crea impacto, deja huella"),
    t("Conecta, impacta, lidera"),
    t("Diseñamos un futuro. Contigo"),
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [backgroundImage, setBackgroundImage] = useState<string>(backMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(backMobile);
      } else if (window.innerWidth < 1024) {
        setBackgroundImage(backTablet);
      } else {
        setBackgroundImage(backDesktop);
      }
    };

    // Set initial background
    handleResize();

    // Update background on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      className="text-animation-container-home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%", /* Ocupa el 100% del ancho */
        height: "100vh", /* Ocupa toda la altura de la pantalla */
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTextIndex}
          initial={{ opacity: 0, x: -80, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 80, scale: 1.2 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="animated-text-home"
        >
          {texts[currentTextIndex]}
        </motion.div>
      </AnimatePresence>
      <p className="Text-Sub-Title">
        Nuestra visión es transformar negocios con tecnología, inteligencia artificial y automatización.
      </p>
      <StarBorder as="button" className="custom-class" color="cyan" speed="1s">
        <ShinyText text="Just some shiny text!" disabled={false} speed={3} className="shinyButtom" />
      </StarBorder>
    </div>
  );
};

export default AniText;