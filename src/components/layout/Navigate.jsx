import React from 'react'
import { Link } from 'react-router-dom'
const Navigate = () => {
    return (
        <nav className='navigate'>
            <div className='navigate-barra'>
                <a href="#contenedor-personajes" className="nav-li">Ver Personajes</a>
                <Link to={"/informacion-proyecto"} className="nav-li">Informacion Proyecto</Link>
                <Link to={"/contacto"} className="nav-li">Contacto</Link>
            </div>
        </nav>
    )
}

export default Navigate