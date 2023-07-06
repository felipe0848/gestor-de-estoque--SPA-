import { Link } from "react-router-dom";
import "./Header.css"

export default function Header(){
    return(
        <header>
            <div className="logo">
            <h1>React Stock</h1>
            </div>
            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">Items</Link>
            </nav>
        </header>
    )
}