import React from "react"
import './style.css'

export default function SideBar() {
    return (
        <div className="sideBar">
            <button className="item create">
                <p>Criar</p>
            </button>
            <button className="item report">
                <p>Procurar</p>
            </button>
            <button className="item update">
                <p>Atualizar</p>
            </button>
            <button className="item delete">
                <p>Deletar</p>
            </button>
        </div>
    )
}