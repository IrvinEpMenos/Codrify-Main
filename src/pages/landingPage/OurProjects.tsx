import React from 'react';
import './css/carrusel.css'; // Importa el archivo CSS

const Carousel = () => {
    const items = [
        { id: 1, title: 'Project 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'Project 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 3, title: 'Project 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 4, title: 'Project 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 5, title: 'Project 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    ];

    return (
        <div className="carousel-container">
            <button className="carousel-button prev" onClick={() => {}}>‹</button>
            <div className="carousel">
                {/* Elementos originales */}
                {items.map(item => (
                    <div className="carousel-item" key={item.id}>
                        <div className="card">
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
                {/* Duplicar los elementos para el bucle infinito */}
                {items.map(item => (
                    <div className="carousel-item" key={`duplicate-${item.id}`}>
                        <div className="card">
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-button next" onClick={() => {}}>›</button>
        </div>
    );
};

export default Carousel;