import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Headers.css';
import logo from '../image/logo.png';

function Header () {
  return (

    <header>
      
      <nav>
        <a href="home"><img src={logo} alt="logo empresa allie" className="logo" /></a>
        <ul className="container">
          <li><a href="tour">Tour 360</a></li>
          <li><a href="laser">Laser Scanner</a></li>
          <li><a href="fotogrametria">Fotogrametria</a></li>
          <li><a href="login">Login</a></li>
        </ul>
      </nav>
        
    </header>

  );
}

export default Header;
