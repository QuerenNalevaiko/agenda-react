import "./style/footer.css";

function Footer() {
  return (
    <footer className="footer-app">
      <i className="bi bi-calendar-check"></i> Agenda de Compromissos de Queren
      e Yudi &copy; {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
