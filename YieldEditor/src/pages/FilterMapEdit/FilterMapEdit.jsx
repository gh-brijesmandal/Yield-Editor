import { useState } from "react";
import "./FilterMapEdit.css";

const tabs = ["Filter", "Map", "Edit"];

const filters = [
  { name: "Yield", unit: "bu/ac", min: 0, max: 400 },
  { name: "Speed", unit: "mph", min: 1, max: 8 },
  { name: "Moisture", unit: "%", min: 10, max: 30 },
];

const fields = ["Latitude", "Longitude", "Yield", "Speed", "Moisture"];
const fileColumns = ["Lat", "Lon", "Yld_Vol_Dr", "Speed_mph", "Moist_pct"];

const editRows = [
  ["33.4562", "-88.7871", "182.4", "4.8"],
  ["33.4563", "-88.7870", "179.9", "4.9"],
  ["33.4564", "-88.7869", "185.6", "4.8"],
  ["33.4565", "-88.7868", "0.0", "0.4"],
  ["33.4566", "-88.7867", "181.2", "4.7"],
];

// Filter tab: set the allowed range for each measurement.
function FilterTab() {
  return (
    <section className="panel">
      <h2>Filter settings</h2>
      {filters.map((f) => (
        <div className="filter-row" key={f.name}>
          <div>
            <span className="filter-name">{f.name}</span>{" "}
            <span className="filter-unit">({f.unit})</span>
          </div>
          <label>
            Minimum
            <input type="number" defaultValue={f.min} />
          </label>
          <label>
            Maximum
            <input type="number" defaultValue={f.max} />
          </label>
        </div>
      ))}
      <div className="check-row">
        <input type="checkbox" id="pass-ends" defaultChecked />
        <label htmlFor="pass-ends">Remove points at the start and end of each pass</label>
      </div>
      <p className="filter-summary">1,240 of 12,480 points would be removed.</p>
      <div className="actions">
        <button className="btn">Reset</button>
        <button className="btn btn-primary">Apply filters</button>
      </div>
    </section>
  );
}

// Map tab: match each field to a column from the imported file.
function MapTab() {
  return (
    <section className="panel">
      <h2>Column mapping</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Field</th><th>File column</th></tr>
          </thead>
          <tbody>
            {fields.map((field, i) => (
              <tr key={field}>
                <td>{field}</td>
                <td>
                  <select className="map-select" defaultValue={fileColumns[i]}>
                    {fileColumns.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="actions">
        <button className="btn btn-primary">Save mapping</button>
      </div>
    </section>
  );
}

// Edit tab: change values in the table and preview the field map.
function EditTab() {
  return (
    <section className="panel">
      <h2>Edit data</h2>
      <div className="edit-toolbar">
        <button className="btn">Undo</button>
        <button className="btn">Redo</button>
        <button className="btn">Delete selected</button>
      </div>
      <div className="edit-layout">
        <div className="table-wrap edit-table">
          <table>
            <thead>
              <tr><th>Latitude</th><th>Longitude</th><th>Yield</th><th>Speed</th></tr>
            </thead>
            <tbody>
              {editRows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}><input type="text" defaultValue={cell} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="map-placeholder">Field map preview</div>
      </div>
    </section>
  );
}

// Page that holds the Filter, Map and Edit tabs.
function FilterMapEdit({ onNavigate }) {
  const [tab, setTab] = useState("Filter");

  return (
    <div className="page">
      <header className="page-header">
        <h1>Filter, map & edit</h1>
        <p>Clean your data before exporting it.</p>
      </header>

      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t}
            className={`tab ${t === tab ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Filter" && <FilterTab />}
      {tab === "Map" && <MapTab />}
      {tab === "Edit" && <EditTab />}

      <div className="actions">
        <button className="btn btn-primary" onClick={() => onNavigate("export")}>
          Continue to export
        </button>
      </div>
    </div>
  );
}

export default FilterMapEdit;
