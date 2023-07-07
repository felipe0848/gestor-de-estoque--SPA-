export default function RecentsTable({itens}){
    return(
        <div className="table">
        <table>
            <thead>
                <tr>
                    <th>Itens Recentes</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                { itens.map(({title})=>{
                    return(
                        <tr>
                            <td>{title}</td>
                            <td><button>Ver</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}