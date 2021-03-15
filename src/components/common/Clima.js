import React, { useState, useEffect } from "react";
import CargarClima from "./CargarClima";

const Clima = () => {
  const [recargarClima, setRecargarClima] = useState(true);

  const [climaAPI, setClimaAPI] = useState({});

  const url =
    "http://api.weatherstack.com/current?access_key=6c3c41acdecab88c9fc4a1f1b676c12d&query=Tucuman";

  const fetchAPI = async () => {
    try {
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
      setClimaAPI(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
    setRecargarClima(false);
  }, [recargarClima]);

  return (
    <div className="mt-3">
      <CargarClima climaAPI={climaAPI}></CargarClima>
    </div>
  );
};

export default Clima;
