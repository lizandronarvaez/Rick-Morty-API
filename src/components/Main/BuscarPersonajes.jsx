import React, { useEffect, useState } from "react";
import Personajes from "../Main/Personajes"
const BuscarPersonajes = () => {
  // hooks useState
  const [personaje, setPersonajes] = useState([]);
  // const [buscar, setBuscar] = useState("");

  // Funciones para traer datos de la api
  const URL = "https://rickandmortyapi.com/api/character";

  const resultado = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const { results } = data;
    setPersonajes(results);
  };
  // // Metodo filtrado
  // let data = [];

  // if (!buscar) data = personajes;
  // data = personajes.filter(personaje => data = personaje.name.toLowerCase().includes(buscar.toLowerCase()));
  // // Funcion de busqueda
  // const busquedaPersonaje = e => setBuscar(e.target.value);

  // Actualiza el resultado
  useEffect(() => {
    resultado();
  }, []);

  //renderizacion de la vista
  return (
    <>
      <Personajes personaje={personaje} />
    </>

  );
};

export default BuscarPersonajes
