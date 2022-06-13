import React from 'react';
import '../style/Footers.css';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';

function Footer () {
  return (

    <div className="contato-footer">

      <div>
        <Link to="/"><img src={logo} alt="logo empresa allie" className="logo" /></Link>
      </div>

      <div className="footer-sobre">
        <Link to="/sobre">
          <h4>
            Sobre
          </h4>
          <h5>
            <p>
              Equipe
            </p>
            <p>
              Parceiros
            </p>
          </h5>
        </Link>
      </div>

      <div>
        <p>
          Allie Digital
        </p>
        <p>
          Avenida Mauro Ramos, nº 1450
        </p>
        <p>
          Edifício Platinum, 11º andar
        </p>
        <p>
          Centro, Florianópolis – SC
        </p>
        <p>
          CEP 88020-302
        </p>
        <p>
          Fone: (048) 3036-2704
        </p>
      </div>

      <div className="icones">
        <p>
          <a href="https://wa.me/5548988320291"><img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536445.png?token=exp=1654615861~hmac=818472dfbf3c0802764739dbb99df61d" alt="icone whatsapp" /></a>
       
          <a href="https://www.instagram.com/ibr.engenharia/"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="icone instagram" /></a>
        </p>
        <p>
          <a href="https://www.linkedin.com/company/inova-brasil-engenharia/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="icone linkedin" /></a>
        
          <a href="https://www.facebook.com/ibr.enganhria/"><img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="icone facebook" /></a>
        </p>
      </div>

    </div>

  );
}

export default Footer;
