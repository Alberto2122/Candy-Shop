import {Link} from 'react-router-dom'
import './Header.css';

export function Header(){
    return(
        <header>
        <h2 className='title'>Candy-Shop</h2>

        <div>
         <Link to="/">Home</Link>
         <Link to="/Loja">Loja</Link>
         <Link to="/Sobre">Sobre</Link>
         <Link to="/Contatos">Contatos</Link>
        </div>
        </header>
    )
}