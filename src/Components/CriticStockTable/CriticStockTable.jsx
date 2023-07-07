export default function CriticStockTable({itens}){
    return(
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
                {itens.map(({ title, qtd })=>{
                    return(
                        <tr>
                            <td>{title}</td>
                            <td>{qtd}</td>
                            <td><button>Ver</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}