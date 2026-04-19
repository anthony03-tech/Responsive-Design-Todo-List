import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Dozy</span>
      <div className="footer__links">
        <a href="#impressum">Impressum</a>
        <span className="footer__sep">·</span>
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}