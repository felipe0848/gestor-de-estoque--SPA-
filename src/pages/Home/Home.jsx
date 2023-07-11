import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import CriticStockTable from "../../Components/CriticStockTable/CriticStockTable";
import RecentsTable from "../../Components/RecentsTable/RecentsTable";
import useItemsCollection from "../../hooks/useItemsCollection";
import "./Home.css";

export default function Home() {
  const { itemsInStock } = useItemsCollection();

  const recentesItems = itemsInStock;
  const criticItems = itemsInStock.filter((item) => +item.qtd < 10);
  const qtdTotal = itemsInStock.reduce((accum, item) => accum + +item.qtd, 0);

  return (
    <>
      <div className="container">
        <h2>Dashboard</h2>
        <div className="cards ">
          <Link to={"/items"} className="card cardHover">
            <Card label={"Diversidade de itens"} qtd={itemsInStock.length} />
          </Link>
          <Link to={"/items"} className="card cardHover">
            <Card label={"Inventário total"} qtd={qtdTotal} />
          </Link>
          <Link to={"/items"} className="card cardHover">
            <Card label={"Itens recentes"} qtd={recentesItems.length} />
          </Link>
          <Link to={"/items"} className="card cardHover">
            <Card label={"Itens acabando"} qtd={criticItems.length} />
          </Link>
        </div>

        <div className="tables">
          <RecentsTable itens={recentesItems} />
          <CriticStockTable itens={criticItems} />
        </div>
      </div>
    </>
  );
}
