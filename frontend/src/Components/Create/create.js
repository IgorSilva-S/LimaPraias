import React from 'react';
import './create.css';
import SideBar from '../SideBar';

function cpfOrder(caractere) {
  var value = caractere.target.value;
  var cpfPattern = value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
  caractere.target.value = cpfPattern;
}

function cepForm(caractere) {
  var value = caractere.target.value;
  var cepPattern = value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
  caractere.target.value = cepPattern;
}

function numForm(caractere) {
  var value = caractere.target.value;
  var numberPattern = value
    .replace(/(\D{1})(\D)/g, '$1')
    .toUpperCase()
    .replace(/(\d{1})(\D)/g, '$1')
    .replace(/(\d{5})\d+?$/, '$1');
  caractere.target.value = numberPattern;
}

function dateForm(caractere) {
  var value = caractere.target.value;
  var datePattern = value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})\d+?$/, '$1');
  caractere.target.value = datePattern;
}

export default function Create() {
  return (
    <main id="mainCreate">
      <SideBar />
      <div id="title-create">
        <h1>Criar Usuário</h1>
      </div>

      <form id="createForm" action="">
        <div className="createForm">
          <div className="column1-create">
            <input
              type="text"
              id="nameInp"
              placeholder="Nome:"
              required
              autoComplete="off"
            />

            <input
              type="email"
              id="emailInp"
              placeholder="E-Mail:"
              required
              autoComplete="off"
            />

            <input
              type="phone"
              id="phoneInp"
              placeholder="Telefone:"
              required
              autoComplete="off"
            />

            <input
              type="text"
              id="cpfInp"
              placeholder="CPF:"
              onInput={cpfOrder}
              autoComplete="off"
            />
          </div>

          <div className="column2-create">
            <input
              type="text"
              id="dateInp"
              placeholder="Data de nascimento:"
              required
              onInput={dateForm}
              autoComplete="off"
            />

            <input
              type="text"
              id="genInp"
              placeholder="Senha:"
              required
              autoComplete="off"
            />

            <input
              type="text"
              id="cepInp"
              placeholder="CEP:"
              onInput={cepForm}
              autoComplete="off"
            />

            <input
              type="text"
              id="numberInp"
              placeholder="Número da casa:"
              onInput={numForm}
              autoComplete="off"
            />
          </div>
        </div>
      </form>

      <input type="submit" value="Criar usuário" className="Button-create" />
    </main>
  );
}
