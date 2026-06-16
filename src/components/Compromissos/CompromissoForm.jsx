import { useState } from "react";
import CampoForm from "../CampoForm/CampoForm";
import { gerarId } from "../../utils/gerarId";
import "./style/compromissoForm.css";

function CompromissoForm({ onSalvar, onCancelar, compromissoEditando }) {
  const editando =
    compromissoEditando !== null && compromissoEditando !== undefined;
  const [titulo, setTitulo] = useState(
    editando ? compromissoEditando.titulo : "",
  );
  const [data, setData] = useState(editando ? compromissoEditando.data : "");
  const [hora, setHora] = useState(editando ? compromissoEditando.hora : "");
  const [descricao, setDescricao] = useState(
    editando ? compromissoEditando.descricao : "",
  );
  const [categoria, setCategoria] = useState(
    editando ? compromissoEditando.categoria : "trabalho",
  );
  const [erros, setErros] = useState({});

  const categoriasOpcoes = [
    { valor: "trabalho", label: "Trabalho" },
    { valor: "saude", label: "Saúde" },
    { valor: "pessoal", label: "Pessoal" },
    { valor: "outros", label: "Outros" },
  ];

  const validar = () => {
    const novosErros = {};
    if (!titulo.trim()) novosErros.titulo = "Titulo é obrigatório";
    if (!data) novosErros.data = "Data é obrigatória";
    if (!hora) novosErros.hora = "Horário é obrigatória";
    return novosErros;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novosErros = validar();
    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      const dadosCompromissos = {
        id: editando ? compromissoEditando.id : gerarId(),
        titulo: titulo.trim(),
        data,
        hora,
        descricao: descricao.trim(),
        categoria,
        concluido: editando ? compromissoEditando.concluido : false,
      };
      onSalvar(dadosCompromissos);
    }
  };

  return (
    <div className="compromisso-form-card">
      <h3 className="compromisso-form-titulo">
        <i
          className={`bi ${editando ? "bi-pencil-square" : "bi-plus-circule"}`}
        ></i>{" "}
        {editando ? "Editar Compromisso" : "Novo Compromisso"}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6">
            <CampoForm
              id="titulo"
              label="Título*"
              tipo="text"
              placeholder="Nome do Compromisso"
              valor={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              erro={erros.titulo}
            />
          </div>
          <div className="col-12 col-md-6">
            <CampoForm
              id="categoria"
              label="Categoria"
              tipo="select"
              valor={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              opcoes={categoriasOpcoes}
            />
          </div>
          <div className="col-12 col-md-6">
            <CampoForm
              id="data"
              label="Data"
              tipo="date"
              valor={data}
              onChange={(e) => setData(e.target.value)}
              erro={erros.data}
            />
          </div>

          <div className="col-12 col-md-6">
            <CampoForm
              id="hora"
              label="Horário Inicial"
              tipo="time"
              valor={hora}
              onChange={(e) => setHora(e.target.value)}
              erro={erros.hora}
            />
          </div>
        </div>
        <CampoForm
          id="descricao"
          label="Descrição"
          tipo="textarea"
          placeholder="Detalhes (opcional)"
          valor={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <div className="compromisso-form-acoes">
          <button type="submit" className="compromisso-form-btn-salvar">
            <i
              className={`bi ${editando ? "bi-pencil-square" : "bi-check-lg"}`}
            ></i>{" "}
            {editando ? "Atualizar" : "Salvar"}
          </button>
          <button
            type="button"
            className="compromisso-form-btn-cancelar"
            onClick={onCancelar}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CompromissoForm;
