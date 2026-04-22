import { useState } from "react";
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import SignUpModal from "../components/SignUpModal.js";
import AccessibilityPanel from "../components/AccessibilityPanel.js";
import "./LandingPage.css";

export default function LandingPage({ onNavigate }) {
  const [showModal, setShowModal] = useState(false);
  const [showA11y, setShowA11y] = useState(false);

  return (
    <div className="landing">
      <Navbar onJoinUs={() => setShowModal(true)} />
      <main>
        <Hero onJoinUs={() => setShowModal(true)} />
      </main>

      <button className="accessibility-btn" aria-label="Accessibility options" onClick={() => setShowA11y(true)}>
        <img src="/icon-accessibility.png" alt="" />
      </button>

      {showA11y && <AccessibilityPanel onClose={() => setShowA11y(false)} />}

      <Footer onNavigate={onNavigate} />
      {showModal && (
        <SignUpModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}