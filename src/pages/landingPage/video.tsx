import { motion } from 'framer-motion';
import { useState, useEffect} from 'react';
import "../css/back.css"; 

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

const WavyLinesSVG: React.FC = () => {
  const lines = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="gradient-background">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "relative",
        }}
      >
        {lines.map((_, i) => (
          <motion.path
            key={i}
            d={`M0,${100 + i * 20} Q400,${i % 2 === 0 ? 50 : 150} 800,${
              100 + i * 20
            }`}
            stroke="white"
            fill="none"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              delay: i * 0.1,
            }}
          />
        ))}
      </svg>
    </div>
  );
};



export default function Video() {
    return (
        <div>
            <WavyLinesSVG />
            <div>
                {AniText()}
            </div>
        </div>
    );
}
