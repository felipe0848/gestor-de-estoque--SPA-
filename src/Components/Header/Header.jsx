import { Link } from "react-router-dom";
import "./Header.css"

export default function Header(){
    return(
        <header>
            <div className="logo">
            <Link to="/"> <h1>React Stock</h1> </Link>
            </div>
            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/items">Items</Link>
            </nav>
        </header>
    )
}