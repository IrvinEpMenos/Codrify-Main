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
        "Tú éxito nuestra misión": "Tu éxito nuestra misión",
        "Es hora de evolucionar": "Es hora de evolucionar",
        "Crea impacto, deja huella": "Crea impacto, deja huella",
        "Conecta, impacta, lidera": "Conecta, impacta, lidera",
        "Diseñamos un futuro. Contigo": "Diseñamos un futuro. Contigo",

        "Nuestra visión es transformar negocios con tecnología,": "Nuestra visión es transformar negocios con tecnología,",
        "inteligencia artificial y automatización.": "inteligencia artificial y automatización.",
        "COMENZAR →": "COMENZAR →",

        // Agregamos las traducciones de AboutSection
        about_title: "SOBRE NOSOTROS",
        vision_title: "Visión",
        vision_text: "Ser la consultora tecnológica líder para pymes, integrando soluciones innovadoras con enfoque humano. Aspiramos a transformar digitalmente empresas, simplificando procesos, fomentando innovación y generando impacto positivo en clientes y negocios.",
        mission_title: "Misión",
        mission_text: "En Codrify Consulting, transformamos pymes en líderes competitivos con soluciones tecnológicas innovadoras y personalizadas, optimizando procesos y potenciando su crecimiento en un mundo dinámico.",
        history_title: "Nuestra Historia",
        history_text1: "Codrify Consulting nació con una misión clara: empoderar a las pequeñas y medianas empresas mediante la tecnología. Desde el principio, vimos que la inteligencia artificial y las soluciones digitales no debían ser exclusivas de las grandes corporaciones, sino herramientas accesibles para todos.",
        history_text2: "Lo que comenzó hace 6 años como un sueño apasionado se transformó en una firma que decodifica lo complejo y convierte la tecnología en oportunidades reales. Hoy, ayudamos a las pymes a crecer, innovar y destacar en un mundo digital, demostrando que el futuro está al alcance de cualquier negocio con la visión adecuada",

        // Agregamos las traducciones de ServicesPage
        "NUESTROS SERVICIOS": "NUESTROS SERVICIOS",
        "En Codrify, ofrecemos una amplia gama de servicios de consultoría de software para ayudarte a alcanzar tus objetivos tecnológicos y empresariales.": "En Codrify, ofrecemos una amplia gama de servicios de consultoría de software para ayudarte a alcanzar tus objetivos tecnológicos y empresariales.",
        "Diseño UI/UX": "Diseño UI/UX",
        "Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario, optimizan la navegación y potencian la conversión.": "Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario, optimizan la navegación y potencian la conversión.",
        "Un buen diseño UI/UX no solo hace que tu sitio web luzca increíble, sino que también garantiza una navegación fluida y una interacción intuitiva para los usuarios. En Codrify Consulting, diseñamos interfaces que combinan estética, funcionalidad y estrategia para mejorar la retención, aumentar las conversiones y fortalecer tu marca en el mundo digital.": "Un buen diseño UI/UX no solo hace que tu sitio web luzca increíble, sino que también garantiza una navegación fluida y una interacción intuitiva para los usuarios. En Codrify Consulting, diseñamos interfaces que combinan estética, funcionalidad y estrategia para mejorar la retención, aumentar las conversiones y fortalecer tu marca en el mundo digital.",
        "Creación de Sitios Web": "Creación de Sitios Web",
        "Diseñamos sitios web profesionales, optimizados y personalizados para potenciar tu presencia digital.": "Diseñamos sitios web profesionales, optimizados y personalizados para potenciar tu presencia digital.",
        "Tu sitio web es la carta de presentación de tu negocio en el mundo digital. En Codrify Consulting, creamos sitios web modernos, funcionales y optimizados para ofrecer una experiencia intuitiva, atractiva y orientada a la conversión. Ya sea una página corporativa, un e-commerce o una plataforma a medida, garantizamos diseño responsivo, velocidad y alto rendimiento para que tu negocio destaque en internet.": "Tu sitio web es la carta de presentación de tu negocio en el mundo digital. En Codrify Consulting, creamos sitios web modernos, funcionales y optimizados para ofrecer una experiencia intuitiva, atractiva y orientada a la conversión. Ya sea una página corporativa, un e-commerce o una plataforma a medida, garantizamos diseño responsivo, velocidad y alto rendimiento para que tu negocio destaque en internet.",
        "Automatización con Inteligencia Artificial": "Automatización con Inteligencia Artificial",
        "Integramos IA y automatización para optimizar procesos, reducir costos y mejorar la toma de decisiones.": "Integramos IA y automatización para optimizar procesos, reducir costos y mejorar la toma de decisiones.",
        "Aprovecha el poder de la inteligencia artificial y la automatización para hacer tu negocio más eficiente. Implementamos soluciones que optimizan flujos de trabajo, reducen costos operativos y permiten tomar decisiones estratégicas en menos tiempo, impulsando la rentabilidad y el crecimiento." : "Aprovecha el poder de la inteligencia artificial y la automatización para hacer tu negocio más eficiente. Implementamos soluciones que optimizan flujos de trabajo, reducen costos operativos y permiten tomar decisiones estratégicas en menos tiempo, impulsando la rentabilidad y el crecimiento.",
        "Plan Estratégico Personalizado": "Plan Estratégico Personalizado",
        "Diseñamos estrategias tecnológicas a medida para maximizar el potencial de tu empresa.": "Diseñamos estrategias tecnológicas a medida para maximizar el potencial de tu empresa.",
        "Cada empresa es única, y por eso creamos planes estratégicos personalizados que se alinean con tus objetivos de negocio. Te ayudamos a implementar soluciones tecnológicas innovadoras que optimizan recursos, mejoran la eficiencia y te preparan para un crecimiento sostenible en un mercado digitalizado." : "Cada empresa es única, y por eso creamos planes estratégicos personalizados que se alinean con tus objetivos de negocio. Te ayudamos a implementar soluciones tecnológicas innovadoras que optimizan recursos, mejoran la eficiencia y te preparan para un crecimiento sostenible en un mercado digitalizado.",
        "Implementaciones Tecnológicas": "Implementaciones Tecnológicas",
        "Modernizamos tu negocio con soluciones digitales personalizadas que optimizan procesos y mejoran la eficiencia." : "Modernizamos tu negocio con soluciones digitales personalizadas que optimizan procesos y mejoran la eficiencia.",
        "Impulsa la transformación digital de tu empresa con implementaciones tecnológicas a medida. Diseñamos soluciones innovadoras que optimizan procesos, mejoran la productividad y fortalecen la competitividad, asegurando un crecimiento sostenible en la era digital." : "Impulsa la transformación digital de tu empresa con implementaciones tecnológicas a medida. Diseñamos soluciones innovadoras que optimizan procesos, mejoran la productividad y fortalecen la competitividad, asegurando un crecimiento sostenible en la era digital.",
        "¿No estás seguro de qué servicio necesitas? Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tu negocio.": "¿No estás seguro de qué servicio necesitas? Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tu negocio.",
        "Solocita una consulta gratuita": "Solocita una consulta gratuita",


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
        "En Codrify Consulting, potenciamos a las pequeñas y medianas empresas (pymes) a través de la transformación tecnológica. Somos una firma de consultoría especializada en impulsar la eficiencia, el crecimiento y la competitividad mediante la implementación de inteligencia artificial, automatización y tecnologías digitales avanzadas. Nuestro enfoque estratégico y práctico ayuda a las empresas a optimizar sus procesos, mejorar la toma de decisiones y prepararse para el futuro digital." : "En Codrify Consulting, potenciamos a las pequeñas y medianas empresas (pymes) a través de la transformación tecnológica. Somos una firma de consultoría especializada en impulsar la eficiencia, el crecimiento y la competitividad mediante la implementación de inteligencia artificial, automatización y tecnologías digitales avanzadas. Nuestro enfoque estratégico y práctico ayuda a las empresas a optimizar sus procesos, mejorar la toma de decisiones y prepararse para el futuro digital.",
        "Innovamos": "Innovamos",
        "tu negocio,": "tu negocio,",
        "transformamos": "transformamos",
        "tu futuro.": "tu futuro.",

        // Agregamos las traducciones de Nuestros Servicios y Nuestros Clientes de la LandingPage
        "Nuestros Servicios": "Nuestros Servicios",
        "Todo lo que necesitas - en un solo sitio.": "Todo lo que necesitas - en un solo sitio.",
        "Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario, optimizan la navegación y potencian la conversión." : "Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario, optimizan la navegación y potencian la conversión.",
        "Diseñamos estrategias tecnológicas a medida para maximizar el potencial de tu empresa." : "Diseñamos estrategias tecnológicas a medida para maximizar el potencial de tu empresa.",
        "Integramos IA y automatización para optimizar procesos, reducir costos y mejorar la toma de decisiones." : "Integramos IA y automatización para optimizar procesos, reducir costos y mejorar la toma de decisiones.",
        "Creación de Sitios Web": "Creación de Sitios Web",
        "Diseñamos sitios web profesionales, optimizados y personalizados para potenciar tu presencia digital." : "Diseñamos sitios web profesionales, optimizados y personalizados para potenciar tu presencia digital.",
        "Nuestros Clientes": "Nuestros Clientes",

        // Agregamos las traducciones de Business de la LandingPage
        "El motor de tu negocio": "El motor de tu negocio",
        "Tu socio en la transformación digital.": "Tu socio en la transformación digital.",
        "¡Haz click para comenzar con nosotros!": "¡Haz click para comenzar con nosotros!",

        // Agregamos las traducciones de OurProjects y OurClients2 de la LandingPage
        "Nuestros más recientes": "Nuestros más recientes",
        "éxitos": "éxitos",
        "Más que palabras,": "Más que palabras,",
        "son historias de éxito.": "son historias de éxito",
        "Escucha lo que nuestros clientes tienen que decir.": "Escucha lo que nuestros clientes tienen que decir.",
        "Trabajar con Codrify ha sido una experiencia excepcional. Su equipo demostró una comprensión profunda de nuestras necesidades y entregó soluciones innovadoras que superaron nuestras expectativas. La comunicación fue fluida durante todo el proyecto, y apreciamos su compromiso con los plazos establecidos. Sin duda, los consideraremos para futuros proyectos.": "Trabajar con Codrify ha sido una experiencia excepcional. Su equipo demostró una comprensión profunda de nuestras necesidades y entregó soluciones innovadoras que superaron nuestras expectativas. La comunicación fue fluida durante todo el proyecto, y apreciamos su compromiso con los plazos establecidos. Sin duda, los consideraremos para futuros proyectos.",
        "Contratamos a Codrify para desarrollar una aplicación móvil personalizada para nuestro negocio. Desde el inicio, mostraron un alto nivel de profesionalismo y expertise técnico. El resultado final fue una aplicación intuitiva y robusta que ha mejorado significativamente la experiencia de nuestros clientes. Recomendamos encarecidamente sus servicios.": "Contratamos a Codrify para desarrollar una aplicación móvil personalizada para nuestro negocio. Desde el inicio, mostraron un alto nivel de profesionalismo y expertise técnico. El resultado final fue una aplicación intuitiva y robusta que ha mejorado significativamente la experiencia de nuestros clientes. Recomendamos encarecidamente sus servicios.",
        "El equipo de Codrify se integró perfectamente con nuestro departamento de TI para modernizar nuestra infraestructura de software. Su enfoque colaborativo y soluciones a medida nos han permitido optimizar nuestros procesos internos y aumentar la eficiencia operativa. Estamos muy satisfechos con su trabajo y profesionalismo.": "El equipo de Codrify se integró perfectamente con nuestro departamento de TI para modernizar nuestra infraestructura de software. Su enfoque colaborativo y soluciones a medida nos han permitido optimizar nuestros procesos internos y aumentar la eficiencia operativa. Estamos muy satisfechos con su trabajo y profesionalismo.",
        "Después de evaluar varias opciones, decidimos colaborar con Codrify para el desarrollo de nuestro sitio web corporativo. Su creatividad y atención al detalle resultaron en una plataforma atractiva y funcional que refleja perfectamente nuestra identidad de marca. Agradecemos su dedicación y el soporte continuo que nos brindan.": "Después de evaluar varias opciones, decidimos colaborar con Codrify para el desarrollo de nuestro sitio web corporativo. Su creatividad y atención al detalle resultaron en una plataforma atractiva y funcional que refleja perfectamente nuestra identidad de marca. Agradecemos su dedicación y el soporte continuo que nos brindan.",
        "Trabajar en Codrify ha sido una experiencia increíble. La empresa realmente se preocupa por el crecimiento profesional de cada miembro del equipo y fomenta la innovación en cada proyecto. La comunicación es abierta, el compañerismo es fuerte y siempre hay espacio para aprender y aportar nuevas ideas. Sin duda, es un lugar donde uno se siente valorado y con oportunidades constantes de desarrollo.": "Trabajar en Codrify ha sido una experiencia increíble. La empresa realmente se preocupa por el crecimiento profesional de cada miembro del equipo y fomenta la innovación en cada proyecto. La comunicación es abierta, el compañerismo es fuerte y siempre hay espacio para aprender y aportar nuevas ideas. Sin duda, es un lugar donde uno se siente valorado y con oportunidades constantes de desarrollo.",

        // Agregamos las traducciones de WhyUs de la LandingPage
        "¿Por qué elegirnos?": "¿Por qué elegirnos?",
        "Únete al cambio": "Únete al cambio",
        "Soluciones a medida": "Soluciones a medida",
        "Consultorías personalizadas": "Consultorías personalizadas",
        "Cada empresa es única, y nuestras soluciones también. En Codrify, diseñamos estrategias a medida para potenciar tu negocio con tecnología, inteligencia artificial y automatización." : "Cada empresa es única, y nuestras soluciones también. En Codrify, diseñamos estrategias a medida para potenciar tu negocio con tecnología, inteligencia artificial y automatización.",
        "Innovamos para resolver tus desafíos. Desarrollamos herramientas y estrategias adaptadas a tus necesidades, garantizando resultados efectivos y escalables." : "Innovamos para resolver tus desafíos. Desarrollamos herramientas y estrategias adaptadas a tus necesidades, garantizando resultados efectivos y escalables.",
        "Experiencia y Conocimiento": "Experiencia y Conocimiento",
        "Somos expertos en transformación digital. Nuestra experiencia en el campo nos permite ofrecer soluciones eficientes, inteligentes y alineadas con las tendencias tecnológicas." : "Somos expertos en transformación digital. Nuestra experiencia en el campo nos permite ofrecer soluciones eficientes, inteligentes y alineadas con las tendencias tecnológicas.",
    
        // Agregamos las traducciones de ReadyGo y ChatBoT de la LandingPage
        "Tu éxito comienza": "Tu éxito comienza",
        "aquí": "aquí",
        "Lleva tu negocio al siguiente nivel con un solo clic": "Lleva tu negocio al siguiente nivel con un solo clic",
        "Contáctanos": "Contáctanos",
        "Mi nombre es Búhify, soy el asistente virtual de Codrify. ¿En qué puedo ayudarte?" : "Mi nombre es Búhify, soy el asistente virtual de Codrify. ¿En qué puedo ayudarte?",
        "Escribe tú pregunta...": "Escribe tú pregunta...",

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
        "Tú éxito nuestra misión": "Your success our mission",
        "Es hora de evolucionar": "It's time to evolve",
        "Crea impacto, deja huella": "Create impact, leave a mark",
        "Conecta, impacta, lidera": "Connect, impact, lead",
        "Diseñamos un futuro. Contigo": "We design a future. With you",

        "Nuestra visión es transformar negocios con tecnología,": "Our vision is to transform businesses with technology,",
        "inteligencia artificial y automatización.": "artificial intelligence and automation.",
        "COMENZAR →": "START →",

        // Traducciones en inglés de AboutSection
        about_title: "ABOUT US",
        vision_title: "Vision",
        vision_text: "To be the leading technology consulting firm for SMEs, integrating innovative solutions with a human approach. We aspire to digitally transform businesses, simplifying processes, fostering innovation, and generating a positive impact on clients and companies.",
        mission_title: "Mission",
        mission_text: "At Codrify Consulting, we transform SMEs into competitive leaders with innovative and personalized technological solutions, optimizing processes and enhancing their growth in a dynamic world.",
        history_title: "Our History",
        history_text1: "Codrify Consulting was born with a clear mission: to empower small and medium-sized enterprises through technology. From the beginning, we saw that artificial intelligence and digital solutions should not be exclusive to large corporations, but accessible tools for everyone.",
        history_text2: "What began 6 years ago as a passionate dream transformed into a firm that decodes the complex and turns technology into real opportunities. Today, we help SMEs grow, innovate, and stand out in a digital world, demonstrating that the future is within reach of any business with the right vision.",

        // Traducciones en inglés de ServicesPage
        "NUESTROS SERVICIOS": "OUR SERVICES",
        "En Codrify, ofrecemos una amplia gama de servicios de consultoría de software para ayudarte a alcanzar tus objetivos tecnológicos y empresariales.": "At Codrify, we offer a wide range of software consulting services to help you achieve your technological and business goals.",
        "Diseño UI/UX": "UI/UX Design",
        "Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario, optimizan la navegación y potencian la conversión.": "We create intuitive and attractive interfaces that enhance the user experience, optimize navigation, and enhance conversion.",
        "Un buen diseño UI/UX no solo hace que tu sitio web luzca increíble, sino que también garantiza una navegación fluida y una interacción intuitiva para los usuarios. En Codrify Consulting, diseñamos interfaces que combinan estética, funcionalidad y estrategia para mejorar la retención, aumentar las conversiones y fortalecer tu marca en el mundo digital.": "A good UI/UX design not only makes your website look amazing, but also ensures smooth navigation and intuitive interaction for users. At Codrify Consulting, we design interfaces that combine aesthetics, functionality, and strategy to improve retention, increase conversions, and strengthen your brand in the digital world.",
        "Creación de Sitios Web": "Website Creation",
        "Diseñamos sitios web profesionales, optimizados y personalizados para potenciar tu presencia digital.": "We design professional, optimized, and customized websites to enhance your digital presence.",
        "Tu sitio web es la carta de presentación de tu negocio en el mundo digital. En Codrify Consulting, creamos sitios web modernos, funcionales y optimizados para ofrecer una experiencia intuitiva, atractiva y orientada a la conversión. Ya sea una página corporativa, un e-commerce o una plataforma a medida, garantizamos diseño responsivo, velocidad y alto rendimiento para que tu negocio destaque en internet.": "Your website is the business card of your business in the digital world. At Codrify Consulting, we create modern, functional, and optimized websites to offer an intuitive, attractive, and conversion-oriented experience. Whether it's a corporate page, an e-commerce site, or a custom platform, we guarantee responsive design, speed, and high performance to make your business stand out on the internet.",
        "Automatización con Inteligencia Artificial": "Automation with Artificial Intelligence",
        "Integramos IA y automatización para optimizar procesos, reducir costos y mejorar la toma de decisiones.": "We integrate AI and automation to optimize processes, reduce costs, and improve decision-making.",
        "Aprovecha el poder de la inteligencia artificial y la automatización para hacer tu negocio más eficiente. Implementamos soluciones que optimizan flujos de trabajo, reducen costos operativos y permiten tomar decisiones estratégicas en menos tiempo, impulsando la rentabilidad y el crecimiento." : "Leverage the power of artificial intelligence and automation to make your business more efficient. We implement solutions that optimize workflows, reduce operating costs, and enable strategic decision-making in less time, boosting profitability and growth.",
        "Plan Estratégico Personalizado": "Custom Strategic Plan",
        "Diseñamos estrategias tecnológicas a medida para maximizar el potencial de tu empresa.": "We design customized technological strategies to maximize your company's potential.",
        "Cada empresa es única, y por eso creamos planes estratégicos personalizados que se alinean con tus objetivos de negocio. Te ayudamos a implementar soluciones tecnológicas innovadoras que optimizan recursos, mejoran la eficiencia y te preparan para un crecimiento sostenible en un mercado digitalizado." : "Every company is unique, and that's why we create customized strategic plans that align with your business goals. We help you implement innovative technological solutions that optimize resources, improve efficiency, and prepare you for sustainable growth in a digitized market.",
        "Implementaciones Tecnológicas": "Technological Implementations",
        "Modernizamos tu negocio con soluciones digitales personalizadas que optimizan procesos y mejoran la eficiencia." : "We modernize your business with customized digital solutions that optimize processes and improve efficiency.",
        "Impulsa la transformación digital de tu empresa con implementaciones tecnológicas a medida. Diseñamos soluciones innovadoras que optimizan procesos, mejoran la productividad y fortalecen la competitividad, asegurando un crecimiento sostenible en la era digital." : "Drive the digital transformation of your company with customized technological implementations. We design innovative solutions that optimize processes, improve productivity, and strengthen competitiveness, ensuring sustainable growth in the digital age.",
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
        "En Codrify Consulting, potenciamos a las pequeñas y medianas empresas (pymes) a través de la transformación tecnológica. Somos una firma de consultoría especializada en impulsar la eficiencia, el crecimiento y la competitividad mediante la implementación de inteligencia artificial, automatización y tecnologías digitales avanzadas. Nuestro enfoque estratégico y práctico ayuda a las empresas a optimizar sus procesos, mejorar la toma de decisiones y prepararse para el futuro digital.": "At Codrify Consulting, we empower small and medium-sized enterprises (SMEs) through technological transformation. We are a consulting firm specialized in boosting efficiency, growth, and competitiveness through the implementation of artificial intelligence, automation, and advanced digital technologies. Our strategic and practical approach helps companies optimize their processes, improve decision-making, and prepare for the digital future.",
        "Innovamos": "Innovate",
        "tu negocio,": "your business,",
        "transformamos": "transform",
        "tu futuro.": "your future.",

        // Traducciones en inglés de Nuestros Servicios de la LandingPage
        "Nuestros Servicios": "Our Services",
        "Todo lo que necesitas - en un solo sitio.": "Everything you need - in one place.",
        "Nuestros Clientes": "Our Clients",

        // Traducciones en inglés de Business de la LandingPage
        "El motor de tu negocio": "The engine of your business",
        "Tu socio en la transformación digital.": "Your partner in digital transformation.",
        "¡Haz click para comenzar con nosotros!": "Click to start with us!",

        // Traducciones en inglés de OurProjects y OurClients2 de la LandingPage
        "Nuestros más recientes": "Our most recent",
        "éxitos": "successes",
        "Más que palabras,": "More than words,",
        "son historias de éxito.": "they are success stories",
        "Escucha lo que nuestros clientes tienen que decir.": "Listen to what our clients have to say.",
        "Trabajar con Codrify ha sido una experiencia excepcional. Su equipo demostró una comprensión profunda de nuestras necesidades y entregó soluciones innovadoras que superaron nuestras expectativas. La comunicación fue fluida durante todo el proyecto, y apreciamos su compromiso con los plazos establecidos. Sin duda, los consideraremos para futuros proyectos.": "Working with Codrify has been an exceptional experience. Their team demonstrated a deep understanding of our needs and delivered innovative solutions that exceeded our expectations. Communication was smooth throughout the project, and we appreciate their commitment to established deadlines. We will definitely consider them for future projects.",
        "Contratamos a Codrify para desarrollar una aplicación móvil personalizada para nuestro negocio. Desde el inicio, mostraron un alto nivel de profesionalismo y expertise técnico. El resultado final fue una aplicación intuitiva y robusta que ha mejorado significativamente la experiencia de nuestros clientes. Recomendamos encarecidamente sus servicios.": "We hired Codrify to develop a custom mobile application for our business. From the start, they showed a high level of professionalism and technical expertise. The end result was an intuitive and robust application that has significantly improved the experience of our customers. We highly recommend their services.",
        "El equipo de Codrify se integró perfectamente con nuestro departamento de TI para modernizar nuestra infraestructura de software. Su enfoque colaborativo y soluciones a medida nos han permitido optimizar nuestros procesos internos y aumentar la eficiencia operativa. Estamos muy satisfechos con su trabajo y profesionalismo.": "The Codrify team integrated perfectly with our IT department to modernize our software infrastructure. Their collaborative approach and customized solutions have allowed us to optimize our internal processes and increase operational efficiency. We are very satisfied with their work and professionalism.",
        "Después de evaluar varias opciones, decidimos colaborar con Codrify para el desarrollo de nuestro sitio web corporativo. Su creatividad y atención al detalle resultaron en una plataforma atractiva y funcional que refleja perfectamente nuestra identidad de marca. Agradecemos su dedicación y el soporte continuo que nos brindan.": "After evaluating several options, we decided to collaborate with Codrify for the development of our corporate website. Their creativity and attention to detail resulted in an attractive and functional platform that perfectly reflects our brand identity. We appreciate their dedication and the continuous support they provide us.",
        "Trabajar en Codrify ha sido una experiencia increíble. La empresa realmente se preocupa por el crecimiento profesional de cada miembro del equipo y fomenta la innovación en cada proyecto. La comunicación es abierta, el compañerismo es fuerte y siempre hay espacio para aprender y aportar nuevas ideas. Sin duda, es un lugar donde uno se siente valorado y con oportunidades constantes de desarrollo.": "Working at Codrify has been an incredible experience. The company truly cares about the professional growth of each team member and fosters innovation in every project. Communication is open, camaraderie is strong, and there is always room to learn and contribute new ideas. It is definitely a place where one feels valued and has constant opportunities for development.",


        // Traducciones en inglés de WhyUs de la LandingPage
        "¿Por qué elegirnos?": "Why choose us?",
        "Únete al cambio": "Join the change",
        "Consultorías personalizadas": "Customized consulting",
        "Soluciones a medida": "Custom solutions",
        "Cada empresa es única, y nuestras soluciones también. En Codrify, diseñamos estrategias a medida para potenciar tu negocio con tecnología, inteligencia artificial y automatización." : "Every company is unique, and our solutions are too. At Codrify, we design customized strategies to enhance your business with technology, artificial intelligence, and automation.",
        "Innovamos para resolver tus desafíos. Desarrollamos herramientas y estrategias adaptadas a tus necesidades, garantizando resultados efectivos y escalables." : "We innovate to solve your challenges. We develop tools and strategies tailored to your needs, ensuring effective and scalable results.",
        "Experiencia y Conocimiento": "Experience and Knowledge",
        "Somos expertos en transformación digital. Nuestra experiencia en el campo nos permite ofrecer soluciones eficientes, inteligentes y alineadas con las tendencias tecnológicas." : "We are experts in digital transformation. Our experience in the field allows us to offer efficient, intelligent, and trend-aligned solutions.",
        
        // Traducciones en inglés de ReadyGo y Chatbot de la LandingPage,
        "Tu éxito comienza": "Your success begins",
        "aquí": "here",
        "Lleva tu negocio al siguiente nivel con un solo clic": "Take your business to the next level with just one click",
        "Contáctanos": "Contact Us",
        "Mi nombre es Búhify, soy el asistente virtual de Codrify. ¿En qué puedo ayudarte?" : "My name is Búhify, I am Codrify's virtual assistant. How can I help you?",
        "Escribe tú pregunta...": "Write your question...",
      },
    },
  },
  lng: "es", // Idioma predeterminado
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
