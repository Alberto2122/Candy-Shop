import {Link} from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styles from './Header.module.css';

export function Header() {
  return (
    <header>
      <Link to="/">
        <h2 className={styles.title}>Candy-Shop</h2>
      </Link>

        <div>
         <Link to="/">Home</Link>
         <Link to="/Loja">Loja</Link>
         <Link to="/Sobre">Sobre</Link>
         <Link to="/Contatos">Contatos</Link>
        </div>

        <div className='icons 1'>
        <FaWhatsapp />
         <FaInstagram />
        </div>

        
        </header>
    )
}
