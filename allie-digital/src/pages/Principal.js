import React from 'react';
import '../style/Principals.css';
import Footer from './Footer';
import Header from './Header';

function Principal () {
  return (
    <div>
      <Header />
      <div className="primeiraimg">
        <div className="primeiradescricao">
          <h1>Allie Digital</h1>
          <h2>Sua solução e inovação digital</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Principal;
