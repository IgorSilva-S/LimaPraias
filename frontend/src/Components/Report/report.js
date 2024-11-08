import React from "react";
import "./report.css";
import search from "../../assets/img/search-img.png";

const Report = () => {
    return (
      <main id="mainReport">
        <div className="title-rep">
          <h1>Procurar</h1>
        </div>
        <div className="SearchSpace">
          <form action="" method="get" className="form-rep">
            <h2>CPF:</h2>
            <div id="searchBar">
              <input type="text" name="cpf" id="cpf" required />
            </div>
            <div id="searchButton">
              <button>
                <img src={search} alt="searchButton" />
              </button>
            </div>
          </form>
          <div className="responseContent">
            <div className="column1">
              <h3>Nome: </h3>
              <h3>CPF: </h3>
              <h3>Telefone: </h3>
              <h3>CEP: </h3>
            </div>
            <div className="column2">
              <h3>Sobrenome: </h3>
              <h3>Email: </h3>
              <h3>Data de Nascimento: </h3>
              <h3>Gênero: </h3>
            </div>
          </div>
        </div>
      </main>
    );
};

export default Report;