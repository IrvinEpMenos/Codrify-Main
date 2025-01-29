"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Video from "./landingPage/video";
import OurProjects from "./landingPage/OurProjects";
import OurServices from "./landingPage/OurServices";
import OurClients from "./landingPage/OurClients";

import AboutUs from "./landingPage/AboutUs";
import Business from "./landingPage/Business";
import OurClients2 from "./landingPage/OurClients2";
import WhyUs from "./landingPage/WhyUs";
import ReadyGo from "./landingPage/ReadyGo";



const contentComponents: { [key: number]: () => JSX.Element } = {
    1: Video,
    2: OurClients,
    3: AboutUs,
    4: OurServices,
    5: Business, 
    6: OurProjects,
    7: OurClients2,
    8: WhyUs,
    9: ReadyGo,


};

// Main Parallax component
export default function Parallax() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div id="example">
            {[1, 2, 3, 4,5 , 6, 7, 8, 9].map((id) => {
                const ContentComponent = contentComponents[id] || (() => <div className="last">Default content</div>);
                return (
                    <section key={id} className="Content-container">
                        <motion.div
                            initial={{ visibility: "hidden" }}
                            animate={{ visibility: "visible" }}
                        >
                            <ContentComponent />
                        </motion.div>
                    </section>
                );
            })}
            <motion.div className="progress" style={{ scaleX }} />
            <style>{`
                html {
                    scroll-snap-type: y mandatory;
                }

                .Content-container {
                    height:100vh;
                    scroll-snap-align: start;
                    position: relative;
                }
                
                .navbar, footer {
                scroll-snap-align: start;
                }

                .Content-container div {
                    color:fff;
                    margin: 0;
                }

                .text-animation-container {
                position: absolute;
                top: 50%;
                left: 50%;
                font-size: 2em;
                transform: translate(-50%, -50%);
                text-align: center;
                }

                
                .progress {
                    position: fixed;
                    left: 0;
                    right: 0;
                    height: 5px;
                    background: #4AA0B3;
                    bottom: 50px;
                    transform: scaleX(0);
                }
            `}</style>
        </div>
    );
}




