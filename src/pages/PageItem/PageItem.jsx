import Button from "../../Components/Button/Button";

export default function PageItem(){
    return(
        <>
        <div className="title">
            <h2>{'7 Wonders'}</h2>
            <Button className="update" text='Atualizar' />
            <Button className="delete" onClick={()=>removeItem(id)} text='Excluir'/>
        </div>
        <div className="cards-info">
            <div className="card-info">Categoria: {"Jogos"}</div>
            <div className="card-info">Quantidade em estoque: {8}</div>
            <div className="card-info">Preço: R$ {100.00}</div>
        </div>
        <div className="description">
            <p>{"Jogo de tabuleiro para vários jogadores"}</p>
        </div>
        <div className="">
            <p>Cadastrado em: {'11/07/2023 às 08:52'}</p>
            <p>Atualizado em: {'11/07/2023 às 08:52'}</p>
        </div>
        </>
    )
}