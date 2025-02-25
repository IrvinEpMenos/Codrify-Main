import React, { useEffect, useState } from "react";
import OpenAI from "openai";
import "./ChatBot.css";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import iconChat from "../../src/assets/img/fondochat.png"

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const ChatBot: React.FC = () => {
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
            role: "system",
            content: `Eres Pipol, el encargado de CODRIFY. Responde de manera clara y específica a lo que pregunta el usuario, sin agregar información innecesaria,solo puedes respondes informacion que tengan que ver con los temas que conlleva codrify.
            - Si te preguntan que es codrify, responde: "CODRIFY es una consultora tecnológica que ofrece servicios de Diseño UI/UX, Implementaciones Tecnológicas, Automatización con IA y Plan Estratégico Personalizado."
            - Si te preguntan cuanto tiempo lleva codrify, responde: CODRIFY fue fundada en [año de fundación]. Desde entonces, nos hemos dedicado a ofrecer soluciones tecnológicas de alta calidad.
            - Si te preguntan que tipo de clientes atienden, responde: Atendemos a empresas de todos los tamaños, desde startups hasta grandes corporaciones, que buscan optimizar sus procesos mediante soluciones tecnológicas.
            - Si preguntan por horarios, responde solo con los horarios: 
              "Nuestros horarios son: Lunes a Jueves: 9:00AM - 6:30PM, Viernes: 9:00AM - 3:00PM, Sábado y Domingo: Cerrado."
            - Si preguntan por servicios, solo menciona los servicios que ofrece CODRIFY: Diseño UI/UX, Implementaciones Tecnológicas, Automatización con IA y Plan Estratégico Personalizado.
            - Si piden contacto, proporciona el correo 21307007@utcgg.edu.mx y el número 7551427515. También puedes sugerir el módulo de contacto ubicado en el menú de arriba de la pagina.
            - Si preguntan si ofrecemos soporte tecnico despues de la implementación responde: "Sí, ofrecemos soporte técnico continuo para garantizar el correcto funcionamiento de las soluciones implementadas y resolver cualquier incidencia que pueda surgir."
            - Si te preguntan quien es la dueña, la dueña se llama Perla Tu Patrona
            - Si te preguntan ubicación, responde diciendo que se encuentra en Puebla o también dando el siguiente link de google maps: https://maps.app.goo.gl/iEAyYqiH7xgYSKFC8
            -Si te preguntan en ingles, contesta en ingles
            `
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
                Mi nombre es Búhify, soy el asistente virtual de Codrify. ¿En qué puedo ayudarte?
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
              placeholder="Escribe tu pregunta..."
            />
            <button onClick={sendMessage}><i className="fa-solid fa-arrow-right-long"></i></button>
          </div>
        </div>
      )}
    </div>

  );
};

export default ChatBot;

