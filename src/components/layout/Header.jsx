import React from 'react'
import Navigate from './Navigate'
const Header = () => {
    return (
        <header className='header'>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png"} alt="imagen" />
            <div className='header-info'></div>
            <Navigate />
            <h1>Bienvenido <span className='header-span'> API Rick and Morty</span></h1>
        </header>
    )
}

export default Header