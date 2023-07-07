import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./Items.css"
import AllItemsTable from "../../Components/AllItemsTable/AllItemsTable";

export default function Items(){

    return(
        <>
            <AllItemsTable items={[
                {id:"Lorem ipsum dolor sit amet.", title:"7 Wonders", qtd: 8, category:"Jogos"},
                {id:"Lorem ipsum dolor sit ame", title:"O senhor dos Anéis", qtd: 32, category:"Livros"}
            ]}/>
        </>
    )
}