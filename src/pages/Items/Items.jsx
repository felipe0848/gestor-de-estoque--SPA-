import useItemsCollection from "../../hooks/useItemsCollection";
import "./Items.css"

export default function Items(){
    const { itemsInStock, removeItem } = useItemsCollection()
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Em Estoque</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsInStock.map(({ id, name, qtd, category })=>{
                        return(
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{qtd} unid.</td>
                                <td>{category}</td>
                                <td className="tableButtons">
                                    <button className="details">Ver</button>
                                    <button className="update">Atualizar</button>
                                    <button className="delete" onClick={()=>removeItem(id)}>Excluir</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}