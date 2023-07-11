import { useState } from "react"
import "./NewItem.css"
import useItemsCollection from "../../hooks/useItemsCollection"
import { useMatch } from "react-router-dom"

export default function NewItem(){
    const { saveItem }  = useItemsCollection()
    const [ name, setName ] = useState('')
    const [ qtd, setQtd ] = useState(0)
    const [ price, setPrice ] = useState(0)
    const [ category, setCategory ] = useState('')
    const [ description, setDescription ] = useState('')



    const handleSubmit = (ev) =>{
        ev.preventDefault()
        saveItem({name, qtd, price, category, description})
        setName('')
        setQtd(0)
        setPrice(0)
        setCategory('')
        setDescription('')
    }

    return(
        <>
            <form className="FormNewItem" onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" required value={name} onChange={(e)=>setName(e.currentTarget.value)}/>
                    </div>
                    <div className="input">
                        <label htmlFor="qtd">Quantidade:</label>
                        <input type="number" id="qtd" required value={qtd} onChange={(e)=>setQtd(e.currentTarget.value >= 0 ? e.currentTarget.value : qtd)}/>
                    </div>
                    <div className="input">
                        <label htmlFor="price">Preço:</label>
                        <input type="number" id="price" required value={price} onChange={(e)=>setPrice(e.currentTarget.value >= 0 ? e.currentTarget.value : price)}/>
                    </div>
                    <div className="input">
                        <label htmlFor="category">Categoria:</label>
                        <input type="text" id="category" required value={category} onChange={(e)=>setCategory(e.currentTarget.value)}/>
                    </div>
                </div>
                <div>
                    <div className="input">
                        <label htmlFor="Description">Descrição:</label>
                        <textarea id="Description" cols="30" rows="6" required value={description} onChange={(e)=>setDescription(e.currentTarget.value)}></textarea>
                    </div>
                </div>
                <div>
                    <button type="submit" className="ButtonSubmit">Salvar</button>
                </div>
            </form>
        </>
    )
}