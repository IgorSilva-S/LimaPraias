import React from 'react';
import './update.css';
import search from '../../assets/img/search-img.png';
import SideBar from '../SideBar';

const Update = () => {
  let cpf;
  async function searchUser(event) {
    event.preventDefault();
    cpf = document.getElementById("cpfInp").value;
    if (!cpf) {
      return alert('Digite um cpf!')
    }
    const response = await fetch(`http://localhost:3001/api/users/listUser/${cpf.replace(/[^\d]/g, "")}`, { method: "GET" });
    const data = await response.json();
    if (data.Erro) {
      cpf = null;
      document.getElementById('name').innerText = `Nome:`;
      document.getElementById('number').innerText = `Telefone:`;
      document.getElementById('zipcode').innerText = `CEP:`;
      document.getElementById('lastName').innerText = `Sobrenome:`;
      document.getElementById("email").innerText = `Email`;
      document.getElementById("password").innerText = `Senha:`;
      return alert("CPF não encontrado");
    }
    document.getElementById('name').innerText = `Nome: ${data.user.fullName.split(' ').shift()}`;
    document.getElementById('number').innerText = `Telefone: ${data.user.phone.replace(/^(\d{2})(\d{5})(\d{4})$/,'($1) $2-$3')}`;
    document.getElementById('zipcode').innerText = `CEP: ${data.user.cep ? data.user.cep : 'N/A'}`;
    document.getElementById('lastName').innerText = `Sobrenome: ${data.user.fullName.split(' ').pop()}`;
    document.getElementById("email").innerText = `Email: ${data.user.email}`;
    document.getElementById("password").innerText = `Senha: N/A`;
  }

  async function updateUser(event) {
    if (!cpf) {
      return alert('Primeiro pesquise por um usuário!')
    }
    const response = await fetch(`http://localhost:3001/api/users/updateUser/${cpf.replace(/[^\d]/g, "")}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: `${document.getElementById("nameInp").value} ${document.getElementById("lastNameInp").value}`,
        phone: `${document.getElementById("phoneInp").value}`,
        email: `${document.getElementById("emailInp").value}`,
        cep: `${document.getElementById("cepInp").value.replace(/[^\d]/g, "")}`,
        password: `${document.getElementById("passwordInp").value}`,
      }),
    });
    if (response.status === 200) {
      alert('Usuário atualizado com sucesso')
      document.getElementById("nameInp").value = null;
      document.getElementById("phoneInp").value = null;
      document.getElementById("emailInp").value = null;
      document.getElementById("lastNameInp").value = null;
      document.getElementById("cepInp").value = null;
      document.getElementById("passwordInp").value = null;
      return searchUser(event)
    } else {
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
      }
    }
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

  return (
    <>
      <main id="MainUpdate">
        <SideBar />
        <h1 id="titleUpdate">Atualização De Dados</h1>
        <div id="cpf" className="SearchSpace-update">
          <label for="cpfInp">CPF: </label>
          <input type="text" id="cpfInp" name="cpfInp" onInput={cpfOrder} />
          <div id="searchButton-update">
            <button onClick={searchUser}>
              <img src={search} alt="searchButton" />
            </button>
          </div>
        </div>
        <div id="data" className="data-update">
          <div class="datas" id="oldData">
            <div className="objetos old" id="name">
              Nome:{" "}
            </div>
            <div className="objetos old" id="lastName">
              Sobrenome:{" "}
            </div>
            <div className="objetos old" id="zipcode">
              Cep:{" "}
            </div>
            <div className="objetos old" id="email">
              Email:{" "}
            </div>
            <div className="objetos old" id="number">
              Telefone:{" "}
            </div>
            <div className="objetos old" id="password">
              Senha:{" "}
            </div>
          </div>
          <div className="datas-update" id="newData">
            <form id="updateForm">
              <input
                className="objetos new"
                type="text"
                id="nameInp"
                placeholder="Nome:"
              />
              <input
                className="objetos new"
                type="text"
                id="lastNameInp"
                placeholder="Sobrenome:"
              />
              <input
                className="objetos new"
                type="text"
                id="cepInp"
                placeholder="Cep:"
              />
              <input
                className="objetos new"
                type="email"
                id="emailInp"
                placeholder="Email:"
              />
              <input
                className="objetos new"
                type="phone"
                id="phoneInp"
                placeholder="Telefone:"
              />
              <input
                className="objetos new"
                type="text"
                id="passwordInp"
                placeholder="Senha:"
              />
            </form>
          </div>
        </div>
        <button onClick={updateUser} className="Button-update" id="submit" type="submit">
          Atualizar
        </button>
      </main>
    </>
  );
};

export default Update;
