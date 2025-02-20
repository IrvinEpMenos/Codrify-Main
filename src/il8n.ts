import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        home: "Inicio",
        about: "Nosotros",
        services: "Servicios",
        contact: "Contacto",

        // Agregamos las traducciones del Footer
        "Enlaces": "Enlaces",
        "Aviso Legal": "Aviso Legal",
        "Política de Calidad": "Política de Calidad",
        "Política de Privacidad": "Política de Privacidad",
        "Contacto": "Contacto",

        // Agregamos las traducciones del Video de la LandingPage
        "El futuro es ahora": "El futuro es ahora",
        "Tu éxito nuestra misión": "Tu éxito nuestra misión",
        "Es hora de evolucionar": "Es hora de evolucionar",
        "Crea impacto, deja huella": "Crea impacto, deja huella",
        "Conecta, impacta, lidera": "Conecta, impacta, lidera",
        "Diseñamos un futuro. Contigo": "Diseñamos un futuro. Contigo",

        // Agregamos las traducciones de AboutSection
        about_title: "Sobre Nosotros",
        vision_title: "Visión",
        vision_text: "Ser la consultora tecnológica líder para pymes, integrando soluciones innovadoras con enfoque humano. Aspiramos a transformar digitalmente empresas, simplificando procesos, fomentando innovación y generando impacto positivo en clientes y negocios.",
        mission_title: "Misión",
        mission_text: "En Codrify Consulting, transformamos pymes en líderes competitivos con soluciones tecnológicas innovadoras y personalizadas, optimizando procesos y potenciando su crecimiento en un mundo dinámico.",
        history_title: "Nuestra Historia",
        history_text1: "Codrify Consulting nació con una misión clara: empoderar a las pequeñas y medianas empresas mediante la tecnología. Desde el principio, vimos que la inteligencia artificial y las soluciones digitales no debían ser exclusivas de las grandes corporaciones, sino herramientas accesibles para todos.",
        history_text2: "Lo que comenzó como un proyecto apasionado se transformó en una firma líder que decodifica lo complejo y convierte la tecnología en oportunidades reales. Hoy, ayudamos a las pymes a crecer, innovar y destacar en un mundo digital, demostrando que el futuro está al alcance de cualquier negocio con la visión adecuada.",

        // Agregamos las traducciones de ServicesPage
        "NUESTROS SERVICIOS": "NUESTROS SERVICIOS",
        "En Codrify, ofrecemos una amplia gama de servicios de consultoría de software para ayudarte a alcanzar tus objetivos tecnológicos y empresariales.": "En Codrify, ofrecemos una amplia gama de servicios de consultoría de software para ayudarte a alcanzar tus objetivos tecnológicos y empresariales.",
        "Diseño UI/UX": "Diseño UI/UX",
        "Más información sobre Diseño UI/UX...": "Más informacion sobre Diseño UI/UX...",
        "Creamos interfaces modernas, únicas y funcionales que mejoran la experiencia de usuario y refuerzan la identidad de tu marca.": "Creamos interfaces modernas, únicas y funcionales que mejoran la experiencia de usuario y refuerzan la identidad de tu marca.",
        "Implementaciones Tecnológicas": "Implementaciones Tecnológicas",
        "Desarrollamos soluciones digitales personalizadas para optimizar tus procesos y modernizar tu negocio.": "Desarrollamos soluciones digitales personalizadas para optimizar tus procesos y modernizar tu negocio.",
        "Más información sobre Implementaciones Tecnológicas.": "Más información sobre Implementaciones Tecnológicas.",
        "Detalles adicionales que se muestran cuando se selecciona este servicio.": "Detalles adicionales que se muestran cuando se selecciona este servicio.",
        "Automatización con Inteligencia Artificial": "Automatización con Inteligencia Artificial",
        "Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en menos tiempo.": "Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en menos tiempo.",
        "Más información sobre Automatización con Inteligencia Artificial.":"Más información sobre Automatización con Inteligencia Artificial.",
        "Plan Estratégico Personalizado": "Plan Estratégico Personalizado",
        "Diseñamos estrategias tecnológicas a medida, alineadas con los objetivos de tu empresa para maximizar su potencial.": "Diseñamos estrategias tecnológicas a medida, alineadas con los objetivos de tu empresa para maximizar su potencial.",
        "Más información sobre Plan Estratégico Personalizado.": "Más información sobre Plan Estratégico Personalizado.",
        "¿No estás seguro de qué servicio necesitas? Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tu negocio.": " ¿No estás seguro de qué servicio necesitas? Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tu negocio.",
        "Solicita una consulta gratuita": "Solicita una consulta gratuita",

        // Agregamos las traducciones de ContactPage
        "Por favor, rellene todos los campos." : "Por favor, rellene todos los campos.",
        "Formulario enviado, espere nuestra pronta respuesta.": "Formulario enviado, espere nuestra pronta respuesta.",
        "Hubo un problema al enviar el correo." : "Hubo un problema al enviar el correo.",
        "Error al enviar el correo.": "Error al enviar el correo.",
        "CONTACTO": "CONTACTO",
        "Envíanos un mensaje": "Envíanos un mensaje",
        "Por favor llámanos a los teléfonos de nuestras oficinas regionales o escríbenos en este formulario de correo y te responderemos.": "Por favor llámanos a los teléfonos de nuestras oficinas regionales o escríbenos en este formulario de correo y te responderemos.",
        "Nombre": "Nombre",
        "Empresa": "Empresa",
        "Teléfono": "Teléfono",
        "Asunto": "Asunto",
        "Enviar": "Enviar",
        "Horario de atención": "Horario de atención",
        "Lunes a Jueves: 9:00AM - 6:30PM": "Lunes a Jueves: 9:00AM - 6:30PM",
        "Viernes: 9:00AM - 3:00PM": "Viernes: 9:00AM - 3:00PM",
        "Sábado y Domingo: Cerrado": "Sábado y Domingo: Cerrado",
        "No dudes en contactarnos, tenemos una solución para ti.": "No dudes en contactarnos, tenemos una solución para ti.",

        // Agregamos las traducciones de Sobre Nosotros de la LandingPage
        "Sobre Nosotros": "Sobre Nosotros",
        "¿Quiénes Somos?": "¿Quiénes Somos?",
        "En Codrify Consulting, somos una firma de consultoría tecnológica dedicada a transformar el potencial de las pequeñas y medianas empresas (pymes) mediante la implementación de herramientas innovadoras como la inteligencia artificial, la automatización y tecnologías digitales avanzadas.": "En Codrify Consulting, somos una firma de consultoría tecnológica dedicada a transformar el potencial de las pequeñas y medianas empresas (pymes) mediante la implementación de herramientas innovadoras como la inteligencia artificial, la automatización y tecnologías digitales avanzadas.",
        "innovamos": "innovamos",
        "tu negocio": "tu negocio",
        "transformamos": "transformamos",
        "tu futuro": "tu futuro",

        // Agregamos las traducciones de Nuestros Servicios y Nuestros Clientes de la LandingPage
        "Nuestros Servicios": "Nuestros Servicios",
        "Todo lo que necesitas - en un solo sitio.": "Todo lo que necesitas - en un solo sitio.",
        "Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en tiempo real.": "Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en tiempo real.",
        "Nuestros Clientes": "Nuestros Clientes",

        // Agregamos las traducciones de Business de la LandingPage
        "El motor de tu negocio": "El motor de tu negocio",
        "Tu socio en la transformación digital.": "Tu socio en la transformación digital.",
        "¡Haz click para comenzar con nosotros!": "¡Haz click para comenzar con nosotros!",

        // Agregamos las traducciones de OurProjects y OurClients2 de la LandingPage
        "Nuestros más recientes": "Nuestros más recientes",
        "éxitos": "éxitos",
        "La voz de nuestros clientes es": "La voz de nuestros clientes es",
        "nuestra mejor publicidad.": "nuestra mejor publicidad.",
        "Opiniones de algunos de ellos": "Opiniones de algunos de ellos",

        // Agregamos las traducciones de WhyUs de la LandingPage
        "¿Por qué elegirnos?": "¿Por qué elegirnos?",
        "Únete al cambio": "Únete al cambio",
        "Consultorias personalizadas": "Consultorias personalizadas",
        "Soluciones a medida para tu negocio. Codrifry te ofrece consultorías personalizadas que se adaptan a tus necesidades únicas." : "Soluciones a medida para tu negocio. Codrifry te ofrece consultorías personalizadas que se adaptan a tus necesidades únicas.",
        "Soluciones a medida": "Soluciones a medida",
        "Soluciones innovadoras y personalizadas para tus desafíos. Codrifry te ofrece herramientas y estrategias únicas para tu negocio." : "Soluciones innovadoras y personalizadas para tus desafíos. Codrifry te ofrece herramientas y estrategias únicas para tu negocio.",
        "Conocimiento en el campo": "Conocimiento en el campo",
        "Expertos en el campo a tu servicio. Codrifry te ofrece soluciones eficientes y efectivas gracias a nuestro amplio conocimiento." : "Expertos en el campo a tu servicio. Codrifry te ofrece soluciones eficientes y efectivas gracias a nuestro amplio conocimiento.",

     // Agregamos las traducciones de ReadyGo de la LandingPage
     "¿Estás listo para el éxito?": "¿Estás listo para el éxito?",
     "La mejor decisión para tu empresa solo dando clic.": "La mejor decisión para tu empresa solo dando clic.",
     "Contáctanos": "Contáctanos",
      },
    },
    en: {
      translation: {
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",

        // Agregamos las traducciones del Footer
        "Enlaces": "Links",
        "Aviso Legal": "Legal Notice",
        "Política de Calidad": "Quality Policy",
        "Política de Privacidad": "Privacy Policy",
        "Contacto": "Contact",

        // Agregamos las traducciones del Video de la LandingPage
        "El futuro es ahora": "The future is now",
        "Tu éxito nuestra misión": "Your success our mission",
        "Es hora de evolucionar": "It's time to evolve",
        "Crea impacto, deja huella": "Create impact, leave a mark",
        "Conecta, impacta, lidera": "Connect, impact, lead",
        "Diseñamos un futuro. Contigo": "We design a future. With you",

        // Traducciones en inglés de AboutSection
        about_title: "About Us",
        vision_title: "Vision",
        vision_text: "To be the leading technology consulting firm for SMEs, integrating innovative solutions with a human approach. We aspire to digitally transform businesses, simplifying processes, fostering innovation, and generating a positive impact on clients and companies.",
        mission_title: "Mission",
        mission_text: "At Codrify Consulting, we transform SMEs into competitive leaders with innovative and personalized technological solutions, optimizing processes and enhancing their growth in a dynamic world.",
        history_title: "Our History",
        history_text1: "Codrify Consulting was born with a clear mission: to empower small and medium-sized businesses through technology. From the beginning, we saw that artificial intelligence and digital solutions should not be exclusive to large corporations but accessible tools for everyone.",
        history_text2: "What started as a passionate project turned into a leading firm that deciphers the complex and turns technology into real opportunities. Today, we help SMEs grow, innovate, and stand out in a digital world, proving that the future is within reach for any business with the right vision.",

        // Traducciones en inglés de ServicesPage
        "NUESTROS SERVICIOS": "OUR SERVICES",
        "En Codrify, ofrecemos una amplia gama de servicios de consultoría de software para ayudarte a alcanzar tus objetivos tecnológicos y empresariales.": "At Codrify, we offer a wide range of software consulting services to help you achieve your technological and business goals.",
        "Diseño UI/UX": "UI/UX Design",
        "Más información sobre Diseño UI/UX...": "More information about UI/UX Design...",
        "Creamos interfaces modernas, únicas y funcionales que mejoran la experiencia de usuario y refuerzan la identidad de tu marca.": "We create modern, unique, and functional interfaces that enhance the user experience and reinforce your brand's identity.",
        "Implementaciones Tecnológicas": "Technological Implementations",
        "Desarrollamos soluciones digitales personalizadas para optimizar tus procesos y modernizar tu negocio.": "We develop customized digital solutions to optimize your processes and modernize your business.",
        "Más información sobre Implementaciones Tecnológicas.": "More information about Technological Implementations.",
        "Detalles adicionales que se muestran cuando se selecciona este servicio.": "Additional details that are displayed when this service is selected.",
        "Automatización con Inteligencia Artificial": "Automation with Artificial Intelligence",
        "Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en menos tiempo.": "We integrate AI to optimize processes, reduce costs, and make smarter decisions in less time.",
        "Más información sobre Automatización con Inteligencia Artificial.": "More information about Automation with Artificial Intelligence.",
        "Plan Estratégico Personalizado": "Custom Strategic Plan",
        "Diseñamos estrategias tecnológicas a medida, alineadas con los objetivos de tu empresa para maximizar su potencial.": "We design tailor-made technological strategies aligned with your company's objectives to maximize its potential.",
        "Más información sobre Plan Estratégico Personalizado.": "More information about Custom Strategic Plan",
        "¿No estás seguro de qué servicio necesitas? Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tu negocio.": "Not sure what service you need? Our team of experts is ready to help you find the perfect solution for your business.",
        "Solicita una consulta gratuita": "Request a free consultation",

        // Traducciones en inglés de ContactPage
        "Por favor, rellene todos los campos." : "Please fill in all fields.",
        "Formulario enviado, espere nuestra pronta respuesta.": "Form sent, expect our prompt response.",
        "Hubo un problema al enviar el correo." : "There was a problem sending the email.",
        "Error al enviar el correo.": "Error sending email.",
        "CONTACTO": "CONTACT",
        "Envíanos un mensaje": "Send us a message",
        "Por favor llámanos a los teléfonos de nuestras oficinas regionales o escríbenos en este formulario de correo y te responderemos.": "Please call us at the phones of our regional offices or write to us in this email form and we will respond to you.",
        "Nombre": "Name",
        "Empresa": "Company",
        "Teléfono": "Phone",
        "Asunto": "Subject",
        "Enviar": "Send",
        "Horario de atención": "Business hours",
        "Lunes a Jueves: 9:00AM - 6:30PM": "Monday to Thursday: 9:00AM - 6:30PM",
        "Viernes: 9:00AM - 3:00PM": "Friday: 9:00AM - 3:00PM",
        "Sábado y Domingo: Cerrado": "Saturday and Sunday: Closed",
        "No dudes en contactarnos, tenemos una solución para ti.": "Do not hesitate to contact us, we have a solution for you.",

        // Traducciones en inglés de Sobre Nosotros de la LandingPage
        "Sobre Nosotros": "About Us",
        "¿Quiénes Somos?": "Who Are We?",
        "En Codrify Consulting, somos una firma de consultoría tecnológica dedicada a transformar el potencial de las pequeñas y medianas empresas (pymes) mediante la implementación de herramientas innovadoras como la inteligencia artificial, la automatización y tecnologías digitales avanzadas.": "At Codrify Consulting, we are a technology consulting firm dedicated to transforming the potential of small and medium-sized enterprises (SMEs) through the implementation of innovative tools such as artificial intelligence, automation, and advanced digital technologies.",
        "innovamos": "innovate",
        "tu negocio": "your business",
        "transformamos": "transform",
        "tu futuro": "your future",

        // Traducciones en inglés de Nuestros Servicios de la LandingPage
        "Nuestros Servicios": "Our Services",
        "Todo lo que necesitas - en un solo sitio.": "Everything you need - in one place.",
        "Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en tiempo real.": "We integrate AI to optimize processes, reduce costs, and make smarter decisions in real time.",
        "Nuestros Clientes": "Our Clients",

        // Traducciones en inglés de Business de la LandingPage
        "El motor de tu negocio": "The engine of your business",
        "Tu socio en la transformación digital.": "Your partner in digital transformation.",
        "¡Haz click para comenzar con nosotros!": "Click to start with us!",

        // Traducciones en inglés de OurProjects y OurClients2 de la LandingPage
        "Nuestros más recientes": "Our most recent",
        "éxitos": "successes",
        "La voz de nuestros clientes es": "The voice of our clients is",
        "nuestra mejor publicidad.": "our best advertising.",
        "Opiniones de algunos de ellos": "Opinions of some of them",

        // Traducciones en inglés de WhyUs de la LandingPage
        "¿Por qué elegirnos?": "Why choose us?",
        "Únete al cambio": "Join the change",
        "Consultorias personalizadas": "Customized consulting",
        "Soluciones a medida para tu negocio. Codrifry te ofrece consultorías personalizadas que se adaptan a tus necesidades únicas." : "Customized solutions for your business. Codrifry offers you personalized consultations that adapt to your unique needs.",
        "Soluciones a medida": "Custom solutions",
        "Soluciones innovadoras y personalizadas para tus desafíos. Codrifry te ofrece herramientas y estrategias únicas para tu negocio." : "Innovative and personalized solutions for your challenges. Codrifry offers you unique tools and strategies for your business.",
        "Conocimiento en el campo": "Knowledge in the field",
        "Expertos en el campo a tu servicio. Codrifry te ofrece soluciones eficientes y efectivas gracias a nuestro amplio conocimiento." : "Experts in the field at your service. Codrifry offers you efficient and effective solutions thanks to our extensive knowledge.",

        // Traducciones en inglés de ReadyGo de la LandingPage
        "¿Estás listo para el éxito?": "Are you ready for success?",
        "La mejor decisión para tu empresa solo dando clic.": "The best decision for your company just by clicking.",
        "Contáctanos": "Contact Us",

      },
    },
  },
  lng: "es", // Idioma predeterminado
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
