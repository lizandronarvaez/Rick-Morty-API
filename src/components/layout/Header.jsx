import React from 'react'
import Navigate from './Navigate'
const Header = () => {
    return (
        <header className='header'>
            <img className='header-logotipe' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png"} alt="imagen" />
            <div className='header-info' >
                <h1>Bienvenido <span className='header-span'> API Rick and Morty</span></h1>
                <Navigate />
            </div>
            <p className='header-bg'></p>
        </header>
    )
}

export default Header