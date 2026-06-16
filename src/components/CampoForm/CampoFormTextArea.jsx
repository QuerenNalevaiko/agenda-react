function CampoFormTextArea({ id, placeholder, valor, onChange, erro }) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={valor}
      onChange={onChange}
      className={erro ? "campo-form-erro" : ""}
    />
  );
}

export default CampoFormTextArea;
