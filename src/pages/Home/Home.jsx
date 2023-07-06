
import Header from "../../Components/Header/Header"
import "./Home.css"

export default function Home(){
    return(
        <>
            <Header/>

            <div className="container">
            <h2>Dashboard</h2>
                <div className="cards">
                    <div className="card">
                        <p>Lorem, ipsum dolor.</p>
                        <p className="result">2</p>
                    </div>
                    <div className="card">
                        <p>Lorem, ipsum dolor.</p>
                        <p className="result">40</p>
                    </div>
                    <div className="card">
                        <p>Lorem, ipsum dolor.</p>
                        <p className="result">2</p>
                    </div>
                    <div className="card">
                        <p>Lorem, ipsum dolor.</p>
                        <p className="result">1</p>
                    </div>
                </div>

                <div className="tables">
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Itens Recentes</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>7 Worders</td>
                                    <td><button>Ver</button></td>
                                </tr>
                                <tr>
                                    <td>O Senhor dos Anéis</td>
                                    <td><button>Ver</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                                <tr>
                                    <td>7 Worders</td>
                                    <td>8</td>
                                    <td><button>Ver</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}