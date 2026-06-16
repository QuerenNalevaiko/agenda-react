import { Link } from "react-router-dom";
import "./style/navbar.css";

function Navbar({ nome, nick, onSair }) {
  const handleSair = () => onSair();

  return (
    <nav className="navbar-app">
      <Link className="navbar-app-brand" to="/compromissos">
        <i className="bi bi-calendar-check"></i>Agenda
      </Link>
      <div className="navbar-app-direita">
        <span className="navbar-app-usuario">
          <i className="bi bi-person-circle"></i> {nome}
          <span className="navbar-app-usuario-nick">@{nick}</span>
          <button className="navbar-app-btn-sair" onClick={handleSair}>
            <i className="bi bi-box-arrow-right"></i>Sair
          </button>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
