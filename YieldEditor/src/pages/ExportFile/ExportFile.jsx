import "./ExportFile.css";

const summary = [
  { label: "Total points", value: "12,480" },
  { label: "Removed by filters", value: "1,240" },
  { label: "Edited by hand", value: "18" },
  { label: "Points to export", value: "11,240" },
];

// Save page: choose the file format, name and location, then export the cleaned data.
function ExportFile() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Save & export</h1>
        <p>Choose how to save your cleaned data.</p>
      </header>

      <div className="export-grid">
        <section className="panel">
          <h2>Export settings</h2>

          <div className="form-field">
            <label htmlFor="format">Format</label>
            <select id="format" defaultValue="CSV">
              <option>CSV</option>
              <option>Shapefile</option>
              <option>GeoJSON</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="filename">File name</label>
            <input id="filename" type="text" defaultValue="field_12_corn_clean" />
          </div>

          <div className="form-field">
            <label htmlFor="location">Save location</label>
            <div className="path-row">
              <input id="location" type="text" placeholder="Choose a folder" readOnly />
              <button className="btn">Browse</button>
            </div>
          </div>

          <div className="option-row">
            <input type="checkbox" id="keep-removed" />
            <label htmlFor="keep-removed">Include removed points</label>
          </div>
          <div className="option-row">
            <input type="checkbox" id="keep-original" defaultChecked />
            <label htmlFor="keep-original">Keep original values in extra columns</label>
          </div>
        </section>

        <section className="panel">
          <h2>Summary</h2>
          <dl className="summary-list">
            {summary.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <div className="actions">
        <button className="btn">Save project</button>
        <button className="btn btn-primary">Export file</button>
      </div>
    </div>
  );
}

export default ExportFile;
