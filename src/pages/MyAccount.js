import { useState } from "react";
import BottomNav from "../components/BottomNav.js";
import DesktopNav from "../components/DesktopNav.js";
import AccessibilityPanel from "../components/AccessibilityPanel.js";
import Footer from "../components/Footer.js";
import "./MyAccount.css";

export default function MyAccount() {
  const [username, setUsername] = useState("Jhon Doe");
  const [email, setEmail] = useState("Jhon.doe@sitename.com");
  const [saved, setSaved] = useState(false);
  const [showA11y, setShowA11y] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="myaccount">

      <header className="myaccount__header">
        <div className="myaccount__logo">
          <img src="/Logo-Icon.png" alt="dashboard"/>
          <span>Dozy</span>
        </div>
      </header>

      <div className="myaccount__layout">

        <DesktopNav
          active="account"
          onNavigate={(key) => console.log("navigate to", key)}
          onLogout={() => console.log("logout")}
        />

        <div className="myaccount__body">
          <h1 className="myaccount__title">My Info</h1>

          <div className="myaccount__field">
            <label className="myaccount__label">User Name</label>
            <div className="myaccount__input-wrap">
              <svg className="myaccount__icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#999" strokeWidth="1.8"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#999" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <input
                className="myaccount__input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="myaccount__field">
            <label className="myaccount__label">Email</label>
            <div className="myaccount__input-wrap">
              <svg className="myaccount__icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#999" strokeWidth="1.8"/>
                <path d="M3 7l9 6 9-6" stroke="#999" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <input
                className="myaccount__input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button
            className={`myaccount__save ${saved ? "myaccount__save--saved" : ""}`}
            onClick={handleSave}
          >
            {saved ? "Saved ✓" : "Save changes ✓"}
          </button>
        </div>

      </div>

      <button className="accessibility-btn" aria-label="Accessibility options" onClick={() => setShowA11y(true)}>
        <img src="/icon-accessibility.png" alt="" />
      </button>

      {showA11y && <AccessibilityPanel onClose={() => setShowA11y(false)} />}

      <BottomNav active="account" />
      <Footer/>
    </div>
  );
}