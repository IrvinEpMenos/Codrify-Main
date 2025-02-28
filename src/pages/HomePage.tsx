"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import "./css/Home.css";
import AniText from "./landingPage/video";
import OurProjects from "./landingPage/OurProjects";
import OurServices from "./landingPage/OurServices";
import OurClients from "./landingPage/OurClients";
import AboutUs from "./landingPage/AboutUs";
import Business from "./landingPage/Business";
import OurClients2 from "./landingPage/OurClients2";
import WhyUs from "./landingPage/WhyUs";
import ReadyGo from "./landingPage/ReadyGo";
import '../il8n.ts';
import img from "../assets/img/back.png"; // Importa la imagen de fondo

// Default Content Component (for Navbar & Footer Space)
function DefaultContent() {
    return <div className="space"></div>;
}

// Mapping sections to components
const contentComponents: { [key: number]: () => JSX.Element } = {
    1: AniText,
    2: AboutUs,
    3: OurClients,
    4: OurServices,
    5: Business,
    6: OurProjects,
    7: OurClients2,
    8: WhyUs,
    9: ReadyGo,
    10: DefaultContent, // Placeholder for Footer
};

// Main Parallax Component
export default function Parallax() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div id="parallax-container">
            {/* Añade la imagen de fondo aquí */}
            <div
                className="home-back"
                style={{
                    backgroundImage: `url(${img})`, // Usa la imagen importada
                }}
            ></div>

            {/* Parallax Sections */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => {
                const ContentComponent = contentComponents[id] || DefaultContent;
                return (
                    <section key={id} className={`Content-container section-${id}`}>
                        <motion.div
                            initial={{ visibility: "hidden" }}
                            animate={{ visibility: "visible" }}
                        >
                            <ContentComponent />
                        </motion.div>
                    </section>
                );
            })}

            {/* Scroll Progress Bar */}
            <motion.div className="progress" style={{ scaleX }} />
        </div>
    );
}