import "./Footer.css";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <span>© 2026 Dozy</span>
      <div className="footer__links">
        <button className="footer__btn" onClick={() => onNavigate && onNavigate("impressum")}>
          Impressum
        </button>
        <span className="footer__sep">·</span>
        <button className="footer__btn" onClick={() => onNavigate && onNavigate("privacy")}>
          Privacy Policy
        </button>
      </div>
    </footer>
  );
}