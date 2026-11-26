import React, { useState } from "react";
import "./GeriatricPeople.css";

const lk = [
  {
    icon: `assessment`,
    title: `Doctor-Led Geriatric Assessment`,
    text: `A physician evaluates the patient's overall health, cognitive status, mobility, and chronic conditions to build one coordinated plan.`,
  },
  {
    icon: `mobility`,
    title: `Mobility & Fall-Prevention Support`,
    text: `Structured assessment of fall risk and mobility limitations, with a plan to reduce risk in the patient's actual home environment.`,
  },
  {
    icon: `cognitive`,
    title: `Cognitive Wellness Monitoring`,
    text: `Regular monitoring for cognitive changes, with early physician involvement if signs of decline emerge.`,
  },
  {
    icon: `chronic`,
    title: `Chronic Condition Management`,
    text: `Diabetes, hypertension, arthritis, and other common conditions in elderly patients are managed under one ongoing, doctor-led plan.`,
  },
  {
    icon: `companionship`,
    title: `Daily Living & Companionship`,
    text: `Trained caregiving staff assist with daily routines and provide companionship, working from the same physician-set plan.`,
  },
];

const uk = [
  {
    title: `Geriatric Assessment`,
    text: `A physician assesses the patient's overall health, mobility, cognition, and existing conditions.`,
  },
  {
    title: `Personalized Care Plan`,
    text: `A doctor-led plan is built covering medical management, mobility support, and daily assistance needs.`,
  },
  {
    title: `Ongoing Home-Based Care`,
    text: `Caregiving staff and, where needed, nurses deliver the plan at home across Chennai and surrounding areas.`,
  },
  {
    title: `Regular Physician Review`,
    text: `The plan is reviewed on a set schedule and adjusted as the patient's condition changes.`,
  },
];

const dk = [
  `A parent in early-stage cognitive decline who needs daily supervision and monitoring, not just occasional check-ins`,
  `An elderly relative recovering from a fall who needs both medical follow-up and a structured fall-prevention plan going forward`,
  `A senior managing multiple chronic conditions whose medications and care need coordinated physician oversight`,
  `Families in Chennai coordinating care for a parent from abroad or another city, who need one accountable local point of contact`,
];

const fk = [
  {
    q: `What is GERI ONE?`,
    a: `GERI ONE is AUREAL's dedicated brand for integrated geriatric care, delivered in Chennai with Aureal Healthcare — multi speciality geriatric consultations, bringing mobility support, chronic condition management, cognitive wellness monitoring, and daily living assistance together under one doctor-led plan, rather than treating each need as a separate service.`,
  },
  {
    q: `What clinical framework does GERI ONE follow?`,
    a: `GERI ONE's approach is structured around the World Health Organization's ICOPE (Integrated Care for Older People) framework, which guides how older adults' care needs should be assessed and coordinated.`,
  },
  {
    q: `What does doctor-led elderly care at home include?`,
    a: `It includes a physician-designed plan covering chronic condition management, mobility and fall-prevention support, cognitive wellness monitoring, and daily living assistance — all under one accountable doctor, not separate disconnected services.`,
  },
  {
    q: `Is dementia or cognitive care available at home in Chennai?`,
    a: `Yes — cognitive wellness monitoring is part of GERI ONE's geriatric care model, with physician involvement as soon as signs of decline are noticed.`,
  },
  {
    q: `How is this different from hiring a caregiver directly?`,
    a: `A caregiver alone provides daily assistance without a physician accountable for the overall clinical picture; Aureal Healthcare's model keeps a doctor designing and reviewing the plan that the caregiving team executes.`,
  },
  {
    q: `Can elderly care be arranged for a parent living alone in Chennai?`,
    a: `Yes — this is one of the most common situations supported, with a coordinated plan for daily supervision, health monitoring, and family communication.`,
  },
  {
    q: `Which areas around Chennai are covered?`,
    a: `Coverage includes Chennai town and surrounding areas such as White Town, Muthialpet, Lawspet, Reddiarpalayam, Ozhukarai, and Ariyankuppam.`,
  },
  {
    q: `How often is the care plan reviewed?`,
    a: `Review frequency depends on the patient's conditions and stability, set as part of the doctor-led plan rather than a fixed interval applied to everyone.`,
  },
];

const pk = [
  {
    name: `Perioperative Patients`,
    link: `/PerioperativePatients`,
  },
  {
    name: `Palliative Patients`,
    link: `/PalliativePatients`,
  },
  {
    name: `Home Based Support`,
    link: `/HomeBasedSupport`,
  },
  {
    name: `Continuum of Care`,
    link: `/ContinuumofCare`,
  },
];

const mk = [
  `Chennai Town`,
  `White Town`,
  `Muthialpet`,
  `Lawspet`,
  `Reddiarpalayam`,
  `Ozhukarai`,
  `Ariyankuppam`,
];

const C_hk = ({ name: e }) => {
  let t = {
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.7`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  };
  switch (e) {
    case `assessment`:
      return (
        <svg {...t}>
          <rect x="5" y="4" width="14" height="17" rx="2.5" />
          <path d="M9 4.2V2.8h6v1.4" />
          <path d="M8.3 13h2l1.4-3 2.1 5 1.4-2h2.1" />
        </svg>
      );
    case `mobility`:
      return (
        <svg {...t}>
          <circle cx="13.5" cy="4.3" r="1.9" />
          <path d="M13.5 8.2 10.6 12l2 3.1V21" />
          <path d="M10.6 12 8 14.2" />
          <path d="M13.5 8.2l2.9 2 2.4 1.1" />
          <path d="M12.6 15.1l2.8 1.9L17 21" />
        </svg>
      );
    case `cognitive`:
      return (
        <svg {...t}>
          <path d="M9.2 4.5A2.8 2.8 0 0 0 6.4 7.3c-1.6.4-2.7 1.8-2.7 3.5 0 .8.3 1.6.7 2.2A3.6 3.6 0 0 0 6.3 19a3.2 3.2 0 0 0 5.2.9V6.4a2.9 2.9 0 0 0-2.3-1.9z" />
          <path d="M14.8 4.5a2.8 2.8 0 0 1 2.8 2.8c1.6.4 2.7 1.8 2.7 3.5 0 .8-.3 1.6-.7 2.2a3.6 3.6 0 0 1-1.9 6 3.2 3.2 0 0 1-5.2.9V6.4a2.9 2.9 0 0 1 2.3-1.9z" />
        </svg>
      );
    case `chronic`:
      return (
        <svg {...t}>
          <path d="M12 20.6S3.6 15.5 2.4 11A5.2 5.2 0 0 1 12 6.6a5.2 5.2 0 0 1 9.6 4.4c-1.2 4.5-9.6 9.6-9.6 9.6z" />
          <path d="M6.5 11.5h2.4l1.4-2.4 2 4.6 1.4-2.2h3.8" />
        </svg>
      );
    case `companionship`:
      return (
        <svg {...t}>
          <path d="M7.2 11.2 4.9 9a2.9 2.9 0 0 1 4.1-4.1l1.5 1.5a1 1 0 0 0 1.4 0l1.5-1.5A2.9 2.9 0 0 1 17.5 9l-4.4 4.5" />
          <path d="M2.8 13.2 7 17.4a2 2 0 0 0 2.8 0l8.6-8.6a1.8 1.8 0 0 1 2.6 2.6l-7.7 7.7a4.9 4.9 0 0 1-6.9 0L2.8 15.5" />
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

const GeriatricPeople = () => {
  let [e, t] = useState(0);
  let n = (n) => {
    t(e === n ? -1 : n);
  };
  return (
    <div className="geri-page">
      <section className="geri-hero">
        <div className="geri-hero__inner geri-container">
          <div className="geri-hero__content">
            <nav className="geri-breadcrumb" aria-label="breadcrumb">
              <span>Who We Serve</span>
              <span className="geri-breadcrumb__sep">/</span>
              <span className="geri-breadcrumb__active">Geriatric People</span>
            </nav>
            <span className="geri-hero__badge">
              <span className="geri-hero__badge-dot" />
              GERI ONE · An AUREAL Geriatric Care Brand
            </span>
            <h1 className="geri-hero__title">
              GERI ONE — <span className="geri-text-gold">Dignified, Doctor-Led</span> Elderly Care
              at Home in Chennai
            </h1>
            <p className="geri-hero__lead">
              GERI ONE, AUREAL's integrated geriatric care brand, brings comprehensive, doctor-led
              care to our elders in Chennai — focused on mobility, cognitive wellness, and daily
              independence, so seniors can live fuller, safer lives in the comfort of their own
              home.
            </p>
            <div className="geri-hero__actions">
              <a href="#geri-cta" className="geri-btn geri-btn--gold">
                Arrange Care at Home
                <C_hk name="arrow" />
              </a>
              <a href="#geri-how" className="geri-btn geri-btn--ghost">
                How It Works
              </a>
            </div>
            <div className="geri-hero__stats">
              <div className="geri-stat">
                <span className="geri-stat__num">100%</span>
                <span className="geri-stat__label">Doctor-Led Care Plans</span>
              </div>
              <div className="geri-stat">
                <span className="geri-stat__num">WHO</span>
                <span className="geri-stat__label">ICOPE Framework Aligned</span>
              </div>
              <div className="geri-stat">
                <span className="geri-stat__num">7+</span>
                <span className="geri-stat__label">Areas Across Chennai</span>
              </div>
            </div>
          </div>
          <div className="geri-hero__media">
            <div className="geri-hero__img-frame">
              <img
                src="/ger1.jpg"
                alt="Caregiver supporting a senior citizen at home in Chennai"
                className="geri-hero__img"
                loading="eager"
              />
            </div>
            <div className="geri-hero__float-card">
              <span className="geri-hero__float-icon">
                <C_hk name="shield" />
              </span>
              <div>
                <strong>Physician-Designed Plans</strong>
                <p>Reviewed & adjusted on a set schedule</p>
              </div>
            </div>
            <div className="geri-hero__float-pill">
              <C_hk name="check" />
              {" WHO ICOPE Aligned"}
            </div>
          </div>
        </div>
      </section>
      <section className="geri-quick geri-container">
        <div className="geri-quick__card">
          <span className="geri-quick__label">Quick Answer</span>
          <p>
            GERI ONE, AUREAL's dedicated integrated geriatric care brand, provides doctor-led
            elderly care at home across Chennai through Aureal Healthcare — combining mobility
            support, cognitive wellness monitoring, and daily-living assistance under a
            physician-designed plan aligned with the WHO's ICOPE (Integrated Care for Older People)
            framework — so ageing in place stays safe without seniors giving up independence.
          </p>
        </div>
      </section>
      <section className="geri-section">
        <div className="geri-container geri-overview__grid">
          <div className="geri-overview__content">
            <div className="geri-head">
              <span className="geri-eyebrow">Overview</span>
              <h2 className="geri-title">
                Integrated Geriatric Care,{" "}
                <span className="geri-text-gold">Built Around One Plan</span>
              </h2>
            </div>
            <p className="geri-text">
              GERI ONE is AUREAL's dedicated brand for integrated geriatric care, delivered in
              Chennai through Aureal Healthcare — built specifically around the reality that
              elderly care rarely means managing one condition in isolation. It brings mobility
              support, chronic disease management, cognitive monitoring, and daily assistance
              together under a single, physician-led plan, structured around WHO's ICOPE (Integrated
              Care for Older People) framework.
            </p>
            <p className="geri-text">
              Ageing in place — remaining in one's own home rather than moving to a facility — is
              what most families in Chennai want for their elderly parents and relatives, but it
              only works safely when the right clinical structure is behind it. GERI ONE's model is
              built specifically for this: doctor-led, not just caregiver-delivered.
            </p>
            <p className="geri-text">
              Geriatric care covers a wide range of needs that often overlap in the same patient —
              managing multiple chronic conditions (diabetes, hypertension, arthritis), monitoring
              cognitive changes, preventing falls, and simply providing companionship and daily
              assistance. The physician-led approach means one doctor tracks all of it together,
              rather than each issue being handled in isolation.
            </p>
            <p className="geri-text">
              For families across the region, this also means fewer difficult trips to a hospital or
              clinic for routine matters — a physician-guided care plan brings consistent oversight
              directly to the home.
            </p>
            <div className="geri-areas">
              <span className="geri-areas__title">Areas Covered:</span>
              <div className="geri-areas__list">
                {mk.map((e) => (
                  <span className="geri-area-pill" key={e}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="geri-overview__media">
            <img
              src="/ger2.jpg"
              alt="Hands of a caregiver gently holding an elderly person's hands"
              loading="lazy"
            />
            <div className="geri-exp-badge">
              <span className="geri-exp-badge__num">01</span>
              <span className="geri-exp-badge__text">
                One Physician.
                <br />
                One Coordinated Plan.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="geri-section geri-section--tint">
        <div className="geri-container">
          <div className="geri-head geri-head--center">
            <span className="geri-eyebrow">What's Included</span>
            <h2 className="geri-title">
              Everything an Elder Needs,{" "}
              <span className="geri-text-gold">Under One Roof of Care</span>
            </h2>
            <p className="geri-lead">
              Five pillars of geriatric home care — each designed, monitored, and reviewed by a
              physician.
            </p>
          </div>
          <div className="geri-include__grid">
            {lk.map((e, t) => (
              <article className="geri-include-card" key={e.title}>
                <span className="geri-include-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <span className="geri-include-card__icon">
                  <C_hk name={e.icon} />
                </span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="geri-section" id="geri-how">
        <div className="geri-container">
          <div className="geri-head geri-head--center">
            <span className="geri-eyebrow">How It Works</span>
            <h2 className="geri-title">
              A Clear Path to <span className="geri-text-gold">Safe Ageing at Home</span>
            </h2>
          </div>
          <div className="geri-steps">
            {uk.map((e, t) => (
              <div className="geri-step" key={e.title}>
                <div className="geri-step__num">
                  <span>{t + 1}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="geri-why">
        <div className="geri-container geri-why__grid">
          <div className="geri-why__left">
            <span className="geri-eyebrow geri-eyebrow--light">
              Why This Matters in Chennai
            </span>
            <h2 className="geri-title geri-title--light">
              Closing the Gap in <span className="geri-text-gold">Fragmented Elder Care</span>
            </h2>
            <div className="geri-why__quote">
              "One physician accountable for the full picture — from chronic disease management to
              fall prevention to cognitive wellness."
            </div>
          </div>
          <div className="geri-why__right">
            <p>
              Elderly care in Chennai is often delivered as a series of disconnected services —
              a caregiver for daily support, separate doctor visits for each condition, no single
              person tracking the whole picture. This fragmentation is common across the wider home
              healthcare landscape in Chennai, not specific to any one provider.
            </p>
            <p>
              Aureal Healthcare's doctor-led geriatric care model exists to close that gap — one
              physician accountable for the full picture, from chronic disease management to fall
              prevention to cognitive wellness.
            </p>
          </div>
        </div>
      </section>
      <section className="geri-section">
        <div className="geri-container geri-diff__grid">
          <div className="geri-diff__media">
            <img
              src="/ger3.jpg"
              alt="Physician reviewing a geriatric care plan during a home visit"
              loading="lazy"
            />
            <div className="geri-diff__media-badge">
              <C_hk name="shield" />
              <span>Doctor-Led Clinical Governance</span>
            </div>
          </div>
          <div className="geri-diff__content">
            <div className="geri-head">
              <span className="geri-eyebrow">The Aureal Healthcare Difference</span>
              <h2 className="geri-title">
                A Physician Designs the Plan.{" "}
                <span className="geri-text-gold">The Team Executes It.</span>
              </h2>
            </div>
            <p className="geri-text">
              Every GERI ONE care plan in Chennai is designed and reviewed by a physician — the
              caregiving team executes that plan, structured around the WHO ICOPE framework, rather
              than making independent judgment calls about a senior's changing needs.
            </p>
            <p className="geri-text">
              This matters most exactly where geriatric care gets complicated:
            </p>
            <ul className="geri-check-list">
              <li>
                <span className="geri-check-list__icon">
                  <C_hk name="check" />
                </span>
                When multiple conditions interact and need coordinated oversight
              </li>
              <li>
                <span className="geri-check-list__icon">
                  <C_hk name="check" />
                </span>
                When medications need careful, physician-led review
              </li>
              <li>
                <span className="geri-check-list__icon">
                  <C_hk name="check" />
                </span>
                When a subtle cognitive or mobility change needs a clinical eye to catch early
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="geri-section geri-section--tint">
        <div className="geri-container">
          <div className="geri-head geri-head--center">
            <span className="geri-eyebrow">Who It's For</span>
            <h2 className="geri-title">
              Families Who Need <span className="geri-text-gold">More Than a Caregiver</span>
            </h2>
          </div>
          <div className="geri-who__grid">
            {dk.map((e, t) => (
              <div className="geri-who-card" key={t}>
                <span className="geri-who-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <p>{e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="geri-trust">
        <div className="geri-container geri-trust__inner">
          <span className="geri-trust__icon">
            <C_hk name="shield" />
          </span>
          <div className="geri-trust__content">
            <span className="geri-eyebrow geri-eyebrow--light">Trust & Credibility</span>
            <h2 className="geri-title geri-title--light">Clinical Governance You Can Rely On</h2>
            <p>
              GERI ONE's geriatric care model in Chennai follows the same doctor-led clinical
              governance applied across every Aureal Healthcare and AUREAL program, structured
              around WHO's ICOPE (Integrated Care for Older People) framework for coordinated
              older-adult care.
            </p>
            <p>
              Because one physician owns the plan across all of a senior's conditions, families get
              consistent clinical judgment instead of fragmented, single-issue care.
            </p>
            <div className="geri-trust__badges">
              <span>WHO ICOPE Framework</span>
              <span>Doctor-Led Governance</span>
              <span>One Accountable Physician</span>
            </div>
          </div>
        </div>
      </section>
      <section className="geri-section" id="geri-faq">
        <div className="geri-container geri-container--narrow">
          <div className="geri-head geri-head--center">
            <span className="geri-eyebrow">FAQ</span>
            <h2 className="geri-title">
              Frequently Asked <span className="geri-text-gold">Questions</span>
            </h2>
          </div>
          <div className="geri-faq__list">
            {fk.map((t, r) => (
              <div className={`geri-faq__item ${e === r ? `is-open` : ``}`} key={t.q}>
                <button className="geri-faq__q" onClick={() => n(r)} aria-expanded={e === r}>
                  <span>{t.q}</span>
                  <span className="geri-faq__icon" aria-hidden="true" />
                </button>
                <div className="geri-faq__a">
                  <div className="geri-faq__a-inner">
                    <p>{t.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="geri-section geri-section--tint">
        <div className="geri-container">
          <div className="geri-head geri-head--center">
            <span className="geri-eyebrow">Explore More</span>
            <h2 className="geri-title">
              Related <span className="geri-text-gold">Aureal Healthcare</span> Services
            </h2>
          </div>
          <div className="geri-related__grid">
            {pk.map((e) => (
              <a href={e.link} className="geri-related-card" key={e.name}>
                <h3>{e.name}</h3>
                <span className="geri-related-card__arrow">
                  <C_hk name="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="geri-cta" id="geri-cta">
        <div className="geri-container geri-cta__inner">
          <span className="geri-cta__brand">GERI ONE · AUREAL</span>
          <h2>
            Arrange doctor-led elderly care at home in Chennai —{" "}
            <span className="geri-text-gold">one physician, one plan, real independence.</span>
          </h2>
          <p>
            Speak with our care team today and give your loved ones the dignity of ageing safely at
            home.
          </p>
          <div className="geri-cta__actions">
            <a href="tel:+919944969049" className="geri-btn geri-btn--gold">
              <C_hk name="phone" />
              Call Our Care Team
            </a>
            <a href="#geri-faq" className="geri-btn geri-btn--ghost">
              Read FAQs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeriatricPeople;
