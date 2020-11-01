import {React, Fragment} from 'react';
import Paper from '../assets/Paper.png';
import Comentario from '../assets/Chat.png';
import Mail from '../assets/mailSend.png';
import List from '../assets/List.png';
import Transmilenio from '../assets/transmilenio.png';
import Une from '../assets/une.png';
import Emtelco from '../assets/emtelco.png';

const Card = () => {
    return ( 
        <Fragment>
            <div className="container margen-contenedores">
                <h2 className="color-title"> La plataforma más efectiva para márketing por whatsapp </h2>
                <div className="cards-container">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Envíos ilimitados</h4>
                            <img src={Paper} alt="imagen-avion-papel"/>
                            <p class="card-text">Podrás enviar mensajes sin ningún tipo de coste, ni límite con sistema para minimizar bloqueo de WhatsApp.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Mensajes Personalizados</h4>
                            <img src={Comentario} alt="imagen-avion-papel"/>
                            <p class="card-text">Con imágenes, nombres y campos con la información que necesites. Evita enviar el mismo contenido a tus contactos.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Gestiona auto respuestas</h4>
                            <img src={Mail} alt="imagen-avion-papel"/>
                            <p class="card-text">Configura con imagen, emojis y texto, tus mensajes y auto-respuestas.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Reporte de envíos</h4>
                            <img src={List} alt="imagen-avion-papel"/>
                            <p class="card-text">Analiza el resultados de tus envíos. Toma decisiones en base a números.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logos">
                <img src={Transmilenio} alt="logo transmilenio" />
                <img src={Une} alt="logo une" />
                <img src={Emtelco} alt="logo emtelco" />
            </div>
        </Fragment>
     );
}
 
export default Card;