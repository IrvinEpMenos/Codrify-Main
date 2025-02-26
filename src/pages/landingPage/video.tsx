import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./css/video.css";
import Squares  from "../../../reactBits/Threads/Threads";

const AniText = () => {
  const { t } = useTranslation();
  const texts = [
    t("El futuro es ahora"),
    t("Tu éxito nuestra misión"),
    t("Es hora de evolucionar"),
    t("Crea impacto, deja huella"),
    t("Conecta, impacta, lidera"),
    t("Diseñamos un futuro. Contigo"),
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Intervalo más largo
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="text-animation-container">
      <motion.div
        key={currentTextIndex}
        initial={{ opacity: 0, x: -80, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 80, scale: 1.2 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="animated-text"
      >
        {texts[currentTextIndex]}
      </motion.div>
    </div>
  );
};

export default function Video() {
  return (
      <div className='back-container'>
<Squares 
speed={0.1} 
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>
        <AniText />
    </div>

  );
}
