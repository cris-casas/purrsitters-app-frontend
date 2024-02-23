import React, { useState } from 'react';

const CardCuidadores = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Cambié el nombre de la función de toggleMenu a openModal para que coincida con el onClick en la imagen.
    const openModal = () => {
        setIsOpen(!isOpen);
        console.log("hola");
    };

    return (
        <>
            <div className="">
                <img
                    className="fotoCuidadores"
                    src={`../src/assets/imagesCuidadores/${item.image}`}
                    alt=""
                    onClick={openModal}
                />
                <div className="cardCuidadoresDatos">
                    <h5 className="nameCuidadores">
                        <strong>{item.name}</strong>
                    </h5>
                    <p className="adressCuidadores"> {item.address}</p>
                    <div className="contenedorIconos">
                        <img
                            className="iconosCuidadores"
                            src="../src/assets/img/Exterior.png"
                            alt=""
                        />
                        <img
                            className="iconosCuidadores"
                            src="../src/assets/img/Exterior.png"
                            alt=""
                        />
                        <img
                            className="iconosCuidadores"
                            src="../src/assets/img/Exterior.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* <div className={`modalCuidadores ${isOpen ? 'block' : 'hidden'}`}>
                <img
                    className="fotoCuidadoresModal "
                    src={`../src/assets/imagesCuidadores/${item.image}`}
                    alt=""
                />
                <div className="modalContenedorDescripcion">
                    <h5 className="nameCuidadores">
                        {item.name}
                    </h5>
                    <p className="adressCuidadores ">{item.address}</p>
                    <div className="contenedorIconos">
                        <img
                            className="iconosCuidadores"
                            src="../src/assets/iconos/Exterior.png"
                            alt=""
                        />
                        <img
                            className="iconosCuidadores"
                            src="../src/assets/iconos/Exterior.png"
                            alt=""
                        />
                        <img
                            className="iconosCuidadores"
                            src="../src/assets/iconos/Exterior.png"
                            alt=""
                        />
                    </div>
                    <hr></hr>
                    <p className="descriptionCuidadores">{item.description}</p>
                    <button className="boton-contacto">Contactar</button><br></br>
                    <button className="boton-favorito">
                        <i className="fa fa-heart"></i> Guardado en favoritos
                    </button>
                </div>
            </div> */}
        </>
    );
};

export default CardCuidadores;
