import React from "react";
import "./delete.css";

const Delete = () => {
  return (
    <>
          <section id="Delete">
        <h1>DELETAR CONTA</h1>
        <div class="linhaPesquisa">
            <h3>CPF:</h3>
            <input type="text"/>
            <div id="lupa"><ion-icon name="search-outline"></ion-icon></div>
        </div>
        <div class="info">
            <p>NOME:</p>
            <p>SOBRENOME</p>
        </div>

        <button class="botaoDeletar">DELETAR</button>
    </section>

<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </>
  );
};

export default Delete;