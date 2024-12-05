import React from 'react';
import './delete.css';
import SideBar from '../SideBar';
import search from '../../assets/img/search-imgdel.png';

const Delete = () => {
  let cpf;
  async function searchUser(event) {
    event.preventDefault();
    cpf = document.getElementById('cpf').value;
    if (!cpf) {
      alert('Digite um CPF!')
    }
    const response = await fetch(`http://localhost:3001/api/users/listUser/${cpf.replace(/[^\d]/g, "")}`, { method: "GET" });
    const data = await response.json();
    if (data.Erro) {
      document.getElementById("cpf").value = null;
      document.getElementById('nameOut').innerText = `Nome:`;
      document.getElementById('surNameOut').innerText = `Sobrenome:`;
      return alert("CPF não encontrado");
    }
    document.getElementById('nameOut').innerText = `Nome: ${data.user.fullName.split(' ').shift()}`;
    document.getElementById('surNameOut').innerText = `Sobrenome: ${data.user.fullName.split(' ').pop()}`;
  }

  async function deleteUser(event) {
    event.preventDefault();
    if (!cpf) {
      return alert("Digite um cpf!");
    }
    const response = await fetch(`http://localhost:3001/api/users/deleteUser/${cpf.replace(/[^\d]/g, "")}`, { method: "DELETE" });
    if (response.status === 200) {
      document.getElementById("cpf").value = null;
      document.getElementById("surNameOut").innerText = `Sobrenome:`;
      document.getElementById("surNameOut").innerText = `Sobrenome:`;
      return alert("Usuário deletado com sucesso");
    } else {
      alert('Ocorreu um erro inesperado. Tente novamente mais tarde!')
    }
  }
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
            <button onClick={searchUser} id="lupa" className="searchButton-del">
              <img src={search} alt="searchButton" />
            </button>
          </div>
        </div>
        <div class="info-del">
          <p id="nameOut">Nome:</p>
          <p id="surNameOut">Sobrenome:</p>
        </div>
        <button onClick={deleteUser} className="botaoDeletar">DELETAR</button>
      </main>
    </>
  );
};

export default Delete;
