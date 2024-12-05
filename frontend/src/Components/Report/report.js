import React, { useEffect, useState } from 'react';
import './report.css';
import search from '../../assets/img/search-img.png';
import SideBar from '../SideBar';

const Report = () => {
  async function searchUser(event) {
    event.preventDefault();
    let cpf = document.getElementById('cpf').value;
    const response = await fetch(`http://localhost:3001/api/users/listUser/${cpf.replace(/[^\d]/g, "")}`, { method: "GET" });
    const data = await response.json();
    console.log(data.Erro)
    if (data.Erro) {
      return alert("CPF não encontrado");
    }
    document.getElementById('nameOut').innerText = `Nome: ${data.user.fullName.split(' ').shift()}`;
    document.getElementById('cpfOut').innerText = `CPF: ${data.user.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')}`;
    document.getElementById('phoneOut').innerText = `Telefone: ${data.user.phone.replace(/^(\d{2})(\d{5})(\d{4})$/,'($1) $2-$3')}`;
    document.getElementById('cepOut').innerText = `CEP: ${data.user.cep ? data.user.cep : 'N/A'}`;
    document.getElementById('surNameOut').innerText = `Sobrenome: ${data.user.fullName.split(' ').pop()}`;
    document.getElementById('emailOut').innerText = `Email: ${data.user.email}`;
    document.getElementById('birthDateOut').innerText = `Data de Nascimento: ${new Date(data.user.birthDate).getUTCDate()}/${new Date(data.user.birthDate).getUTCMonth() + 1}/${new Date(data.user.birthDate).getUTCFullYear()}`;
    document.getElementById('passwordOut').innerText = `Senha: N/A`;
  }
  
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
  return (
    <main id="mainReport">
      <SideBar />
      <div id="animation">
        <div className="title-rep">
          <h1>Procurar</h1>
        </div>
        <div className="SearchSpace">
          <form action="" method="get" className="form-rep">
            <h2>CPF:</h2>
            <div id="searchBar">
              <input
                type="text"
                name="cpf"
                id="cpf"
                onInput={cpfOrder}
                required
              />
            </div>
            <div id="searchButton">
              <button onClick={searchUser}>
                <img src={search} alt="searchButton" />
              </button>
            </div>
          </form>
          <div className="responseContent">
            <div className="column1">
              <p id="nameOut">Nome: </p>
              <p id="cpfOut">CPF: </p>
              <p id="phoneOut">Telefone: </p>
              <p id="cepOut">CEP: </p>
            </div>
            <div className="column2">
              <p id="surNameOut">Sobrenome: </p>
              <p id="emailOut">Email: </p>
              <p id="birthDateOut">Data de Nascimento: </p>
              <p id="passwordOut">Senha: </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Report;
