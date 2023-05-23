import React from 'react'
import { Link } from 'react-router-dom'
const Navigate = () => {
    return (
        <nav className='navigate'>
            <div className='navigate-barra'>
                <a href="#buscador" className='nav-li'>Ver Personajes</a> 
                {/* <Link to={"/informacion-proyecto"} className="nav-li">Informacion Proyecto</Link> */}
                <a href="#contacto" className="nav-li">Contacto</a>
            </div>
        </nav>
    )
}

export default Navigate