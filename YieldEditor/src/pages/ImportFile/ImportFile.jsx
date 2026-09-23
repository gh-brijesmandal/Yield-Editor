import "./ImportFile.css";

const details = [
  { label: "File name", value: "field_12_corn.csv" },
  { label: "Size", value: "2.4 MB" },
  { label: "Rows", value: "12,480" },
  { label: "Columns", value: "5" },
];

const columns = ["Latitude", "Longitude", "Yield", "Speed", "Moisture"];

const rows = [
  ["33.4562", "-88.7871", "182.4", "4.8", "15.2"],
  ["33.4563", "-88.7870", "179.9", "4.9", "15.1"],
  ["33.4564", "-88.7869", "185.6", "4.8", "15.3"],
  ["33.4565", "-88.7868", "0.0", "0.4", "15.2"],
  ["33.4566", "-88.7867", "181.2", "4.7", "15.0"],
];

// Import page: choose a file, then check its details and a preview of the data.
function ImportFile({ onNavigate }) {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Import file</h1>
        <p>Open a yield monitor file to start cleaning your data.</p>
      </header>

      <div className="drop-zone">
        <p className="drop-title">Drag a file here</p>
        <p className="drop-hint">Supports .csv and .txt files</p>
        <button className="btn btn-primary">Browse files</button>
      </div>

      <section className="panel">
        <h2>Selected file</h2>
        <dl className="file-details">
          {details.map((d) => (
            <div key={d.label}>
              <dt>{d.label}</dt>
              <dd>{d.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="panel">
        <h2>Preview (first 5 rows)</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>{columns.map((c) => <th key={c}>{c}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="actions">
        <button className="btn btn-primary" onClick={() => onNavigate("edit")}>
          Continue to filtering
        </button>
      </div>
    </div>
  );
}

export default ImportFile;
