import "./AccessibilityPanel.css";
import { useAccessibility } from "../AccessibilityContext";

const options = [
  {
    id: "contrast",
    label: "Contrast",
    // icon: (<img src="/icons-kontrast.png" alt="Contrast"/>),
  },
  {
    id: "largeText",
    label: "Text Size",
    // icon: (<img src="/text-size.png" alt="text-size"/>),
  },
  {
    id: "markLinks",
    label: "Mark Links",
    // icon: (<img src="/highlight-links.png" alt="highlight-links"/>),
  },
];

export default function AccessibilityPanel({ onClose }) {
  const { active, toggle } = useAccessibility();

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="panel">
        <div className="header">
          <span className="header__title">Accessibility Panel</span>
          <button className="header__close" onClick={onClose} aria-label="Schließen">
            ✕
          </button>
        </div>

        <div className="list">
          {options.map((opt) => {
            const isOn = active[opt.id];
            return (
              <button
                key={opt.id}
                className={`card${isOn ? " card--active" : ""}`}
                onClick={() => toggle(opt.id)}
                aria-pressed={isOn}
              >
                <span className="card__icon">{opt.icon}</span>
                <span className="card__label">{opt.label}</span>
                {isOn && <span className="card__badge">On</span>}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}