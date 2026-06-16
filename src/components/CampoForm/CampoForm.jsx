import CampoFormSelect from "./CampoFormSelect";
import CampoFormTextArea from "./CampoFormTextArea";
import CampoInput from "./CampoInput";
import "./style/campoForm.css";

function CampoForm({
  id,
  label,
  tipo,
  placeholder,
  valor,
  onChange,
  erro,
  dica,
  opcoes,
}) {
  const renderCampo = () => {
    if (tipo === "select") {
      return (
        <CampoFormSelect
          id={id}
          valor={valor}
          onChange={onChange}
          erro={erro}
          opcoes={opcoes}
        />
      );
    }

    if (tipo === "textarea") {
      return (
        <CampoFormTextArea
          id={id}
          placeholder={placeholder}
          valor={valor}
          onChange={onChange}
          className={erro ? "campo-form-erro" : ""}
        />
      );
    }

    return (
      <CampoInput
        id={id}
        tipo={tipo}
        placeholder={placeholder}
        valor={valor}
        onChange={onChange}
        className={erro ? "campo-form-erro" : ""}
      />
    );
  };

  return (
    <div className="campo-form">
      {label && <label htmlFor={id}>{label}</label>}
      {renderCampo()}
      {erro && <p className="campo-form-erro-texto">{erro}</p>}
      {dica && (
        <p className="campo-form-dica">
          <i className="bi bi-info-circle"></i>
          {dica}
        </p>
      )}
    </div>
  );
}

export default CampoForm;
