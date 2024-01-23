import { Link } from "react-router-dom";



export function Home(){
    return(
        <div>
        <h1>MINHA PRIMEIRA HOME!!</h1>
        <Link to="/Sobre">Sobre</Link>
        <br />
        <Link to="/Contatos">Contatos</Link>
        </div>
    )
}