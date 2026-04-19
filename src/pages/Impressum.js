import { useState } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import SignUpModal from "../components/SignUpModal.js";
import "./Impressum.css";

export default function Impressum({ onNavigate }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="impressum">
      <Navbar onJoinUs={() => setShowModal(true)} />
      {showModal && <SignUpModal onClose={() => setShowModal(false)} />}
      <main className="impressum__body">
        <button className="impressum__back" onClick={() => onNavigate && onNavigate("landing")}>
          ← Back
        </button>
        <h1 className="impressum__title">Impressum</h1>

        <section className="impressum__section">
          <h2 className="impressum__heading">1. Introduction</h2>
          <p className="impressum__text">This Privacy Policy explains how we collect, use, and protect your information when you use our website.</p>
          <p className="impressum__text">2. Information We Collect</p>
        </section>
        <section className="impressum__section">
          <h2 className="impressum__heading">We may collect the following information:</h2>
          <ul className="impressum__list">
            <li>Tasks and notes you create</li>
            <li>Usage data (how you use the website)</li>
            <li>Basic account information (if you sign in with Google or Apple)</li>
          </ul>
          <p className="impressum__text">We do not collect sensitive personal information.</p>
        </section>
        <section className="impressum__section">
          <h2 className="impressum__heading">3. How We Use Your Information</h2>
          <p className="impressum__text">We use your information to:</p>
          <ul className="impressum__list">
            <li>Provide and improve the service</li>
            <li>Save your tasks and preferences</li>
            <li>Improve user experience</li>
            <li>Fix issues and bugs</li>
          </ul>
        </section>
        <section className="impressum__section">
          <h2 className="impressum__heading">4. Data Storage</h2>
          <ul className="impressum__list">
            <li>If you use the website without an account, your data is stored locally on your device (local storage).</li>
            <li>If you sign in, your data may be stored securely to allow access across devices.</li>
          </ul>
        </section>
        <section className="impressum__section">
          <h2 className="impressum__heading">5. Data Sharing</h2>
          <p className="impressum__text">We do not sell or share your personal data with third parties, except:</p>
          <ul className="impressum__list">
            <li>When required by law</li>
            <li>For authentication services (Google or Apple login)</li>
          </ul>
        </section>
        <section className="impressum__section">
          <h2 className="impressum__heading">6. Your Control</h2>
          <p className="impressum__text">You have full control over your data:</p>
          <ul className="impressum__list">
            <li>You can delete your tasks at any time</li>
            <li>You can clear your browser data</li>
            <li>You can stop using the service at any time</li>
          </ul>
        </section>
        <section className="impressum__section">
          <h2 className="impressum__heading">7. Cookies</h2>
          <p className="impressum__text">We may use basic cookies to:</p>
          <ul className="impressum__list">
            <li>Keep you logged in</li>
            <li>Improve performance</li>
          </ul>
        </section>
        <section className="impressum__section">
          <h2 className="impressum__heading">8. Security</h2>
          <p className="impressum__text">We take reasonable steps to protect your data, but no system is 100% secure.</p>
        </section>
        <section className="impressum__section">
          <h2 className="impressum__heading">9. Changes to This Policy</h2>
          <p className="impressum__text">We may update this policy from time to time. Changes will be shown on this page.</p>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}