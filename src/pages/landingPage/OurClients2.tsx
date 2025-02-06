import "./css/comentarios.css";


const OurClients2 = () => {
    return (
        <div className="clientes-container">
            <div className="clientes-header">
                <h1>La voz de nuestros clientes es </h1>
                <h1 className="colorCom">nuestra mejor publicidad.</h1>
                <h3>Opiniones de algunos de ellos</h3>
            </div>
            <div className="clientes-testimonios">
                <div className="testimonio">
                    <img src="/img/irvin.jpg" alt="Irvin Sanchez" className="avatar" />
                    <h3>Irvin Sanchez Ayala</h3>
                    <p className="cargo">UX Designer @Brello</p>
                    <p className="comentario">Codrify convirtió mi idea en un negocio exitoso. Su enfoque personalizado fue clave para nuestro éxito</p>
                </div>
                <div className="testimonio">
                    <img src="/img/jonathan.jpg" alt="Jonathan Morales" className="avatar" />
                    <h3>Jonathan Morales</h3>
                    <p className="cargo">Creative Director @Yo</p>
                    <p className="comentario">Gracias a Codrify, nuestras ventas aumentaron un 30% en seis meses. Son verdaderos expertos</p>
                </div>
                <div className="testimonio">
                    <img src="/img/damaris.jpg" alt="Damaris Fierro" className="avatar" />
                    <h3>Damaris Fierro</h3>
                    <p className="cargo">UI Designer @Boo</p>
                    <p className="comentario">Codrify ha sido nuestro socio estratégico, ayudándonos a desarrollar soluciones innovadoras y escalables.</p>
                </div>
            </div>


        </div>
    );
};

export default OurClients2;
