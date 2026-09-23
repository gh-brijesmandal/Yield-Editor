import "./Home.css";

const steps = [
  { title: "Import", text: "Open a yield monitor file from your harvest." },
  { title: "Filter, map & edit", text: "Remove bad points and fix values." },
  { title: "Save & export", text: "Write the cleaned data to a new file." },
];

// Welcome page with quick actions and a short overview of the workflow.
function Home({ onNavigate }) {
  return (
    <div className="page">
      <section className="home-hero">
        <h1>Welcome to Yield Editor</h1>
        <p>
          Clean your yield monitor data in a few steps and export it ready
          for mapping and analysis.
        </p>
        <div className="home-buttons">
          <button className="btn btn-primary" onClick={() => onNavigate("import")}>
            Import a file
          </button>
          <button className="btn" onClick={() => onNavigate("ai")}>
            Try AI Mode
          </button>
        </div>
      </section>

      <section className="panel">
        <h2>How it works</h2>
        <ul className="home-steps">
          {steps.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              <span>{s.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h2>Recent files</h2>
        <p className="recent-empty">No recent files yet. Import a file to get started.</p>
      </section>
    </div>
  );
}

export default Home;
