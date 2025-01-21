// pages/ContactPage.tsx
import React from 'react';
import './css/Contact.css';

const ContactPage: React.FC = () => {
  return (
    <div className="contact">
      <h1 className="contact-title">CONTACTO</h1>
      <div className="contact-form-container">
        <h2>Envíanos un mensaje</h2>
        <p>
          Por favor llámanos a los teléfonos de nuestras oficinas regionales o
          escríbenos en esteformulario de correo y te responderemos. </p>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Nombre" className="contact-input" />
          <input type="text" name="company" placeholder="Empresa" className="contact-input" />
          <input type="tel" name="phone" placeholder="Teléfono" className="contact-input" />
          <input type="text" name="subject" placeholder="Asunto" className="contact-input" />
          <button type="submit" className="contact-submit"> Enviar </button> </form>
        <div className="contact-hours">
          <h3>Horario de atención</h3>
          <p>Lunes a Jueves: 9:00AM - 6:30PM</p>
          <p>Viernes: 9:00AM - 3:00PM</p>
          <p>Sábado y Domingo: Cerrado</p>
        </div>
        <p className="contact-footer"> No dudes en contactarnos, tenemos una solución para ti. </p>
      </div>
    </div>
  );
};

export default ContactPage;
