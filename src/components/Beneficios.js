import {React, Fragment} from 'react';
import Imagen from '../assets/videoYoutube.png';

const Beneficios = () => {
    return ( 
        <Fragment>
            <div className="container beneficios-container margen-contenedores">
                <h2 className="color-title"> Beneficios de usar automensajes Más Whatsapp </h2>
                <div className="beneficios-content">
                    <div className="beneficios-left">
                        <img src={Imagen} alt="imagen video youtube"/>
                    </div>
                    <div className="beneficios-right">
                        <ul>
                            <li className="color-white"> Envía ofertas, promociones, avisos personalizados y vídeos a toda tu lista de clientes o contactos con un solo click y sin límite de envíos. </li>
                            <li className="color-white"> Ahorra tiempo, creando respuestas automáticas con un chatbot. </li>
                            <li className="color-white"> Mejora la contactabilidad en un 60% frente a las llamadas telefónicas. </li>
                            <li className="color-white"> Aumenta por 5 tus objetivos de comunicación, concretando más citas. Resultados reales. </li>
                        </ul>
                        <button className="btn-hover btn-green w-100"> Iniciar prueba gratis </button>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Beneficios;