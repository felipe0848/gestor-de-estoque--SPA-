import { useState } from "react";
import "./NewItem.css";
import useItemsCollection from "../../hooks/useItemsCollection";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function NewItem() {
  const { saveItem, itemsInStock } = useItemsCollection();
  const navigate = useNavigate();
  const { itemId } = useParams();

  const item = itemsInStock.find((current) => current.id === itemId);

  const [name, setName] = useState(() => (!!item ? item.name : ""));
  const [qtd, setQtd] = useState(() => (!!item ? item.qtd : 1));
  const [price, setPrice] = useState(() => (!!item ? item.price : 0.01));
  const [category, setCategory] = useState(() => (!!item ? item.category : ""));
  const [description, setDescription] = useState(() =>
    !!item ? item.description : ""
  );

  const handleSubmit = (ev) => {
    ev.preventDefault();
    saveItem({ itemId, name, qtd, price, category, description });
    !!itemId ? navigate("/items") : setName("");
    setQtd(0);
    setPrice(0);
    setCategory("");
    setDescription("");
  };

  return (
    <>
      <form className="FormNewItem" onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="qtd">Quantidade:</label>
            <input
              type="number"
              id="qtd"
              required
              value={qtd}
              onChange={(e) =>
                setQtd(e.currentTarget.value > 0 ? e.currentTarget.value : qtd)
              }
              onClick={(e) => e.currentTarget.select()}
              onBlur={(e) =>
                setQtd(parseFloat(e.currentTarget.value).toFixed())
              }
            />
          </div>
          <div className="input">
            <label htmlFor="price">Preço:</label>
            <input
              type="number"
              id="price"
              required
              value={price}
              onChange={(e) =>
                setPrice(
                  e.currentTarget.value >= 0 ? e.currentTarget.value : price
                )
              }
              onClick={(e) => e.currentTarget.select()}
              onBlur={(e) =>
                setPrice(parseFloat(e.currentTarget.value).toFixed(2))
              }
            />
          </div>
          <div className="input">
            <label htmlFor="category">Categoria:</label>
            <input
              type="text"
              id="category"
              required
              value={category}
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
          </div>
        </div>
        <div>
          <div className="input">
            <label htmlFor="Description">Descrição:</label>
            <textarea
              id="Description"
              cols="30"
              rows="6"
              required
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            ></textarea>
          </div>
        </div>
        <div>
          <button type="submit" className="ButtonSubmit">
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
