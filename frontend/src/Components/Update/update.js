import React from 'react';
import './update.css';
import search from '../../assets/img/search-img.png';
import SideBar from '../SideBar';

const Update = () => {
  // document.getElementById("cpfInp").addEventListener("input", (caractere) => {
  // var value = caractere.target.value;
  // var cpfPattern = value
  //   .replace(/\D/g, "")
  //   .replace(/(\d{3})(\d)/, "$1.$2")
  //   .replace(/(\d{3})(\d)/, "$1.$2")
  //   .replace(/(\d{3})(\d)/, "$1-$2")
  //   .replace(/(-\d{2})\d+?$/, "$1");
  // caractere.target.value = cpfPattern;
  // });
  return (
    <>
      <main id="MainUpdate">
        <SideBar />
        <h1 id="titleUpdate">Atualização De Dados</h1>
        <div id="cpf" className="SearchSpace-update">
          <label for="cpfInp">CPF: </label>
          <input type="text" id="cpfInp" name="cpfInp" />
          <div id="searchButton-update">
            <button>
              <img src={search} alt="searchButton" />
            </button>
          </div>
        </div>
        <div id="data" className="data-update">
          <div class="datas" id="oldData">
            <div className="objetos old" id="name">
              Nome:{' '}
            </div>
            <div className="objetos old" id="lastName">
              Sobrenome:{' '}
            </div>
            <div className="objetos old" id="zipcode">
              Cep:{' '}
            </div>
            <div className="objetos old" id="email">
              Email:{' '}
            </div>
            <div className="objetos old" id="number">
              Telefone:{' '}
            </div>
            <div className="objetos old" id="gender">
              Gênero:{' '}
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
                placeholder="EMail:"
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
                id="genderInp"
                placeholder="Gênero:"
              />
            </form>
          </div>
        </div>
        <button className="Button-update" id="submit" type="submit">
          Atualizar
        </button>
      </main>
    </>
  );
};

export default Update;
