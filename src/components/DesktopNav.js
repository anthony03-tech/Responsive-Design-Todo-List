import "./DesktopNav.css";

const NAV_ITEMS = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: (<img src="/star.png" alt="dashboard"/>),
  },
  {
    key: "tasks",
    label: "Today's tasks list",
    icon: (<img src="/task-list.png" alt="dashboard"/>),
  },
  {
    key: "history",
    label: "Previous Tasks",
    icon: (<img src="/clock.png" alt="dashboard"/>),
  },
  {
    key: "account",
    label: "My Info",
    icon: (<img src="/user.png" alt="dashboard"/>),
  },
];

export default function DesktopNav({ active = "dashboard", onNavigate, onLogout }) {
  return (
    <nav className="desktop-nav">
      <ul className="desktop-nav__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.key}>
            <button
              className={`desktop-nav__item ${active === item.key ? "desktop-nav__item--active" : ""}`}
              onClick={() => onNavigate && onNavigate(item.key)}
            >
              <span className="desktop-nav__icon">{item.icon}</span>
              <span className="desktop-nav__label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="desktop-nav__divider" />

      <button className="desktop-nav__logout" onClick={onLogout}>
        <img src="/log-out.png" alt="dashboard"/>
        <span>Log out</span>
      </button>
    </nav>
  );
}