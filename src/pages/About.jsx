import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import Target from "../components/Target";
import "./About.css";

const VisionIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

const MissionIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const BedIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    <path d="M6 8v9" />
  </svg>
);

const HourglassIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 22h14" />
    <path d="M5 2h14" />
    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
  </svg>
);

const PuzzleIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
    <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
    <path d="M3 15h4" />
    <path d="M3 9h4" />
  </svg>
);

const MapIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const BoltIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const RefreshIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21.5 2v6h-6" />
    <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.73-5.73" />
  </svg>
);

const ChartIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const TrophyIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const SplitText = ({ text: e, className: t = ``, delay: n = 0 }) => {
  let r = e.split(` `);
  let i = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: n,
        staggerChildren: 0.055,
      },
    },
  };
  let a = {
    hidden: {
      y: `115%`,
      opacity: 0,
      rotateX: 42,
      filter: `blur(9px)`,
    },
    visible: {
      y: `0%`,
      opacity: 1,
      rotateX: 0,
      filter: `blur(0px)`,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <motion.span
      className={`split-text ${t}`}
      variants={i}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.4,
      }}
    >
      {" "}
      {r.map((e, t) => (
        <span className="split-word" key={`${e}-${t}`}>
          {" "}
          <motion.span
            variants={a}
            style={{
              display: `inline-block`,
            }}
          >
            {" "}
            {e}{" "}
          </motion.span>{" "}
        </span>
      ))}{" "}
    </motion.span>
  );
};

const StatNumber = ({ target: e, suffix: t = ``, duration: n = 2.2 }) => {
  let r = useRef(null);
  let i = useInView(r, {
    once: true,
    amount: 0.6,
  });
  useEffect(() => {
    if (!i) {
      return;
    }
    let t = r.current;
    if (!t) {
      return;
    }
    if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
      t.textContent = e.toLocaleString(`en-IN`);
      return;
    }
    let a = performance.now();
    let o;
    let s = (r) => {
      let i = (r - a) / 1000;
      let c = Math.min(i / n, 1);
      let l = 1 - (1 - c) ** 3;
      t.textContent = Math.ceil(l * e).toLocaleString(`en-IN`);
      if (c < 1) {
        o = requestAnimationFrame(s);
      }
    };
    o = requestAnimationFrame(s);
    return () => cancelAnimationFrame(o);
  }, [i, e, n]);
  return (
    <div className="stat-number">
      <span ref={r}>0</span>
      {t}
    </div>
  );
};

const TiltCard = ({ children: e, delay: t = 0, direction: n = `up` }) => {
  let r = useRef(null);
  return (
    <ScrollReveal delay={t} direction={n} duration={1} amount={0.25} className="why-card-wrap">
      <article
        ref={r}
        className="why-card"
        onMouseMove={(e) => {
          if (window.innerWidth <= 900) {
            return;
          }
          let t = r.current;
          if (!t) {
            return;
          }
          let n = t.getBoundingClientRect();
          let i = (e.clientX - n.left) / n.width - 0.5;
          let a = (e.clientY - n.top) / n.height - 0.5;
          t.style.transform = `perspective(1000px) rotateY(${i * 10}deg) rotateX(${-a * 10}deg) translateY(-12px) scale(1.02)`;
          t.style.borderColor = `#d4af37`;
          t.style.boxShadow = `0 34px 70px -26px rgba(212, 175, 55, 0.35), 0 20px 48px rgba(24, 32, 27, 0.12)`;
        }}
        onMouseLeave={() => {
          let e = r.current;
          if (e) {
            e.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)`;
            e.style.borderColor = ``;
            e.style.boxShadow = ``;
          }
        }}
      >
        {e}
      </article>
    </ScrollReveal>
  );
};

const initialsAvatar = (e) => {
  let t = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="760" viewBox="0 0 640 760">
    <rect width="640" height="760" fill="#0b4f35"/>
    <circle cx="320" cy="360" r="240" fill="none" stroke="#d4af37" stroke-width="6" stroke-dasharray="14 18" opacity="0.75"/>
    <text x="50%" y="50%" text-anchor="middle" font-family="Georgia, serif" font-size="200" fill="#fbf7ed">${e
      .replace(/^dr\.?\s*/i, ``)
      .split(` `)
      .filter(Boolean)
      .map((e) => e[0])
      .slice(0, 2)
      .join(``)
      .toUpperCase()}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(t)}`;
};

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
  </svg>
);

const AboutUs = () => {
  let e = useRef(null);
  useEffect(() => {
    let e = document.title;
    document.title = `About Us — Specialist-Led Home Healthcare in India | Aureal Healthcare`;
    let t = document.querySelector(`meta[name="description"]`);
    let n = t ? t.getAttribute(`content`) : null;
    if (!t) {
      t = document.createElement(`meta`);
      t.setAttribute(`name`, `description`);
      document.head.appendChild(t);
    }
    t.setAttribute(
      `content`,
      `Aureal Healthcare is a specialist-led, tech-enabled home care provider across Chennai, Tamil Nadu & Kerala — delivering geriatric, palliative, and perioperative care under WHO ICOPE, NABH & NICE standards`,
    );
    return () => {
      document.title = e;
      if (n !== null) {
        t.setAttribute(`content`, n);
      }
    };
  }, []);
  let { scrollYProgress: t } = useScroll();
  let n = useSpring(t, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  let r = [
    {
      name: `Dr. Sanjay Saravanan`,
      role: `Founder & CEO`,
      degrees: [`MBBS`, `PGDMLE`, `MBA (HA)`],
      image: `/dr-sanjay.png`,
      linkedin: `#`,
      bio: `Drives Aureal Healthcare vision — translating frontline physician experience into a structured, specialist-led model of home-based precision care.`,
    },
    {
      name: `Dr. Ratna Pratap`,
      role: `Cofounder & COO`,
      degrees: [`MBBS`, `MBA (HA)`],
      image: `/dr-ratna.png`,
      linkedin: `#`,
      bio: `Leads operations and care delivery — building the systems, teams and clinical governance that make hospital-grade outcomes repeatable at home.`,
    },
    {
      name: `Dr. Anoop Thankachan`,
      role: `Cofounder & CGSO`,
      degrees: [`MBBS`, `M.Sc AGMP (UK)`],
      image: `/dr-anoop.png`,
      linkedin: `#`,
      bio: `Shapes global strategy and standards — aligning Aureal Healthcare pathways with international frameworks in geriatric and preventive medicine.`,
    },
    {
      name: `Dr. Yogesh`,
      role: `MEDICAL SUPERINTENDENT`,
      degrees: [`MBBS , PGDMLE , MBA (HA)`],
      image: `/dr-YOGESH.png`,
      linkedin: `#`,
      bio: `Spearheading clinical operations and quality standards at Aureal Healthcare to bring dependable, high-grade medical management directly into the patient's home.`,
    },
  ];
  let i = [
    {
      icon: <BedIcon />,
      num: `01`,
      title: `The Acute Bed Shortage`,
      desc: `Hospital beds are consumed by stable, recovering patients who could heal at home — while critical cases wait for admission. The system is full, but not with the people who need it most.`,
    },
    {
      icon: <HourglassIcon />,
      num: `02`,
      title: `The Nursing Bottleneck`,
      desc: `A stretched nursing workforce leaves wards overextended and families untrained. Skilled clinical attention has become the scarcest resource in Indian healthcare.`,
    },
    {
      icon: <PuzzleIcon />,
      num: `03`,
      title: `Fragmented Care Journeys`,
      desc: `Discharge too often ends the medical record. Without structured continuity between hospital and home, recovery stalls, errors multiply, and readmissions climb.`,
    },
    {
      icon: <MapIcon />,
      num: `04`,
      title: `The Specialist Access Gap`,
      desc: `Specialist-led care concentrates in metro hospitals, distance, cost and wait times deciding outcomes long before medicine does. High-acuity expertise rarely reaches the home.`,
    },
  ];
  let a = [
    {
      icon: <BoltIcon />,
      title: `Operational Efficiency`,
      desc: `We eliminate operational bottlenecks, reduce overhead costs, and maximize asset utilization — so partner hospitals focus beds on critical cases while patients recover safely at home.`,
    },
    {
      icon: <RefreshIcon />,
      title: `End-to-End Extended Coverage`,
      desc: `A seamless transition from hospital efficiency to home care ensures zero gaps in treatment continuity, clinical supervision, or accountability across the recovery journey.`,
    },
    {
      icon: <ChartIcon />,
      title: `Data-Driven Clinical Pathways`,
      desc: `Our integrated HIMS and clinician-centric EMR reduce clinical errors, minimize administrative burden on physicians, and make every care decision measurable.`,
    },
    {
      icon: <TrophyIcon />,
      title: `Uncompromised Quality`,
      desc: `World-class medical treatment powered by technology-enabled clinical logic — every pathway aligned with globally validated best practices, every outcome audited.`,
    },
    {
      icon: <ShieldIcon />,
      title: `Built for Compliance`,
      desc: `Designed to meet and exceed NABH and international accreditation standards, ensuring absolute patient safety, documentation integrity, and regulatory excellence.`,
    },
  ];
  return (
    <div className="au-page" ref={e}>
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: n,
        }}
        aria-hidden="true"
      />
      <section className="about-section">
        <div className="au-bg-grid" aria-hidden="true" />
        <div className="au-bg-orb au-bg-orb-1" aria-hidden="true" />
        <div className="au-bg-orb au-bg-orb-2" aria-hidden="true" />
        <div className="container">
          <div className="section-header">
            <ScrollReveal delay={0.1} direction="up">
              <span className="section-badge">Our Story</span>
            </ScrollReveal>
            <h1>
              <SplitText
                text="Hospital-Level Precision Care. Delivered at Your Doorstep in Chennai."
                delay={0.2}
              />
            </h1>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <ScrollReveal delay={0.75} direction="up">
                <p>
                  Aureal Healthcare brings a tech-enabled clinical ecosystem to Chennai —
                  specialist-led precision medicine, delivered right where you live.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.85} direction="up">
                <p>
                  Founded by practicing physicians and backed by Aureal Healthcare's clinical infrastructure,
                  we bypass the limitations of fragmented healthcare to deliver structured,
                  high-acuity care in the comfort of your own home.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.95} direction="up">
                <p>
                  <strong>The Aureal Healthcare Standard</strong>
                  <br />
                  <br />
                  <strong>100% Specialist-Led</strong> — Multidisciplinary teams managing your
                  complete health journey, right here in Chennai.
                  <br />
                  <br />
                  <strong>Advanced Technology</strong> — Powered by Aureal Healthcare's Health Information
                  Systems (HIMS) for continuous, data-driven monitoring.
                  <br />
                  <br />
                  <strong>Global Clinical Governance</strong> — Hospital-grade safety protocols
                  backed by globally validated clinical frameworks.
                  <br />
                  <br />
                  <strong>Comprehensive Care Continuum</strong> — Expert support spanning acute
                  interventions, post-operative recovery, geriatrics, palliative care, and disease
                  reversal.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={1.05} direction="up">
                <p>
                  Aureal Healthcare brings the same clinical excellence and governance to
                  Chennai — delivered locally.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.75} direction="left" duration={1.2} className="about-image">
              <motion.img
                src="/aboutus01.jpg"
                alt="Aureal Healthcare specialist reviewing patient diagnostic imaging as part of home-based precision care in Chennai"
                onError={(e) => {
                  if (!e.currentTarget.dataset.fallbackApplied) {
                    e.currentTarget.dataset.fallbackApplied = `true`;
                    e.currentTarget.src = `/aboutus02.jpg`;
                  }
                }}
                initial={{
                  scale: 1.15,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.6,
                  delay: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              <motion.div
                className="about-floating"
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="pulse" aria-hidden="true" />
                <div>
                  <strong>Live Monitoring</strong>
                  <span>24/7 specialist supervision</span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="scale-section" aria-label="Scale of operations">
        <div className="container">
          <div className="stats-grid">
            <ScrollReveal delay={0.75} direction="up" className="stat-item">
              <StatNumber target={5} />
              <p className="stat-label">Centre</p>
              <span>Chennai • Kottayam • Kochi • Chennai • Bangalore</span>
            </ScrollReveal>
            <ScrollReveal delay={0.9} direction="up" className="stat-item">
              <StatNumber target={100} suffix="%" />
              <p className="stat-label">Specialist-Led</p>
              <span>Every pathway designed and signed off by physicians</span>
            </ScrollReveal>
            <ScrollReveal delay={1.05} direction="up" className="stat-item">
              <StatNumber target={8000} suffix="+" />
              <p className="stat-label">Clients Served</p>
              <span>A rapidly expanding clinical network</span>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="vm-section">
        <div className="container">
          <div className="vm-grid">
            <ScrollReveal delay={0.75} direction="right" duration={1.1} className="vision-card">
              <div className="vm-icon">
                <VisionIcon />
              </div>
              <h3>
                <SplitText text="Our Vision" />
              </h3>
              <p>
                To engineer India's most precise, tech-enabled, clinician-led healthcare ecosystem —
                redefining the continuum of care so that high-acuity precision medicine, healthy
                longevity, and dignified healing are seamlessly accessible in the comfort of every
                home.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.9} direction="left" duration={1.1} className="mission-card">
              <div className="vm-icon">
                <MissionIcon />
              </div>
              <h3>
                <SplitText text="Our Mission" />
              </h3>
              <p>
                To replace fragmented care systems with a structured, 100% specialist-led clinical
                model powered by an advanced clinician-centric EMR. By deploying globally validated
                frameworks, we deliver a precise, high-acuity continuum of care directly to the
                comfort of your home.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="team-section">
        <div className="container">
          <div className="section-header center">
            <ScrollReveal delay={0.1} direction="up">
              <span className="section-badge">Founding Team</span>
            </ScrollReveal>
            <h2>
              <SplitText text="Meet Our Founding Team" delay={0.2} />
            </h2>
            <ScrollReveal delay={0.75} direction="up">
              <p className="section-subtitle">
                Practicing physicians who built Aureal Healthcare around one conviction — that
                world-class care should reach the patient, not the other way around.
              </p>
            </ScrollReveal>
          </div>
          <div className="team-grid">
            {r.map((e, t) => (
              <ScrollReveal
                delay={0.75 + t * 0.12}
                direction="up"
                duration={1}
                className="team-card-wrap"
                key={e.name}
              >
                <article className="team-card">
                  <div className="team-media">
                    <img
                      src={e.image}
                      alt={`Portrait of ${e.name}, ${e.role} at Aureal Healthcare`}
                      loading="lazy"
                      onError={(t) => {
                        t.currentTarget.onerror = null;
                        t.currentTarget.src = initialsAvatar(e.name);
                      }}
                    />
                    <span className="team-media-veil" aria-hidden="true" />
                    <span className="team-index" aria-hidden="true">
                      {String(t + 1).padStart(2, `0`)}
                    </span>
                  </div>
                  <div className="team-body">
                    <h3 className="team-name">{e.name}</h3>
                    <p className="team-role">
                      <span className="team-role-dot" aria-hidden="true" />
                      {e.role}
                    </p>
                    <ul className="team-degrees">
                      {e.degrees.map((e) => (
                        <li key={e}>{e}</li>
                      ))}
                    </ul>
                    <p className="team-bio">{e.bio}</p>
                    <a
                      className="team-link"
                      href={e.linkedin}
                      aria-label={`View ${e.name} on LinkedIn`}
                    >
                      <LinkedInIcon />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                  <span className="team-accent" aria-hidden="true" />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="problem-section">
        <div className="container">
          <div className="section-header center">
            <ScrollReveal delay={0.1} direction="up">
              <span className="section-badge">The Problem We Solve</span>
            </ScrollReveal>
            <h2>
              <SplitText text="India's Care System Wasn't Built for Recovery at Home" delay={0.2} />
            </h2>
            <ScrollReveal delay={0.75} direction="up">
              <p className="section-subtitle">
                Four structural failures keep high-acuity care locked inside hospital walls. Aureal
                Healthcare was engineered to close each one.
              </p>
            </ScrollReveal>
          </div>
          <div className="problem-grid">
            {i.map((e, t) => (
              <ScrollReveal
                delay={0.75 + t * 0.1}
                direction="up"
                duration={1}
                className="problem-card-wrap"
                key={e.title}
              >
                <article className="problem-card">
                  <div className="problem-top">
                    <div className="problem-icon">{e.icon}</div>
                    <span className="problem-num" aria-hidden="true">
                      {e.num}
                    </span>
                  </div>
                  <h3>{e.title}</h3>
                  <p>{e.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <Target />
      <section className="why-section">
        <div className="container">
          <div className="why-header">
            <ScrollReveal delay={0.1} direction="up">
              <span className="section-badge">Clinical Excellence</span>
            </ScrollReveal>
            <h2>
              <SplitText text="OUR CLINICAL EXCELLENCE " delay={0.2} />
            </h2>
            <ScrollReveal delay={0.75} direction="up">
              <p className="section-subtitle">
                Five pillars that define our specialist-led hospital-at-home model — and the value
                they create for every stakeholder.
              </p>
            </ScrollReveal>
          </div>
          <div className="why-grid">
            {a.map((e, t) => (
              <TiltCard delay={0.75 + t * 0.1} direction="up" key={e.title}>
                <div className="why-icon">{e.icon}</div>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <motion.div
                  className="progress-bar"
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 1.1,
                    delay: 1 + t * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  aria-hidden="true"
                />
              </TiltCard>
            ))}
          </div>
          <div className="why-header benefits-header">
            <br />
            <br />
            <h2>
              <SplitText text="Why HCOs & Families Choose Us" delay={0.2} />
            </h2>
            <ScrollReveal delay={0.75} direction="up">
              <p className="section-subtitle">
                Meaningful benefits for patients, families, and healthcare organizations through
                structured, specialist-led home care.
              </p>
            </ScrollReveal>
          </div>
          <div className="benefits-grid">
            {[
              {
                category: `For Patients & Families`,
                points: [
                  `Hospital-grade care in the comfort and dignity of home`,
                  `Continuous specialist monitoring with 24/7 response`,
                  `Reduced risk of hospital-acquired infections`,
                  `Faster recovery with family support and lower stress`,
                  `Significant cost savings versus prolonged hospitalization`,
                ],
              },
              {
                category: `For Healthcare Organizations`,
                points: [
                  `Optimized bed utilization for critical cases`,
                  `Substantial reduction in 30-day readmissions`,
                  `Improved clinical outcomes and quality metrics`,
                  `Scalable care delivery with minimal infrastructure cost`,
                  `Enhanced patient satisfaction and institutional reputation`,
                ],
              },
            ].map((e, t) => (
              <ScrollReveal
                delay={0.75 + t * 0.15}
                direction={t === 0 ? `right` : `left`}
                duration={1}
                className="benefit-card"
                key={e.category}
              >
                <h3>{e.category}</h3>
                <ul>
                  {e.points.map((e, n) => (
                    <motion.li
                      initial={{
                        opacity: 0,
                        x: 34,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.95 + t * 0.15 + n * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      key={e}
                    >
                      {e}
                    </motion.li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <ScrollReveal delay={0.1} direction="up">
            <span className="section-badge cta-badge">Begin Your Care Journey</span>
          </ScrollReveal>
          <h2>
            <SplitText text="Hospital-grade precision, delivered at home." delay={0.2} />
          </h2>
          <ScrollReveal delay={0.75} direction="up">
            <p>
              Speak with our care coordinators to map the right specialist-led pathway for your
              family — or for your organisation's patients.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.9} direction="up">
            <div className="cta-actions">
              <a className="btn-primary large" href="/Appointment">
                Book a Specialist Visit
              </a>
              <a className="btn-ghost large" href="tel:+919944969049">
                Contact Our Care Coordinators
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
