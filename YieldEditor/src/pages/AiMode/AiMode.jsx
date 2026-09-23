import "./AiMode.css";

const sections = ["Model", "Detection settings", "Suggested fixes", "Results"];

// AI Mode page: headings only for now, content will be added later.
function AiMode() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>AI Mode</h1>
      </header>

      {sections.map((s) => (
        <section className="ai-section" key={s}>
          <h2>{s}</h2>
        </section>
      ))}
    </div>
  );
}

export default AiMode;
