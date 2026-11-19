import React, { useState } from "react";
import "./PalliativePatients.css";

const Tk = [
  {
    icon: `symptom`,
    title: `Physician-Led Symptom & Pain Management`,
    text: `A doctor actively manages pain and other symptoms, adjusting the plan as the patient's condition changes.`,
  },
  {
    icon: `comfort`,
    title: `Holistic Comfort Care`,
    text: `Care extends beyond medical management to physical comfort, positioning, and general well-being.`,
  },
  {
    icon: `emotional`,
    title: `Emotional & Family Support`,
    text: `Support is extended to the family as well as the patient, recognizing the emotional weight serious illness carries for everyone involved.`,
  },
  {
    icon: `coordination`,
    title: `Coordination with Existing Treatment`,
    text: `Where the patient is also receiving other treatment, palliative care is coordinated alongside it rather than replacing it.`,
  },
  {
    icon: `dignity`,
    title: `Dignity-Centered Daily Care`,
    text: `Daily care routines are delivered with attention to the patient's dignity and personal preferences, not just clinical tasks.`,
  },
];

const Ek = [
  {
    title: `Physician Assessment`,
    text: `A doctor assesses the patient's condition, symptoms, and the family's needs and preferences.`,
  },
  {
    title: `Comfort-Focused Care Plan`,
    text: `A doctor-led plan is built around symptom management, comfort, and the family's wishes.`,
  },
  {
    title: `Ongoing Home-Based Care`,
    text: `Care is delivered at home across Pondicherry, with the plan adjusted as the patient's needs change.`,
  },
  {
    title: `Continuous Physician Involvement`,
    text: `The overseeing physician remains involved throughout, adjusting pain and symptom management as needed.`,
  },
];

const Dk = [
  `Patients with a serious or life-limiting illness who want to remain at home in Pondicherry rather than in a hospital setting`,
  `Families who feel overwhelmed navigating what palliative care means and how to arrange it`,
  `Patients already receiving other treatment who also need dedicated symptom and comfort management`,
  `Families who want emotional support and guidance for themselves, not just clinical care for the patient`,
];

const Ok = [
  {
    q: `What clinical framework does Aureal Healthcare's palliative care follow?`,
    a: `The palliative care model is structured around Pallium India's palliative care protocols, a nationally recognized standard for comfort- and dignity-focused care for patients with serious illness.`,
  },
  {
    q: `What is palliative care and how is it different from hospice?`,
    a: `Palliative care focuses on comfort, symptom relief, and quality of life for anyone facing a serious illness, and can be provided alongside other treatment; hospice care specifically applies in the final phase of a terminal illness. The care team can help families understand which applies to their situation.`,
  },
  {
    q: `Can palliative care be provided at home in Pondicherry?`,
    a: `Yes — Aureal Healthcare provides doctor-led palliative care at home across Puducherry town and surrounding areas, focused on comfort, symptom management, and family support.`,
  },
  {
    q: `Does starting palliative care mean stopping other treatment?`,
    a: `No — palliative care can be provided alongside other ongoing treatment; it is focused on comfort and symptom management, not a replacement for curative care unless the patient and family choose that path.`,
  },
  {
    q: `Who manages pain and symptoms in palliative care?`,
    a: `A physician actively manages and adjusts pain and symptom control throughout, rather than following a fixed protocol regardless of how the patient's condition changes.`,
  },
  {
    q: `Is support available for the family, not just the patient?`,
    a: `Yes — the palliative care model recognizes that serious illness affects the whole family and extends emotional and practical support accordingly.`,
  },
  {
    q: `Which areas around Pondicherry are covered for palliative care?`,
    a: `Coverage includes Puducherry town and surrounding areas such as White Town, Muthialpet, Lawspet, Reddiarpalayam, and Ozhukarai.`,
  },
];

const kk = [
  {
    name: `Geriatric People`,
    link: `/GeriatricPeople`,
  },
  {
    name: `Perioperative Patients`,
    link: `/PerioperativePatients`,
  },
  {
    name: `24/7 Emergency Support & Teleconsultation`,
    link: `/EmergencySupport`,
  },
  {
    name: `Patient Coordination & Cashless Treatment`,
    link: `/PatientCoordination`,
  },
];

const Ak = [
  `Puducherry Town`,
  `White Town`,
  `Muthialpet`,
  `Lawspet`,
  `Reddiarpalayam`,
  `Ozhukarai`,
];

const C_jk = ({ name: e }) => {
  let t = {
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.7`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  };
  switch (e) {
    case `symptom`:
      return (
        <svg {...t}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 10v.01M12 14v.01M12 16v.01" />
          <path d="M9 9l3-3m-3 4l3 3M13.5 15l3 3" />
        </svg>
      );
    case `comfort`:
      return (
        <svg {...t}>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 10v6l4 2" />
          <path d="m8.5 5.5 3.5-3.5 3.5 3.5" />
        </svg>
      );
    case `emotional`:
      return (
        <svg {...t}>
          <path d="M4 20.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 18.5 4H5.5A1.5 1.5 0 0 0 4 5.5z" />
          <path d="M8 20.5V10m0 10.5h8" />
          <path d="M9 8.5 7 10l2 1.5v.5h4v-.5L17 10l-2 1.5" />
          <path d="M9.5 13.5 7.5 15l2-1.5" />
        </svg>
      );
    case `coordination`:
      return (
        <svg {...t}>
          <path d="M12 3.5 9.5 6l2.5 2.5-1.5 1.5L5 12.5 3.5 13.5 7 15.5 10.5 12l1.5 1.5 2-2 2.5 2.5 2.5-2.5 2.5 2.5-1.5 1.5 2.5-2.5 2.5 2.5L17.5 12l-1.5-1.5L13.5 8z" />
        </svg>
      );
    case `dignity`:
      return (
        <svg {...t}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7.5c-1.5 0-2.8 1.2-2.8 2.8 0 1.2.7 2.2 1.7 2.8L14 12.5h4" />
          <path d="M8 12 5.5 9.5 8 7l4 2.5L13 10l-1.5 1.5 2.5 1.6 1.5-2.5 1.5 1.5v3.5" />
          <path d="M17 12h3.5v2.5l1.5-.5.5 1.5-1.5-.5" />
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
          <path d="M12 21s-7-4.7-8-9.2C2.4 9 2.4 15.3 2.4 15.3S6 10 9.5 8.2c1.9-1.6 3.2-3.4 3.2-5.4C12.8 2.9 10.2 2 7.9 2 4 2 1.7 4.4 1.7 8.4 1.7 12.2 4.3 15.4 8.7 16.6c1.6.6 3.7 1 6.3 1.1" />
        </svg>
      );
    default:
      return null;
  }
};

const PalliativePatients = () => {
  let [e, t] = useState(0);
  let n = (n) => {
    t(e === n ? -1 : n);
  };
  return (
    <div className="palli-page">
      <section className="palli-hero">
        <div className="palli-hero__inner palli-container">
          <div className="palli-hero__content">
            <nav className="palli-breadcrumb" aria-label="breadcrumb">
              <span>Who We Serve</span>
              <span className="palli-breadcrumb__sep">/</span>
              <span className="palli-breadcrumb__active">Palliative Patients</span>
            </nav>
            <span className="palli-hero__badge">
              <span className="palli-hero__badge-dot" />
              COMPASSIONATE, DOCTOR-LED CARE · PONDICHERRY
            </span>
            <h1 className="palli-hero__title">
              Compassionate, Doctor-Led <span className="palli-text-gold">Palliative Care</span>
              {" at Home in Pondicherry"}
            </h1>
            <p className="palli-hero__lead">
              Compassionate, holistic support for patients and families across Pondicherry facing
              serious illness — prioritizing comfort, emotional well-being, and dignity at every
              step, under physician-led clinical guidance.
            </p>
            <div className="palli-hero__actions">
              <a href="#palli-cta" className="palli-btn palli-btn--gold">
                Speak with Our Care Team
                <C_jk name="arrow" />
              </a>
              <a href="#palli-how" className="palli-btn palli-btn--ghost">
                How It Works
              </a>
            </div>
            <div className="palli-hero__stats">
              <div className="palli-stat">
                <span className="palli-stat__num">100%</span>
                <span className="palli-stat__label">Doctor-Led Care Plans</span>
              </div>
              <div className="palli-stat">
                <span className="palli-stat__num">Pallium</span>
                <span className="palli-stat__label">India Protocols Aligned</span>
              </div>
              <div className="palli-stat">
                <span className="palli-stat__num">24/7</span>
                <span className="palli-stat__label">Physician Support</span>
              </div>
            </div>
          </div>
          <div className="palli-hero__media">
            <div className="palli-hero__img-frame">
              <img
                src="/Palliative1.jpg"
                alt="Compassionate caregiver providing comfort to a patient at home in Pondicherry"
                className="palli-hero__img"
                loading="eager"
              />
            </div>
            <div className="palli-hero__float-card">
              <span className="palli-hero__float-icon">
                <C_jk name="heart" />
              </span>
              <div>
                <strong>Dignity & Comfort First</strong>
                <p>Care that honors the whole person</p>
              </div>
            </div>
            <div className="palli-hero__float-pill">
              <C_jk name="check" />
              {" Pallium India Protocols"}
            </div>
          </div>
        </div>
      </section>
      <section className="palli-quick palli-container">
        <div className="palli-quick__card">
          <span className="palli-quick__label">Quick Answer</span>
          <p>
            Aureal Healthcare provides doctor-led palliative care at home across Pondicherry for
            patients and families facing serious illness — combining symptom and pain management,
            emotional support, and family guidance under a physician-designed plan aligned with
            Pallium India's palliative care protocols, focused on comfort and dignity rather than
            curative treatment alone.
          </p>
        </div>
      </section>
      <section className="palli-section">
        <div className="palli-container palli-overview__grid">
          <div className="palli-overview__content">
            <div className="palli-head">
              <span className="palli-eyebrow">Overview</span>
              <h2 className="palli-title">
                Comprehensive Palliative Care,{" "}
                <span className="palli-text-gold">Centered on Comfort</span>
              </h2>
            </div>
            <p className="palli-text">
              Palliative care is often misunderstood as care only for the final days of life — in
              reality, it is specialized support for anyone facing a serious illness, focused on
              comfort, symptom relief, and quality of life, which can run alongside other treatment
              for months or longer. Pondicherry families searching for "palliative care services" or
              "hospice care" are usually navigating this territory for the first time, often during
              an already overwhelming period.
            </p>
            <p className="palli-text">
              Aureal Healthcare's palliative care model keeps a physician accountable for symptom
              and pain management throughout, while a broader team supports the emotional and
              practical needs of both the patient and the family — because serious illness affects
              the whole household, not just the patient.
            </p>
            <p className="palli-text">
              For families across Puducherry town, White Town, Muthialpet, Lawspet, Reddiarpalayam,
              and Ozhukarai, receiving this care at home — in a familiar, comfortable setting — is
              often what patients and families want most, and this doctor-led structure makes that
              genuinely safe to do.
            </p>
            <div className="palli-areas">
              <span className="palli-areas__title">Areas Covered:</span>
              <div className="palli-areas__list">
                {Ak.map((e) => (
                  <span className="palli-area-pill" key={e}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="palli-overview__media">
            <img
              src="/Palliative2.jpg"
              alt="Doctor consulting with family members about palliative care options"
              loading="lazy"
            />
            <div className="palli-exp-badge">
              <span className="palli-exp-badge__num">01</span>
              <span className="palli-exp-badge__text">
                One Physician.
                <br />
                Total Support.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="palli-section palli-section--tint">
        <div className="palli-container">
          <div className="palli-head palli-head--center">
            <span className="palli-eyebrow">What's Included</span>
            <h2 className="palli-title">
              Everything Through Serious Illness,{" "}
              <span className="palli-text-gold">Under One Physician</span>
            </h2>
            <p className="palli-lead">
              Five pillars of palliative home care — each designed, monitored, and reviewed by a
              physician.
            </p>
          </div>
          <div className="palli-include__grid">
            {Tk.map((e, t) => (
              <article className="palli-include-card" key={e.title}>
                <span className="palli-include-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <span className="palli-include-card__icon">
                  <C_jk name={e.icon} />
                </span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="palli-section" id="palli-how">
        <div className="palli-container">
          <div className="palli-head palli-head--center">
            <span className="palli-eyebrow">How It Works</span>
            <h2 className="palli-title">
              A Clear Path to <span className="palli-text-gold">Comfort at Home</span>
            </h2>
          </div>
          <div className="palli-steps">
            {Ek.map((e, t) => (
              <div className="palli-step" key={e.title}>
                <div className="palli-step__num">
                  <span>{t + 1}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="palli-why">
        <div className="palli-container palli-why__grid">
          <div className="palli-why__left">
            <span className="palli-eyebrow palli-eyebrow--light">
              Why This Matters in Pondicherry
            </span>
            <h2 className="palli-title palli-title--light">
              Making Palliative Care <span className="palli-text-gold">Clearly Available</span>
            </h2>
            <div className="palli-why__quote">
              "Comfort-focused, physician-guided, and respectful of what the patient and family
              actually want."
            </div>
          </div>
          <div className="palli-why__right">
            <p>
              Families in Pondicherry facing a serious illness diagnosis often don't know palliative
              care is an option separate from hospital-based treatment, or assume it means giving up
              on other care — this confusion is common and not specific to any one provider or
              hospital.
            </p>
            <p>
              Aureal Healthcare's doctor-led palliative care model exists to make this option
              clearly available and well-managed for Pondicherry families — comfort-focused,
              physician-guided, and respectful of what the patient and family actually want.
            </p>
          </div>
        </div>
      </section>
      <section className="palli-section">
        <div className="palli-container palli-diff__grid">
          <div className="palli-diff__media">
            <img
              src="/Palliative3.jpg"
              alt="Physician providing compassionate guidance to a family during a home visit"
              loading="lazy"
            />
            <div className="palli-diff__media-badge">
              <C_jk name="shield" />
              <span>Doctor-Led Clinical Governance</span>
            </div>
          </div>
          <div className="palli-diff__content">
            <div className="palli-head">
              <span className="palli-eyebrow">The Aureal Healthcare Difference</span>
              <h2 className="palli-title">
                A Physician Designs the Plan.{" "}
                <span className="palli-text-gold">The Team Executes It.</span>
              </h2>
            </div>
            <p className="palli-text">
              Palliative care requires careful, ongoing clinical judgment — symptom and pain
              management decisions carry real consequences, which is why a physician remains
              accountable for this plan throughout, not just at the initial assessment.
            </p>
            <p className="palli-text">
              The doctor-led structure also means the family always has a clear, accountable
              clinical voice to turn to as the patient's condition and needs evolve.
            </p>
            <ul className="palli-check-list">
              <li>
                <span className="palli-check-list__icon">
                  <C_jk name="check" />
                </span>
                When symptom management needs individual adjustment
              </li>
              <li>
                <span className="palli-check-list__icon">
                  <C_jk name="check" />
                </span>
                When pain control requires physician-level assessment
              </li>
              <li>
                <span className="palli-check-list__icon">
                  <C_jk name="check" />
                </span>
                When family support needs clinical coordination
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="palli-section palli-section--tint">
        <div className="palli-container">
          <div className="palli-head palli-head--center">
            <span className="palli-eyebrow">Who It's For</span>
            <h2 className="palli-title">
              Families Who Need <span className="palli-text-gold">Comprehensive Support</span>
            </h2>
          </div>
          <div className="palli-who__grid">
            {Dk.map((e, t) => (
              <div className="palli-who-card" key={t}>
                <span className="palli-who-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <p>{e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="palli-trust">
        <div className="palli-container palli-trust__inner">
          <span className="palli-trust__icon">
            <C_jk name="shield" />
          </span>
          <div className="palli-trust__content">
            <span className="palli-eyebrow palli-eyebrow--light">Trust & Credibility</span>
            <h2 className="palli-title palli-title--light">Clinical Governance You Can Rely On</h2>
            <p>
              Palliative care in Pondicherry follows the same doctor-led clinical governance applied
              across every Aureal Healthcare and AUREAL program, structured around Pallium India's
              palliative care protocols, with a named physician accountable throughout.
            </p>
            <p>
              Because comfort and dignity are treated as core clinical goals — not an afterthought —
              families get care that respects what matters most to the patient.
            </p>
            <div className="palli-trust__badges">
              <span>Pallium India Protocols</span>
              <span>Doctor-Led Governance</span>
              <span>One Accountable Physician</span>
            </div>
          </div>
        </div>
      </section>
      <section className="palli-section" id="palli-faq">
        <div className="palli-container palli-container--narrow">
          <div className="palli-head palli-head--center">
            <span className="palli-eyebrow">FAQ</span>
            <h2 className="palli-title">
              Frequently Asked <span className="palli-text-gold">Questions</span>
            </h2>
          </div>
          <div className="palli-faq__list">
            {Ok.map((t, r) => (
              <div className={`palli-faq__item ${e === r ? `is-open` : ``}`} key={t.q}>
                <button className="palli-faq__q" onClick={() => n(r)} aria-expanded={e === r}>
                  <span>{t.q}</span>
                  <span className="palli-faq__icon" aria-hidden="true" />
                </button>
                <div className="palli-faq__a">
                  <div className="palli-faq__a-inner">
                    <p>{t.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="palli-section palli-section--tint">
        <div className="palli-container">
          <div className="palli-head palli-head--center">
            <span className="palli-eyebrow">Explore More</span>
            <h2 className="palli-title">
              Related <span className="palli-text-gold">Aureal Healthcare</span> Services
            </h2>
          </div>
          <div className="palli-related__grid">
            {kk.map((e) => (
              <a href={e.link} className="palli-related-card" key={e.name}>
                <h3>{e.name}</h3>
                <span className="palli-related-card__arrow">
                  <C_jk name="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="palli-cta" id="palli-cta">
        <div className="palli-container palli-cta__inner">
          <span className="palli-cta__brand">Aureal Healthcare</span>
          <h2>
            Speak with Aureal Healthcare about doctor-led palliative care at home in Pondicherry —{" "}
            <span className="palli-text-gold">comfort and dignity, guided by a physician.</span>
          </h2>
          <p>
            Our compassionate care team is here to support you and your family through this journey
            with expert clinical guidance and heartfelt compassion.
          </p>
          <div className="palli-cta__actions">
            <a href="tel:+919944969049" className="palli-btn palli-btn--gold">
              <C_jk name="phone" />
              Call Our Care Team
            </a>
            <a href="#palli-faq" className="palli-btn palli-btn--ghost">
              Read FAQs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PalliativePatients;
