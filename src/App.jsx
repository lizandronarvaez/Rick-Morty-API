import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RickMortyApp from './components/Main/RIckMortyApp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={RickMortyApp} />
      </Routes>
    </Router>
  )
}

export default App;
