import React from 'react';
import '../style/Logins.css';
import { Link } from 'react-router-dom';


function Login () {
  return (   
      <body>

        <div id="login">

          <form class="card">

            <div class="card-header">

              <h2>Login</h2>

            </div>

            <div class="card-content">

              <div class="card-content-area">

                <label for="usuario">Usuário</label>

                <input type="text" id="usuario" autocomplete="off" />

              </div>

              <div class="card-content-area">

                <label for="password">Senha</label>

                <input type="password" id="password" autocomplete="off" />

              </div>

            </div>

            <div class="card-footer">

              <button type="submit" class="submit">Entrar</button>

              <Link to="/cadastro" className="cadastro">Não tem login? Cadastre-se</Link>

            </div>

          </form>

        </div>

      </body>
  );
}

export default Login;
