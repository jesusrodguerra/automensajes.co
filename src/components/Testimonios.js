import {React, Fragment} from 'react';

const Testimonios = () => {
    return ( 
        <Fragment>
            <h2 className="title-testimonio color-title margen-contenedores"> Únete a muchas personas que ya están obteniendo resultados </h2>
            <div className="container-fluid background">
                <div className="container testimonio-container">
                    <div className="testimonios">
                        <div className="video-testimonio">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/QXfUGPky-X0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <h3> <u>Karen Montenegro</u> <br/> <span> Bienestar de Transmasivo Transmilenio <br/> Bogotá D.C. - Colombia </span> </h3>
                        </div>
                        <div className="video-testimonio">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/t40ySnGHCSc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <h3> <u>Catalina Rojas</u> <br/> <span> Community manager CIFES y LUVANIA <br/> Colombia </span> </h3>
                        </div>
                        <div className="video-testimonio">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QSKTGKa0V_U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <h3> <u>Cristian Londoño</u> <br/> <span> Coordinardor call center FOCUN <br/> México D.F. - México </span> </h3>
                        </div>
                    </div>

                </div>

            </div>
        </Fragment>
     );
}
 
export default Testimonios;