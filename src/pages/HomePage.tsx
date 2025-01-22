// pages/HomePage.tsx
import React from "react";
import "./css/Home.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="text-animation-container">
      <motion.div
        key={currentTextIndex}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 1 }}
        className="animated-text"
      >
        {texts[currentTextIndex]}
      </motion.div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="home-title">
          <div className="home-title-text">
          <AniText />
          </div>
          <div className="video-container">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
