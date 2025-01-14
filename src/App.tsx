// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';

// Importar las páginas
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acerca" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
