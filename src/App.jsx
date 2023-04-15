import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header';
import BuscarPersonajes from "./components/Main/BuscarPersonajes";
import Navigate from './components/layout/Navigate';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Navigate />
        <div className='contenido'>
          <div className='contenedor-personajes' id='contenedor-personajes'>
            <Routes>
              <Route exact path="/" Component={BuscarPersonajes} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  )
}

export default App;
