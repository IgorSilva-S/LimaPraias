import React from "react"
import './style.css'

export default function SideBar() {
    function changePage(name) {
        console.log('a')
    }
    return (
        <div className="sideBar">
            <button onClick={() => changePage("create")} className="item create">
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