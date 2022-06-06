import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Headers.css';

function Header () {
  return (

    <div className="head">

      <div className="logo">
        
        <img src="../src/image/logo.png" alt="logo empresa allie" />
  
      </div>
      
      <nav>
        <ul className="container">
          <li><a href="tour">Tour 360</a></li>
          <li><a href="laser">Laser Scanner</a></li>
          <li><a href="fotogrametria">Fotogrametria</a></li>
          <li><a href="sobre">Sobre</a></li>
          <li><a href="contato">Contato</a></li>
          <li><a href="cadastre">Cadastre-se</a></li>
          <li><a href="login">Login</a></li>
        </ul>
      </nav>
        
    </div>

  );
}

export default Header;
