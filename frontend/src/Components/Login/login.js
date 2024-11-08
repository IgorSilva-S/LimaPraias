import React from "react";
import "./login.css";
import logo from "../../assets/img/logo_lima.png";

export default function Login() {
  return (
    <body id="mainlogin">
      <div id="containertexto">
          <img src={logo} alt="logo" id="logologin"/>
          <h1 className="h1login" id="bemvindo">Bem Vindo!</h1>
          <h3>FAVOR FAÇA LOGIN PARA ACESSAR A ÁREA DO FUNCIONÁRIO.</h3>
      </div>
        <div id="login">
          <div id="contentid">
            <h1 className="h1login">LOGIN</h1>
            <form action="" method="get" class="form-login">
              <div class="form-login">
                <input type="text" name="name" id="name" required />
              </div>
              <div class="form-login">
                <input type="email" name="email" id="email" required />
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
