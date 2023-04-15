import React from 'react'
import Navigate from './Navigate'
const Header = () => {
    return (
        <header className='header'>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png"} alt="imagen" />
            <div className='header-info'></div>
            <h1>Bienvenido a la APP Rick and Morty</h1>
        </header>
    )
}

export default Header