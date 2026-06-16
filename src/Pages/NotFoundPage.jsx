import { Link } from "react-router-dom";
import "./style/notFoundPage.css";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <p className="not-found-page-codigo">404</p>
      <h1 className="not-found-page-titulo">Página não encontrada</h1>
      <p className="not-found-page-texto">
        A página que você está procurando não existe ou foi removida.
      </p>
      <Link to="/login" className="not-found-page-btn">
        <i className="bi bi-house"></i>Voltar ao início
      </Link>
    </div>
  );
}

export default NotFoundPage;
