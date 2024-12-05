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
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
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
  async function createUser() {
    // Pegando a resposta da API
    const response = await fetch("http://localhost:3001/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: `${document.getElementById("nameInp").value} ${document.getElementById("surName").value}`,
        phone: `${document.getElementById("phoneInp").value}`,
        email: `${document.getElementById("emailInp").value}`,
        birthDate: `${document.getElementById("dateInp").value.split('/').reverse().join('-')}`,
        cep: `${document.getElementById("cepInp").value.replace(/[^\d]/g, "")}`,
        password: `${document.getElementById("passwordInp").value}`,
        cpf: `${document.getElementById("cpfInp").value.replace(/[^\d]/g, "")}`,
      }),
    });

    // Tratando a resposta
    const responseJson = await response.json()
    console.log(responseJson)
    if (responseJson.length > 0) {
      const formattedErrors = [];
      let i = 0;
      responseJson.forEach((erro) => {
        console.log(erro.message)
        formattedErrors[i] = `${erro.path} - ${erro.message} `;
        i = i + 1
      });
      i = 0;
      formattedErrors.forEach((erro) => {
        alert(formattedErrors[i])
        i = i + 1;
      });
    } else {
      if (response.status === 201) {
        alert("Usuário Criado com sucesso");
      } else if (responseJson.error === 1) {
        alert("Esse CPF ja foi cadastrado");
      } else {
        alert("Houve um erro interno, tente novamente mais tarde");
      }
    }
  }
  return (
    <main id="mainCreate">
      <SideBar />
      <div id="animation">
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
                onInput={numForm}
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
                id="surName"
                placeholder="Sobrenome:"
                required
                autoComplete="off"
              />

              <input
                type="text"
                id="passwordInp"
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
                id="dateInp"
                placeholder="Data de nascimento:"
                onInput={dateForm}
                autoComplete="off"
              />
            </div>
          </div>
        </form>

        <input
          onClick={createUser}
          type="submit"
          value="Criar usuário"
          className="Button-create"
        />
      </div>
    </main>
  );
}
