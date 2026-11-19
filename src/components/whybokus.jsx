import React, { useCallback, useEffect, useRef, useState } from "react";
import "./whybookus.css";

const oO = [
  {
    icon: `🏥`,
    title: `100% Specialist-Led`,
    description: `Every consultation handled by board-certified specialists only.`,
  },
  {
    icon: `⚡`,
    title: `30-Min Response`,
    description: `Our coordinator calls you back within 30 minutes of submission.`,
  },
  {
    icon: `🏠`,
    title: `Home-Based Care`,
    description: `Hospital-grade clinical care delivered at your doorstep.`,
  },
  {
    icon: `🌐`,
    title: `UK Standards`,
    description: `Clinical protocols aligned with NICE guidelines and NABH benchmarks.`,
  },
  {
    icon: `🔒`,
    title: `100% Confidential`,
    description: `Your medical data is encrypted and handled with strict privacy protocols.`,
  },
];

const sO = oO.length + 1;

const cO = (e, t, n) => Math.min(Math.max(e, t), n);

const lO = (e) => String(e).padStart(2, `0`);

export default function Why() {
  let e = useRef(null);
  let t = useRef(null);
  let n = useRef(null);
  let [r, i] = useState(0);
  let [a, o] = useState(true);
  let s = useRef(null);
  let c = useRef(null);
  let l = useRef(null);
  let u = useCallback((e, r = false) => {
    let a = t.current;
    let o = n.current;
    if (!a || !o) {
      return;
    }
    let s = Array.from(o.children);
    if (s.length === 0) {
      return;
    }
    let c = cO(e, 0, s.length - 1);
    let l = s[0]?.getBoundingClientRect().width || 0;
    let u = window.getComputedStyle(o);
    let d = parseFloat(u.columnGap || u.gap) || 0;
    let f = a.clientWidth;
    if (l !== 0) {
      if (window.innerWidth <= 768) {
        let e = c * (l + d) - (f - l) / 2;
        a.scrollTo({
          left: e,
          behavior: r ? `auto` : `smooth`,
        });
      } else {
        let e = c * (l + d) - (f - l) / 2;
        o.style.transition = r ? `none` : `transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)`;
        o.style.transform = `translate3d(${-e}px, 0, 0)`;
        if (r) {
          o.style.transition = `none`;
        } else {
          setTimeout(() => {
            o.style.transition = `none`;
          }, 600);
        }
      }
      i(c);
    }
  }, []);
  let d = useCallback(() => {
    u(r + 1);
  }, [r, u]);
  let f = useCallback(() => {
    u(r - 1);
  }, [r, u]);
  useEffect(() => {
    if (!a) {
      return;
    }
    let e = setInterval(() => {
      i((e) => {
        let t = (e + 1) % sO;
        u(t);
        return t;
      });
    }, 4000);
    return () => clearInterval(e);
  }, [a, u]);
  useEffect(
    () => () => {
      if (s.current) {
        clearTimeout(s.current);
      }
    },
    [],
  );
  let p = useCallback(() => {
    o(false);
    if (s.current) {
      clearTimeout(s.current);
    }
    s.current = setTimeout(() => {
      o(true);
    }, 8000);
  }, []);
  let m = useCallback(
    (e) => {
      p();
      u(e);
    },
    [p, u],
  );
  let h = useCallback(() => {
    p();
    d();
  }, [p, d]);
  let g = useCallback(() => {
    p();
    f();
  }, [p, f]);
  let _ = (e) => {
    c.current = e.touches[0].clientX;
    l.current = null;
  };
  let v = (e) => {
    l.current = e.touches[0].clientX;
  };
  let y = () => {
    if (c.current !== null && l.current !== null) {
      let e = c.current - l.current;
      if (Math.abs(e) > 50) {
        p();
        if (e > 0) {
          d();
        } else {
          f();
        }
      }
    }
    c.current = null;
    l.current = null;
  };
  let x = useCallback(() => {
    let e = t.current;
    let a = n.current;
    if (!e || !a || window.innerWidth > 768) {
      return;
    }
    let o = Array.from(a.children);
    let s = o[0]?.getBoundingClientRect().width || 0;
    let c = window.getComputedStyle(a);
    let l = parseFloat(c.columnGap || c.gap) || 0;
    let u = cO(Math.round(e.scrollLeft / Math.max(s + l, 1)), 0, o.length - 1);
    if (u !== r) {
      i(u);
    }
  }, [r]);
  useEffect(() => {
    let e = (e) => {
      if (e.key === `ArrowRight`) {
        e.preventDefault();
        h();
      } else if (e.key === `ArrowLeft`) {
        e.preventDefault();
        g();
      }
    };
    window.addEventListener(`keydown`, e);
    return () => window.removeEventListener(`keydown`, e);
  }, [h, g]);
  useEffect(() => {
    let e = () => {
      u(r, true);
    };
    window.addEventListener(`resize`, e);
    return () => window.removeEventListener(`resize`, e);
  }, [r, u]);
  let S = sO > 1 ? r / (sO - 1) : 0;
  return (
    <section className="wbu-section" ref={e}>
      <div className="wbu-sticky">
        <div className="wbu-background" aria-hidden="true">
          <span className="wbu-orb wbu-orb-one" />
          <span className="wbu-orb wbu-orb-two" />
          <span className="wbu-grid-pattern" />
        </div>
        <div className="wbu-container">
          <header className="wbu-header">
            <div className="wbu-heading-group">
              <span className="wbu-eyebrow">
                <span className="wbu-eyebrow-dot" />
                The care you deserve
              </span>
              <h2 className="wbu-title">
                {"Why Book "}
                <span>With Us?</span>
              </h2>
            </div>
            <div className="wbu-header-right">
              <p className="wbu-intro">
                Specialist-led, confidential and hospital-grade healthcare designed around your
                comfort.
              </p>
              <div className="wbu-counter" aria-hidden="true">
                <span className="wbu-counter-current">{lO(r + 1)}</span>
                <span className="wbu-counter-divider" />
                <span className="wbu-counter-total">{lO(sO)}</span>
              </div>
            </div>
          </header>
          <div className="wbu-progress-wrapper" aria-hidden="true">
            <div className="wbu-progress-track">
              <span
                className="wbu-progress-fill"
                style={{
                  transform: `scaleX(${S})`,
                }}
              />
            </div>
            <span className="wbu-progress-label">
              {a ? `Auto-playing` : `Manual mode`}
              <span className="wbu-progress-arrow">→</span>
            </span>
          </div>
          <div className="wbu-carousel-wrapper">
            <button
              className="wbu-arrow-btn wbu-arrow-left"
              onClick={g}
              disabled={r === 0}
              aria-label="Previous card"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="wbu-cards-viewport"
              ref={t}
              onScroll={x}
              onTouchStart={_}
              onTouchMove={v}
              onTouchEnd={y}
            >
              <div className="wbu-cards-track" ref={n}>
                {oO.map((e, t) => (
                  <article
                    className={`wbu-card ${t === r ? `is-active` : ``}`}
                    onClick={() => m(t)}
                    key={e.title}
                  >
                    <div className="wbu-card-glow" />
                    <div className="wbu-card-top">
                      <span className="wbu-icon">{e.icon}</span>
                      <span className="wbu-card-number">
                        {lO(t + 1)}
                        <em>
                          {" / "}
                          {lO(sO)}
                        </em>
                      </span>
                    </div>
                    <div className="wbu-card-content">
                      <h3>{e.title}</h3>
                      <p>{e.description}</p>
                    </div>
                    <div className="wbu-card-footer">
                      <span>Premium care</span>
                      <span className="wbu-card-line" />
                      <span className="wbu-card-arrow">↗</span>
                    </div>
                  </article>
                ))}
                <article
                  className={`wbu-card wbu-final-card ${r === oO.length ? `is-active` : ``}`}
                  onClick={() => m(oO.length)}
                >
                  <div className="wbu-card-glow" />
                  <span className="wbu-final-icon">✓</span>
                  <span className="wbu-final-label">Ready when you are</span>
                  <h3>Your health deserves specialist attention.</h3>
                </article>
              </div>
            </div>
            <button
              className="wbu-arrow-btn wbu-arrow-right"
              onClick={h}
              disabled={r === sO - 1}
              aria-label="Next card"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="wbu-dots" aria-hidden="true">
            {Array.from(
              {
                length: sO,
              },
              (e, t) => (
                <button
                  className={`wbu-dot ${t === r ? `is-active` : ``}`}
                  onClick={() => m(t)}
                  aria-label={`Go to slide ${t + 1}`}
                  aria-current={t === r}
                  key={t}
                />
              ),
            )}
          </div>
          <div className="wbu-mobile-swipe" aria-hidden="true">
            <span>{a ? `Auto-playing` : `Swipe to explore`}</span>
            <span className="wbu-progress-arrow">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
