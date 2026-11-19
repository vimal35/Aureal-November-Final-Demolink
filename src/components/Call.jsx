import React, { useEffect, useRef, useState } from "react";
import "./Call.css";

const dO = [
  {
    text: `Experience`,
    gold: false,
  },
  {
    text: `Precision`,
    gold: true,
  },
  {
    text: `Care`,
    gold: true,
  },
  {
    text: `at`,
    gold: false,
  },
  {
    text: `Home`,
    gold: false,
  },
];

const fO = `Aureal Healthcare — Redefining healthcare delivery across Puducherry, Tamil Nadu & Kerala with UK-standard clinical governance.`;

export default function Call() {
  let e = useRef(null);
  let [t, n] = useState(false);
  useEffect(() => {
    let t = e.current;
    if (!t) {
      return;
    }
    let r = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          n(true);
          r.disconnect();
        }
      },
      {
        threshold: 0.28,
      },
    );
    r.observe(t);
    return () => r.disconnect();
  }, []);
  let r = (t) => {
    let n = e.current;
    if (!n) {
      return;
    }
    let r = n.getBoundingClientRect();
    n.style.setProperty(`--px`, `${((t.clientX - r.left) / r.width) * 100}%`);
    n.style.setProperty(`--py`, `${((t.clientY - r.top) / r.height) * 100}%`);
  };
  let i = 0;
  return (
    <section ref={e} className={`ac-hero ${t ? `is-on` : ``}`} onMouseMove={r}>
      <span className="ac-aurora" aria-hidden="true" />
      <span className="ac-blob ac-blob--gold" aria-hidden="true" />
      <span className="ac-blob ac-blob--jade" aria-hidden="true" />
      <span className="ac-lines" aria-hidden="true" />
      <span className="ac-grain" aria-hidden="true" />
      <span className="ac-vignette" aria-hidden="true" />
      <div className="ac-wrap">
        <span className="ac-badge">
          <i className="ac-badge__dot" />
          Home Healthcare Excellence
        </span>
        <h2 className="ac-title" aria-label={dO.map((e) => e.text).join(` `)}>
          {dO.map((e, t) => (
            <span className="ac-word" aria-hidden="true" key={t}>
              <span className={`ac-word__mask ${e.gold ? `is-gold` : ``}`}>
                {e.text.split(``).map((e, t) => {
                  let n = 0.3 + i * 0.032;
                  i += 1;
                  return (
                    <span
                      className="ac-char"
                      style={{
                        animationDelay: `${n}s`,
                      }}
                      key={t}
                    >
                      {e}
                    </span>
                  );
                })}
              </span>
            </span>
          ))}
          <span className="ac-shine" aria-hidden="true" />
        </h2>
        <span className="ac-rule" aria-hidden="true">
          <i />
        </span>
        <p className="ac-sub">
          <span>{fO}</span>
        </p>
      </div>
    </section>
  );
}
