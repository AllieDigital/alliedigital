import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Headers.css';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';

function Header () {
  return (

    <header>
      
      <nav>
        <a href="home"><img src={logo} alt="logo empresa allie" className="logo" /></a>
        <ul className="container">
          <li><a href="tour">Tour 360</a></li>
          <li><a href="laser">Laser Scanner</a></li>
          <li><a href="fotogrametria">Fotogrametria</a></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
        
    </header>

  );
}

export default Header;
