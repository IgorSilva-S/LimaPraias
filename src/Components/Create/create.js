import React from "react";
import "./create.css";

let isGenPopup = false
function openGen() {
  if (!isGenPopup) {
    document.getElementById('optionContainer').style.display = 'flex'
    isGenPopup = true
  } else {
    document.getElementById('optionContainer').removeAttribute('style')
    isGenPopup = false
  };
}

function cpfOrder(caractere) {
  var value = caractere.target.value;
  var cpfPattern = value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
  caractere.target.value = cpfPattern;
}

function cepForm(caractere) {
  var value = caractere.target.value;
  var cepPattern = value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1"); 
  caractere.target.value = cepPattern;
}

function numForm(caractere) {
  var value = caractere.target.value;
  var numberPattern = value
    .replace(/(\D{1})(\D)/g, "$1").toUpperCase()
    .replace(/(\d{1})(\D)/g, "$1")
    .replace(/(\d{5})\d+?$/, "$1");
  caractere.target.value = numberPattern;
}

function dateForm(caractere) {
  var value = caractere.target.value;
  var datePattern = value
  .replace(/\D/g, "")
  .replace(/(\d{2})(\d)/, "$1/$2")
  .replace(/(\d{2})(\d)/, "$1/$2")
  .replace(/(\d{4})\d+?$/, "$1"); 
  caractere.target.value = datePattern;
}

export default function Create() {
  return (
    <main id="create">
      <h1>Criar Usuário</h1>
      <form id="createForm" action="">
        <input type="text" id="nameInp" placeholder="Nome" required />

        <input type="email" id="emailInp" placeholder="E-Mail" required />

        <input type="phone" id="phoneInp" placeholder="Telefone" required />

        <input type="text" id="cpfInp" placeholder="CPF" onInput={cpfOrder}/>

        <input type="text" id="dateInp" placeholder="Data de nascimento" required onInput={dateForm}/>

        <div className="inpStyle" id="genInp" onClick={openGen}>
          <p id="boxValue">Gênero</p>
          <div className="opContainer" id="optionContainer">
            <div className="option">Masculino</div>
            <div className="option">Feminino</div>
            <div className="option">Prefiro não dizer</div>
          </div>
        </div>

        <input type="text" id="cepInp" placeholder="CEP" onInput={cepForm}/>

        <input type="text" id="numberInp" placeholder="Número da casa" onInput={numForm}/>

        <input type="submit" value="Criar usuário" />
      </form>
    </main>
  )
}