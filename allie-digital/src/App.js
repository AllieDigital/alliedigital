import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Principal from './pages/Principal';
import Login from './pages/Login';
import LaserScanner from './pages/LaserScanner';
import Tour from './pages/Tour';
import Fotogrametria from './pages/Fotogrametria';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <div className="App">
      
        <Routes>

          <Route exact path="/" component={ Principal } />
          <Route path="/login" component={ Login } />
          <Route path="/cadastro" component={ Cadastro } />
          <Route path="/tour" component={ Tour } />
          <Route path="/laser" component={ LaserScanner } />
          <Route path="/fotogrametria" component={ Fotogrametria } />

        </Routes>

    </div>
  );
}

export default App;
