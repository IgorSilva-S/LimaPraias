import React from "react"
import './style.css'

export default function SideBar() {
    function changePage(namePage) {
        document.getElementById('create').style.display = 'none'
        document.getElementById('report').style.display = 'none'
        document.getElementById('update').style.display = 'none'
        document.getElementById('delete').style.display = 'none'

        document.getElementById(namePage).removeAttribute('style')
    }

    return (
        <div className="sideBar">
            <button onClick={() => changePage("Create")} className="item create" >
                <p>Criar</p>
            </button>
            <button onClick={() => changePage("report")} className="item report">
                <p>Procurar</p>
            </button>
            <button onClick={() => changePage("update")} className="item update">
                <p>Atualizar</p>
            </button>
            <button onClick={() => changePage("delete")} className="item delete">
                <p>Deletar</p>
            </button>
        </div>
    )
}