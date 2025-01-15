"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`anim ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
