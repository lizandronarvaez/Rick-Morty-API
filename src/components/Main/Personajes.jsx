import React from 'react'

const Personajes = ({ personaje }) => {
  return (
    <>
      {
        personaje.map(personaje => (
          <div className="personaje" key={personaje.id}>
            <div className='caja-imagen'>
              <img className="personaje__img" src={personaje.image} alt="name" />
            </div>
            <div className="personaje__informacion">
              <p className="personaje__nombre">{personaje.name}</p>
              <div className='personaje-info'>
                <p className="personaje__tipo">Tipo: {personaje.species}</p>
                {personaje.status === "Alive" ?
                  <><p className="personaje__estado">Status: {personaje.status}</p><p className='status-alive'></p></>
                  : <><p className="personaje__estado">Status: {personaje.status}</p><p className='status-dead'></p></>
                }
              </div>
            </div>
            <button className='personaje-informacion_boton'>Mas informacion</button>
          </div>
        ))
      }
    </>

  )
}

export default Personajes