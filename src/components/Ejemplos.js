import React from 'react';
import Imagen1 from '../assets/ejemplo1.png';
import Imagen2 from '../assets/ejemplo2.png';
import Imagen3 from '../assets/ejemplo3.png';
import Imagen4 from '../assets/ejemplo4.png';

const Ejemplos = () => {
    return ( 
        <div className="container ejemplos margen-contenedores">
            <h2 className="color-title"> Así funciona Automensajes - Más WhatsApp: </h2>
            <div className="row">
                <div className="col-lg-6 col-md-6 mb-4">
                    <img src={Imagen1} alt="imagen ejemplo programa"/>
                    <h5> Agrega múltiples cuentas de whatsapp con una sola licencia </h5>
                </div>
                <div className="col-lg-6 col-md-6 mb-4">
                    <img src={Imagen2} alt="imagen ejemplo programa"/>
                    <h5> Carga tu lista de excel con registros de teléfonos ilimitados </h5>
                </div>
                <div className="col-lg-6 col-md-6 mb-4">
                    <img src={Imagen3} alt="imagen ejemplo programa"/>
                    <h5> Adjunta imágenes y videos para tus envíos masivos con galerías personalizadas </h5>
                </div>
                <div className="col-lg-6 col-md-6 mb-4">
                    <img src={Imagen4} alt="imagen ejemplo programa"/>
                    <h5> Agragar archivos PDF,  emoticones aleatorios y variables </h5>
                </div>
            </div>
                <button className="btn-hover btn-green"> Iniciar prueba gratis </button>
                <button className="btn-hover btn-green-outline"> Adquirir licencia </button>
        </div>
     );
}
 
export default Ejemplos;