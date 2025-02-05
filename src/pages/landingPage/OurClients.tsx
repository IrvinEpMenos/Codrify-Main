import { useState } from "react";
import { motion } from "framer-motion";

interface Client {
    name: string;
    info: string;
}

const clientsData: Client[] = [
    { name: "Empresa 1", info: "Cliente desde 2020, especializado en software empresarial." },
    { name: "Empresa 2", info: "Proveedor de soluciones logísticas, colaboración desde 2018." },
    { name: "Empresa 3", info: "Socio estratégico en marketing digital desde 2019." },
    { name: "Empresa 4", info: "Líder en manufactura, trabajando juntos desde 2021." },
    { name: "Empresa 5", info: "Innovador en tecnología educativa, cliente desde 2017." }
];

export default function OurClients(): JSX.Element {
    const [hoveredClient, setHoveredClient] = useState<string | null>(null);

    return (
        <div className="our-clients">
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
        </div>
    );
}
