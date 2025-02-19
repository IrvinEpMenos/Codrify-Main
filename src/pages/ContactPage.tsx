import React, { useState, useEffect } from "react";
import "./css/Contact.css";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 2); // Esto hace que la página se cargue desde el inicio
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    subject: "",
  });

  const [message, setMessage] = useState(""); // Para mostrar el mensaje
  const [errorMessage, setErrorMessage] = useState(""); // Para mostrar el mensaje de error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, company, phone, subject } = formData;

    if (!name || !company || !phone || !subject) {
      setErrorMessage("Porfavor rellenar todos los campos."); // Mensaje de error
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Formulario enviado, espere nuestra pronta respuesta.");
        setFormData({ name: '', company: '', phone: '', subject: '' }); // Limpiar los campos del formulario
        setErrorMessage(""); // Limpiar el mensaje de error
        setTimeout(() => {
          setMessage(""); // Limpiar el mensaje después de 1 minuto
        }, 60000); // 60000 ms = 1 minuto
      } else {
        alert("Error al enviar el correo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al enviar el correo.");
    }
  };

  return (
    <div className="contact">
      <h1 className="contact-title">CONTACTO</h1>
      <div className="contact-form-container">
        <h2>Envíanos un mensaje</h2>
        <p className="pinfo">
          Por favor llámanos a los teléfonos de nuestras oficinas regionales o
          escríbenos en este formulario de correo y te responderemos.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Empresa"
            className="contact-input"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            className="contact-input"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            className="contact-input"
            value={formData.subject}
            onChange={handleChange}
          />
          <button type="submit" className="contact-submit">
            Enviar
          </button>
        </form>
        <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Mensaje de error */}
        {message && <p className="success-message">{message}</p>} {/* Mensaje de confirmación */}
        <div className="contact-hours">
          <h3>Horario de atención</h3>
          <p className="phorario">Lunes a Jueves: 9:00AM - 6:30PM</p>
          <p className="phorario">Viernes: 9:00AM - 3:00PM</p>
          <p className="phorario">Sábado y Domingo: Cerrado</p>
          <br />
          <br />
        </div>
        <p className="contact-footer">
          No dudes en contactarnos, tenemos una solución para ti.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;