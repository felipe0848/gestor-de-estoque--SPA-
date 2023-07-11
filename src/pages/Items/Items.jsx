import Button from "../../Components/Button/Button";
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
                                    <Button className="details" text='Ver' />
                                    <Button className="update" text='Atualizar' />
                                    <Button className="delete" onClick={()=>removeItem(id)} text='Excluir'/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}