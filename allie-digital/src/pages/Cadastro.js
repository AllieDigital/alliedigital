import React from 'react';
import '../style/Cadastros.css';

function Cadastro () {
  return (
    <body>

        <div id="login">

          <form class="card">

            <div class="card-header">

              <h2>Cadastro</h2>

            </div>

            <div class="card-content">

              <div class="card-content-area">

                <label for="usuario">Nome</label>

                <input type="text" id="usuario" autocomplete="off" />

              </div>

              <div class="card-content-area">

                <label for="password">Endereço</label>

                <input type="password" id="password" autocomplete="off" />

              </div>

              <div class="card-content-area">

                <label for="password">Usuário</label>

                <input type="password" id="password" autocomplete="off" />

              </div>

              <div class="card-content-area">

                <label for="password">Senha</label>

                <input type="password" id="password" autocomplete="off" />

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
