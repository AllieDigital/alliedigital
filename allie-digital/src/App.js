import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Principal from './pages/Principal';
import Login from './pages/Login';
import LaserScanner from './pages/LaserScanner';
import Tour from './pages/Tour';
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import Realidade from './pages/Realidade';
import Simulacoes from './pages/Simulacoes';

function App() {
return (
<div className="App">
<Routes>

<Route path='/' element={ <Principal /> } />
<Route path='/login' element={ <Login /> } />
<Route path='/cadastro' element={ <Cadastro /> } />
<Route path='/tour' element={ <Tour /> } />
<Route path='/laser' element={ <LaserScanner /> } />
<Route path='/realidade' element={ <Realidade /> } />
<Route path='/simulacoes' element={ <Simulacoes /> } />
<Route path='/sobre' element={ <Sobre /> } />

</Routes>

</div>
);
}

export default App;