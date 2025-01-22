// pages/HomePage.tsx
import React from 'react';
import './css/Home.css';
import { motion } from "framer-motion";

const Animacion = () => (
  <motion.div
    animate={{ x: 100 }}
    transition={{ duration: 1 }}
  >
    ¡Hola Mundo!
  </motion.div>
);



const HomePage: React.FC = () => {
  return (
<div className="container">
  <div className="home">
    <div className='home-title'>
      <h1 className="">Bienvenido a la página de inicio</h1>
      <div className='video-container'>
        <Animacion />
      </div>
    </div>
  </div>
</div>
  );
};

export default HomePage;
