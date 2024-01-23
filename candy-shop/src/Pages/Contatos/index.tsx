import {Link} from 'react-router-dom'


export function Contatos(){
    return(
        <div>
            <h1>ESTÁ É A PAGINA DE CONTATOS!!</h1> 
           <Link to="/">Home</Link>
           <br />
           <Link to="/Sobre">Sobre</Link>
        </div>
    )
}