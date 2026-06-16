import "./style/compromissoCard.css";

function CompromissoCard({
  compromisso,
  onToggleConcluido,
  onRemover,
  onEditar,
}) {
  const formatarData = (dataStr) => {
    const partes = dataStr.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  };

  const nomesCategorias = {
    trabalho: "Trabalho",
    saude: "Saúde",
    pessoal: "Pessoal",
    outros: "Outros",
  };

  const { titulo, data, hora, descricao, categoria, concluido } = compromisso;
  const classeCard = `compromisso-card compromisso-card--${categoria} ${concluido ? "compromisso-card--concluido" : ""}`;

  return (
    <div className={classeCard}>
      <div className="compromisso-card-topo">
        <h3 className="compromisso-card-titulo">{titulo}</h3>
        <span className={`categoria-badge categoria-badge--${categoria}`}>
          {nomesCategorias[categoria]}
        </span>
      </div>
      {descricao && <p className="compromisso-card-descricao">{descricao}</p>}
      <div className="compromisso-card-rodape">
        <div className="compromisso-card-info">
          {data && (
            <span>
              <i className="bi bi-calendar3"></i>
              {formatarData(data)}
            </span>
          )}
          {hora && (
            <span>
              <i className="bi bi-clock"></i>
              {hora}
            </span>
          )}
        </div>
        <div className="compromisso-card-acoes">
          <button
            className={`compromisso-card-btn ${concluido ? "compromisso-card-btn--desfazer" : "compromisso-card-btn--check"}`}
            onClick={() => onToggleConcluido(compromisso.id)}
            title={concluido ? "Desfazer" : "Concluir"}
          >
            <i
              className={`bi ${concluido ? "bi-arrow-counterclockwise" : "bi-check2"}`}
            ></i>
          </button>
          <button
            className="compromisso-card-btn compromisso-card-btn--edit"
            onClick={() => onEditar(compromisso)}
            title="Editar"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            className="compromisso-card-btn compromisso-card-btn--delete"
            onClick={() => onRemover(compromisso.id)}
            title="Remover"
          >
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompromissoCard;
