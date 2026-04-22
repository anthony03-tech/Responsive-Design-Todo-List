import "./SignUpModal.css";

export default function SignUpModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>X</button>

        <h2 className="modal__title">Sign Up</h2>

        <button className="modal__google-btn">
          <img src="/google.png" alt="dashboard" style={{ width: '7%', height: '7%' }} />
          Continue with Google
        </button>

        <p className="modal__terms">
          By clicking sign up you accepting our{" "}
          <a href="#privacy" className="modal__link">privacy policy</a>
        </p>
      </div>
    </div>
  );
}