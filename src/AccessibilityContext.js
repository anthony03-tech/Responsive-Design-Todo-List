import { createContext, useContext, useState, useEffect } from "react";

const AccessibilityContext = createContext();

const options = ["contrast", "largeText", "markLinks"];

export function AccessibilityProvider({ children }) {
  const [active, setActive] = useState({});

  const toggle = (id) =>
    setActive((prev) => ({ ...prev, [id]: !prev[id] }));

  useEffect(() => {
    const root = document.documentElement;
    options.forEach((id) => {
      if (active[id]) {
        root.classList.add(id);
      } else {
        root.classList.remove(id);
      }
    });
  }, [active]);

  return (
    <AccessibilityContext.Provider value={{ active, toggle }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}