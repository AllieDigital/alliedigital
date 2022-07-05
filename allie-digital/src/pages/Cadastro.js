import React from 'react';
import '../style/Cadastros.css';

function Cadastro () {
  return (
    <body>

        <div id="login2">

          <form class="card">

            <div class="card-header2">

              <h2>Cadastro</h2>

            </div>

            <div class="card-content">

              <div className="nome-cadastro">
                <div class="card-content-area">

                  <label for="nome">Nome</label>

                  <input type="text" id="usuario" />
                </div>
              </div>

              <div className="endereco">

                <div class="card-content-area">

                  <label for="cep">Cep</label>

                  <input id="usuario" />

                </div>
                <div class="card-content-area">

                  <label for="rua">Rua</label>

                  <input type="text" id="usuario" />

                </div>
                <div class="card-content-area">

                  <label for="numero">Número</label>

                  <input id="usuario" />

                </div>
                <div class="card-content-area">

                  <label for="complemento">Complemento</label>

                  <input type="text" id="usuario" />

                </div>
                <div class="card-content-area">

                  <label for="cidade">Cidade</label>

                  <input type="text" id="usuario" />

                </div>
                <div class="card-content-area">

                  <label for="estado">Estado</label>

                  <input type="text" id="usuario" />

                </div>

              </div>

              <div className="area-usuario">
                <div class="card-content-area">

                  <label for="usuario">Email</label>

                  <input type="text" id="usuario" />

                </div>

                <div class="card-content-area">

                  <label for="usuario">Usuário</label>

                  <input type="text" id="usuario" />

                </div>

                <div class="card-content-area">

                  <label for="password">Senha</label>

                  <input type="password" id="password" />

                </div>
              </div>

            </div>

            <div class="card-footer">

              <button type="submit" class="submit">Cadastrar</button>

            </div>

          </form>

        </div>

      </body>
  );
}

export default Cadastro;
