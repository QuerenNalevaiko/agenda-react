import { useState } from "react";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProtegerRota from "./components/ProtegerRota";
import LoginPage from "./Pages/LoginPage";
import CompromissosPage from "./Pages/CompromissosPage";
import NotFoundPage from "./Pages/NotFoundPage";
import { gerarId, compromissosIniciais } from "./utils/gerarId";

function App() {
  const [usuario, setUsuario] = useState(null);
  const [compromissos, setCompromissos] = useState(compromissosIniciais);
  const navigate = useNavigate();

  const salvarNomeNick = (user) =>
    `agenda_${user.nome.trim().toLowerCase()}_${user.nick.trim().toLowerCase()}`;

  const loadUser = (user) => {
    try {
      const raw = localStorage.getItem(salvarNomeNick(user));
      return raw ? JSON.parse(raw) : compromissosIniciais;
    } catch {
      return compromissosIniciais;
    }
  };

  const saveUser = (user, data) => {
    try {
      localStorage.setItem(salvarNomeNick(user), JSON.stringify(data));
    } catch {}
  };

  const handleIdentificar = ({ nome, nick }) => {
    const usr = { nome, nick };
    setUsuario(usr);
    const dados = loadUser(usr);
    setCompromissos(dados);
    navigate("/compromissos");
  };

  const handleLogout = () => {
    if (usuario) saveUser(usuario, compromissos);
    setUsuario(null);
    setCompromissos(compromissosIniciais);
    navigate("/login");
  };

  const handleAdicionar = (novoCompromisso) => {
    console.log("Novo compormisso", novoCompromisso);

    setCompromissos((anteriores) => {
      const next = [novoCompromisso, ...anteriores];
      if (usuario) saveUser(usuario, next);
      return next;
    });
  };

  const handleAtualizar = (compromissoAtualizado) => {
    console.log("Novo compormisso", compromissoAtualizado);
    setCompromissos((anteriores) => {
      const next = anteriores.map((c) =>
        c.id === compromissoAtualizado.id ? compromissoAtualizado : c,
      );
      if (usuario) saveUser(usuario, next);
      return next;
    });
  };

  const handleRemover = (id) => {
    setCompromissos((anteriores) => {
      const next = anteriores.filter((c) => c.id !== id);
      if (usuario) saveUser(usuario, next);
      return next;
    });
  };

  const handleToggleConcluido = (id) => {
    setCompromissos((anteriores) => {
      const next = anteriores.map((c) =>
        c.id === id ? { ...c, concluido: !c.concluido } : c,
      );
      if (usuario) saveUser(usuario, next);
      return next;
    });
  };

  return (
    <div className="app-container">
      {usuario && (
        <Navbar nome={usuario.nome} nick={usuario.nick} onSair={handleLogout} />
      )}
      <main className="app-conteudo">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/login"
            element={<LoginPage onIdentificar={handleIdentificar} />}
          />
          <Route
            path="/compromissos"
            element={
              <ProtegerRota identificado={usuario !== null}>
                <CompromissosPage
                  compromissos={compromissos}
                  onAdicionar={handleAdicionar}
                  onAtualizar={handleAtualizar}
                  onToggleConcluido={handleToggleConcluido}
                  onRemover={handleRemover}
                />
              </ProtegerRota>
            }
          ></Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
