import CompromissoCard from "./CompromissoCard";
import "./style/compromissoList.css";

function CompromissoList({
  compromissos,
  onToggleConcluido,
  onRemover,
  onEditar,
}) {
  if (compromissos.length === 0) {
    return (
      <div className="compromisso-list-vazio">
        <i className="bi bi-inbox"></i>
        <p className="compromisso-list-vazio-titulo">
          Nenhum compromisso encontrado
        </p>
      </div>
    );
  }

  return (
    <div className="compromisso-list">
      {compromissos.map((comp) => (
        <CompromissoCard
          key={comp.id}
          compromisso={comp}
          onToggleConcluido={onToggleConcluido}
          onRemover={onRemover}
          onEditar={onEditar}
        />
      ))}
    </div>
  );
}

export default CompromissoList;
