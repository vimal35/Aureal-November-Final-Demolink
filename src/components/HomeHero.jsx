import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeHero.css";

const AUTOPLAY_MS = 7000;

const slides = [
  {
    id: `hb-1`,
    tagline: `Specialist-Led Home Care`,
    title: `Redefining Healthcare at Home`,
    description: `Aureal Healthcare delivers specialist-led, technology-enabled clinical care in the comfort of your home. Our precision-driven approach combines medical expertise with advanced digital healthcare systems to ensure safe, personalized, and effective treatment.`,
    image: `/slider1.jpg`,
    buttons: [
      {
        label: `Book Appointment`,
        to: `/appointment`,
        style: `primary`,
      },
      {
        label: `Our Service`,
        to: `/services`,
        style: `outline`,
      },
    ],
  },
  {
    id: `hb-2`,
    tagline: `Advanced HIMS Integration`,
    title: `Technology-Driven Clinical Excellence`,
    description: `Powered by advanced Health Information Management Systems (HIMS) and globally recognized clinical protocols aligned with UK NHS standards, we provide structured, data-driven care that delivers hospital-quality outcomes beyond traditional healthcare settings.`,
    image: `/slider2.jpg`,
    buttons: [
      {
        label: `About us`,
        to: `/about`,
        style: `primary`,
      },
      {
        label: `Our Blog`,
        to: `/blog`,
        style: `outline`,
      },
    ],
  },
  {
    id: `hb-3`,
    tagline: `Multidisciplinary Support`,
    title: `Comprehensive Care Across Every Stage`,
    description: `From acute care and post-operative recovery to geriatric support, palliative care, mental wellness, and chronic disease management, our multidisciplinary specialists deliver continuous, compassionate care tailored to every patient's unique journey.`,
    image: `/slider3.jpg`,
    buttons: [
      {
        label: `About us`,
        to: `/about`,
        style: `primary`,
      },
      {
        label: `Book Appointment`,
        to: `/appointment`,
        style: `outline`,
      },
    ],
  },
];

const HeroBanner = () => {
  let [e, t] = useState(0);
  let [n, r] = useState(false);
  let [i, a] = useState(null);
  let [o, s] = useState(null);
  let c = slides.length;
  let l = useCallback(() => {
    t((e) => (e === c - 1 ? 0 : e + 1));
  }, [c]);
  let u = useCallback(() => {
    t((e) => (e === 0 ? c - 1 : e - 1));
  }, [c]);
  useEffect(() => {
    if (n) {
      return;
    }
    let e = setTimeout(l, AUTOPLAY_MS);
    return () => clearTimeout(e);
  }, [e, n, l]);
  useEffect(() => {
    let e = (e) => {
      if (e.key === `ArrowRight`) {
        l();
      }
      if (e.key === `ArrowLeft`) {
        u();
      }
    };
    window.addEventListener(`keydown`, e);
    return () => window.removeEventListener(`keydown`, e);
  }, [l, u]);
  let d = (e) => {
    s(null);
    a(e.targetTouches[0].clientX);
  };
  let f = (e) => s(e.targetTouches[0].clientX);
  let p = () => {
    if (!i || !o) {
      return;
    }
    let e = i - o;
    if (e > 50) {
      l();
    }
    if (e < -50) {
      u();
    }
  };
  let m = slides[e];
  return (
    <section
      className="hero-banner-section"
      onMouseEnter={() => r(true)}
      onMouseLeave={() => r(false)}
      onTouchStart={d}
      onTouchMove={f}
      onTouchEnd={p}
    >
      <div className="hb-bg-stack">
        {slides.map((t, n) => (
          <div className={`hb-bg-slide ${n === e ? `active` : ``}`} key={t.id}>
            <div
              className="hb-bg-image"
              style={{
                backgroundImage: `url(${t.image})`,
              }}
            />
          </div>
        ))}
        <div className="hb-overlay-dark" />
        <div className="hb-overlay-gradient" />
        <div className="hb-grid-pattern" />
      </div>
      <div className="hb-corner hb-corner-tl" />
      <div className="hb-corner hb-corner-br" />
      <button className="hb-arrow hb-arrow-left" onClick={u} aria-label="Previous slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button className="hb-arrow hb-arrow-right" onClick={l} aria-label="Next slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      <div className="hb-container">
        <div className="hb-content" key={m.id}>
          <div className="hb-tagline hb-anim hb-anim-1">
            <span className="hb-tagline-line" />
            <span className="hb-tagline-dot" />
            <span>{m.tagline}</span>
          </div>
          <h1 className="hb-title hb-anim hb-anim-2">{m.title}</h1>
          <p className="hb-description hb-anim hb-anim-3">{m.description}</p>
          <div className="hb-buttons hb-anim hb-anim-4">
            {m.buttons.map((e, t) => (
              <Link
                to={e.to}
                className={`hb-btn ${e.style === `primary` ? `hb-btn-primary` : `hb-btn-outline`}`}
                key={t}
              >
                <span>{e.label}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="hb-btn-arrow"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hb-bottom-bar">
        <div className="hb-counter">
          <span className="hb-counter-current">0{e + 1}</span>
          <span className="hb-counter-sep" />
          <span className="hb-counter-total">0{c}</span>
        </div>
        <div className="hb-progress-track">
          <div
            className={`hb-progress-fill ${n ? `paused` : ``}`}
            style={{
              animationDuration: `${AUTOPLAY_MS}ms`,
            }}
            key={`prog-${e}`}
          />
        </div>
        <span className="hb-scroll-hint">
          <span className="hb-mouse">
            <span className="hb-mouse-wheel" />
          </span>
          Scroll to Explore
        </span>
      </div>
    </section>
  );
};

export default HeroBanner;
