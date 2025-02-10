import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import "./css/video.css"; 
import svg1 from "../../assets/img/1.svg";
import svg2 from "../../assets/img/2.svg";
import svg3 from "../../assets/img/3.svg";
import svg4 from "../../assets/img/4.svg";
import svg5 from "../../assets/img/5.svg";
import svg6 from "../../assets/img/6.svg";

const AniText = () => {
  const texts = [
    "El futuro es ahora",
    "Tu éxito nuestra misión",
    "Es hora de evolucionar",
    "Crea impacto, deja huella",
    "Conecta, impacta, lidera",
    "Diseñamos un futuro. Contigo",
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
  const images = [svg1, svg2, svg3, svg4, svg5, svg6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Intervalo más largo
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="video-container">
      <motion.img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt="Background SVG"
        className="background-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <AniText />
    </div>
  );
}
