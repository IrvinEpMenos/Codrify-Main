import "./css/OurClients.css";

// Datos de clientes con imágenes y descripciones
const clientsData = [
    { img: "https://i.imgur.com/HlAvd4T.jpeg" },
    { img: "https://i.imgur.com/HlAvd4T.jpeg" },
    { img: "https://i.imgur.com/HlAvd4T.jpeg" },
    { img: "https://i.imgur.com/HlAvd4T.jpeg" },
    { img: "https://i.imgur.com/HlAvd4T.jpeg" },
    { img: "https://i.imgur.com/HlAvd4T.jpeg" },
    { img: "https://i.imgur.com/HlAvd4T.jpeg" },
    { img: "https://i.imgur.com/HlAvd4T.jpeg" }
];

const OurClients = () => {
    return (
        <div className="our-clients">
            <div className="container-top">
                <h1>Nuestros Clientes</h1>
            </div>
            
            {/* Carrusel de imágenes con animación */}
            <div className="slider">
                <div className="slide-track">
                    {clientsData.concat(clientsData).map((client, index) => (
                        <div
                            key={index}
                            className="slide"
                        >
                            {/* Imagen del cliente */}
                            <img src={client.img} height="100" width="250" alt="Cliente" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurClients;
