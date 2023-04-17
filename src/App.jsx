import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header';
import BuscarPersonajes from "./components/Main/BuscarPersonajes";
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <div className='contenido'>
          <Routes>
            <Route exact path="/" Component={BuscarPersonajes} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  )
}

export default App;
