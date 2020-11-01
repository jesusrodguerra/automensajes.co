import React from 'react';

const Atributos = () => {
    return ( 
        <div className="container margen-contenedores">
            <h2 className="color-title"> Regístrate hoy y recibirás </h2>
            <div className="card-container">
                <div className="card-atributo ml-4 mr-4">
                    <h3 className="color-title"> 1 </h3>
                    <h5> CRM Whastapp </h5>
                    <hr className="color-line"/>
                    <p> Cuenta para un usuario de atención de clientes por whatsapp </p>
                </div>
                <div className="card-atributo ml-4 mr-4">
                    <h3 className="color-title"> 20 </h3>
                    <h5> Minutos </h5>
                    <hr className="color-line"/>
                    <p> De asesoría personalizada  </p>
                </div>
                <div className="card-atributo ml-4 mr-4">
                    <h3 className="color-title"> 2 </h3>
                    <h5> Días </h5>
                    <hr className="color-line"/>
                    <p> Para uso de la plataforma de una manera ilimitada con todos nuestros beneficios  </p>
                </div>
            </div>
        </div>
     );
}
 
export default Atributos;