import React from 'react';
import Garantia from '../assets/garantia.png';
import PrecioMes from '../assets/PrecioMes.png';
import PrecioAnual from '../assets/PrecioAnual.png';

const Licencia = () => {
    return ( 
        <div className="container margen-contenedores">
            <h2 className="color-title mb-4"> Adquiere tu licencia </h2>
            <img src={Garantia} alt="imagen garantia"/>
            <div className="card-container">
                <div className="card">
                    <div className="card-body card-licencia">
                        <h4 className="card-title">Mensual</h4>
                        <img src={PrecioMes} alt="precio mensual" />
                        {/* <h3> $59 </h3> */}
                        <ul>
                            <li>Envíos con Imágenes y Texto Personalizado Ilimitados. Sin cobros adicionales por mensajes</li>
                            <li>30 días con garantía de reembolso 100%</li>
                            <li>12 meses de soporte gratuito</li>
                            <li>Incluye chatbot para respuestas automáticas</li>
                        </ul>
                        <button className="btn-hover btn-green w-100 mb-2"> Iniciar prueba gratis </button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body card-licencia">
                        <h4 className="card-title">Anual</h4>
                        <img src={PrecioAnual} alt="precio anual" />
                        {/* <h3> $365 </h3> */}
                        <ul>
                        <li>Envíos con Imágenes y Texto Personalizado Ilimitados. Sin cobros adicionales por mensajes</li>
                            <li>30 días con garantía de reembolso 100%</li>
                            <li>12 meses de soporte gratuito</li>
                            <li>Incluye chatbot para respuestas automáticas</li>
                        </ul>
                        <button className="btn-hover btn-green w-100"> Iniciar prueba gratis </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Licencia;