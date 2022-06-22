import React from 'react';
import VR1 from '../image/VR-1.mp4';
import VR2 from '../image/VR-2.mp4';
import VR3 from '../image/VR-3.mp4';
import VR4 from '../image/VR-4.mp4';
import VR5 from '../image/VR-5.mp4';
import Footer from './Footer';
import Header from './Header';
import '../style/Realidades.css';

function Realidade () {
  return (
    <div>

      <Header />

      <h1 className="title">
        Realidade Virtual
      </h1>

      <div className="container-coluna">

        <h3 className="title-cards">
          O que é VR?
        </h3>
        <h4 className="cards-first">
          A sigla para Virtual Reality, ou  em português Realidade Virtual se refere a experiências virtuais onde o usuário utiliza um dispositivo especial, 
          normalmente um óculos, que o coloca em um ambiente digital de alta imersão e proporciona experiências de interação diferenciadas e divertidas.
        </h4>

        <h3 className="title-cards">
          Para que serve?
        </h3>
        <h4 className="cards-first">
          As aplicações práticas em VR são inúmeras. A mais obvia e comum delas, é no entretenimento, com jogos, brincadeiras e interações simples com ambientes virtuais. 
          Porém, há também uma vertente de desenvolvimento voltada a encontrar aplicações práticas para VR, que já podem ser vistas na Engenharia, Arquitetura, Eletrônica, 
          Medicina, Psicologia e muitos outros ramos que estão acordando para o uso da tecnologia de uma forma mais profunda e imersiva.
        </h4>

        <h3 className="title-cards">
          Qual a nossa especialidade?
        </h3>
        <h4 className="cards-first">
          Aqui na Allie nossas principais experiências com VR foram criadas no campo da engenharia, como visualização arquitetônica e visualização de projetos em construção, 
          ajudando nossos clientes a visualizarem seus projetos de forma realista, com base em projetos reais produzidos por engenheiros e arquitetos, dando a eles insights 
          poderosos antes mesmo de iniciar as obras de seus empreendimentos, evitando assim alterações ou correções durante a realização das obras, o que normalmente acarreta em custos adicionais, atrasos, entre outros problemas.
        </h4>

        <h3 className="title-cards">
          O que podemos fazer?
        </h3>
        <h4 className="cards-first">
          Apesar de nossa prática e conhecimento no ramo da Engenharia, trabalhando lado a lado com grandes parceiros como a IBR Engenharia, 
          as aplicações em VR podem ser inúmeras e nossa equipe está habilitada a criar e desenvolver experiências em realidade virtual para qualquer ramo de atuação, de forma totalmente personalizada e de acordo com as suas necessidades e objetivos. 
          Impressione seus clientes com experiências interativas em eventos, estandes, ou ambientes especialmente preparados, ou maximize o potencial de sua equipe com ferramentas personalizadas de interação virtual.
        </h4>
      </div>

        <div className="div-processo">
          <div>
            <h1 className="title-processo">
              Processo Criativo
            </h1>
            <h3 className="text-processo">
              Cada projeto de VR tem suas peculiaridades, por isso, nosso processo criativo é adaptado às necessidades de cada cliente, levando em conta o objetivo da experiência, 
              o público-alvo, os equipamentos disponíveis, entre muitos outros fatores.
            </h3>
          </div>

          <div className="container-coluna">
            <p>
              <h3 className="first-card">
                Uma experiência em realidade virtual é uma forma de se conectar com o público de sua empresa de uma maneira nunca antes vista! De visualizações arquitetônicas imersivas, 
                a experiências de entretenimento e criatividade, tudo é possível na criação de um mundo virtual.
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
                Experiências sob medida para o dispositivo da sua preferência, desde o mobile GoogleVR, até Oculus e Vive.
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
                Nosso time está preparado para lhe ajudar a criar toda a sua experiência, desde o conceito até a implementação.
              </h3>
            </p>
          </div>
        </div>

        <video src={ VR1 } type="video/mp4" controls width="80%"></video>

        <video src={ VR2 } type="video/mp4" controls width="80%"></video>

        <video src={ VR3 } type="video/mp4" controls width="80%"></video>

        <video src={ VR4 } type="video/mp4" controls width="80%"></video>

        <div>
          <h1 className="title-processo">
            Experimente
          </h1>
          <h3 className="text-processo">
            Venha visitar nosso estúdio de criação para ver a Realidade Virtual com os próprios olhos, 
            temos uma estrutura preparada pra te receber e te mostrar o potencial dessa tecnologia revolucionária.
          </h3>
        </div>

        <p/>
        <h4>
          Caso de Sucesso
        </h4>
        <p/>
        <h2>
          Casa de Máquinas
        </h2>
        <p/>

        <h4>
          A IBR Engenharia contou com a Allie para a criação de uma experiência em Realidade Virtual que auxilia no 
          treinamento de funcionários da manutenção de uma casa de máquinas, em um dos empreendimentos que projetaram para seus clientes. 
          Através da Realidade Virtual, os colaboradores podem explorar a casa de máquinas, e ver interativamente os nomes de cada equipamento de 
          acordo com as informações BIM providas pelos projetistas, facilitando a memorização das localizações, mesmo antes de a casa de máquinas começar a ser construída. 
          Além disso, é uma forma muito mais segura de treinar novos funcionários, uma vez que elimina qualquer risco inerente da função presencial.
        </h4>

        <video src={ VR5 } type="video/mp4" controls width="80%"></video>

      <Footer />

    </div>
  );
}

export default Realidade;