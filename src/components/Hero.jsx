import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Hero.css";

function wE(e) {
  return e.split(``).map((e, t) => (
    <span
      className="char"
      style={{
        "--char-delay": `${0.15 + t * 0.035}s`,
      }}
      key={t}
    >
      {e === ` ` ? `\xA0` : e}
    </span>
  ));
}

function TE({ value: e, suffix: t = `` }) {
  let n = useRef(null);
  let [r, i] = useState(0);
  let a = useRef(false);
  useEffect(() => {
    let t = n.current;
    if (!t) {
      return;
    }
    let r = new IntersectionObserver(
      ([t]) => {
        if (t.isIntersecting && !a.current) {
          a.current = true;
          EE(0, e, 1800, i);
        }
      },
      {
        threshold: 0.5,
      },
    );
    r.observe(t);
    return () => r.disconnect();
  }, [e]);
  return (
    <span ref={n} className="stat-value">
      {r}
      {t}
    </span>
  );
}

function EE(e, t, n, r) {
  let i = performance.now();
  function a(o) {
    let s = o - i;
    let c = Math.min(s / n, 1);
    let l = 1 - (1 - c) ** 3;
    r(Math.round(e + (t - e) * l));
    if (c < 1) {
      requestAnimationFrame(a);
    }
  }
  requestAnimationFrame(a);
}

function DE({ count: e = 20 }) {
  return (
    <div className="hero-particles" aria-hidden="true">
      {useMemo(
        () =>
          Array.from(
            {
              length: e,
            },
            (e, t) => ({
              id: t,
              left: `${Math.random() * 100}%`,
              size: `${1 + Math.random() * 3}px`,
              duration: `${8 + Math.random() * 14}s`,
              delay: `${Math.random() * 10}s`,
              drift: `${(Math.random() - 0.5) * 100}px`,
              opacity: 0.2 + Math.random() * 0.5,
            }),
          ),
        [e],
      ).map((e) => (
        <div
          className="hero-particle"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            animationDuration: e.duration,
            animationDelay: e.delay,
            "--drift": e.drift,
            opacity: e.opacity,
          }}
          key={e.id}
        />
      ))}
    </div>
  );
}

const OE = [
  {
    left: `27.5%`,
    top: `50%`,
    delay: `1.4s`,
  },
  {
    left: `36.5%`,
    top: `24%`,
    delay: `1.7s`,
  },
  {
    left: `51%`,
    top: `50%`,
    delay: `2.0s`,
  },
  {
    left: `57.5%`,
    top: `8%`,
    delay: `2.3s`,
  },
  {
    left: `69%`,
    top: `50%`,
    delay: `2.6s`,
  },
];

export default function Hero() {
  let e = useRef(null);
  let t = useRef(null);
  let [n, r] = useState({
    x: 0.5,
    y: 0.5,
  });
  let [i, a] = useState(0);
  let o = useCallback((t) => {
    let n = e.current?.getBoundingClientRect();
    if (n) {
      r({
        x: (t.clientX - n.left) / n.width,
        y: (t.clientY - n.top) / n.height,
      });
    }
  }, []);
  useEffect(() => {
    let t = e.current;
    if (t) {
      t.addEventListener(`mousemove`, o);
      return () => t.removeEventListener(`mousemove`, o);
    }
  }, [o]);
  useEffect(() => {
    let e = t.current;
    if (!e) {
      return;
    }
    let { x: r, y: i } = n;
    e.style.background = `
      radial-gradient(ellipse 70% 50% at ${25 + r * 20}% ${30 + i * 10}%, rgba(11, 77, 46, 0.1) 0%, transparent 70%),
      radial-gradient(ellipse 50% 40% at ${75 - r * 10}% ${60 - i * 10}%, rgba(11, 77, 46, 0.06) 0%, transparent 70%),
      radial-gradient(ellipse 60% 50% at ${50 + (r - 0.5) * 30}% ${80 + (i - 0.5) * 20}%, rgba(212, 175, 55, 0.05) 0%, transparent 60%)
    `;
  }, [n]);
  useEffect(() => {
    let e = () => {
      a(window.scrollY);
    };
    window.addEventListener(`scroll`, e, {
      passive: true,
    });
    return () => window.removeEventListener(`scroll`, e);
  }, []);
  return (
    <section className="hero" ref={e}>
      <div
        className="hero-bg-grid"
        aria-hidden="true"
        style={{
          transform: `translateY(${i * 0.15}px)`,
        }}
      />
      <div className="hero-bg-glow" ref={t} aria-hidden="true" />
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />
      <DE count={24} />
      <div className="section-inner hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            {wE(`Precision care`)}
            <span className="hero-title-accent">Built by doctors, for patients</span>
          </h1>
          <p
            className="hero-copy"
            style={{
              color: `#000000`,
            }}
          >
            Aureal Healthcare is a progressive, tech-enabled clinical ecosystem bringing precision
            medicine directly to the comfort of your home. Built by doctors for patients, we're
            redefining healthcare with a structured, 100% specialist-led model — reach us however
            suits you best.
          </p>{" "}
          <br />
        </div>
        <div className="hero-monitor">
          <div className="hero-monitor-head">
            <span>
              <span className="dot" />
              LIVE · CARE NETWORK
            </span>
            <span>HIMS-linked</span>
          </div>
          <div
            style={{
              position: `relative`,
            }}
          >
            <svg viewBox="0 0 400 90" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M0 45 L110 45 L128 20 L146 70 L164 45 L200 45 L214 8 L230 82 L248 45 L400 45"
                fill="none"
                stroke="#0b4d2e"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {OE.map((e, t) => (
              <div
                className="hero-monitor-node"
                style={{
                  left: e.left,
                  top: e.top,
                  animationDelay: e.delay,
                  animationDuration: `${1.8 + t * 0.3}s`,
                }}
                key={t}
              />
            ))}
          </div>
          <div className="hero-monitor-stats">
            <div>
              <TE value={5} />
              <span className="stat-label">Care Centres</span>
            </div>
            <div>
              <TE value={100} suffix="%" />
              <span className="stat-label">Specialist-led</span>
            </div>
            <div>
              <TE value={24} suffix="h" />
              <span className="stat-label">Report Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
