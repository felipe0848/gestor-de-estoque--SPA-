import Button from "../../Components/Button/Button";
import useItemsCollection from "../../hooks/useItemsCollection";

export default function PageItem() {
  const { removeItem, itemsInStock } = useItemsCollection();

  const id = "b80od4mt-11mc-o7bk-ute7-3xc8ze7jkw83";
  const [{ name, qtd, price, category, description }] = itemsInStock.filter(
    (current) => current.id === id
  );

  return (
    <>
      <div className="title">
        <h2>{name}</h2>
        <Button className="update" text="Atualizar" />
        <Button
          className="delete"
          onClick={() => removeItem(id)}
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
        <p>Cadastrado em: {"11/07/2023 às 08:52"}</p>
        <p>Atualizado em: {"11/07/2023 às 08:52"}</p>
      </div>
    </>
  );
}
