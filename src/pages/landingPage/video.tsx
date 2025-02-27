import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./css/video.css";
import ShinyText from "../../../reactBits/ShinyText/ShinyText";
import StarBorder from "../../../reactBits/StarBorder/StarBorder";

const AniText = (): JSX.Element => {
  const { t } = useTranslation();
  const texts: string[] = [
    t("El futuro es ahora"),
    t("Tu éxito nuestra misión"),
    t("Es hora de evolucionar"),
    t("Crea impacto, deja huella"),
    t("Conecta, impacta, lidera"),
    t("Diseñamos un futuro. Contigo"),
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="text-animation-container-home">
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
        <ShinyText text="COMENZAR →" disabled={false} speed={3} className="shinyButtom" />
      </StarBorder>
    </div>
  );
};

export default AniText;
