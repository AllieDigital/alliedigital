import React from 'react';
import '../style/Principals.css';
import Footer from './Footer';
import Header from './Header';

function Principal () {
  return (
    <div>
      <Header />

      <div className="primeiraimg">
        <div className="primeira-descricao">
          <h1>Allie Digital</h1>
          <h2>Sua solução e inovação digital</h2>
        </div>
      </div>

      <div className="containercases">
        <div className="tour">
          <h1>
            Tour 360º
          </h1>
          <h2>
            descrição
          </h2>
          <button type="button">
            Descubra
          </button>
        </div>

        <div className="laser">
          <h1>
            Laser Scanner
          </h1>
          <h2>
            descrição
          </h2>
          <button type="button">
            Descubra
          </button>
        </div>

        <div className="fotogrametria">
          <h1>
            Fotogrametria
          </h1>
          <h2>
            descrição
          </h2>
          <button type="button">
            Descubra
          </button>
        </div>
      </div>

      <div>
        <h1>

        </h1>
      </div>

      <Footer />
    </div>
  );
}

export default Principal;
