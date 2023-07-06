import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div>
            <h1>React Stock</h1>
            <div>
                <Link to="/">home</Link>
                <Link to="/">Items</Link>
            </div>
        </div>
    )
}