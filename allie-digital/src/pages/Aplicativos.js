import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../style/Aplicativos.css';
import aplicativos1 from '../image/aplicativos1.png';

function Aplicativos () {
return (
    <div>

      <Header />

      <h1 className="title">
        Aplicativos
      </h1>

      <ul className="nav">
          <li>
            <span>
              O que são Aplicativos?
            </span>
            <ul>
              <li>
                <h4 className="text-tour">
                  Hoje em dia é imprescindível estar presente nos dispositivos móveis de seu público. 
                  Aplicativos são programas feitos especialmente para esses dispositivos e podem cumprir diversos propósitos, 
                  que veremos nos tópicos a seguir.
                </h4>
              </li>
            </ul>

              <span>
                Para que serve?
              </span>
              <ul>
                <li>
                  <h4 className="text-tour">
                    Muitas empresas quando pensam em aplicativos, pensam na sua forma mais básica: marketing. 
                    Usar aplicativos para expandir sua oferta de um produto ou serviço, com mais facilidade de acesso e praticidade, 
                    hoje, é o básico que toda empresa deveria fazer. Porém há potencial para muito mais que isso. 
                    Você pode ter aplicativos para uso interno na sua empresa, com ferramentas de produtividade exclusivas e feitas sob medida para o seu estilo de gestão. 
                    Você pode ter aplicativos para se relacionar com fornecedores e parceiros, entre muitas outras formas de utilizá-los.
                  </h4>
                </li>
              </ul>

              <span>
                Qual a nossa especialidade?
              </span>
              <ul>
                <li>
                  <h4 className="text-tour">
                    Na Allie, nosso foco é na criação de ferramentas que potencializem os talentos de sua empresa, 
                    de acordo com suas peculiaridades, necessidades e objetivos.
                  </h4>
                </li>
              </ul>

              <span>
                O que podemos fazer?
              </span>
              <ul>
                <li>
                  <h4 className="text-tour">
                    A criação de aplicativos leva em consideração especialmente a disciplina de UX ou Experiência do Usuário, 
                    que leva em consideração o design, as funcionalidades, a acessibilidade, entre muitos outros fatores para dar ao usuário final uma experiência rica e transformadora. 
                    Aplicativos de produtividade, marketing, relacionamento e aprendizagem são as aplicações mais comuns para essa tecnologia, 
                    porém estamos prontos para ouvir suas ideias e transformá-las em realidade.
                  </h4>
                </li>
              </ul>

          </li>
        </ul>

        <div className="div-processo">
          <div>
            <h1 className="title-processo">
              Processo Criativo
            </h1>
            <h3 className="text-processo">
              Cada projeto de Aplicativo tem suas peculiaridades, por isso, nosso processo criativo é adaptado às necessidades de cada cliente, 
              levando em conta o objetivo da experiência, o público-alvo, os equipamentos disponíveis, entre muitos outros fatores.
            </h3>
          </div>

          <div className="container-coluna">
            <p>
              <h3 className="first-card">
                Um aplicativo próprio da sua empresa pode servir a diferentes propósitos, desde uma ferramenta de trabalho para seus colaboradores, 
                uma máquina de vendas para seu negócio, ou até mesmo uma forma de se conectar com o público de sua empresa de uma maneira diferenciada!
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Desenvolvimento
              </h2>
              <h3 className="text-grey">
                Utilizamos diversas linguagens de programação e diagramação de acordo com as características do projeto: 
                React Native, Swift, Go, C#, PHP, Javascript, entre outras.
              </h3>
            </p>

            <p className="cards-first">
              <h2 className="title-cards">
                Tecnologia
              </h2>
              <h3 className="text-grey">
                Aplicativos não estão presentes somente nos smartphones, você pode ter aplicações para serem utilizadas na web, 
                na sua rede interna ou mesmo instaladas nos computadores da sua empresa.
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
                Nosso time está preparado para lhe ajudar a criar seu aplicativo, desde o conceito até a implementação e 
                distribuição nas principais lojas de aplicativos, tanto para Android quanto iOS, ou para publicação na web e redes internas.
              </h3>
            </p>
          </div>
        </div>

        <p/>
        <h4>
          Caso de Sucesso
        </h4>
        <p/>
        <h2>
          Painel IBR Engenharia
        </h2>
        <p/>

        <h4>
          A IBR Engenharia contou com a Allie para a criação de seu painel para uso interno, 
          que permite aos engenheiros, arquitetos e projetistas cadastrarem todos os aspectos de cada projeto, 
          inclusive as informações BIM, documentações, assinaturas, atas, e muito mais. Uma das principais funções do painel 
          também é atuar na Inteligência do Negócio, dando aos gestores e project managers uma visão ampla de cada aspecto dos projetos, 
          com gráficos, métricas e registros das atividades de todos os colaboradores. Uma ferramenta completa e fundamental, que faz parte do dia-a-dia da IBR.
        </h4>

        <h3>
          Sob Medida
        </h3>
        <h4>
          O painel IBR foi feito levando em consideração o fluxo de trabalho das equipes, as metodologias utilizadas nos projetos, 
          entre muitos outros fatores, tornando-o especialmente útil e fácil de utilizar pelos colaboradores da IBR Engenharia.
        </h4>

        <h3>
          Incremental
        </h3>
        <h4>
          Mesmo após sua implementação, o app continuou a ser atualizado, de acordo com os feedbacks das equipes e gestores, 
          adaptando-se conforme evoluia. Esse desenvolvimento contínuo à pedido da própria empresa permitiu que a aplicação crescesse conforme as necessidades.
        </h4>

        <img src={ aplicativos1 } alt="imagem com o painel do aplicativo" className="img-painel" />

        <div>
          <h1 className="title-processo">
            Experimente
          </h1>
          <h3 className="text-processo">
            Venha visitar nosso estúdio de criação para ver os Aplicativos com os próprios olhos, 
            temos uma estrutura preparada pra te receber e te mostrar o potencial dessa tecnologia revolucionária.
          </h3>
        </div>

      <Footer />

    </div>
  );
}

export default Aplicativos;