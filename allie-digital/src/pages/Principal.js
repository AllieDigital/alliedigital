import React from 'react';
import '../style/Principals.css';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

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
          <Link to="/tour">
            <button type="button">
            Descubra
            </button>
          </Link>
        </div>

        <div className="laser">
          <h1>
            Laser Scanner
          </h1>
          <h2>
            descrição
          </h2>
          <Link to="/laser">
            <button type="button">
              Descubra
            </button>
          </Link>
        </div>

        <div className="fotogrametria">
          <h1>
            Realidade Virtual
          </h1>
          <h2>
            descrição
          </h2>
          <Link to="/realidade">
            <button type="button">
              Descubra
            </button>
          </Link>
        </div>

        <div className="laser">
          <h1>
            Simulações e Treinamento
          </h1>
          <h2>
            descrição
          </h2>
          <Link to="/simulacoes">
            <button type="button">
              Descubra
            </button>
          </Link>
        </div>

        <div className="laser">
          <h1>
            Aplicativos
          </h1>
          <h2>
            descrição
          </h2>
          <Link to="/aplicativos">
            <button type="button">
              Descubra
            </button>
          </Link>
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
