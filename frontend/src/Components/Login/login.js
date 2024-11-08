import React from "react";
import "./login.css";
import logo from "../../assets/img/logo_lima.png";

export default function Login() { 
  return (
    <body id="mainlogin">
      <div id="containertexto">
          <img src={logo} alt="logo" id="logologin"/>
          <h1 id="bemvindo">Bem Vindo!</h1>
          <div id="mensagemlogin"><h3>Favor faça login para acessar a área do funcionário.</h3></div>
      </div>
        <div id="login">
          <div id="contentid">
            <h1 id="h1login">LOGIN</h1>
            <form action="" method="get" class="form-login">
              <div class="form-login">
                <input type="text" name="name" id="name" placeholder="Nome:" required />
              </div>
              <div class="form-login">
                <input type="email" name="email" id="email" placeholder="E-mail:" required />
              </div>
              <div class="form-login">
                <input type="submit" value="Subscribe!" />
              </div>
            </form>
          </div>
        </div>
    </body>
  );
}
