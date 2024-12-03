import React from 'react';
import './delete.css';
import SideBar from '../SideBar';
import search from '../../assets/img/search-imgdel.png';

const Delete = () => {
  return (
    <>
      <main id="mainDelete">
        <SideBar />
        <div className="title-del">
          <h1>DELETAR CONTA</h1>
        </div>
        <div className="SearchSpace-del">
          <h2>CPF:</h2>
          <div className="searchInp-del">
            <input type="text" name="cpf" id="cpf" required />
            <button id="lupa" className="searchButton-del">
              <img src={search} alt="searchButton" />
            </button>
          </div>
        </div>
        <div class="info-del">
          <p>Nome:</p>
          <p>Sobrenome:</p>
        </div>
        <button className="botaoDeletar">DELETAR</button>
      </main>
    </>
  );
};

export default Delete;
