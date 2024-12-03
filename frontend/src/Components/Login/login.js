import React from "react";
import "./login.css";
import logo from "../../assets/img/logo_lima.png";

function showPassword() {
  let isChecked = document.getElementById('showPasswordCheckbox').checked
  if (isChecked) {
    document.getElementById('password').type = 'text'
  } else {
    document.getElementById('password').type = 'password'
  }
}

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
            <form action="" method="get">
              <div class="form-login">
                <input type="email" name="email" id="email" placeholder="E-Mail:" required autocomplete="off"/>
              </div>
              <div class="form-login">
                <input type="password" name="password" id="password" placeholder="Senha:" required autocomplete="off" />
              </div>
              <div className="form-login-checkbox">
                <input type="checkbox" id="showPasswordCheckbox" onChange={showPassword}/> <label for="showPasswordCheckbox">Mostrar Senha</label>
              </div>
              <div class="form-login" id="submitlogin">
                <input type="submit" value="Entrar" />
              </div>
            </form>
          </div>
        </div>
    </body>
  );
}
