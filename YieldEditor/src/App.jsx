import { useEffect, useState } from "react";
import "./styles/theme.css";
import "./App.css";
import Home from "./pages/Home/Home";
import ImportFile from "./pages/ImportFile/ImportFile";
import FilterMapEdit from "./pages/FilterMapEdit/FilterMapEdit";
import ExportFile from "./pages/ExportFile/ExportFile";
import AiMode from "./pages/AiMode/AiMode";

const pages = [
  { id: "home", label: "Home", component: Home },
  { id: "import", label: "Import file", component: ImportFile },
  { id: "edit", label: "Filter, map & edit", component: FilterMapEdit },
  { id: "export", label: "Save & export", component: ExportFile },
  { id: "ai", label: "AI Mode", component: AiMode },
];

// Returns the saved theme, or the system theme if none is saved.
function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Main layout: sidebar navigation, the active page, and a status bar.
function App() {
  const [activePage, setActivePage] = useState("home");
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const Page = pages.find((p) => p.id === activePage).component;

  return (
    <div className="app">
      <nav className="sidebar">
        <div className="brand">Yield Editor</div>
        {pages.map((p) => (
          <button
            key={p.id}
            className={`nav-item ${p.id === activePage ? "active" : ""}`}
            onClick={() => setActivePage(p.id)}
          >
            {p.label}
          </button>
        ))}
        <button
          className="btn theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </nav>

      <main className="content">
        <Page onNavigate={setActivePage} />
      </main>

      <footer className="status-bar">
        <span>Ready</span>
        <span>No file loaded</span>
      </footer>
    </div>
  );
}

export default App;
