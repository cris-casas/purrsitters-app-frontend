import React, { useEffect, useState } from 'react';
import CardCuidadores from "./CardCuidadores"
import './cards.css'


const FetchCuidadores = () => {
  const [cuidadores, setCuidadores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/cuidadores.json");
        const data = await response.json();

        setCuidadores(data.cuidadores);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    fetchData();
  }, []);  

  return (
    <div className="contenedorCards">
      {cuidadores.map((item, index) => (
        <div key={index} className="cardCuidadores">
          <CardCuidadores item={item} />
        </div>
      ))}
    </div>
  );
};

export default FetchCuidadores;