import { useState, useMemo, useCallback } from "react";
import CompromissoHeader from "../components/Compromissos/CompromissoHeader";
import CompromissoForm from "../components/Compromissos/CompromissoForm";
import CompromissoList from "../components/Compromissos/CompromissoList";
import SearchBar from "../components/SearchBar/SearchBar";
import "./style/compromissosPage.css";

function CompromissosPage({
  compromissos,
  onAdicionar,
  onAtualizar,
  onToggleConcluido,
  onRemover,
}) {
  const [termoBusca, setTermoBusca] = useState("");
  const [exibindoForm, setExibindoForm] = useState(false);
  const [compromissoEditando, setCompromissoEditando] = useState(null);

  const compromissosFiltrados = useMemo(() => {
    const termo = termoBusca.toLowerCase().trim();
    if (!termo) return compromissos;
    return compromissos.filter(
      (c) =>
        c.titulo.toLowerCase().includes(termo) ||
        c.descricao.toLowerCase().includes(termo) ||
        c.categoria.toLowerCase().includes(termo),
    );
  }, [compromissos, termoBusca]);

  const handleSalvar = useCallback(
    (compromisso) => {
      if (compromissoEditando) {
        onAtualizar(compromisso);
        setCompromissoEditando(null);
      } else {
        onAdicionar(compromisso);
      }
      setExibindoForm(false);
    },
    [compromissoEditando, onAdicionar, onAtualizar],
  );

  const handleEditar = useCallback((compromisso) => {
    setCompromissoEditando(compromisso);
    setExibindoForm(true);
  }, []);

  const handleCancelar = useCallback(() => {
    setExibindoForm(false);
    setCompromissoEditando(null);
  }, []);

  const handleToggleForm = useCallback((mostrar) => {
    if (!mostrar) {
      setCompromissoEditando(null);
    }
    setExibindoForm(mostrar);
  }, []);

  const handleRemover = useCallback(
    (id) => {
      onRemover(id);
    },
    [onRemover],
  );

  const totalCompromissos = () => compromissos.length;
  const concluidos = () => compromissos.filter((c) => c.concluido).length;

  return (
    <div className="compromissos-page">
      <div className="compromissos-page-container">
        <CompromissoHeader
          total={totalCompromissos()}
          concluidos={concluidos()}
          exibindoForm={exibindoForm}
          onToggleForm={handleToggleForm}
        />
        {exibindoForm && (
          <CompromissoForm
            key={compromissoEditando ? compromissoEditando.id : "novo"}
            onSalvar={handleSalvar}
            onCancelar={handleCancelar}
            compromissoEditando={compromissoEditando}
          />
        )}

        <SearchBar valor={termoBusca} onChange={setTermoBusca} />
        <CompromissoList
          compromissos={compromissosFiltrados}
          onToggleConcluido={onToggleConcluido}
          onRemover={handleRemover}
          onEditar={handleEditar}
        />
      </div>
    </div>
  );
}

export default CompromissosPage;
