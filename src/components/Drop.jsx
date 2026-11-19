import React, { useEffect, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import "./Drop.css";

export default function Drop() {
  let [e, t] = useState([]);
  let [n, r] = useState(false);
  let [i, a] = useState(``);
  let [o, s] = useState([]);
  let [c, l] = useState(false);
  let [u, d] = useState(null);
  let [f, p] = useState(false);
  let m = async () => {
    l(true);
    try {
      let e = await (await fetch(`/api/reports`)).json();
      if (e.success) {
        s(e.data);
      }
    } catch (e) {
      console.error(`Failed to load reports:`, e);
    } finally {
      l(false);
    }
  };
  useEffect(() => {
    m();
  }, []);
  let h = (e) => {
    d(e);
    setTimeout(() => d(null), 5000);
  };
  let g = (e) => {
    let n = Array.from(e).map((e) => ({
      name: e.name || e,
      size: e.size ? `${(e.size / 1024).toFixed(1)} KB` : `1.2 MB`,
      type: e.type || `application/pdf`,
    }));
    t((e) => {
      let t = new Set(e.map((e) => e.name));
      let r = n.filter((e) => !t.has(e.name));
      return [...e, ...r];
    });
  };
  let _ = (e) => {
    t((t) => t.filter((t) => t.name !== e));
  };
  let v = (e) => {
    e.preventDefault();
    r(false);
    if (e.dataTransfer.files?.length) {
      g(e.dataTransfer.files);
    }
  };
  let y = async (n, r = true) => {
    if (n?.preventDefault) n.preventDefault();
    if (e.length === 0) {
      return;
    }
    p(true);
    let o = e.map((e) => e.name);
    let c = i.trim() || `Urgent review requested.`;
    try {
      let e = await (
        await fetch(`/api/reports`, {
          method: `POST`,
          headers: {
            "Content-Type": `application/json`,
          },
          body: JSON.stringify({
            patientName: `Patient (WhatsApp Consult)`,
            patientPhone: `7667763535`,
            fileNames: o,
            symptomsNote: c,
            urgencyLevel: r ? `Instant WhatsApp Priority` : `Standard`,
            specialistAssigned: `Dr. A. K. Verma`,
          }),
        })
      ).json();
      if (e.success) {
        s((t) => [e.data, ...t]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      p(false);
      let e = `https://api.whatsapp.com/send?phone=917667763535&text=${encodeURIComponent(`Hello Doctor! Files: ${o.join(`, `)}\nNote: ${c}`)}`;
      h(`Report submitted! Redirecting to WhatsApp...`);
      t([]);
      a(``);
      window.open(e, `_blank`);
    }
  };
  return (
    <section className="report-section section">
      <div className="section-inner">
        <div className="report-grid">
          <ScrollReveal delay={0.3} direction="left" once={false}>
            <div>
              <span className="eyebrow">Drop & Consult</span>
              <h2
                className="reveal-words"
                style={{
                  color: `#033b20`,
                }}
              >
                Drop your medical report, get doctor advice.
              </h2>
              <p className="reveal-up">
                Upload a recent lab report, scan, or prescription and one of our specialists will
                review it against our clinical frameworks.
              </p>
              <div className="report-steps">
                <div className="report-step">
                  <span className="report-step-index">1</span>
                  <p>
                    <strong>Upload</strong>
                    {" Drag in your report or choose a file."}
                  </p>
                </div>
                <div className="report-step">
                  <span className="report-step-index">2</span>
                  <p>
                    <strong>Specialist Review</strong>
                    {" A specialist reads your report."}
                  </p>
                </div>
                <div className="report-step">
                  <span className="report-step-index">3</span>
                  <p>
                    <strong>Advice Delivered</strong>
                    {" You receive a call or message."}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.5} direction="right" once={false}>
            <form onSubmit={(e) => y(e, false)}>
              <div
                className={`dropzone${n ? ` is-dragging` : ``}`}
                onDragOver={(e) => {
                  e.preventDefault();
                  r(true);
                }}
                onDragLeave={() => r(false)}
                onDrop={v}
                onClick={() => document.getElementById(`report-upload`)?.click()}
              >
                <div className="dropzone-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 16V4M12 4l-4 4M12 4l4 4" />
                    <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
                  </svg>
                </div>
                <h4>Drag & drop your report</h4>
                <p>or</p>
                <label className="dropzone-browse magnetic" htmlFor="report-upload">
                  Browse Files
                </label>
                <input
                  id="report-upload"
                  type="file"
                  multiple={true}
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => e.target.files && g(e.target.files)}
                  style={{
                    display: `none`,
                  }}
                />
                {e.length > 0 && (
                  <div className="file-pill-list">
                    {e.map((e) => (
                      <div className="file-pill" key={e.name}>
                        <span>
                          {"📄 "}
                          {e.name}
                        </span>
                        <button type="button" onClick={() => _(e.name)}>
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="text"
                className="patient-note-input"
                placeholder="Optional: Enter any symptoms or clinical questions..."
                value={i}
                onChange={(e) => a(e.target.value)}
              />
              <div className="button-group-vertical">
                <button
                  type="button"
                  onClick={(e) => y(e, true)}
                  className="whatsapp-submit-btn"
                  disabled={e.length === 0 || f || c}
                >
                  {f ? `Submitting...` : `Submit & Message on WhatsApp`}
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
      {u && (
        <div className="toast-notice">
          <span>⚡</span>
          <span>{u}</span>
        </div>
      )}
    </section>
  );
}
