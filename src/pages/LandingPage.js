import { useState } from "react";
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import SignUpModal from "../components/SignUpModal.js";
import "./LandingPage.css";

export default function LandingPage({ onNavigate }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="landing">
      <Navbar onJoinUs={() => setShowModal(true)} />
      <main>
        <Hero onJoinUs={() => setShowModal(true)} />
      </main>
      <Footer onNavigate={onNavigate} />
      {showModal && (
        <SignUpModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}