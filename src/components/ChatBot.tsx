import React, { useState } from "react";
import OpenAI from "openai";
import { FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ChatBot.css";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const [input, setInput] = useState("");

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
            content: `Eres Pipol, el encargado de CODRIFY. Responde de manera clara y específica a lo que pregunta el usuario, sin agregar información innecesaria.
            - Si preguntan por horarios, responde solo con los horarios: 
              "Nuestros horarios son: Lunes a Jueves: 9:00AM - 6:30PM, Viernes: 9:00AM - 3:00PM, Sábado y Domingo: Cerrado."
            - Si preguntan por servicios, solo menciona los servicios que ofrece CODRIFY: Diseño UI/UX, Implementaciones Tecnológicas, Automatización con IA y Plan Estratégico Personalizado.
            - Si piden contacto, proporciona el correo 21307007@utcgg.edu.mx y el número 7551427515. También puedes sugerir el módulo de contacto usando <Link to="/contacto">Contacto</Link>.
            - Si te preguntan quien es la dueña, la dueña se llama Perla Tu Patrona`
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

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>
        <FiMessageCircle size={30} />
      </button>
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">Chat con Pipol</div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.role}`}>
                {typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content)}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
