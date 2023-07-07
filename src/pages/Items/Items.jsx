import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./Items.css"
import { useState } from "react";
import AllItemsTable from "../../Components/AllItemsTable/AllItemsTable";

export default function Items(){
    const [selected, setSelected] = useState("Todos os items")

    const handleSelect = (current)=> current === "Todos os items" ? setSelected("Todos os items") : setSelected("Novo item")


    return(
        <>
            <Header/>
            <div className="container">
                <h2>Stock Items</h2>
                <div className="navItems">
                    <Link to={"/items"} className={selected === "Todos os items" ? "selected" : ""} onClick={(ev)=>handleSelect(ev.target.innerText)}>Todos os items</Link>
                    <Link to={"/items"} className={selected === "Novo item" ? "selected" : ""} onClick={(ev)=>handleSelect(ev.target.innerText)}>Novo item</Link>
                </div>

                <AllItemsTable items={[
                    {id:"Lorem ipsum dolor sit amet.", title:"7 Wonders", qtd: 8, category:"Jogos"},
                    {id:"Lorem ipsum dolor sit ame", title:"O senhor dos Anéis", qtd: 32, category:"Livros"}
                ]}/>

            </div>
        </>
    )
}