import LanguageDropdown from "./LanguageDropdown.js";
import "./Navbar.css";

export default function Navbar({ onJoinUs }) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="navbar__logo-icon">
          <img src="/Logo-Icon.png" alt="dashboard"/>
        </div>
        <span className="navbar__logo-text">Dozy</span>
      </div>

      <div className="navbar__right">
        <LanguageDropdown />
        <button className="navbar__cta" onClick={onJoinUs}>
          JOIN US <span className="navbar__arrow">→</span>
        </button>
      </div>
    </nav>
  );
}