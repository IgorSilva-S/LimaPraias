import React from "react";
import "./update.css";

const Update = () => {
  return (
    <main id="update">
      <h1>Atualização De Dados</h1>
      <div>
        <label for="cpfInp">CPF:</label>
        <input type="text" id="cpfInp" name="cpfInp"><input>
      </div>
      <div id="oldData">
        <div id="Nome">Nome: </div>
        <div id="email">Email: </div>
        <div id="date">Date: </div>
        <div id="cep">Cep: </div>
        <div id="number">Number: </div>
      </div>

      <div id="newData">
        <form id="updateForm" action="">
        <input type="text" id="nameInp" placeholder="Nome"/>
        <div class="inpStyle">Gênero</div>
        <input type="email" id="emailInp" placeholder="E-Mail"/>
        <input type="phone" id="phoneInp" placeholder="Telefone"/>
        <input type="text" id="dateInp" placeholder="Data de nascimento"/>
        <input type="text" id="cepInp" placeholder="CEP"/>
        <input type="text" id="numberInp" placeholder="Número da casa"/>
        </form>
      </div>

      <button>Atualizar</button>
    </main>
  );
};

export default Update;