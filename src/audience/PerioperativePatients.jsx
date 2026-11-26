import React, { useState } from "react";
import "./PerioperativePatients.css";

const _k = [
  {
    icon: `preop`,
    title: `Pre-Op Preparation Guidance`,
    text: `Patients and families receive clear preparation guidance ahead of surgery, coordinated with the treating surgical team where relevant.`,
  },
  {
    icon: `postop`,
    title: `Structured Post-Op Recovery Plan`,
    text: `A doctor-led plan covers wound care, medication scheduling, and mobility guidance specific to the surgery performed.`,
  },
  {
    icon: `pain`,
    title: `Pain Management`,
    text: `Pain is actively managed and reviewed by the overseeing physician, rather than left to a fixed, generic schedule.`,
  },
  {
    icon: `monitor`,
    title: `Complication Monitoring`,
    text: `Close monitoring during the highest-risk early recovery window helps catch infection or other complications early.`,
  },
  {
    icon: `physio`,
    title: `Coordinated Physiotherapy at Home`,
    text: `Where mobility rehabilitation is needed, physiotherapy at home is coordinated within the same recovery plan, not arranged separately.`,
  },
];

const vk = [
  {
    title: `Pre-Op Assessment & Planning`,
    text: `The physician reviews the planned surgery and prepares a post-op home recovery plan in advance.`,
  },
  {
    title: `Post-Op Plan Activation`,
    text: `From the day the patient returns home in Chennai, the doctor-led recovery plan is in effect — wound care, medication, mobility.`,
  },
  {
    title: `Close Early Monitoring`,
    text: `The first two to three weeks receive heightened attention, when complications are most likely to occur.`,
  },
  {
    title: `Doctor-Led Step-Down`,
    text: `As recovery progresses, the physician reduces visit intensity while remaining accountable for the plan.`,
  },
];

const yk = [
  `Patients recovering from orthopedic surgery (joint replacement, fracture repair) who need structured mobility and pain management at home`,
  `Patients recovering from abdominal or general surgery who need wound care and complication monitoring`,
  `Elderly patients for whom post-surgical recovery carries higher risk and benefits most from close doctor-led oversight`,
  `Families who want a physician actively involved through recovery, not just a discharge summary to interpret on their own`,
];

const bk = [
  {
    q: `What clinical framework does Aureal Healthcare's perioperative care follow?`,
    a: `Perioperative recovery plans are structured around CPOC (Centre for Perioperative Care) guidelines, which set out best-practice pathways for pre- and post-operative patient care.`,
  },
  {
    q: `What is included in post-surgery care at home?`,
    a: `It typically includes wound care, medication management, pain management, complication monitoring, and coordinated physiotherapy at home, delivered under one doctor-led recovery plan.`,
  },
  {
    q: `How soon after surgery should home care start?`,
    a: `Ideally the recovery plan is prepared before the patient is discharged, so structured care begins the moment the patient returns home in Chennai.`,
  },
  {
    q: `Who manages my pain after surgery?`,
    a: `The overseeing physician actively manages and reviews pain control as part of the recovery plan, rather than following a fixed, generic schedule.`,
  },
  {
    q: `How long does post-operative home care typically continue?`,
    a: `Duration depends on the surgery and the patient's recovery pace; care intensity is stepped down under physician oversight as recovery progresses.`,
  },
  {
    q: `Is physiotherapy included in post-surgery care?`,
    a: `Where mobility rehabilitation is needed, physiotherapy at home is coordinated within the same recovery plan rather than arranged as a separate, disconnected service.`,
  },
  {
    q: `Which areas around Chennai are covered for post-surgery home care?`,
    a: `Coverage includes Chennai town and surrounding areas such as White Town, Muthialpet, Lawspet, Reddiarpalayam, Ozhukarai, and Ariyankuppam.`,
  },
];

const xk = [
  {
    name: `Geriatric People`,
    link: `/GeriatricPeople`,
  },
  {
    name: `Palliative Patients`,
    link: `/PalliativePatients`,
  },
  {
    name: `Person-Centric Rehab`,
    link: `/PersonCentricRehab`,
  },
  {
    name: `Advanced Diagnostics`,
    link: `/AdvancedDiagnostics`,
  },
];

const Sk = [
  `Chennai Town`,
  `White Town`,
  `Muthialpet`,
  `Lawspet`,
  `Reddiarpalayam`,
  `Ozhukarai`,
  `Ariyankuppam`,
];

const Ck = ({ name: e }) => {
  let t = {
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.7`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  };
  switch (e) {
    case `preop`:
      return (
        <svg {...t}>
          <path d="M12 6v6l4 2" />
          <path d="M5 12.5V8a3 3 0 0 1 6 0v9" />
          <path d="M9.5 7.5 12 5.5l2.5 2" />
          <path d="M4 18h16" />
        </svg>
      );
    case `postop`:
      return (
        <svg {...t}>
          <path d="M7 3.5h3l4 4 3-3h5" />
          <path d="M8.5 15.5 5 17.5l2 1.5 2.5-1" />
          <path d="M20.5 4 15 20.5a2 2 0 0 1-3.2 0L4.5 13.5a2 2 0 0 1 0-3.2L7 12.3V8.5h7.3" />
        </svg>
      );
    case `pain`:
      return (
        <svg {...t}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 10v.01M12 14v.01M12 16v.01" />
          <path d="M9 9l3-3m-3 4l3 3M13.5 15l3 3" />
        </svg>
      );
    case `monitor`:
      return (
        <svg {...t}>
          <rect x="4" y="5" width="16" height="12" rx="2.5" />
          <path d="M8 3h8v2H8z" />
          <path d="M10 12v4h4" />
          <path d="M6 21h12" />
        </svg>
      );
    case `physio`:
      return (
        <svg {...t}>
          <path d="M7.5 3.5h2l1.5 1.5 2.5-3h6l-4 4.5 3 1.5v2l-1.5-1.5-3 4-4-3.5H5l1-3 2.5 2" />
          <circle cx="12.5" cy="12.5" r="1.6" />
        </svg>
      );
    case `check`:
      return (
        <svg {...t}>
          <path d="M20 6.5 9.2 17.3 4 12.1" />
        </svg>
      );
    case `arrow`:
      return (
        <svg {...t}>
          <path d="M4.5 12h15" />
          <path d="m13.5 6 6 6-6 6" />
        </svg>
      );
    case `shield`:
      return (
        <svg {...t}>
          <path d="M12 2.8 4.5 5.6v5.7c0 4.6 3.2 8 7.5 9.9 4.3-1.9 7.5-5.3 7.5-9.9V5.6z" />
          <path d="m8.8 11.8 2.2 2.2 4.2-4.4" />
        </svg>
      );
    case `phone`:
      return (
        <svg {...t}>
          <path d="M5.2 3.5h3.4l1.7 4.3-2.1 1.6a12.8 12.8 0 0 0 5.4 5.4l1.6-2.1 4.3 1.7v3.4a1.9 1.9 0 0 1-2.1 1.9A16.4 16.4 0 0 1 3.3 5.6a1.9 1.9 0 0 1 1.9-2.1z" />
        </svg>
      );
    default:
      return null;
  }
};

const PerioperativePatients = () => {
  let [e, t] = useState(0);
  let n = (n) => {
    t(e === n ? -1 : n);
  };
  return (
    <div className="periop-page">
      <section className="periop-hero">
        <div className="periop-hero__inner periop-container">
          <div className="periop-hero__content">
            <nav className="periop-breadcrumb" aria-label="breadcrumb">
              <span>Who We Serve</span>
              <span className="periop-breadcrumb__sep">/</span>
              <span className="periop-breadcrumb__active">Perioperative Patients</span>
            </nav>
            <span className="periop-hero__badge">
              <span className="periop-hero__badge-dot" />
              DOCTOR-LED PERIOPERATIVE CARE · Chennai
            </span>
            <h1 className="periop-hero__title">
              Seamless Perioperative Care —{" "}
              <span className="periop-text-gold">From Pre-Op to Full Recovery</span> at Home in
              Chennai
            </h1>
            <p className="periop-hero__lead">
              A seamless surgical journey for patients across Chennai — from pre-op preparation
              to post-op recovery at home, with a physician monitoring healing, managing pain, and
              preventing complications so patients recover faster.
            </p>
            <div className="periop-hero__actions">
              <a href="#periop-cta" className="periop-btn periop-btn--gold">
                Arrange Perioperative Care
                <Ck name="arrow" />
              </a>
              <a href="#periop-how" className="periop-btn periop-btn--ghost">
                How It Works
              </a>
            </div>
            <div className="periop-hero__stats">
              <div className="periop-stat">
                <span className="periop-stat__num">100%</span>
                <span className="periop-stat__label">Doctor-Led Recovery Plans</span>
              </div>
              <div className="periop-stat">
                <span className="periop-stat__num">CPOC</span>
                <span className="periop-stat__label">Guidelines Aligned</span>
              </div>
              <div className="periop-stat">
                <span className="periop-stat__num">2-3 Wks</span>
                <span className="periop-stat__label">Intensive Monitoring Window</span>
              </div>
            </div>
          </div>
          <div className="periop-hero__media">
            <div className="periop-hero__img-frame">
              <img
                src="/peri1.jpg"
                alt="Physician reviewing post-surgery recovery plan during a home visit in Chennai"
                className="periop-hero__img"
                loading="eager"
              />
            </div>
            <div className="periop-hero__float-card">
              <span className="periop-hero__float-icon">
                <Ck name="shield" />
              </span>
              <div>
                <strong>Physician-Designed Plans</strong>
                <p>Coordinated with your surgical team</p>
              </div>
            </div>
            <div className="periop-hero__float-pill">
              <Ck name="check" />
              {" CPOC Guidelines Aligned"}
            </div>
          </div>
        </div>
      </section>
      <section className="periop-quick periop-container">
        <div className="periop-quick__card">
          <span className="periop-quick__label">Quick Answer</span>
          <p>
            Aureal Healthcare provides doctor-led perioperative care across Chennai — covering
            pre-op preparation and post-op recovery at home, structured around CPOC (Centre for
            Perioperative Care) guidelines — with a physician monitoring healing, managing pain, and
            watching for complications, so patients recover in a familiar environment without losing
            clinical oversight.
          </p>
        </div>
      </section>
      <section className="periop-section">
        <div className="periop-container periop-overview__grid">
          <div className="periop-overview__content">
            <div className="periop-head">
              <span className="periop-eyebrow">Overview</span>
              <h2 className="periop-title">
                Integrated Perioperative Care,{" "}
                <span className="periop-text-gold">One Continuous Arc</span>
              </h2>
            </div>
            <p className="periop-text">
              Recovery after surgery is one of the highest-risk periods in a patient's care journey
              — wound complications, pain that is poorly managed, or a missed early sign of
              infection can turn a routine recovery into a hospital readmission. Chennai
              families searching for "post hospitalisation care" or "post surgery care at home" are
              usually trying to avoid exactly that outcome.
            </p>
            <p className="periop-text">
              Aureal Healthcare's perioperative model treats the surgical journey as one continuous
              arc — pre-op preparation, the surgery itself (coordinated with the treating surgeon),
              and post-op recovery at home — all tracked by the same overseeing physician rather
              than handled as disconnected stages.
            </p>
            <p className="periop-text">
              This matters most in the first two to three weeks after surgery, when wound care,
              mobility restrictions, and medication management need close, informed attention —
              exactly the window where this doctor-led home recovery plan is most active, across
              Chennai town and surrounding communes.
            </p>
            <div className="periop-areas">
              <span className="periop-areas__title">Areas Covered:</span>
              <div className="periop-areas__list">
                {Sk.map((e) => (
                  <span className="periop-area-pill" key={e}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="periop-overview__media">
            <img
              src="/peri2.jpg"
              alt="Physiotherapist assisting post-surgical patient with mobility at home"
              loading="lazy"
            />
            <div className="periop-exp-badge">
              <span className="periop-exp-badge__num">01</span>
              <span className="periop-exp-badge__text">
                One Physician.
                <br />
                Through Recovery.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="periop-section periop-section--tint">
        <div className="periop-container">
          <div className="periop-head periop-head--center">
            <span className="periop-eyebrow">What's Included</span>
            <h2 className="periop-title">
              Everything Through Surgery,{" "}
              <span className="periop-text-gold">Under One Physician</span>
            </h2>
            <p className="periop-lead">
              Five pillars of perioperative home care — each designed, monitored, and reviewed by a
              physician.
            </p>
          </div>
          <div className="periop-include__grid">
            {_k.map((e, t) => (
              <article className="periop-include-card" key={e.title}>
                <span className="periop-include-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <span className="periop-include-card__icon">
                  <Ck name={e.icon} />
                </span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="periop-section" id="periop-how">
        <div className="periop-container">
          <div className="periop-head periop-head--center">
            <span className="periop-eyebrow">How It Works</span>
            <h2 className="periop-title">
              A Clear Path to <span className="periop-text-gold">Faster Recovery at Home</span>
            </h2>
          </div>
          <div className="periop-steps">
            {vk.map((e, t) => (
              <div className="periop-step" key={e.title}>
                <div className="periop-step__num">
                  <span>{t + 1}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="periop-why">
        <div className="periop-container periop-why__grid">
          <div className="periop-why__left">
            <span className="periop-eyebrow periop-eyebrow--light">
              Why This Matters in Chennai
            </span>
            <h2 className="periop-title periop-title--light">
              Closing the Gap in <span className="periop-text-gold">Post-Surgical Care</span>
            </h2>
            <div className="periop-why__quote">
              "A physician stays involved through the full recovery arc, not just at the pre-op and
              discharge points."
            </div>
          </div>
          <div className="periop-why__right">
            <p>
              Post-surgical recovery at home in Chennai is often managed by families alone,
              following written discharge instructions with no clinician available to answer
              questions or catch early complications. This gap is common across the wider home
              healthcare landscape in Chennai, not specific to any one hospital.
            </p>
            <p>
              Aureal Healthcare's perioperative care model exists to close that gap — a physician
              stays involved through the full recovery arc, not just at the pre-op and discharge
              points.
            </p>
          </div>
        </div>
      </section>
      <section className="periop-section">
        <div className="periop-container periop-diff__grid">
          <div className="periop-diff__media">
            <img
              src="/peri3.jpg"
              alt="Physician reviewing surgical recovery progress chart with patient"
              loading="lazy"
            />
            <div className="periop-diff__media-badge">
              <Ck name="shield" />
              <span>Doctor-Led Clinical Governance</span>
            </div>
          </div>
          <div className="periop-diff__content">
            <div className="periop-head">
              <span className="periop-eyebrow">The Aureal Healthcare Difference</span>
              <h2 className="periop-title">
                A Physician Designs the Plan.{" "}
                <span className="periop-text-gold">The Team Executes It.</span>
              </h2>
            </div>
            <p className="periop-text">
              Perioperative recovery carries real medical risk — infection, blood clots, medication
              interactions — which is why a physician stays accountable for the whole recovery plan,
              not just the wound-care checklist.
            </p>
            <p className="periop-text">
              The doctor-led structure means recovery pace and pain management are adjusted based on
              physician assessment, not a one-size-fits-all recovery timeline.
            </p>
            <ul className="periop-check-list">
              <li>
                <span className="periop-check-list__icon">
                  <Ck name="check" />
                </span>
                When infection risk needs physician-level assessment
              </li>
              <li>
                <span className="periop-check-list__icon">
                  <Ck name="check" />
                </span>
                When pain management needs individual adjustment
              </li>
              <li>
                <span className="periop-check-list__icon">
                  <Ck name="check" />
                </span>
                When mobility progression must be clinically supervised
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="periop-section periop-section--tint">
        <div className="periop-container">
          <div className="periop-head periop-head--center">
            <span className="periop-eyebrow">Who It's For</span>
            <h2 className="periop-title">
              Patients Who Need{" "}
              <span className="periop-text-gold">More Than Discharge Instructions</span>
            </h2>
          </div>
          <div className="periop-who__grid">
            {yk.map((e, t) => (
              <div className="periop-who-card" key={t}>
                <span className="periop-who-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <p>{e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="periop-trust">
        <div className="periop-container periop-trust__inner">
          <span className="periop-trust__icon">
            <Ck name="shield" />
          </span>
          <div className="periop-trust__content">
            <span className="periop-eyebrow periop-eyebrow--light">Trust & Credibility</span>
            <h2 className="periop-title periop-title--light">
              Clinical Governance You Can Rely On
            </h2>
            <p>
              Perioperative care in Chennai follows the same doctor-led clinical governance
              applied across every Aureal Healthcare and AUREAL program, structured around CPOC
              (Centre for Perioperative Care) guidelines for pre- and post-operative care pathways.
            </p>
            <p>
              Because the same physician stays involved from pre-op through recovery, families avoid
              the common gap of losing clinical continuity the moment they leave the hospital.
            </p>
            <div className="periop-trust__badges">
              <span>CPOC Guidelines</span>
              <span>Doctor-Led Governance</span>
              <span>One Accountable Physician</span>
            </div>
          </div>
        </div>
      </section>
      <section className="periop-section" id="periop-faq">
        <div className="periop-container periop-container--narrow">
          <div className="periop-head periop-head--center">
            <span className="periop-eyebrow">FAQ</span>
            <h2 className="periop-title">
              Frequently Asked <span className="periop-text-gold">Questions</span>
            </h2>
          </div>
          <div className="periop-faq__list">
            {bk.map((t, r) => (
              <div className={`periop-faq__item ${e === r ? `is-open` : ``}`} key={t.q}>
                <button className="periop-faq__q" onClick={() => n(r)} aria-expanded={e === r}>
                  <span>{t.q}</span>
                  <span className="periop-faq__icon" aria-hidden="true" />
                </button>
                <div className="periop-faq__a">
                  <div className="periop-faq__a-inner">
                    <p>{t.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="periop-section periop-section--tint">
        <div className="periop-container">
          <div className="periop-head periop-head--center">
            <span className="periop-eyebrow">Explore More</span>
            <h2 className="periop-title">
              Related <span className="periop-text-gold">Aureal Healthcare</span> Services
            </h2>
          </div>
          <div className="periop-related__grid">
            {xk.map((e) => (
              <a href={e.link} className="periop-related-card" key={e.name}>
                <h3>{e.name}</h3>
                <span className="periop-related-card__arrow">
                  <Ck name="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="periop-cta" id="periop-cta">
        <div className="periop-container periop-cta__inner">
          <span className="periop-cta__brand">Aureal Healthcare</span>
          <h2>
            Arrange doctor-led perioperative care in Chennai before surgery —{" "}
            <span className="periop-text-gold">one physician, through recovery.</span>
          </h2>
          <p>
            Speak with our care team today and ensure your surgical journey is supported by expert
            clinical oversight at every step.
          </p>
          <div className="periop-cta__actions">
            <a href="tel:+919944969049" className="periop-btn periop-btn--gold">
              <Ck name="phone" />
              Call Our Care Team
            </a>
            <a href="#periop-faq" className="periop-btn periop-btn--ghost">
              Read FAQs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerioperativePatients;
