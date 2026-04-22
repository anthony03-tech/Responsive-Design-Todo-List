import "./BottomNav.css";

export default function BottomNav({ active }) {
  return (
    <nav className="bottom-nav">
      <button className={`bottom-nav__item ${active === "dashboard" ? "bottom-nav__item--active" : ""}`}>
        <img src="/star.png" alt="dashboard"/>
        <span>Dashboard</span>
      </button>

      <button className={`bottom-nav__item ${active === "today" ? "bottom-nav__item--active" : ""}`}>
        <img src="/task-list.png" alt="Today's list"/>
        <span>Today's list</span>
      </button>

      <button className={`bottom-nav__item ${active === "history" ? "bottom-nav__item--active" : ""}`}>
        <img src="/clock.png" alt="History"/>
        <span>History</span>
      </button>

      <button className={`bottom-nav__item ${active === "account" ? "bottom-nav__item--active" : ""}`}>
        <img src="/user.png" alt="My account"/>
        <span>My account</span>
      </button>
    </nav>
  );
}