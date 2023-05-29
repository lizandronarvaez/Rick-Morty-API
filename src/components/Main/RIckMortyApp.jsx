import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import SearchCharacters from "./SearchCharacters";
import getCharacters from "../../helpers/GetCharacters";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
const RickMortyApp = () => {
  // hooks useState
  const [personajes, setPersonajes] = useState([]);

  // Funciones para traer datos de la api
  const getResults = async (nameCharacters) => {
    const response = await getCharacters(nameCharacters)

    // filtrado personajes
    const filterCharacter = response.filter(item => {
      return item.name.toLowerCase().includes(nameCharacters)
    })

    if (nameCharacters) {
      setPersonajes(filterCharacter)
      return
    }
    setPersonajes(response)

  };
  // Actualiza el resultado
  useEffect(() => {
    getResults()
  }, []);

  return (
    <>
      <Header />
      <div className="contenido">
        <SearchCharacters
          nameCharacters={getResults}
          personajes={personajes}
        />
        <div className='contenedor-personajes' id='contenedor-personajes'>
          {
          personajes.map((personaje, index) => (
            <Cards
              key={index}
              datosPersonajes={personaje}
            />
          ))
          }
        </div>
      </div>
      <Footer />
    </>

  );
};

export default RickMortyApp
