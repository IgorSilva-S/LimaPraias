import React from "react";
import "./create.css";

let isGenPopup = false
document.getElementById('genInp').addEventListener('click', () => {
  if (!isGenPopup) {
    document.getElementById('optionContainer').style.display = 'flex'
    isGenPopup = true
  } else {
    document.getElementById('optionContainer').removeAttribute('style')
    isGenPopup = false
  };
});

export default function Create() {
  return (
    <main id="create">
        <h1>Criar Usuário</h1>
        <form id="createForm" action="">
            <input type="text" id="nameInp" placeholder="Nome" required/>

            <input type="email" id="emailInp" placeholder="E-Mail" required/>

            <input type="phone" id="phoneInp" placeholder="Telefone" required/>

            <input type="text" id="cpfInp" placeholder="CPF"/>

            <input type="text" id="dateInp" placeholder="Data de nascimento" required/>

            <div class="inpStyle" id="genInp">
              <p id="boxValue">Gênero</p>
              <div class="opContainer" id="optionContainer">
                <div class="option">Masculino</div>
                <div class="option">Feminino</div>
                <div class="option">Prefiro não dizer</div>
              </div>
            </div>

            <input type="text" id="cepInp" placeholder="CEP"/> 
            
            <input type="text" id="numberInp" placeholder="Número da casa"/>

            <input type="submit" value="Submit"/>
        </form>
    </main>
  )
}