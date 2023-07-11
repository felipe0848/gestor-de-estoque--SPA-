import Button from "../../Components/Button/Button";
import useItemsCollection from "../../hooks/useItemsCollection";

export default function PageItem() {
  const { removeItem, itemsInStock } = useItemsCollection();

  const id = "5hkfmfr2-4x3i-6cnf-z378-as0gzcsb7ey3";
  const [{ name, qtd, price, category, description, createAt, updateAt }] = itemsInStock.filter(
    (current) => current.id === id
  );
    const createDate = new Date (createAt)
    const updateDate = new Date (updateAt)
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
        <p>Cadastrado em: {createDate.toLocaleDateString('pt-br') + ' às ' + createDate.toLocaleTimeString('pt-br')}</p>
        <p>Atualizado em: {updateDate.toLocaleDateString('pt-br') + ' às ' + updateDate.toLocaleTimeString('pt-br')}</p>
      </div>
    </>
  );
}
