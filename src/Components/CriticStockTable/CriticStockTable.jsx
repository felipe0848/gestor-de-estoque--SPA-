import { Link } from "react-router-dom";

export default function CriticStockTable({ itens }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Itens Acabando</th>
            <th>Qtd.</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {itens.map(({ id, name, qtd }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{qtd}</td>
                <td>
                  <Link to={`items/${id}`}>
                    <button>Ver</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
