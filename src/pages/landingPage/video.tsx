import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import "./css/video.css";
import video from "../../assets/img/video.mp4";

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
  return (
    <div className="video-container">
<video autoPlay loop muted playsInline className="w-full h-auto">
  <source src={video} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      <AniText />
    </div>
  );
}
