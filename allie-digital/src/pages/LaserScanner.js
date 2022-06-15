import React from 'react';
import videoLaser from '../image/videolaser.mp4';
import Footer from './Footer';
import Header from './Header';
import laser1 from '../image/laser1.jpeg';
import laser2 from '../image/laser2.jpeg';
import laser3 from '../image/laser3.jpeg';

function LaserScanner () {
  return (
    <div>

      <Header />

      <h1 className="title">
        Levantamento cadastral
        <p/>
        com Laser Scanner
      </h1>
      <h2>
        Nuvem de pontos
      </h2>

      <ul className="nav">
          <li>
            <span>
              O que é a Nuvem de Pontos?
            </span>
            <ul>
              <li>
                <h4 className="text-tour">
                A nuvem de pontos recria objetos e estruturas referenciadas a partir de uma grande coleção de pontos. Esses pontos são obtidos de uma captura realizada com um laser scanner 3D. 
                Quando esses pontos são anexados a um software é possível utilizá-los como base para o seu desenho ou modelo 3D.
                </h4>
              </li>
            </ul>

              <span>
                Para que serve?
              </span>
              <ul>
                <li>
                  <h4 className="text-tour">
                  Entre seus usos mais comuns temos os levantamentos topográfico de regiões, mapeamentos geológicos, captação de estruturas para registro de patrimônio histórico, 
                  monitoramento de estruturas para identificar desgastes e até para fazer o mapeamento da execução das instalações em edifícios residenciais e comerciais, para se evitar perder tempo fazendo as-built. 
                  Ou seja, aplicações que podem ser utilizadas em diferentes estágios de uma obra, seja ela feita do zero ou uma reforma.
                  </h4>
                </li>
              </ul>

              <span>
                Qual a nossa especialidade?
              </span>
              <ul>
                <li>
                  <h4 className="text-tour">
                  Com equipamentos de última geração e knowhow obtido graças às nossas parcerias com a IBR Engenharia e outras empresas do ramo, 
                  temos tudo que você precisa para uma captura perfeita de nuvens de pontos que irá auxiliar muito o desenvolvimento de seus projetos. 
                  </h4>
                </li>
              </ul>

              <span>
                O que podemos fazer?
              </span>
              <ul>
                <li>
                  <h4 className="text-tour">
                  Realizamos a captura das nuvens de pontos com nosso laser scanner 3D e exportamos para a utilização de sua equipe, ou terceiros, 
                  para a construção de modelos 3D precisos e baseados na realidade.
                  </h4>
                </li>
              </ul>

          </li>
        </ul>

        <div className="div-processo">
          <div>
            <h1 className="title-processo">
              Processo de Levantamento cadastral
            </h1>
            <h3 className="text-processo">
              Cada projeto de Laser Scanner tem suas peculiaridades, por isso, nosso processo é adaptado às necessidades de cada cliente, levando em conta o objetivo do scan, sua utilização e o local onde o serviço será realizado.
            </h3>
          </div>

          <div className="container-coluna">
            <p>
              <h3 className="first-card">
                O Laser Scanner é uma técnica já amplamente utilizada em projetos de engenharia e arquitetura, auxiliando as equipes a reproduzir ambientes e estruturas reais em seus modelos e projetos, possibilitando assim um trabalho mais preciso e de maior qualidade.
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Técnica
              </h2>
              <h3 className="text-grey">
                Nossa equipe de Laser Scanner é composta por profissionais qualificados com ampla experiência nos processos de captura de nuvem de pontos.
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Tecnologia
              </h2>
              <h3 className="text-grey">
                Utilizamos equipamentos de alto padrão para uma captura avançada e de qualidade.
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Inovação
              </h2>
              <h3 className="text-grey">
                Sua empresa será vista com outros olhos, investindo no futuro e utilizando tecnologia de ponta em seus projetos.
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Economia
              </h2>
              <h3 className="text-grey">
              Com levantamentos realistas e precisos você economiza tempo em seus projetos, reduz custos e horas trabalhadas, 
              além de um resultado final com qualidade e precisão.
              </h3>
            </p>
          </div>
        </div>

        <video src={ videoLaser } type="video/mp4" controls autoplay="autoplay" width="80%"></video>

        <div className="funcionamento">
          <h2 className="title-funcionamento">
            Como funciona?
          </h2>

          <div className="container-cards">
            <p className="sub-card">
              <h3 className="title-cards">
                Orçamento
              </h3>
              <h4 className="text-container">
                O Orçamento é feito a partir das informações enviadas ou após visita ao imóvel.
              </h4>
            </p>
            <p className="sub-card">
              <h3 className="title-cards">
                Escaneamento
              </h3>
              <h4 className="text-container">
                Profissionais da Allie vão até o local e realizam a captura do ambiente com o Laser Scanner.
              </h4>
            </p>
            <p className="sub-card">
              <h3 className="title-cards">
                Processamento
              </h3>
              <h4 className="text-container">
                Através das informações coletadas será feito o processamento das nuvens de pontos por nossa equipe.
              </h4>
            </p>
            <p className="sub-card">
              <h3 className="title-cards">
                Publicação
              </h3>
              <h4 className="text-container">
                Pronto. Agora você pode usar as nuvens de pontos para dar suporte aos projetos de engenharia, arquitetura e infraestrutura.
              </h4>
            </p>
          </div>
      </div>

      <img src={laser1} alt="equipamento e demonstração do processo laser 1" className="img-equipamento" />

      <img src={laser2} alt="equipamento  e demonstração do processo laser 2" className="img-equipamento" />

      <img src={laser3} alt="equipamento  e demonstração do processo laser 3" className="img-equipamento" />

      <Footer />

    </div>
  );
}

export default LaserScanner;