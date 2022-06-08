import React from 'react';
import '../style/Logins.css';

function Login () {

    <div>
    <div>
        <head>
        <title>Login</title>
        </head>
    </div>
    
    <body>
            <div class="container">
                <div class="container-login">
                    <div class="wrap-login">
                        <form class="login-form">
                            <span class="login-form-title">
                                Faça o login
                            </span>

                            <div class="wrap-input margin-top-35 margin-bottom-35">
                                <input class="input-form" type="text" name="email" autocomplete="off" />
                                <span class="focus-input-form" data-placeholder="E-mail"></span>
                            </div>

                            <div class="wrap-input margin-bottom-35">
                                <input class="input-form" type="password" name="password" />
                                    <span class="focus-input-form" data-placeholder="Senha"></span>
                                </div>

                            <div class="container-login-form-btn">
                                <button class="login-form-btn">
                                    Login
                                </button>
                            </div>

                            <ul class="login-utils">
                                <li class="margin-bottom-8 margin-top-8">
                                    <span class="text1">
                                        Esqueceu sua
                                    </span>

                                    <a href="#" class="text2">
                                        senha?
                                    </a>
                                </li>

                                <li>
                                    <span class="text1">
                                        Não tem conta?
                                    </span>

                                    <a href="#" class="text2">
                                        Criar
                                    </a>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <img src="images/login.png" width="300" height="300" class="margin-left-50" />
                </div>
            </div>

        </body>
    </div>
}

export default Login;
