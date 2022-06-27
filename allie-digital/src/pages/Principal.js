import React from 'react';
import '../style/Principals.css';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';
import principal2 from '../image/principal2.png';
import principal3 from '../image/principal3.png';

function Principal () {
  return (
    <div>
      <Header />

      <section class="carousel" aria-label="Gallery">
        <ol class="carousel__viewport">
          <li id="carousel__slide1" tabindex="0" class="carousel__slide">
            
            <div className="tour">
              <h1>
                Tour 360º
              </h1>
              <h4>
                Capture imagens 360° do seu ambiente e monte vizualizações interativas para divulgar seu negócio.
              </h4>
              <Link to="/tour">
                <button type="button">
                Descubra
                </button>
              </Link>
            </div>

            <div class="carousel__snapper">
              <a href="#carousel__slide4" class="carousel__prev">Go to last slide</a>
              <a href="#carousel__slide2" class="carousel__next">Go to next slide</a>
            </div>
          </li>
          <li id="carousel__slide2" tabindex="0" class="carousel__slide">
            
            <div className="laser">
              <h1>
                Laser Scanner
              </h1>
              <h4>
                Capture um cenário real em uma nuvem de pontos que permite a 
                conversão rápida e precisa para modelos 3D de alta precisão.
              </h4>
              <Link to="/laser">
                <button type="button">
                  Descubra
                </button>
              </Link>
            </div>

            <div class="carousel__snapper"></div>
            <a href="#carousel__slide1" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3" class="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide3" tabindex="0" class="carousel__slide">
            
            <div className="realidade">
              <h1>
                Realidade Virtual
              </h1>
              <h4>
                Conheça essa forma totalmente inovadora de apresentar produtos e informações, 
                aumentando a curiosidade e o engajamento do seu público.
              </h4>
              <Link to="/realidade">
                <button type="button">
                  Descubra
                </button>
              </Link>
            </div>
            
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide2" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4" class="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide4" tabindex="0" class="carousel__slide">
            
            <div className="simulacoes">
              <h1>
                Simulações e Treinamento
              </h1>
              <h4>
                Criamos simulações virtuais para facilitar os processos de treinamento de novos e 
                antigos funcionários, de forma padronizada, tecnológica e remota.
              </h4>
              <Link to="/simulacoes">
                <button type="button">
                  Descubra
                </button>
              </Link>
            </div>
            
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide3" class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide1" class="carousel__next">Go to first slide</a>
          </li>

        </ol>
        <aside class="carousel__navigation">
          <ol class="carousel__navigation-list">
            <li class="carousel__navigation-item">
              <a href="#carousel__slide1" class="carousel__navigation-button">Go to slide 1</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide2" class="carousel__navigation-button">Go to slide 2</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide3" class="carousel__navigation-button">Go to slide 3</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide4" class="carousel__navigation-button">Go to slide 4</a>
            </li>
          </ol>
        </aside>
      </section>

      <h2 className="empresa-especializada">
        EMPRESA ESPECIALIZADA EM INOVAÇÃO DIGITAL
      </h2>

      <img src={ principal2 } alt="imagem de mulher com oculos VR" className="img-principal2" />
      
      <div className="somos">
        <div className="container-somos">
          <h2 className="title-somos">
            Quem somos?
          </h2>
          <h4 className="text-somos1">
            A Allie Digital nasceu para criar experiências virtuais inovadoras. Nossa missão é criar experiências 
            incríveis para nossos clientes e entregá-las em aplicativos para dispositivos móveis, óculos de VR, desktop, mídias sociais e websites.
          </h4>
          <h4 className="text-somos1">
            Inovação e crescimento definem a nossa história, e ela só é possível pois contamos com um time 
            dedicado e altamente especializado, composto por engenheiros, designers e desenvolvedores apaixonados por tecnologia.
          </h4>
        </div>
        
        <img src={ principal3 } alt="imagem de homem com oculos VR" className="img-principal3" />
    
      </div>

      <object>
        <param name="movie" value="https://youtu.be/56SJXNxLPPQ"></param>
        <param name="allowFullScreen" value="true"></param>
        <embed src="https://youtu.be/56SJXNxLPPQ" width="80%" height="550px" className="video-principal" autoplay="autoplay" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" />
      </object>

      <div className="container-cards">
        <p className="sub-card">
          <h4 className="text-container">
            Estamos sempre em busca de novidades, aprimorando produtos e serviços para que você possa fazer parte da revolução digital.
          </h4>
        </p>
        <p className="sub-card">
          <h4 className="text-container">
            Nossa equipe multidisciplinar está em constante evolução, desenvolvendo técnicas, processos e produtos a todo momento.
          </h4>
        </p>
        <p className="sub-card">
          <h4 className="text-container">
            Investimos em equipamentos de última geração para podermos desenvolver as melhores experiências virtuais possíveis.
          </h4>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Principal;
