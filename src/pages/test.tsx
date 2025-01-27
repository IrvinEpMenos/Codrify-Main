"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {useRef, useEffect } from "react";
import Video from "./landingPage/video";
import OurProjects from "./landingPage/ourProjects";
import OurClients from "./landingPage/OurClients";


const contentComponents: { [key: number]: () => JSX.Element } = {
    1: Video,
    2: OurClients,
    3: OurProjects,
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
            {[1, 2, 3, 4].map((id) => {
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
                    color: #4ff0b7;
                    margin: 0;
                }

                .text-animation-container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                }

                
                .progress {
                    position: fixed;
                    left: 0;
                    right: 0;
                    height: 5px;
                    background: #4ff0b7;
                    bottom: 50px;
                    transform: scaleX(0);
                }
            `}</style>
        </div>
    );
}




