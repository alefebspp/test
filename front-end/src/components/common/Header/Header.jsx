import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/main">Início</Link>
        </li>
        <li>
          <Link to="/criar">Registar Funcionário</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
