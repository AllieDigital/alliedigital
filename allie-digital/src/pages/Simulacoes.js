import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../style/Simulacoes.css';
import videoSimulacao from '../image/simuladores.mp4';

function Simulacoes () {
  return (
    <div>

      <Header />

      <h1 className="title">
        Simulações e Treinamentos
      </h1>

      <div className="container-coluna">

        <h3 className="title-cards">
          O que são Simulações?
        </h3>
        <h4 className="primeira-explicacao">
          Caminhe por um prédio que ainda não foi construído, dirija por projetos de urbanização que ainda estão sendo planejados, 
          instrua colaboradores sobre procedimentos de emergência, tudo como se fosse um jogo de videogame, fácil e lúdico de utilizar.
        </h4>

        <h3 className="title-cards">
          Para que serve?
        </h3>
        <h4 className="primeira-explicacao">
          As simulações podem ser usadas de diversas maneiras diferentes, elas servem para que o usuário possa absorver 
          informações de forma lúdica, com menores custos e riscos. 
        </h4>

        <h3 className="title-cards">
          Qual a nossa especialidade?
        </h3>
        <h4 className="primeira-explicacao">
          Temos experiência na criação de simulações para o ramo da Engenharia, especialmente Engenharia Rodoviária, 
          criando simulações de estradas, loteamentos e obras, onde o cliente pode pilotar veículos e andar com um 
          personagem em um ambiente virtual geolocalizado, como se fosse um videogame, podendo assim perceber com 
          exatidão como será a experiência das pessoas ao interagir com seus empreendimentos no mundo real, 
          quando estiverem prontos. Isso é importante para que eles possam tomar decisões sobre a composição desses projetos, 
          algo que antes era difícil de ser visualizado, apenas com plantas e projetos que somente engenheiros experientes eram capazes de compreender.
        </h4>

        <h3 className="title-cards">
          O que podemos fazer?
        </h3>
        <h4 className="primeira-explicacao">
          Apesar de nossa experiência com clientes da área de Engenharia, isso não quer dizer que estamos limitados a isso, 
          muito pelo contrário. Essa experiência nos permite adaptar experiências para qualquer ramo de atividade. 
          Você pode treinar funcionários sobre procedimentos de uma fábrica, pode demonstrar uma nova sede para investidores, 
          pode engajar seus clientes em uma experiência divertida de jogo dentro do contexto do seu negócio, 
          visualizar uma obra que nem  começou, testar uma estrada que está sendo planejada, testar múltiplas decorações para um apartamento, 
          entre inúmeras outras aplicações possíveis. O limite é a sua imaginação.
        </h4>

      </div>

        <div className="div-processo">
          <div>
            <h1 className="title-processo">
              Processo Criativo
            </h1>
            <h3 className="text-processo">
              Cada projeto de Simulação tem suas peculiaridades, por isso, nosso processo criativo é adaptado às necessidades 
              de cada cliente, levando em conta o objetivo da experiência, o público-alvo, os equipamentos disponíveis, entre muitos outros fatores.
            </h3>
          </div>

          <div className="container-coluna">
            <p>
              <h3 className="first-card">
                As simulações e treinamentos virtuais são maneiras inovadoras de reduzir riscos e custos na sua empresa. 
                Elas abrangem uma grande gama de possibilidades, podendo ser utilizadas para treinamentos de funcionários, 
                integração de novos colaboradores, mas também para mostrar produtos e serviços para seus clientes de um jeito diferente. 
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Desenvolvimento
              </h2>
              <h3 className="text-grey">
                Utilizamos as engines mais poderosas do mercado (Unity e Unreal) para desenvolver o seu projeto.
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Tecnologia
              </h2>
              <h3 className="text-grey">
                Experiências sob medida para PC/Mac/Linux ou para a Web, isso mesmo, você pode executar uma 
                simulação diretamente no seu navegador, podendo publicá-la em seu site ou usar na sua rede interna.
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Inovação
              </h2>
              <h3 className="text-grey">
                Sua empresa será vista com outros olhos, investindo no futuro e dando a seus clientes novas experiências.
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Criação
              </h2>
              <h3 className="text-grey">
                Nosso time está preparado para lhe ajudar a criar toda a sua experiência, desde o conceito até a 
                implementação e distribuição em estandes, quiosques, dentro da sua emprea, ou em seu próprio site.
              </h3>
            </p>
          </div>
        </div>

        <video src={ videoSimulacao } className="video-simulacao" type="video/mp4" controls autoplay="autoplay" width="80%"></video>

        <div className="experimente">
          <h1 className="title-processo">
            Experimente
          </h1>
          <h3 className="text-processo">
            Venha visitar nosso estúdio de criação para ver as simulações com os próprios olhos, 
            temos uma estrutura preparada para te receber e te mostrar o potencial dessa tecnologia revolucionária.
          </h3>
        </div>

      <Footer />

    </div>
  );
}

export default Simulacoes;