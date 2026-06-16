function CampoInput({ id, tipo, placeholder, valor, onChange, erro }) {
  return (
    <input
      id={id}
      type={tipo}
      placeholder={placeholder}
      value={valor}
      onChange={onChange}
      className={erro ? "campo-form-erro" : ""}
      autoComplete="off"
    />
  );
}

export default CampoInput;
