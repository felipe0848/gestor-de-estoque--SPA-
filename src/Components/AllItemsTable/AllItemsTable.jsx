export default function AllItemsTable({items}){
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
                    {items.map(({ id, title, qtd, category })=>{
                        return(
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{qtd} unid.</td>
                                <td>{category}</td>
                                <td>
                                    <button className="details">Ver</button>
                                    <button className="update">Atualizar</button>
                                    <button className="delete">Excluir</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}