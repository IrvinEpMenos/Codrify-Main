import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';
import { useState, useEffect } from 'react';
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

const aniBackgroung = () => {
  return (
    <>
      {/* Esquina superior izquierda */}
      <div className="corner top-left">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="circle-line"
            style={{
              borderWidth: 2,
              borderColor: 'blue',
              width: 400 + index * 200,
              height: 400 + index * 20,
            }}
            variants={{
              animate: {
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                },
              },
            }}
            animate="animate"
          />
        ))}
      </div>

      {/* Esquina inferior derecha */}
      <div className="corner bottom-right">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="circle-line"
            style={{
              borderWidth: 2,
              borderColor: 'red',
              width: 40 + index * 20,
              height: 40 + index * 20,
            }}
            variants={{
              animate: {
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                },
              },
            }}
            animate="animate"
          />
        ))}
      </div>
    </>
  );
};


const HomePage: React.FC = () => {
  return (
    <div className="home-background">
      {aniBackgroung()}
    <div className="container">
      <div className="home">
        <div className="home-title">
          <div className="home-title-text">
            <AniText />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;