import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "./css/Contact.css";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
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
  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado para el indicador de carga

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, company, phone, subject } = formData;

    if (!name || !company || !phone || !subject) {
      setErrorMessage(t("Por favor, rellena todos los campos."));
      return;
    }

    setIsLoading(true); // Activar el indicador de carga
    setErrorMessage(""); // Limpiar mensajes de error previos
    setMessage(""); // Limpiar mensajes de éxito previos

    const apiUrl = `https://codrify-mails-3v5n.onrender.com/api/send-email`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(t("Formulario enviado, espere nuestra pronta respuesta."));
        setFormData({ name: '', company: '', phone: '', subject: '' }); // Limpiar los campos del formulario
        setTimeout(() => {
          setMessage(""); // Limpiar el mensaje después de 1 minuto
        }, 60000);
      } else {
        setErrorMessage(t("Error al enviar el correo."));
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(t("Hubo un problema al enviar el correo."));
    } finally {
      setIsLoading(false); // Desactivar el indicador de carga
    }
  };

  return (
    <div className="contact">
      <h1 className="contact-title">{t("CONTACTO")}</h1>
      <div className="contact-form-container">
        <h2>{t("Envíanos un mensaje")}</h2>
        <p className="pinfo">
          {t("Llena el siguiente formulario para ponerte en contacto con nosotros.")}
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t("Nombre")}
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder={t("Empresa")}
            className="contact-input"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("Teléfono")}
            className="contact-input"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder={t("Asunto")}
            className="contact-input"
            value={formData.subject}
            onChange={handleChange}
          />
          <button type="submit" className="contact-submit" disabled={isLoading}>
            {isLoading ? (
              <div className="loading-spinner">
                <div className="spinner"></div> {/* Spinner animado */}
                <span>{t("Enviando...")}</span>
              </div>
            ) : (
              t("Enviar")
            )}
          </button>
        </form>
        <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Mensaje de error */}
        {message && <p className="success-message">{message}</p>} {/* Mensaje de confirmación */}
        <div className="contact-hours">
          <h3>{t("Horario de atención")}</h3>
          <p className="phorario">{t("Lunes a Jueves: 9:00AM - 6:30PM")}</p>
          <p className="phorario">{t("Viernes: 9:00AM - 3:00PM")}</p>
          <br />
          <br />
        </div>
        <p className="contact-footer">
          {t("No dudes en contactarnos, tenemos una solución para ti.")}
        </p>
      </div>
    </div>
  );
};

export default ContactPage;