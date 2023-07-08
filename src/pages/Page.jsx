import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";


export default function Page(){
    return(
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    )
}