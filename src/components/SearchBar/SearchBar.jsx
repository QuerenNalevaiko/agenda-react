import "./style/searchBar.css";

function SearchBar({ valor, onChange }) {
  return (
    <div className="search-bar">
      <i className="bi bi-search search-bar-icone"></i>
      <input
        type="text"
        placeholder="Buscar Compromissos..."
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
