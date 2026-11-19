import React, { useState, useEffect, useRef } from "react";
import "./Why.css";

/* ============================================================
   Scroll reveal hook — re-triggers EVERY time in/out of view
   ============================================================ */
const useReveal = (options = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? "0px 0px -8% 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, visible];
};

/* ============================================================
   Reveal Wrapper
   ============================================================ */
const Reveal = ({
  children,
  direction = "up",
  delay = 0.75,
  duration = 0.9,
  className = "",
  threshold,
  as: Tag = "div",
}) => {
  const [ref, visible] = useReveal({ threshold });

  return (
    <Tag
      ref={ref}
      className={`wr ${direction} ${visible ? "in" : ""} ${className}`}
      style={{
        "--wr-delay": `${delay}s`,
        "--wr-dur": `${duration}s`,
      }}
    >
      {children}
    </Tag>
  );
};

/* ============================================================
   Word-by-word Title Reveal
   ============================================================ */
const RevealTitle = ({ text, className = "", style }) => {
  const [ref, visible] = useReveal({ threshold: 0.4 });

  return (
    <h2
      ref={ref}
      className={`${className} wr-title ${visible ? "in" : ""}`}
      style={style}
      aria-label={text}
    >
      {text.split(" ").map((word, index) => (
        <span
          className="wr-word-mask"
          key={index}
          aria-hidden="true"
        >
          <span
            className="wr-word"
            style={{ "--w": index }}
          >
            {word}
          </span>
        </span>
      ))}
    </h2>
  );
};

/* ============================================================
   WHY CHOOSE US FEATURES
   ============================================================ */
const FEATURES = [
  {
    id: "feat-1",
    title: "Specialist Doctors",

    subtitle:
      "Senior MD/MS Doctor Consultation at Home",

    description:
      "Senior MD/MS doctors and specialist consultants bring hospital-level clinical expertise directly to the patient’s home. Every consultation and digital clinical round is delivered through structured care pathways designed around safety, continuity, and internationally aligned clinical governance standards.",

    badge: "Specialist Care",

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 7" />
      </svg>
    ),

    highlight: "20+ Medical Specialties Covered",

    isLarge: true,
  },

  {
    id: "feat-2",
    title: "24/7 Clinical Support",

    subtitle:
      "Round-the-Clock Clinical Response",

    description:
      "Our care coordination team remains active around the clock, providing immediate clinical assistance, telephone consultations, care coordination, and emergency escalation whenever required. Every request is assessed through a responsive clinical support pathway.",

    badge: "Always Active",

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),

    highlight: "< 30 Min Deployment Time",

    isLarge: false,
  },

  {
    id: "feat-3",
    title: "Personalized Treatment",

    subtitle:
      "Tailored Patient Care Plans",

    description:
      "Every patient receives a personalised care pathway developed by our multidisciplinary clinical team. Care plans are carefully calibrated to individual clinical needs, mobility levels, functional goals, lifestyle requirements, and the patient’s desired recovery journey.",

    badge: "Precision Care",

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),

    highlight: "Custom Health Pathways",

    isLarge: false,
  },

  {
    id: "feat-4",
    title: "Advanced Medical Technology",

    subtitle:
      "IoT Vitals & HIMS Integration",

    description:
      "Our technology-enabled care ecosystem combines IoT-enabled remote patient monitoring with automated cloud-based medical records. Patient information and vital parameters can be securely synchronised in real time, supporting informed clinical decisions and continuous care coordination.",

    badge: "Next-Gen Tech",

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          ry="2"
        />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),

    highlight: "Real-Time Cloud Vital Sync",

    isLarge: true,
  },
];

/* ============================================================
   WHY COMPONENT
   ============================================================ */
const Why = () => {
  return (
    <section className="why-choose-us-section">
      {/* Background */}
      <div className="why-background-pattern" />

      <div className="why-container">

        {/* ======================================================
            HEADER
        ====================================================== */}
        <header className="why-header">

          <Reveal
            direction="up"
            delay={0.1}
            duration={0.8}
          >
            <div className="why-badge">
              <span className="why-badge-dot" />
              <span>Aureal Healthcare Distinction</span>
            </div>
          </Reveal>

          <RevealTitle
            text="Why Choose Aureal Healthcare"
            className="why-main-title"
            style={{ color: "#0F5132" }}
          />

          <Reveal
            direction="up"
            delay={0.75}
            duration={0.95}
          >
            <p className="why-subtitle">
              Hospital-grade clinical expertise, personalised care,
              responsive support, and intelligent technology — brought
              together to create a safer and more connected healthcare
              experience at home.
            </p>
          </Reveal>

        </header>

        {/* ======================================================
            BENTO FEATURE GRID
        ====================================================== */}
        <div className="why-bento-grid">

          {FEATURES.map((feature, index) => {

            const direction =
              index % 2 === 0
                ? feature.isLarge
                  ? "left"
                  : "up"
                : feature.isLarge
                ? "right"
                : "up";

            return (
              <Reveal
                key={feature.id}
                direction={direction}
                delay={0.75 + index * 0.12}
                duration={1}
                threshold={0.15}
                className={`why-card-reveal ${
                  feature.isLarge
                    ? "why-card-large"
                    : ""
                }`}
              >
                <article className="why-card">

                  {/* Accent Line */}
                  <span className="why-card-accent" />

                  {/* ==================================================
                      CARD HEADER
                  ================================================== */}
                  <div className="why-card-header">

                    <div className="why-icon-box">
                      {feature.icon}
                    </div>

                    <span className="why-pill-badge">
                      {feature.badge}
                    </span>

                  </div>

                  {/* ==================================================
                      CARD CONTENT
                  ================================================== */}
                  <div className="why-card-content">

                    <span className="why-card-subtitle">
                      {feature.subtitle}
                    </span>

                    <h3
                      className="why-card-title"
                      style={{ color: "#C99700" }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="why-card-description"
                      style={{ color: "#000000" }}
                    >
                      {feature.description}
                    </p>

                  </div>

                  {/* ==================================================
                      CARD FOOTER
                  ================================================== */}
                  <div className="why-card-footer">

                    <span className="why-highlight-tag">

                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
                      </svg>

                      <span>
                        {feature.highlight}
                      </span>

                    </span>

                  </div>

                </article>
              </Reveal>
            );
          })}

        </div>

        {/* ======================================================
            TRUST BANNER
        ====================================================== */}
        <Reveal
          direction="up"
          delay={0.8}
          duration={1.05}
          threshold={0.15}
        >
          <div className="why-trust-banner">

            <div className="why-trust-stats">

              {/* Stat 1 */}
              <div className="why-stat-box">

                <span className="why-stat-number">
                  20+
                </span>

                <span className="why-stat-label">
                  Medical Specialties
                </span>

              </div>

              <div className="why-stat-divider" />

              {/* Stat 2 */}
              <div className="why-stat-box">

                <span className="why-stat-number">
                  24/7
                </span>

                <span className="why-stat-label">
                  Clinical Support
                </span>

              </div>

              <div className="why-stat-divider" />

              {/* Stat 3 */}
              <div className="why-stat-box">

                <span className="why-stat-number">
                  &lt; 30 Min
                </span>

                <span className="why-stat-label">
                  Deployment Response
                </span>

              </div>

            </div>

            {/* ==================================================
                CTA
            ================================================== */}
            <div className="why-cta-wrapper">

              <a
                href="tel:+919944969049"
                className="why-cta-button"
              >

                <span>
                  Book a Specialist Visit
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="why-button-arrow"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>

              </a>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Why;