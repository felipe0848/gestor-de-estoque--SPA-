import "./NewItem.css"

export default function NewItem(){
    return(
        <>
            <form className="FormNewItem">
                <div className="inputs">
                    <div className="input">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name"/>
                    </div>
                    <div className="input">
                        <label htmlFor="qtd">Quantidade:</label>
                        <input type="number" id="qtd"/>
                    </div>
                    <div className="input">
                        <label htmlFor="price">Preço:</label>
                        <input type="number" id="price"/>
                    </div>
                    <div className="input">
                        <label htmlFor="category">Categoria:</label>
                        <input type="text" id="category"/>
                    </div>
                </div>
                <div>
                    <div className="input">
                        <label htmlFor="Description">Descrição:</label>
                        <textarea id="Description" cols="30" rows="6"></textarea>
                    </div>
                </div>
                <div>
                    <button type="submit" className="ButtonSubmit">Salvar</button>
                </div>
            </form>
        </>
    )
}