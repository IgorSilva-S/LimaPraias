import React, { useEffect, useState } from 'react';
import './report.css';
import search from '../../assets/img/search-img.png';
import SideBar from '../SideBar';

const Report = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cpfParam = urlParams.get('cpf');
    if (!cpfParam) {
      return;
    }
    const cpf = parseInt(cpfParam.replace(/[^\d]/g, ''), 10);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/users/listUser/${cpf}`,
          { method: 'GET' }
        );
        const data = await response.json();
        document.getElementById('cpf').value = `${data.user.cpf.replace(
          /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
          '$1.$2.$3-$4'
        )}`;
        document.getElementById(
          'nameOut'
        ).innerText = `Nome: ${data.user.fullName.split(' ').shift()}`;
        document.getElementById(
          'cpfOut'
        ).innerText = `CPF: ${data.user.cpf.replace(
          /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
          '$1.$2.$3-$4'
        )}`;
        document.getElementById(
          'phoneOut'
        ).innerText = `Telefone: ${data.user.phone.replace(
          /^(\d{2})(\d{5})(\d{4})$/,
          '($1) $2-$3'
        )}`;
        document.getElementById('cepOut').innerText = `CEP: ${
          data.user.cep ? data.user.cep : 'N/A'
        }`;
        document.getElementById(
          'surnameOut'
        ).innerText = `Sobrenome: ${data.user.fullName.split(' ').pop()}`;
        document.getElementById(
          'emailOut'
        ).innerText = `Email: ${data.user.email}`;
        document.getElementById(
          'birthDateOut'
        ).innerText = `Data de Nascimento: ${new Date(
          data.user.birthDate
        ).getUTCDate()}/${
          new Date(data.user.birthDate).getUTCMonth() + 1
        }/${new Date(data.user.birthDate).getUTCFullYear()}`;
        document.getElementById('passwordOut').innerText = `Senha: N/A`;
      } catch (error) {
        console.log(error);
      }
    };
    if (cpf) {
      fetchData();
    }
  }, []);
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
      <div className="title-rep">
        <h1>Procurar</h1>
      </div>
      <div className="SearchSpace">
        <form action="" method="get" className="form-rep">
          <h2>CPF:</h2>
          <div id="searchBar">
            <input type="text" name="cpf" id="cpf" onInput={cpfOrder} required />
          </div>
          <div id="searchButton">
            <button>
              <img src={search} alt="searchButton" />
            </button>
          </div>
        </form>
        <div className="responseContent">
          <div className="column1">
            <p>Nome: </p>
            <p>CPF: </p>
            <p>Telefone: </p>
            <p>CEP: </p>
          </div>
          <div className="column2">
            <p>Sobrenome: </p>
            <p>Email: </p>
            <p>Data de Nascimento: </p>
            <p>Senha: </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Report;
