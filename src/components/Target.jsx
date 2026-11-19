import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Target.css";

const IMG_FALLBACK = `https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80`;

const targets = [
  {
    img: `/abouts1.jpg`,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: `Geriatric People`,
    desc: `Dignified, comprehensive care for older adults — supporting mobility, cognitive wellness, medication routines, nutrition, and daily independence. We help seniors live safer, healthier lives at home.`,
    accent: `#0b4f35`,
    tags: [`Elder Care`, `Home Support`],
    route: `/GeriatricPeople`,
  },
  {
    img: `/abouts2.jpg`,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.8 2.3A.3.3 0 0 0 5 2h4a1 1 0 0 1 1 1v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h1.5z" />
        <path d="M6 13v3a6 6 0 0 0 12 0v-3" />
        <circle cx="12" cy="19" r="2" />
      </svg>
    ),
    title: `Perioperative Patients`,
    desc: `Seamless support throughout the surgical journey — from pre-operative preparation to post-operative recovery. Our clinicians monitor healing, manage pain, and help reduce avoidable complications.`,
    accent: `#0b4f35`,
    tags: [`Surgery`, `Recovery`],
    route: `/PerioperativePatients`,
  },
  {
    img: `/abouts3.jpg`,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: `Palliative Patients`,
    desc: `Compassionate, holistic support for patients and families facing serious illness. We focus on comfort, symptom relief, emotional well-being, and preserving dignity at every stage.`,
    accent: `#0b4f35`,
    tags: [`Comfort`, `Dignity`],
    route: `/PalliativePatients`,
  },
  {
    img: `/abouts4.jpg`,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.5 12 13 13 12" />
      </svg>
    ),
    title: `Longevity Enthusiasts`,
    desc: `Personalized preventive and longevity programs designed around your health goals. We combine proactive assessments, lifestyle guidance, and clinically informed care to help you thrive at every age.`,
    accent: `#0b4f35`,
    tags: [`Wellness`, `Longevity`],
    route: `/LongevityEnthusiasts`,
  },
  {
    img: `/abouts5.jpg`,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-5h6v5" />
        <circle cx="9" cy="11" r="1.5" />
        <circle cx="15" cy="11" r="1.5" />
        <path d="M10 14c1.2-1 2.8-1 4 0" />
      </svg>
    ),
    title: `Families Living Away`,
    desc: `Reliable healthcare support for loved ones when you cannot be physically present. We provide coordinated home care, regular updates, and professional oversight so families can stay connected from anywhere.`,
    accent: `#0b4f35`,
    tags: [`Family Support`, `Care Coordination`],
    route: `/FamiliesLivingAway`,
  },
  {
    img: `/abouts6.jpg`,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M5 21V10l7-6 7 6v11" />
        <circle cx="12" cy="10" r="2.5" />
        <path d="M8 21v-4h8v4" />
      </svg>
    ),
    title: `People Living Alone`,
    desc: `Thoughtful healthcare support for individuals living independently. From routine health monitoring to daily assistance and urgent care coordination, we create a safer and more confident home environment.`,
    accent: `#0b4f35`,
    tags: [`Independent Living`, `Safety`],
    route: `/LivingAlone`,
  },
  {
    img: `/abouts7.jpg`,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-2a6 6 0 0 1 12 0v2" />
        <path d="M16 11h5" />
        <path d="M18.5 8.5v5" />
        <path d="M16 18h5" />
      </svg>
    ),
    title: `Sole Caregiver`,
    desc: `Practical clinical and home-care support for those carrying the responsibility of caring for a loved one alone. We help reduce caregiver strain while ensuring consistent, professional care.`,
    accent: `#0b4f35`,
    tags: [`Caregiver Support`, `Relief Care`],
    route: `/SoleCaregiver`,
  },
  {
    img: `/abouts8.jpg`,
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21c4.5 0 8-3 8-7 0-3.8-2.7-7-6.3-7.8C13.2 4.9 12.7 3 11 3c-1.4 0-2.3 1.1-2.5 2.5C5.4 6.1 4 8.4 4 11c0 5 3.5 10 8 10Z" />
        <path d="M8 12h.01" />
        <path d="M14 12h.01" />
        <path d="M9 16c1.5 1 3.5 1 5 0" />
        <path d="M17 5c1.5.5 2.5 1.5 3 3" />
      </svg>
    ),
    title: `New Parents & Newborn Care`,
    desc: `Gentle, expert support during the important transition into parenthood. From newborn care and feeding guidance to maternal recovery and early health monitoring, we help families begin with confidence.`,
    accent: `#0b4f35`,
    tags: [`Newborn Care`, `Parent Support`],
    route: `/NewbornCare`,
  },
];

const TITLE_WORDS = [`Personalized`, `Care`, `for`, `Every`, `Journey`];

const Target = () => {
  let e = useRef(null);
  let t = useRef([]);
  let [n, r] = useState(false);
  let i = useNavigate();
  useEffect(() => {
    if (`scrollRestoration` in window.history) {
      window.history.scrollRestoration = `manual`;
    }
    return () => {
      if (`scrollRestoration` in window.history) {
        window.history.scrollRestoration = `auto`;
      }
    };
  }, []);
  let a = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: `auto`,
    });
    i(e);
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: `auto`,
      });
    });
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: `auto`,
      });
    }, 50);
  };
  useEffect(() => {
    let t = e.current;
    if (!t) {
      return;
    }
    if (
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ||
      typeof IntersectionObserver > `u`
    ) {
      r(true);
      return;
    }
    let n = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          r(true);
          n.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: `0px 0px -5% 0px`,
      },
    );
    n.observe(t);
    return () => {
      n.disconnect();
    };
  }, []);
  let o = (e, n) => {
    let r = t.current[n];
    if (!r || window.innerWidth < 769 || window.matchMedia(`(hover: none)`).matches) {
      return;
    }
    let i = r.getBoundingClientRect();
    let a = e.clientX - i.left;
    let o = e.clientY - i.top;
    let s = i.width / 2;
    let c = i.height / 2;
    let l = ((o - c) / c) * -5;
    let u = ((a - s) / s) * 5;
    r.style.setProperty(`--rx`, `${l}deg`);
    r.style.setProperty(`--ry`, `${u}deg`);
    r.style.setProperty(`--mx`, `${(a / i.width) * 100}%`);
    r.style.setProperty(`--my`, `${(o / i.height) * 100}%`);
  };
  let s = (e) => {
    let n = t.current[e];
    if (n) {
      n.style.setProperty(`--rx`, `0deg`);
      n.style.setProperty(`--ry`, `0deg`);
      n.style.setProperty(`--mx`, `50%`);
      n.style.setProperty(`--my`, `50%`);
    }
  };
  let c = (e) => {
    if (!e.currentTarget.dataset.fallbackApplied) {
      e.currentTarget.dataset.fallbackApplied = `true`;
      e.currentTarget.src = IMG_FALLBACK;
    }
  };
  return (
    <section className={`target-section ${n ? `is-visible` : ``}`} ref={e}>
      <div className="target-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <span className="grid-overlay" />
        <span className="gold-ring gold-ring-1" />
        <span className="gold-ring gold-ring-2" />
        <span className="target-lines" />
      </div>
      <div className="target-container">
        <header className="target-header">
          <span className="target-badge">
            <span className="badge-dot" />
            <span>Who Benefits From Us</span>
          </span>
          <h2 className="target-title">
            {TITLE_WORDS.map((e, t) => (
              <span
                className="title-word"
                style={{
                  "--tw": t,
                }}
                key={`${e}-${t}`}
              >
                <span>{e}</span>
              </span>
            ))}
          </h2>
          <p className="target-subtitle">
            From aging gracefully and recovering after surgery to supporting families, caregivers,
            new parents, and people living independently — we create intelligent, compassionate,
            doctor-led healthcare experiences designed around life at home.
          </p>
        </header>
        <div className="target-grid">
          {targets.map((e, r) => (
            <article
              ref={(e) => {
                t.current[r] = e;
              }}
              className={`target-card ${n ? `card-in` : ``}`}
              style={{
                "--accent": e.accent,
                "--delay": `${r * 110}ms`,
              }}
              onMouseMove={(e) => o(e, r)}
              onMouseLeave={() => s(r)}
              key={e.title}
            >
              <div className="card-inner">
                <div className="img-wrap">
                  <img src={e.img} alt={e.title} loading="lazy" onError={c} />
                  <div className="img-overlay" aria-hidden="true" />
                  <div className="card-index" aria-hidden="true">
                    {String(r + 1).padStart(2, `0`)}
                  </div>
                </div>
                <div className="card-body">
                  <div className="icon-badge" aria-hidden="true">
                    {e.icon}
                  </div>
                  <div className="card-tags">
                    {e.tags.map((e) => (
                      <span className="card-tag" key={e}>
                        {e}
                      </span>
                    ))}
                  </div>
                  <h4 className="card-title">{e.title}</h4>
                  <p className="card-desc">{e.desc}</p>
                  <div className="card-divider" aria-hidden="true" />
                  <Link
                    to={e.route}
                    className="card-link"
                    aria-label={`Learn more about ${e.title}`}
                    onClick={(t) => {
                      t.preventDefault();
                      a(e.route);
                    }}
                  >
                    <span>Learn More</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
                <div className="shine" aria-hidden="true" />
                <div className="card-glow" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Target;
