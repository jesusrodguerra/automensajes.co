import {React, Fragment} from 'react';
import Logo from '../assets/Logo.png';
import Imagen from '../assets/videoYoutube.png';

const Header = () => {
    return ( 
        <Fragment>
            <nav className="navbar navbar-expand-md">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="items collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Precios y adquirir licencia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Términos y condiciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Política de privacidad</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="fondo">
                <div className="hero container">
                    <div className="hero-left">
                        <h1 className="color-grey"> Automatiza tus ventas con whatsapp </h1>
                        <h4 className="color-grey"> Herramienta de marketing para envío masivo de mensajes </h4>
                        <div className="">
                            <button className="btn-hover btn-green"> Iniciar prueba gratis </button>
                            <button className="btn-hover btn-green-outline"> Adquirir licencia </button>
                        </div>
                    </div>
                    <div className="hero-rigth">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/cSM0b-pgl1U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Header;