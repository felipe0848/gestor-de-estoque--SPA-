import { Link } from "react-router-dom"

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
                { itens.map(({id, name})=>{
                    return(
                        <tr key={id}>
                            <td>{name}</td>
                            <td>
                                <Link to={`items/${id}`}>                                    
                                    <button>Ver</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}