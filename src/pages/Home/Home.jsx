
import Card from "../../Components/Card/Card"
import CriticStockTable from "../../Components/CriticStockTable/CriticStockTable"
import Header from "../../Components/Header/Header"
import RecentsTable from "../../Components/RecentsTable/RecentsTable"
import "./Home.css"

export default function Home(){
    return(
        <>
            <div className="container">
            <h2>Dashboard</h2>
                <div className="cards">
                    <Card label={"Diversidade de itens"} qtd={2}/>
                    <Card label={"Inventário total"} qtd={40}/>
                    <Card label={"Itens recentes"} qtd={2}/>
                    <Card label={"Itens acabando"} qtd={1}/>

                </div>

                <div className="tables">
                    <RecentsTable itens={[{title:"7 Worders"},{title:"O Senhor dos Anéis"}]}/>
                    <CriticStockTable itens={[{title:"7 Worders", qtd:8}]}/>

                </div>
            </div>
        </>
    )
}