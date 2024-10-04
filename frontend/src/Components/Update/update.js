import React from "react";
import "./update.css";

const Update = () => {
  document.getElementById("cpfInp").addEventListener("input", (caractere) => {
  var value = caractere.target.value;
  var cpfPattern = value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
  caractere.target.value = cpfPattern;
  });
  return (
    <>
      <main id="update">
        <h1 id="titleUpdate">Atualização De Dados</h1>
        <div id="cpf">
          <label for="cpfInp">CPF: </label>
          <input type="text" id="cpfInp" name="cpfInp" />
          <div id="searchButton" type="submit"><span class="material-symbols-outlined a">search</span></div>
        </div>
        <div id="data">
          <div class="datas" id="oldData">
            <div class="objetos old" id="name">Nome: </div>
            <div class="objetos old" id="lastName">Sobrenome: </div>
            <div class="objetos old" id="zipcode">Cep: </div>
            <div class="objetos old" id="email">Email: </div>
            <div class="objetos old" id="number">Telefone: </div>
            <div class="objetos old" id="gender">Gênero: </div>
          </div>
          <div class="datas" id="newData">
            <form id="updateForm">
              <input class="objetos new" type="text" id="nameInp" placeholder="Nome" />
              <input class="objetos new" type="text" id="lastNameInp" placeholder="Sobrenome" />
              <input class="objetos new" type="text" id="cepInp" placeholder="Cep" />
              <input class="objetos new" type="email" id="emailInp" placeholder="E-Mail" />
              <input class="objetos new" type="phone" id="phoneInp" placeholder="Telefone" />
              <input class="objetos new" type="text" id="genderInp" placeholder="Gênero" />
            </form>
          </div>
        </div> 
        <button id="submit" type="submit">Atualizar</button>
      </main>
    </>
  );
};

export default Update;