import React, { useState } from "react";
import "./NewbornCare.css";

const dA = [
  {
    icon: `mother`,
    title: `Postnatal Recovery Support for the Mother`,
    text: `Trained staff support the mother's physical recovery after delivery — including C-section recovery — while watching for warning signs that need physician attention.`,
  },
  {
    icon: `newborn`,
    title: `Expert Newborn Care`,
    text: `Hands-on support with feeding, bathing, cord care, and daily newborn routines — especially valuable for first-time parents finding their rhythm.`,
  },
  {
    icon: `twins`,
    title: `Specialised Support for Twins`,
    text: `Extra staffing and structured coordination designed specifically for the doubled feeding, sleep, and care demands of twin newborns.`,
  },
  {
    icon: `stethoscope`,
    title: `Physician Availability for Concerns`,
    text: `A doctor is available to address concerns about the mother's recovery or the baby's health — so families never have to guess whether something needs attention.`,
  },
  {
    icon: `calendar`,
    title: `Flexible Scheduling for the Early Weeks`,
    text: `Support can be scheduled intensively through the first weeks at home and eased back gradually as the family finds its footing.`,
  },
  {
    icon: `growth`,
    title: `Individual Growth & Feeding Tracking`,
    text: `With twins, each baby's feeding, weight, and health markers are tracked individually — never treated as double the same routine.`,
  },
];

const fA = [
  {
    title: `Pre- or Post-Delivery Planning`,
    text: `Families arrange postnatal support in advance of the due date or immediately after delivery, based on their needs.`,
  },
  {
    title: `Postnatal Care Plan Set Up`,
    text: `A plan covering the mother's recovery and newborn care is put in place, with additional staffing considered for twins.`,
  },
  {
    title: `In-Home Support at Home`,
    text: `Trained staff provide hands-on care at home across Chennai through the demanding early postnatal weeks.`,
  },
  {
    title: `Physician Check-Ins as Needed`,
    text: `Concerns about the mother's recovery or the newborn's health are addressed with physician input — never left unanswered.`,
  },
];

const pA = [
  {
    title: `First-Time Parents`,
    text: `Parents who feel unprepared for the sheer physical and emotional demands of the postnatal period.`,
  },
  {
    title: `Parents of Twins`,
    text: `Families facing doubled feeding, sleep, and care schedules with far too few hands to manage them.`,
  },
  {
    title: `Mothers Recovering from C-Section`,
    text: `Mothers recovering from a difficult delivery or caesarean who need dedicated, monitored recovery support.`,
  },
  {
    title: `Families Without Nearby Support`,
    text: `Households without extended family close by to share the load during the first critical weeks at home.`,
  },
];

const mA = [
  {
    q: `What clinical framework does newborn care follow?`,
    a: `Newborn care is guided by IAP (Indian Academy of Pediatrics) standards — a nationally recognised framework for pediatric and neonatal care — alongside physician oversight of the mother's recovery.`,
  },
  {
    q: `What does postnatal care at home include?`,
    a: `It typically includes recovery support for the mother, hands-on newborn care support (feeding, bathing, daily care), and physician availability for concerns about either the mother or the baby.`,
  },
  {
    q: `Is there additional support available for twins?`,
    a: `Yes — the postnatal care model includes specialised staffing and coordination for the doubled demands of caring for twin newborns, with each baby monitored individually.`,
  },
  {
    q: `How soon after delivery can postnatal care start?`,
    a: `Support can be arranged in advance of delivery so it begins the moment the family returns home, or set up shortly after delivery based on the family's needs.`,
  },
  {
    q: `Is a doctor involved, or only nursing staff?`,
    a: `A physician is available to address concerns about the mother's recovery or the newborn's health as part of the doctor-led model, in addition to hands-on nursing and caregiving support.`,
  },
  {
    q: `How long does postnatal home care typically continue?`,
    a: `Duration depends on the family's needs — many families schedule intensive support for the first several weeks and adjust from there as confidence grows.`,
  },
  {
    q: `Is postnatal care available across Chennai?`,
    a: `Yes — mother and baby care is available across Chennai town and surrounding areas such as White Town, Muthialpet, Lawspet, Reddiarpalayam, and Ozhukarai.`,
  },
];

const hA = [
  {
    name: `The Sole Caregiver`,
    link: `/SoleCaregiver`,
  },
  {
    name: `Geriatric People`,
    link: `/GeriatricPeople`,
  },
  {
    name: `Advanced Diagnostics`,
    link: `/AdvancedDiagnostics`,
  },
  {
    name: `Multi-Specialty Consultations`,
    link: `/Multi-Specialty-Consultations`,
  },
];

const gA = [
  `Chennai Town`,
  `White Town`,
  `Muthialpet`,
  `Lawspet`,
  `Reddiarpalayam`,
  `Ozhukarai`,
];

const C__A = ({ name: e }) => {
  let t = {
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.7`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  };
  switch (e) {
    case `mother`:
      return (
        <svg {...t}>
          <circle cx="9.2" cy="4.6" r="2.3" />
          <path d="M6 21v-5.2H4.3l1.8-5.4A2.6 2.6 0 0 1 8.6 8.6h1.3a2.6 2.6 0 0 1 2.5 1.8l.6 1.9" />
          <path d="M9.2 15.8V21" />
          <path d="M15.6 13.6a2.4 2.4 0 0 1 3.4 0 2.5 2.5 0 0 1 0 3.5l-3.4 3.4-3.4-3.4a2.5 2.5 0 0 1 0-3.5 2.4 2.4 0 0 1 3.4 0z" />
        </svg>
      );
    case `newborn`:
      return (
        <svg {...t}>
          <circle cx="12" cy="9.4" r="5.6" />
          <path d="M9.9 8.6h.02M14.1 8.6h.02" />
          <path d="M10.3 11.4c1 .8 2.4.8 3.4 0" />
          <path d="M8.1 4.9c1-1 2.4-1.6 3.9-1.6" />
          <path d="M4.7 20.7c1-2.4 3.9-4 7.3-4s6.3 1.6 7.3 4" />
        </svg>
      );
    case `twins`:
      return (
        <svg {...t}>
          <circle cx="7.6" cy="7.4" r="3.4" />
          <circle cx="16.4" cy="7.4" r="3.4" />
          <path d="M2.6 20.6c.6-2.6 2.6-4.2 5-4.2s4.4 1.6 5 4.2" />
          <path d="M11.4 20.6c.6-2.6 2.6-4.2 5-4.2s4.4 1.6 5 4.2" />
        </svg>
      );
    case `stethoscope`:
      return (
        <svg {...t}>
          <path d="M5 3v4.5a4 4 0 0 0 8 0V3" />
          <path d="M3.6 3h2.8M11.6 3h2.8" />
          <path d="M9 11.5v2.2a5 5 0 0 0 5 5 4.6 4.6 0 0 0 4.6-4.6v-2.3" />
          <circle cx="18.6" cy="9.6" r="2.1" />
        </svg>
      );
    case `calendar`:
      return (
        <svg {...t}>
          <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
          <path d="M8.2 14h2.1M13.7 14h2.1M8.2 17.6h2.1M13.7 17.6h2.1" />
        </svg>
      );
    case `growth`:
      return (
        <svg {...t}>
          <path d="M3.5 20.3h17" />
          <path d="M4.5 16.4l4.4-4.6 3.2 2.6 4.1-5.5 3.3 3.2" />
          <circle cx="8.9" cy="11.8" r="1.1" />
          <circle cx="16.2" cy="8.9" r="1.1" />
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
    case `heart`:
      return (
        <svg {...t}>
          <path d="M12 20.4S3.8 15.4 2.6 11A5.1 5.1 0 0 1 12 6.7a5.1 5.1 0 0 1 9.4 4.3c-1.2 4.4-9.4 9.4-9.4 9.4z" />
        </svg>
      );
    default:
      return null;
  }
};

const NewbornCare = () => {
  let [e, t] = useState(0);
  let n = (n) => t(e === n ? -1 : n);
  return (
    <div className="nbc-page">
      <section className="nbc-hero">
        <div className="nbc-hero__glow" aria-hidden="true" />
        <div className="nbc-hero__inner nbc-container">
          <div className="nbc-hero__content">
            <nav className="nbc-breadcrumb" aria-label="breadcrumb">
              <span>Who We Serve</span>
              <span className="nbc-breadcrumb__sep">/</span>
              <span className="nbc-breadcrumb__active">New Parents & Newborn Care</span>
            </nav>
            <span className="nbc-hero__badge">
              <span className="nbc-hero__badge-dot" />
              Mother & Baby Postnatal Care · Chennai
            </span>
            <h1 className="nbc-hero__title">
              Doctor-Led Mother and Baby Care at Home —{" "}
              <span className="nbc-text-gold">Extra Hands When You Need Them Most</span>
            </h1>
            <p className="nbc-hero__lead">
              For new parents in Chennai adjusting to life with a newborn — especially twins —
              Aureal Healthcare provides recovery support for the mother, expert newborn care, and
              enough extra hands that no parent has to manage alone.
            </p>
            <div className="nbc-hero__actions">
              <a href="#nbc-cta" className="nbc-btn nbc-btn--gold">
                Arrange Postnatal Care
                <C__A name="arrow" />
              </a>
              <a href="#nbc-how" className="nbc-btn nbc-btn--ghost">
                How It Works
              </a>
            </div>
            <div className="nbc-hero__stats">
              <div className="nbc-stat">
                <span className="nbc-stat__num">IAP</span>
                <span className="nbc-stat__label">Aligned Newborn Care Standards</span>
              </div>
              <div className="nbc-stat">
                <span className="nbc-stat__num">2×</span>
                <span className="nbc-stat__label">Staffing Built for Twin Newborns</span>
              </div>
              <div className="nbc-stat">
                <span className="nbc-stat__num">24/7</span>
                <span className="nbc-stat__label">Physician Access for Concerns</span>
              </div>
            </div>
          </div>
          <div className="nbc-hero__media">
            <div className="nbc-hero__img-frame">
              <img
                src="/bc1.jpg"
                alt="Mother holding her newborn baby at home in Chennai"
                className="nbc-hero__img"
                loading="eager"
              />
            </div>
            <div className="nbc-hero__float-card">
              <span className="nbc-hero__float-icon">
                <C__A name="twins" />
              </span>
              <div>
                <strong>Twin Care Support</strong>
                <p>Extra hands & individual tracking for each baby</p>
              </div>
            </div>
            <div className="nbc-hero__float-pill">
              <C__A name="check" />
              {" IAP-Guided Newborn Care"}
            </div>
          </div>
        </div>
      </section>
      <section className="nbc-quick nbc-container">
        <div className="nbc-quick__card">
          <span className="nbc-quick__label">Quick Answer</span>
          <p>
            Aureal Healthcare provides doctor-led mother and baby postnatal care at home across
            Chennai — combining post-delivery recovery support for the mother with expert
            newborn care aligned with IAP (Indian Academy of Pediatrics) guidelines, including
            specialised support for parents of twins — so new parents get real, hands-on help during
            the demanding early weeks, not just advice.
          </p>
        </div>
      </section>
      <section className="nbc-section">
        <div className="nbc-container nbc-overview__grid">
          <div className="nbc-overview__content">
            <div className="nbc-head">
              <span className="nbc-eyebrow">Overview</span>
              <h2 className="nbc-title">
                Postnatal Care at Home in Chennai,{" "}
                <span className="nbc-text-gold">For Mother and Baby Both</span>
              </h2>
            </div>
            <p className="nbc-text">
              The weeks after childbirth are physically demanding for the mother and require
              constant, careful attention for the newborn — a combination that overwhelms even
              well-prepared families. With twins, it becomes exponentially harder, because two
              babies' feeding, sleep, and care schedules rarely align.
            </p>
            <p className="nbc-text">
              Our postnatal care model brings trained nursing support into the home specifically for
              this period — helping the mother recover safely, supporting newborn feeding and daily
              care, and easing the sheer physical workload that new parents are trying to carry with
              too little sleep and too few hands.
            </p>
            <p className="nbc-text">
              It is delivered under the same doctor-led structure as every other service. A
              physician is available to answer concerns about the mother's recovery or the newborn's
              health, rather than families having to guess whether something needs medical
              attention.
            </p>
            <div className="nbc-areas">
              <span className="nbc-areas__title">Areas Covered</span>
              <div className="nbc-areas__list">
                {gA.map((e) => (
                  <span className="nbc-area-pill" key={e}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="nbc-overview__media">
            <img
              src="/bc2.jpg"
              alt="Newborn baby's hand resting in a parent's palm"
              loading="lazy"
            />
            <div className="nbc-exp-badge">
              <span className="nbc-exp-badge__icon">
                <C__A name="heart" />
              </span>
              <span className="nbc-exp-badge__text">
                Two Patients.
                <br />
                One Care Plan.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="nbc-section nbc-section--tint">
        <div className="nbc-container">
          <div className="nbc-head nbc-head--center">
            <span className="nbc-eyebrow">What's Included</span>
            <h2 className="nbc-title">
              Real Support for the <span className="nbc-text-gold">First Weeks at Home</span>
            </h2>
            <p className="nbc-lead">
              Practical, hands-on help for the mother and the baby — structured by a physician,
              delivered by trained staff.
            </p>
          </div>
          <div className="nbc-include__grid">
            {dA.map((e, t) => (
              <article className="nbc-include-card" key={e.title}>
                <span className="nbc-include-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <span className="nbc-include-card__icon">
                  <C__A name={e.icon} />
                </span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="nbc-section" id="nbc-how">
        <div className="nbc-container">
          <div className="nbc-head nbc-head--center">
            <span className="nbc-eyebrow">How It Works</span>
            <h2 className="nbc-title">
              From Due Date to <span className="nbc-text-gold">Settled at Home</span>
            </h2>
          </div>
          <div className="nbc-steps">
            {fA.map((e, t) => (
              <div className="nbc-step" key={e.title}>
                <div className="nbc-step__num">
                  <span>{t + 1}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="nbc-twin">
        <div className="nbc-container nbc-twin__grid">
          <div className="nbc-twin__left">
            <span className="nbc-eyebrow nbc-eyebrow--light">Twin Baby Care Support</span>
            <h2 className="nbc-title nbc-title--light">
              Two Babies Is Not <span className="nbc-text-gold">Double One Baby</span>
            </h2>
            <div className="nbc-twin__quote">
              "Feeding, growth, and health are monitored for each baby individually — not handled as
              double the same routine."
            </div>
          </div>
          <div className="nbc-twin__right">
            <p>
              With twins, the schedules almost never align. One baby settles as the other wakes; one
              feeds well while the other needs coaxing. Parents end up awake around the clock, and
              the mother's own recovery is the first thing to be quietly set aside.
            </p>
            <p>
              Our twin support adds extra staffing and structured coordination designed for exactly
              this reality — so both babies are cared for properly, and both parents actually get to
              rest.
            </p>
            <ul className="nbc-twin__list">
              <li>
                <span className="nbc-twin__tick">
                  <C__A name="check" />
                </span>
                Additional trained hands staffed for twin households
              </li>
              <li>
                <span className="nbc-twin__tick">
                  <C__A name="check" />
                </span>
                Individual feeding, weight, and health tracking per baby
              </li>
              <li>
                <span className="nbc-twin__tick">
                  <C__A name="check" />
                </span>
                Night-time coordination so parents can genuinely sleep
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="nbc-section">
        <div className="nbc-container nbc-diff__grid">
          <div className="nbc-diff__media">
            <img
              src="/bc3.jpg"
              alt="Nurse supporting a new mother with newborn care at home"
              loading="lazy"
            />
            <div className="nbc-diff__media-badge">
              <C__A name="shield" />
              <span>Doctor-Led Clinical Oversight</span>
            </div>
          </div>
          <div className="nbc-diff__content">
            <div className="nbc-head">
              <span className="nbc-eyebrow">Why This Matters in Chennai</span>
              <h2 className="nbc-title">
                The Mother's Recovery Is{" "}
                <span className="nbc-text-gold">Never an Afterthought</span>
              </h2>
            </div>
            <p className="nbc-text">
              New parents in Chennai — particularly those without extended family nearby, or
              managing twins — often find the early postnatal weeks far more demanding than
              anticipated, with the mother's own recovery frequently neglected while all attention
              goes to the newborn.
            </p>
            <p className="nbc-text">
              Our model exists to address both halves of that gap at once. And because postnatal
              care involves real clinical judgement — recognising when a symptom needs a physician
              rather than reassurance — a doctor is part of this service, not just caregiving staff.
            </p>
            <ul className="nbc-check-list">
              <li>
                <span className="nbc-check-list__icon">
                  <C__A name="check" />
                </span>
                Warning signs in the mother's recovery caught early, not missed
              </li>
              <li>
                <span className="nbc-check-list__icon">
                  <C__A name="check" />
                </span>
                Newborn feeding and growth reviewed against IAP standards
              </li>
              <li>
                <span className="nbc-check-list__icon">
                  <C__A name="check" />
                </span>
                One accountable clinical point of contact for the whole family
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="nbc-section nbc-section--tint">
        <div className="nbc-container">
          <div className="nbc-head nbc-head--center">
            <span className="nbc-eyebrow">Who It's For</span>
            <h2 className="nbc-title">
              Built for Families in the <span className="nbc-text-gold">Fourth Trimester</span>
            </h2>
          </div>
          <div className="nbc-who__grid">
            {pA.map((e, t) => (
              <div className="nbc-who-card" key={e.title}>
                <span className="nbc-who-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="nbc-trust">
        <div className="nbc-container nbc-trust__inner">
          <span className="nbc-trust__icon">
            <C__A name="shield" />
          </span>
          <div className="nbc-trust__content">
            <span className="nbc-eyebrow nbc-eyebrow--light">Trust & Credibility</span>
            <h2 className="nbc-title nbc-title--light">Clinical Governance Behind Every Visit</h2>
            <p>
              Postnatal care in Chennai follows the same doctor-led clinical governance applied
              across every Aureal Healthcare and AUREAL programme, with newborn care guided by IAP
              (Indian Academy of Pediatrics) standards and a physician available for both maternal
              and newborn concerns.
            </p>
            <p>
              Because staffing and support are adjusted specifically for the added demands of twins,
              families get a plan built for their actual situation — not a generic single-baby
              routine stretched to cover two.
            </p>
            <div className="nbc-trust__badges">
              <span>IAP-Guided Newborn Care</span>
              <span>Physician-Led Oversight</span>
              <span>Dedicated Twin Staffing</span>
            </div>
          </div>
        </div>
      </section>
      <section className="nbc-section" id="nbc-faq">
        <div className="nbc-container nbc-container--narrow">
          <div className="nbc-head nbc-head--center">
            <span className="nbc-eyebrow">FAQ</span>
            <h2 className="nbc-title">
              {"Frequently Asked "}
              <span className="nbc-text-gold">Questions</span>
            </h2>
          </div>
          <div className="nbc-faq__list">
            {mA.map((t, r) => (
              <div className={`nbc-faq__item ${e === r ? `is-open` : ``}`} key={t.q}>
                <button className="nbc-faq__q" onClick={() => n(r)} aria-expanded={e === r}>
                  <span>{t.q}</span>
                  <span className="nbc-faq__icon" aria-hidden="true" />
                </button>
                <div className="nbc-faq__a">
                  <div className="nbc-faq__a-inner">
                    <p>{t.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="nbc-section nbc-section--tint">
        <div className="nbc-container">
          <div className="nbc-head nbc-head--center">
            <span className="nbc-eyebrow">Explore More</span>
            <h2 className="nbc-title">
              {"Related "}
              <span className="nbc-text-gold">Aureal Healthcare</span> Services
            </h2>
          </div>
          <div className="nbc-related__grid">
            {hA.map((e) => (
              <a href={e.link} className="nbc-related-card" key={e.name}>
                <h3>{e.name}</h3>
                <span className="nbc-related-card__arrow">
                  <C__A name="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="nbc-cta" id="nbc-cta">
        <div className="nbc-container nbc-cta__inner">
          <span className="nbc-cta__brand">Aureal Healthcare</span>
          <h2>
            Arrange doctor-led postnatal mother and baby care at home in Chennai —{" "}
            <span className="nbc-text-gold">real support for the weeks that matter most.</span>
          </h2>
          <p>
            Speak with our care team to plan support before your due date, or set it up right away.
          </p>
          <div className="nbc-cta__actions">
            <a href="tel:+919944969049" className="nbc-btn nbc-btn--gold">
              <C__A name="phone" />
              Call Our Care Team
            </a>
            <a href="#nbc-faq" className="nbc-btn nbc-btn--ghost">
              Read FAQs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewbornCare;
