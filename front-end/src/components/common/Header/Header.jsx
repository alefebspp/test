import { Link } from 'react-router-dom';
import '../../../styles/css/Header.css';
const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/register">Registar Funcionário</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
