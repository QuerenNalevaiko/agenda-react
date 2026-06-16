function CampoFormSelect({ id, valor, onChange, erro, opcoes }) {
  return (
    <select
      id={id}
      value={valor}
      onChange={onChange}
      className={erro ? "campo-form-erro" : ""}
    >
      {opcoes.map((op) => (
        <option key={op.valor} value={op.valor}>
          {op.label}
        </option>
      ))}
    </select>
  );
}

export default CampoFormSelect;
