import { useState } from "react";
import CampoForm from "../CampoForm/CampoForm";
import "./style/loginForm.css";

function LoginForm({ onIdentificar }) {
  const [nome, setNome] = useState("");
  const [nick, setNick] = useState("");
  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};
    if (!nome.trim()) novosErros.nome = "Nome é obrigatório";
    if (!nick.trim()) novosErros.nick = "Nick é obrigatório";
    return novosErros;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const novosErros = validar();
    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      onIdentificar({ nome: nome.trim(), nick: nick.trim() });
    }
  };

  return (
    <div className="login-form-card">
      <h1 className="login-form-titulo">Identifique-se</h1>
      <p className="login-form-subtitulo">
        Informe seu nome e nick para acessar sua agenda
      </p>
      <form onSubmit={handleSubmit}>
        <CampoForm
          id="nome"
          label="Nome"
          tipo="text"
          placeholder="Seu nome completo"
          valor={nome}
          onChange={(e) => setNome(e.target.value)}
          erro={erros.nome}
        />
        <CampoForm
          id="nick"
          label="Nick"
          tipo="text"
          placeholder="Seu apelido unico"
          valor={nick}
          onChange={(e) => setNick(e.target.value)}
          erro={erros.nick}
          dica=" O nick será usado para carregar seus compromissos no futuro"
        />
        <button type="submit" className="login-form-botao">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
