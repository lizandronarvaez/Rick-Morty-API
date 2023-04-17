import React from 'react'

const Personajes = ({ datosPersonajes }) => {
  const { image, name, species, status } = datosPersonajes
  return (
    <>
      <div className="personaje">
        <div className='caja-imagen'>
          <img className="personaje__img" src={image} alt="name" />
        </div>
        <div className="personaje__informacion">
          <p className="personaje__nombre">{name}</p>
          <div className='personaje-info'>
            <p className="personaje__tipo">Tipo: {species}</p>
            {status === "Alive" ?
              <><p className="personaje__estado">Status: {status}</p><p className='status-alive'></p></>
              : <><p className="personaje__estado">Status: {status}</p><p className='status-dead'></p></>
            }
          </div>
        </div>
        <button className='personaje-informacion_boton'>Mas informacion</button>
      </div>
    </>

  )
}

export default Personajes