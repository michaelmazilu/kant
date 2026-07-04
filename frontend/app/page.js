"use client";

import { useState } from "react";

function formatBytes(bytes) {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index ? 1 : 0)} ${units[index]}`;
}

export default function Home() {
  const [files, setFiles] = useState([]);

  return (
    <main className="shell">
      <section className="panel" aria-labelledby="page-title">
        <div>
          <p className="eyebrow">Kant</p>
          <h1 id="page-title">Video ingest</h1>
          <p className="copy">Add drone footage here. Files stay in this browser for now.</p>
        </div>

        <label className="dropzone">
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={(event) => setFiles(Array.from(event.target.files))}
          />
          <span>Select video files</span>
          <small>MP4, MOV, WebM, or any browser-supported video format</small>
        </label>

        {files.length > 0 && (
          <ul className="file-list" aria-label="Selected videos">
            {files.map((file) => (
              <li key={`${file.name}-${file.lastModified}`}>
                <span>{file.name}</span>
                <small>{formatBytes(file.size)}</small>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
