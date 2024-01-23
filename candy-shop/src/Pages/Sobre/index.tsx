import {Link} from 'react-router-dom'

export function Sobre(){
    return(
        <div>
        <h1>ESTÁ PAGINA É A SOBRE!!</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/Contatos">Contatos</Link>
       </div>
    )
}