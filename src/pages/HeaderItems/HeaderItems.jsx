import { Link, Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useState } from "react";

export default function HeaderItems(){
    const [selected, setSelected] = useState("allItems")

    
    return(
        <>
            <Header/>
            <div className="container">
                <h2>Stock Items</h2>
                <div className="navItems">
                    <Link to={"/items"} className={selected === "allItems" ? "selected" : ""} id="allItems" onClick={(ev)=>setSelected(ev.target.id)}>Todos os items</Link>
                    <Link to={"/items/new-item"} className={selected === "newItem" ? "selected" : ""} id="newItem" onClick={(ev)=>setSelected(ev.target.id)}>Novo item</Link>
                </div>
                <Outlet/>
            </div>
        </>
    )
}