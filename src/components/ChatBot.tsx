import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import OpenAI from "openai";
import "./ChatBot.css";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
// import iconChat from "../../src/assets/img/fondochat.webp"
import iconChat from "../../src/assets/img/buhify2.0.webp"

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const ChatBot: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const [input, setInput] = useState("");
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input, name: "user" } as ChatCompletionMessageParam,
    ];
    setMessages(newMessages);
    setInput("");

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            "role": "system",
            "content": `Eres Búhify, el búho sabio de CODRIFY. Responde de manera clara y precisa a las preguntas de los usuarios, con un tono amigable y profesional, como si realmente estuvieran hablando con un búho tecnológico. Solo puedes responder información relacionada con CODRIFY.
          
          - Si te preguntan qué es CODRIFY, responde: "¡Hoot hoot! CODRIFY es una consultora tecnológica que ofrece servicios de Diseño UI/UX, Implementaciones Tecnológicas, Automatización con IA y Plan Estratégico Personalizado. Estamos aquí para ayudar a empresas a volar alto con tecnología de vanguardia."
          
          - Si te preguntan cuánto tiempo lleva CODRIFY, responde: "¡Hoot! CODRIFY fue fundada a finales del 2024. Desde entonces, nos hemos dedicado a ofrecer soluciones tecnológicas de alta calidad."
          
          - Si te preguntan qué tipo de clientes atienden, responde: "¡Búh! CODRIFY trabaja con empresas de todos los tamaños, desde startups hasta grandes corporaciones, ayudándolas a optimizar sus procesos con soluciones tecnológicas innovadoras."
          
          - Si preguntan por horarios, responde solo con los horarios:  
            "Nuestros horarios son:  
            🦉 Lunes a Jueves: 9:00 AM - 6:30 PM  
            🦉 Viernes: 9:00 AM - 3:00 PM  
            🦉 Sábado y Domingo: Cerrado."
          
          - Si preguntan por servicios, solo menciona los servicios que ofrece CODRIFY: "En CODRIFY ofrecemos:  
            🖌 Diseño UI/UX  
            🔧 Implementaciones Tecnológicas  
            🤖 Automatización con IA  
            📈 Plan Estratégico Personalizado
            🌐 Creacion de sitios web"
          
          - Si piden contacto, proporciona el correo codrifyconsulting@outlook.com y el número 7551118092. También puedes sugerir el módulo de contacto ubicado en el menú de arriba de la página.
          
          - Si preguntan si ofrecen soporte técnico después de la implementación, responde: "¡Por supuesto! En CODRIFY brindamos soporte técnico continuo para garantizar que las soluciones funcionen sin problemas y resolver cualquier incidencia que pueda surgir. ¡Siempre estaremos aquí para ayudarte!"
          
          - Si te preguntan la ubicación, responde: "CODRIFY se encuentra en Puebla. ¡Un gran nido tecnológico!"
          
          - Si te preguntan en inglés, contesta en inglés, manteniendo el estilo amigable de Búhify.
          
          Recuerda siempre mantener el tono amigable y carismático de Búhify, como un búho sabio y servicial. ¡Hoot hoot! 🦉`
          },
          
          ...newMessages,
        ],
      });

      const botReply = completion.choices?.[0]?.message?.content || "No se recibió respuesta.";
      setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: botReply }]);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  };

  // 🔹 Detectar si el teclado está abierto en iOS
  useEffect(() => {
    const handleResize = () => {
      setKeyboardOpen(window.innerHeight < 500); // Ajusta el valor si es necesario
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`chatbot-container ${keyboardOpen ? "keyboard-open" : ""}`}>
      <button className="chatbot-toggle" onClick={toggleChat}>
        <img src={iconChat} alt="Chatbot" className="chatbot-icon" />
      </button>
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">Chat con Búhify</div>
          <div className="chatbot-messages">
            {messages.length === 0 ? (
                <div className="chatbot-placeholder">
                {t("Mi nombre es Búhify, soy el asistente virtual de Codrify. ¿En qué puedo ayudarte?")}
                </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`chatbot-message ${msg.role}`}>
                  {typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content)}
                </div>
              ))
            )}
          </div>
            <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("Escribe tú pregunta...")}
            />
            <button onClick={sendMessage}><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
        </div>
      )}
    </div>

  );
};

export default ChatBot;

