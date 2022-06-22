import React from 'react';
import '../style/Headers.css';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';

function Header () {
  return (

    <header>
      
      <nav>
        <Link to="/"><img src={logo} alt="logo empresa allie" className="logo" /></Link>
        <ul className="container">
          <li><Link to="/tour">Tour 360°</Link></li>
          <li><Link to="/laser">Laser Scanner</Link></li>
          <li><Link to="/realidade">Realidade Virtual</Link></li>
          <li><Link to="/simulacoes">Simulações</Link></li>
          <li><Link to="/aplicativos">Aplicativos</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
        
    </header>

  );
}

export default Header;
