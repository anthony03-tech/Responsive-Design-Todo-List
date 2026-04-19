import LanguageDropdown from "./LanguageDropdown.js";
import "./Navbar.css";

export default function Navbar({ onJoinUs }) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="navbar__logo-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect width="18" height="18" rx="4" fill="#4F46E5" />
            <polyline
              points="4,9 7.5,12.5 14,6"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
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