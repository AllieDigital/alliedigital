import React from 'react';
import '../style/Tours.css';
import Footer from './Footer';
import Header from './Header';
import tour1 from '../image/tour-360-01.jpg';
import tour2 from '../image/tour-360-02.jpg';
import tour3 from '../image/tour-360-03.jpg';
import videoTour from '../image/videotour.mp4';

function Tour () {

  return (
    <>
    <Header />

      <div>
        <p className="title">
          <h1>
            Tour Virtual 360º
          </h1>
          <h1>
            Matterport
          </h1>
        </p>

      <div className="container-coluna">

        <h3 className="title-cards">
          O que é o Tour 360º?
        </h3>
        <h4 className="primeira-explicacao">
          Utilizando a melhor tecnologia do mercado atualmente, fazemos a captura por fotos de qualquer ambiente, 
          interno ou externo, em 360º, formando assim uma imagem panorâmica que permite e imersão em um ambiente. 
        </h4>

        <h3 className="title-cards">
          Para que serve?
        </h3>
        <h4 className="primeira-explicacao">
          Essas imagens podem ser utilizadas para melhorar a presença da sua empresa no Google, proporcionando uma vista completa dela por dentro na ferramenta StreetView, 
          assim quando seu cliente lhe encontra pelo mapa, ele pode literalmente ver sua empresa por dentro e conhecer seu ambiente, sem sair de casa. Além disso, 
          essa tecnologia também é amplamente utilizada na Engenharia e Arquitetura, para fazer levantamentos de obras finalizadas, ou mesmo de reformas, ajudando projetistas a terem as medidas, 
          aparências, detalhes e dimensões de todo o ambiente sem precisarem estar presentes no local.
          Outra aplicação que fazemos na Allie, é a criação de Tour Virtual para seu site, como você pode ver em nossa página inicial, 
          uma experiência interessante e diferenciada que permite você navegar tanto por ambientes reais capturados com nossa câmera Matterport, quanto por ambientes modelados e renderizados por nossa equipe de desenvolvimento.
        </h4>

        <h3 className="title-cards">
          Qual a nossa especialidade?
        </h3>
        <h4 className="primeira-explicacao">
          Fazemos a Fotogrametria, técnica captura de imagens 360º, em todo o Brasil, além disso nossa equipe de desenvolvimento é capaz de reproduzir a mesma técnica em ambientes 3D modelados e renderizados no computador, 
          permitindo também que a mesma técnica seja realizada em ambientes virtuais que ainda estejam na fase de projetos.
        </h4>

        <h3 className="title-cards">
          O que podemos fazer?
        </h3>
        <h4 className="primeira-explicacao">
          Apesar de nossa experiência com clientes da área de Engenharia, isso não quer dizer que estamos limitados a isso, muito pelo contrário. Essa experiência nos permite adaptar experiências para qualquer ramo de atividade. 
          Você pode treinar funcionários sobre procedimentos de uma fábrica, pode demonstrar uma nova sede para investidores, pode engajar seus clientes em uma experiência divertida de jogo dentro do contexto do seu negócio, visualizar uma obra que nem  começou, 
          testar uma estrada que está sendo planejada, testar múltiplas decorações para um apartamento, entre inúmeras outras aplicações possíveis. O limite é a sua imaginação.
        </h4>
      </div>

        <div className="div-processo">
          <div>
            <h1 className="title-processo">
              Processo de criação
            </h1>
            <h3 className="text-processo">
              Cada projeto de Tour Virtual tem suas peculiaridades, por isso, nosso processo é adaptado às necessidades de cada cliente, levando em conta o objetivo do tour, sua utilização e o local onde a captura de imagens será realizada.
            </h3>
          </div>

          <div className="container-coluna">
            <p>
              <h3 className="first-card">
              O Tour Virtual 360º é uma maneira criativa e eficaz de mostrar ambientes reais de uma forma virtual, que pode ser exibida em websites, smartphones e até mesmo em dispositivos de realidade virtual. Navegue pelo ambiente capturado em uma visualização fácil e criativa.
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Técnica
              </h2>
              <h3 className="text-grey">
                Nossa equipe de Fotogrametria é composta por profissionais qualificados com ampla experiência nos processos de captura de imagens.
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Tecnologia
              </h2>
              <h3 className="text-grey">
                Utilizamos equipamentos de alto padrão para uma captura avançada e de qualidade, com a Matterport, referência mundial em fotogrametria.
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
                Flexibilidade
              </h2>
              <h3 className="text-grey">
                Seu Tour Virtual 360º pode ser exibido em sites, computadores, dispositivos móveis e até mesmo se adapta a óculos de realidade virtual para smartphone, entre outros.
              </h3>
            </p>
          </div>
        </div>

        <video src={ videoTour } type="video/mp4" controls autoplay="autoplay" width="80%"></video>
        
        <img src={tour1} alt="equipamento para tour 360 1" className="img-equipamento" />

        <img src={tour2} alt="equipamento para tour 360 2" className="img-equipamento" />

        <img src={tour3} alt="equipamento para tour 360 3" className="img-equipamento" />

        <div className="funcionamento">
          <h2 className="title-funcionamento">
            Como funciona o Tour Virtual 360º MATTERPORT?
          </h2>

          <div className="container-cards">
            <p className="sub-card">
              <h3 className="title-cards">
                Orçamento
              </h3>
              <h4>
                O Orçamento é feito a partir das informações enviadas ou após visita ao imóvel.
              </h4>
            </p>
            <p className="sub-card">
              <h3 className="title-cards">
                Escaneamento
              </h3>
              <h4>
                Profissionais da Allie vão até o local e realizam a captura de imagens 360 º com a câmera Matterport.
              </h4>
            </p>
            <p className="sub-card">
              <h3 className="title-cards">
                Processamento
              </h3>
              <h4>
                Através das informações coletadas será feito o processamento das imagens por nossa equipe.
              </h4>
            </p>
            <p className="sub-card">
              <h3 className="title-cards">
                Publicação
              </h3>
              <h4>
                Pronto. Agora você pode publicar seu Tour Virtual 360º em seu site, intranet e até no Google StreetView!
              </h4>
            </p>
          </div>
      </div>

      </div>

      <Footer />
    </>
  );
}

export default Tour;