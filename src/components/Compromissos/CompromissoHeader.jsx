import "./style/compromissoHeader.css";

function CompromissoHeader({ total, concluidos, exibindoForm, onToggleForm }) {
  return (
    <div className="compromissos-header">
      <div>
        <h1 className="compromissos-header-titulo">Meus Compromissos</h1>
        <p className="compromissos-header-contador">
          <span>{total}</span> compromissos &middot; <span> {concluidos} </span>
          concluídos
        </p>
      </div>
      <button
        className="compromissos-header-btn"
        onClick={() => onToggleForm(!exibindoForm)}
      >
        <i className={`bi ${exibindoForm ? "bi-x-lg" : "bi-plus-lg"}`}></i>
        {exibindoForm ? "Fechar" : "Novo Compromisso"}
      </button>
    </div>
  );
}

export default CompromissoHeader;
