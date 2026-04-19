import "./BottomNav.css";

export default function BottomNav({ active }) {
  return (
    <nav className="bottom-nav">
      <button className={`bottom-nav__item ${active === "dashboard" ? "bottom-nav__item--active" : ""}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l7 7v11a1 1 0 01-1 1H6a1 1 0 01-1-1V9l7-7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Dashboard</span>
      </button>

      <button className={`bottom-nav__item ${active === "today" ? "bottom-nav__item--active" : ""}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="4" cy="6" r="1" fill="currentColor"/>
          <circle cx="4" cy="12" r="1" fill="currentColor"/>
          <circle cx="4" cy="18" r="1" fill="currentColor"/>
        </svg>
        <span>Today's list</span>
      </button>

      <button className={`bottom-nav__item ${active === "history" ? "bottom-nav__item--active" : ""}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
          <polyline points="12,7 12,12 15,15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>History</span>
      </button>

      <button className={`bottom-nav__item ${active === "account" ? "bottom-nav__item--active" : ""}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        <span>My account</span>
      </button>
    </nav>
  );
}