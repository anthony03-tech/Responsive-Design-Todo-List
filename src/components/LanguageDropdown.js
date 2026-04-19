import { useState, useRef, useEffect } from "react";
import "./LanguageDropdown.css";

const LANGUAGES = ["English", "Deutsch"];

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("English");
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        className="lang-dropdown__trigger"
        onClick={() => setOpen((v) => !v)}
      >
        {selected}
        <svg
          className={`lang-dropdown__chevron ${open ? "open" : ""}`}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <polyline
            points="3,5 7,9 11,5"
            stroke="#555"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="lang-dropdown__menu">
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              className={`lang-dropdown__item ${selected === lang ? "active" : ""}`}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}