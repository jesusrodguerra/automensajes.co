import {React, Fragment} from 'react';
import Mapa from '../assets/Mapa.png';

const MapSection = () => {
    return ( 
        <Fragment>
            <div className="container-fluid background-green margen-contenedores">
                <div className="container map-container">
                    <div className="map-left">
                        <h2 className="color-title"> Nos encontramos presentes en toda Latino América y España </h2>
                        <p className="color-white"> Actualmente tenemos cientos de clientes en Colombia, Ecuador, Chile, Brasil, México, España y muchos más. Con nuestro software podrás captar nuevos clientes e impulsar sus ventas de inmediato. </p>
                        <button className=" btn-hover btn-map-section"> Adquiere tu licencia hoy </button>
                    </div>
                    <div className="map-right">
                        <img src={Mapa} alt="mapa" />
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default MapSection;