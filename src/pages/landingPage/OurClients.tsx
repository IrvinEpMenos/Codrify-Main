// import { useState } from "react";
// import { motion } from "framer-motion";

import React from "react";

// interface Client {
//     name: string;
//     info: string;
// }

// const clientsData: Client[] = [
//     { name: "Empresa 1", info: "Cliente desde 2020, especializado en software empresarial." },
//     { name: "Empresa 2", info: "Proveedor de soluciones logísticas, colaboración desde 2018." },
//     { name: "Empresa 3", info: "Socio estratégico en marketing digital desde 2019." },
//     { name: "Empresa 4", info: "Líder en manufactura, trabajando juntos desde 2021." },
//     { name: "Empresa 5", info: "Innovador en tecnología educativa, cliente desde 2017." }
// ];

const OurClients: React.FC = () => {
    // const [hoveredClient, setHoveredClient] = useState<string | null>(null);

    return (
        <div className="slider">
            <div className="slide-track">
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                </div>
            </div>
        </div>
    );
}

export default OurClients;


{/* <div className="our-clients">
            <div className="container-top">
                <h1>Nuestros clientes</h1>
            </div>
            <div className="container-middel">
                <ul className="list-clients">
                    {clientsData.map((client, index) => (
                        <li key={index} 
                            onMouseEnter={() => setHoveredClient(client.name)} 
                            onMouseLeave={() => setHoveredClient(null)}
                        >
                            {client.name}
                            {hoveredClient === client.name && (
                                <motion.div 
                                    className="client-info" 
                                    initial={{ opacity: 0, y: 10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {client.info}
                                </motion.div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div> */}