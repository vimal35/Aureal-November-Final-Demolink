import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Cta.css";

/* ------------------------------------------------------------------
   CONTENT — title is exactly 2 lines
------------------------------------------------------------------- */
const CONTENT = {
  heroImage:
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2400&q=90",
  badge: "Aureal Healthcare Standard",
  titleLines: [
    "Advanced clinical care,",
    "personal and reassuring.",
  ],
  text:
    "Every Aureal Healthcare pathway is built around the patient — precision diagnostics, coordinated specialists and continuous support from first consultation to full recovery.",
  primary: { label: "Book a Specialist Enquiry", href: "/Appointment" },
  secondary: { label: "Speak to a specialist", href: "tel:+919944969049" },
  trust: ["NABH Accredited", "24×7 Clinical Support", "Multi-Speciality Team"],
};

const Cta = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const rafRef = useRef(null);

  const [inView, setInView] = useState(false);
  const [fine, setFine] = useState(false);

  /* ---------- pointer capability ---------- */
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setFine(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  /* ---------- HERO: full-screen image that ZOOMS OUT on scroll ---------- */
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const hero = heroRef.current;
        const img = imgRef.current;
        if (!hero || !img) return;

        const r = hero.getBoundingClientRect();
        const h = r.height || 1;
        const p = Math.min(Math.max(-r.top / h, 0), 1); // 0 → 1

        const scale = (1.42 - p * 0.42).toFixed(4);      // ZOOM OUT
        const shift = Math.round(p * 120);               // parallax (integer px)

        img.style.transform = `scale(${scale}) translate3d(0, ${shift}px, 0)`;
        hero.style.setProperty("--veil", (0.40 + p * 0.38).toFixed(3));
        hero.style.setProperty("--htxt", Math.max(0, 1 - p * 1.3).toFixed(3));
        hero.style.setProperty("--hy", `${Math.round(-p * 60)}px`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ---------- reveal ---------- */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ---------- magnetic buttons (transform only) ---------- */
  const onBtnMove = useCallback(
    (e) => {
      if (!fine) return;
      const b = e.currentTarget;
      const r = b.getBoundingClientRect();
      b.style.setProperty("--bx", `${Math.round((e.clientX - r.left - r.width / 2) * 0.18)}px`);
      b.style.setProperty("--by", `${Math.round((e.clientY - r.top - r.height / 2) * 0.3)}px`);
    },
    [fine]
  );

  const onBtnLeave = useCallback((e) => {
    e.currentTarget.style.setProperty("--bx", "0px");
    e.currentTarget.style.setProperty("--by", "0px");
  }, []);

  const onRipple = useCallback((e) => {
    const b = e.currentTarget;
    const r = b.getBoundingClientRect();
    const s = document.createElement("span");
    s.className = "cta__ripple";
    s.style.left = `${e.clientX - r.left}px`;
    s.style.top = `${e.clientY - r.top}px`;
    b.appendChild(s);
    setTimeout(() => s.remove(), 700);
  }, []);

  return (
    <div className="cta-wrap" ref={rootRef}>
      {/* ==================== HERO IMAGE (zoom out on scroll) ==================== */}
     

      {/* ============================== CTA BAND ============================== */}
      <section
        className={`cta${inView ? " is-in" : ""}`}
        aria-labelledby="cta-title"
      >
        <div className="cta__bg" aria-hidden="true">
          <span className="cta__grid" />
          <span className="cta__orb cta__orb--tl" />
          <span className="cta__orb cta__orb--br" />

          <svg className="cta__ecg" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,30 H420 l14,-22 l16,44 l14,-30 l18,10 H700 l12,-14 l14,26 l12,-12 H1200" />
          </svg>

          <span className="cta__dots">
            {Array.from({ length: 12 }).map((_, i) => (
              <i key={i} style={{ "--i": i }} />
            ))}
          </span>

          <span className="cta__edge cta__edge--top" />
          <span className="cta__edge cta__edge--bottom" />
        </div>

        <div className="cta__inner">
          <span className="cta__badge">
            <i className="cta__pulse" />
            {CONTENT.badge}
          </span>

          {/* --- 2-line title --- */}
          <h2 className="cta__title" id="cta-title">
            {CONTENT.titleLines.map((line, i) => (
              <span className="cta__line" key={i} style={{ "--l": i }}>
                <span>{line}</span>
              </span>
            ))}
          </h2>

          <p className="cta__text">{CONTENT.text}</p>

          <div className="cta__actions">
            <a
              className="cta__btn cta__btn--primary"
              href={CONTENT.primary.href}
              onMouseMove={onBtnMove}
              onMouseLeave={onBtnLeave}
              onClick={onRipple}
            >
              <span className="cta__btnTxt">{CONTENT.primary.label}</span>
              <span className="cta__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a
              className="cta__btn cta__btn--ghost"
              href={CONTENT.secondary.href}
              onMouseMove={onBtnMove}
              onMouseLeave={onBtnLeave}
              onClick={onRipple}
            >
              <span className="cta__btnTxt">{CONTENT.secondary.label}</span>
            </a>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default Cta;