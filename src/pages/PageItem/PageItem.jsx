import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import useItemsCollection from "../../hooks/useItemsCollection";
import "./PageItem.css";

export default function PageItem() {
  const { removeItem, itemsInStock } = useItemsCollection();
  const { itemId } = useParams();
  const navigate = useNavigate();

  const { name, qtd, price, category, description, createAt, updateAt } =
    itemsInStock.find((current) => current.id === itemId);
  const createDate = new Date(createAt);
  const updateDate = new Date(updateAt);

  return (
    <div className="container">
      <div className="title">
        <h2>{name}</h2>
        <Link to={`/items/new-item/${itemId}`}>
          <Button className="update" text="Atualizar" />
        </Link>
        <Button
          className="delete"
          onClick={() => (removeItem(itemId), history.back())}
          text="Excluir"
        />
      </div>
      <div className="cards-info">
        <div className="card-info">Categoria: {category}</div>
        <div className="card-info">Quantidade em estoque: {qtd}</div>
        <div className="card-info">Preço: R$ {price}</div>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="dates">
        <p>
          Cadastrado em:{" "}
          {createDate.toLocaleDateString("pt-br") +
            " às " +
            createDate.toLocaleTimeString("pt-br")}
        </p>
        <p>
          Atualizado em:{" "}
          {updateDate.toLocaleDateString("pt-br") +
            " às " +
            updateDate.toLocaleTimeString("pt-br")}
        </p>
      </div>
    </div>
  );
}
