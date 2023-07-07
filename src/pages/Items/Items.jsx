import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./Items.css"
import { useState } from "react";

export default function Items(){
    const [selected, setSelected] = useState("Todos os items")

    const handleSelect = (current)=> current === "Todos os items" ? setSelected("Todos os items") : setSelected("Novo item")


    return(
        <>
            <Header/>
            <div className="container">
                <h2>Stock Items</h2>
                <div className="NavItems">
                    <Link to={"/items"} className={selected === "Todos os items" ? "selected" : ""} onClick={(ev)=>handleSelect(ev.target.innerText)}>Todos os items</Link>
                    <Link to={"/items"} className={selected === "Novo item" ? "selected" : ""} onClick={(ev)=>handleSelect(ev.target.innerText)}>Novo item</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Em Estoque</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>7 Wonders</td>
                            <td>8 unid.</td>
                            <td>Jogos</td>
                            <td>
                                <button>Ver</button>
                                <button>Atualizar</button>
                                <button>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>O senhor dos Anéis</td>
                            <td>32 unid.</td>
                            <td>Livros</td>
                            <td>
                                <button>Ver</button>
                                <button>Atualizar</button>
                                <button>Excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}