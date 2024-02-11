import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container container">
        <Link to="/">
          <h2 className='title'>Candy-Shop</h2>
        </Link>

        <div>
          <Link to="/">Home</Link>
          <Link to="/Loja">Loja</Link>
          <Link to="/Sobre">Sobre</Link>
          <Link to="/Contatos">Contatos</Link>
        </div>

        <div className="header-icons 1">
          <FaWhatsapp className='header-icon' />
          <FaInstagram className='header-icon' />
        </div>
      </div>
    </header>
  );
};

export default Header;
