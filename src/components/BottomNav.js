import "./BottomNav.css";

export default function BottomNav({ active }) {
  return (
    <nav className="bottom-nav">
      <button className={`bottom-nav__item ${active === "dashboard" ? "bottom-nav__item--active" : ""}`}>
        <img src="/star.png" alt="dashboard"/>
        <span>Dashboard</span>
      </button>

      <button className={`bottom-nav__item ${active === "today" ? "bottom-nav__item--active" : ""}`}>
        <img src="/task-list.png" alt="dashboard"/>
        <span>Today's list</span>
      </button>

      <button className={`bottom-nav__item ${active === "history" ? "bottom-nav__item--active" : ""}`}>
        <img src="/clock.png" alt="dashboard"/>
        <span>History</span>
      </button>

      <button className={`bottom-nav__item ${active === "account" ? "bottom-nav__item--active" : ""}`}>
        <img src="/user.png" alt="dashboard"/>
        <span>My account</span>
      </button>
    </nav>
  );
}