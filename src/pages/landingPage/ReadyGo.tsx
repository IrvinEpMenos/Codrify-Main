import "./css/RedyGo.css";
import { Link } from 'react-router-dom';
import Magnet from "../../../reactBits/Magnet/Magnet";

export default function ReadyGo() {
    return (
        <div className="container-ReadyGo">
            <div className="readyGo">
            <h1>Estas Listo para el Éxito!</h1>
            <p>La mejor decisión para tu empresa solo dando click.</p>
            
        </div>
        <Magnet padding={300} disabled={false} magnetStrength={1} className="" >
        <Link to="/contacto">Contactanos</Link>
            </Magnet>
        </div>
    );
    }