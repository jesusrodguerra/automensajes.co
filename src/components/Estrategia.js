import {React, Fragment} from 'react';

const Estrategia = () => {
    return (

        <Fragment>
            <div class="background-green-border margen-contenedores">
                <h2 className="color-title mb-5"> Multiplica tus clientes aplicando una estrategia </h2>
                <div class="container d-flex">
                    <div className="estrategia-left mr-4">
                        <h4 className="color-white"> Caso de éxito Whatsapp+Facebook estrategia tipo concurso de 7 días para conseguir nueva base de datos y realizar ventas residuales. </h4>
                        <h4 className="color-white"> Creación de campañas fáciles y económicas con envíos 100% gratis y sin ningun tipo de límites. </h4>
                        <h3 className="color-title"> Beneficio exclusivo: </h3>
                        <h4 className="color-title"> Recibe CRM de Gestión con whatsapp </h4>
                        <button className="btn-hover btn-green w-100"> Adquirir licencia </button>
                    </div>
                    <div className="estrategia-right ml-4">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8ufhZiFj60c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <h5 className="color-white mt-5"> Copyright 2020 © Automensajes.com </h5>
        </Fragment>
     );
}
 
export default Estrategia;