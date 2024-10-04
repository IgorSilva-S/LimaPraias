import React from "react";
import "./login.css";

export default function Login() {
  return (
    <main id="login">
      <div className="logo">
        <img src="#" alt="PraiApoio"/>
        <h1>Bem Vindo!</h1>
        <h3>FAVOR FAÇA LOGIN PARA ACESSAR A ÁREA DO FUNCIONÁRIO.</h3>
      </div>
      <div className="login">
        <h1>LOGIN</h1>
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
    </main>
  );
};