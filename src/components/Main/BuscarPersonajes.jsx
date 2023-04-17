import React, { useEffect, useState } from "react";
import Personajes from "../Main/Personajes";
import Swal from "sweetalert2/dist/sweetalert2.all"
const BuscarPersonajes = () => {
  // hooks useState
  const [personajes, setPersonajes] = useState([]);
  const [filterPersonajes, setFilterPersonajes] = useState([]);
  const [getBusqueda, setBusqueda] = useState("");
  // Funciones para traer datos de la api
  const URL = "https://rickandmortyapi.com/api/character";

  const resultado = async () => {
    const response = await fetch(URL);
    const { results } = await response.json();
    // guardamos los personajes en el state
    setPersonajes(results);
    setFilterPersonajes(results);
  };
  // // Funcion de busqueda personaje
  const busquedaPersonaje = e => {
    setBusqueda(e.target.value);
    filtrarPersonajes(e.target.value)
  }
  console.log(getBusqueda)
  // FIltrar personajes
  const filtrarPersonajes = (value) => {
    const personajesFilter = personajes.filter(personaje => {
      return personaje.name
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase())
    });
    if (personajesFilter.length === 0) {
      Swal.fire(
        "El personaje no existe",
        "Hubo un problema en la busqueda",
        "error"
      )
    }
    setFilterPersonajes(personajesFilter)
  }
  // Actualiza el resultado
  useEffect(() => {
    resultado();
  }, []);
  //renderizacion de la vista
  return (
    <>
      <div className="buscador" id="buscador">
        <label htmlFor="buscar"
          className="buscador__label">
          Buscas un personaje?
        </label>
        <input className="buscador__input"
          onChange={busquedaPersonaje}
          placeholder="Introduce el nombre del personaje"
          type="text"
          value={getBusqueda}
          name="buscar"
        />
      </div>
      <div className='contenedor-personajes' id='contenedor-personajes'>
        {filterPersonajes.map(personaje => (
            <Personajes
              key={personaje.id}
              datosPersonajes={personaje}
            />
          ))
        }
      </div>
    </>

  );
};

export default BuscarPersonajes
