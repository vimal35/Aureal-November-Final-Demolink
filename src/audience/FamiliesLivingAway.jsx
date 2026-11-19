import React, { useState } from "react";
import "./FamiliesLivingAway.css";

const Vk = [
  {
    icon: `coordinator`,
    title: `Named Local Care Coordinator`,
    text: `Your family has one dependable point of contact in Pondicherry — not a rotating call centre or a different person every time.`,
  },
  {
    icon: `updates`,
    title: `Regular Proactive Updates`,
    text: `Receive planned updates about your parent's wellbeing and care, rather than hearing from the team only when something goes wrong.`,
  },
  {
    icon: `doctor`,
    title: `Doctor-Led Care Plan`,
    text: `A physician designs and oversees the care plan, giving families abroad a trusted clinical decision-maker behind every step.`,
  },
  {
    icon: `timezone`,
    title: `Flexible Time-Zone Communication`,
    text: `Calls and updates can be coordinated around your time zone, making communication easier for families living abroad or in another city.`,
  },
  {
    icon: `emergency`,
    title: `Prompt Emergency Escalation`,
    text: `If your parent's condition changes unexpectedly, the family is informed promptly while the local care team manages the immediate response.`,
  },
];

const Hk = [
  {
    title: `Remote Family Intake`,
    text: `The family can participate in the initial discussion, assessment, and care planning from anywhere in the world.`,
  },
  {
    title: `Plan & Coordinator Assigned`,
    text: `A physician-led plan is created and a named local care coordinator becomes your reliable point of contact.`,
  },
  {
    title: `Care Delivered Locally`,
    text: `Day-to-day care is delivered at your parent's home in Pondicherry under the guidance of the doctor-led plan.`,
  },
  {
    title: `Updates You Can Rely On`,
    text: `Receive scheduled updates, along with prompt communication if there is an unexpected health or care concern.`,
  },
];

const Uk = [
  `Adult children living abroad or in another Indian city while their parents continue to live independently in Pondicherry.`,
  `Families looking for elderly care for parents living alone in Pondicherry with a more accountable local structure.`,
  `Families who have relied on neighbours, relatives, or part-time helpers but now need dependable long-distance caregiving support.`,
  `Adult children planning a visit who want an honest, current understanding of their parent's health and home-care needs.`,
];

const Wk = [
  `Puducherry Town`,
  `White Town`,
  `Lawspet`,
  `Muthialpet`,
  `Reddiarpalayam`,
  `Ozhukarai`,
  `Ariyankuppam`,
];

const Gk = [
  {
    name: `Geriatric People`,
    link: `/GeriatricPeople`,
  },
  {
    name: `Living Alone`,
    link: `/LivingAlone`,
  },
  {
    name: `The Sole Caregiver`,
    link: `/SoleCaregiver`,
  },
  {
    name: `24/7 Emergency Support`,
    link: `/EmergencySupport`,
  },
];

const Kk = [
  {
    q: `How can I arrange care for my parents in Pondicherry if I live abroad?`,
    a: `Aureal Healthcare can conduct the initial assessment and care-planning discussion with you remotely. A physician-led care plan is created, a named local care coordinator is assigned, and care can be arranged without you needing to be physically present in Pondicherry.`,
  },
  {
    q: `How often will I receive updates on my parents' health?`,
    a: `Updates are shared on a regular scheduled basis, not only when there is a problem. The frequency is set according to your parent's condition, care needs, and the communication preferences of the family.`,
  },
  {
    q: `Who do I contact if something changes with my parent?`,
    a: `You receive a named local care coordinator as your main point of contact. For clinical questions and decisions, the coordinator is supported by the physician overseeing your parent's doctor-led care plan.`,
  },
  {
    q: `Can I be involved in care decisions while living abroad?`,
    a: `Yes. Families can be involved in planning and major care decisions remotely. The care team keeps the responsible family member informed, ensuring distance does not prevent meaningful participation in a parent's care.`,
  },
  {
    q: `What happens during an emergency if I am not in Pondicherry?`,
    a: `The local team follows the emergency escalation process, manages the immediate situation, and informs the family promptly. Your care coordinator helps keep you updated while the physician guides clinical decisions where required.`,
  },
  {
    q: `Is this separate from regular home care?`,
    a: `No. It is the same doctor-led homecare model, with additional communication structure designed specifically for families living away — including a named coordinator, scheduled updates, and remote family involvement.`,
  },
];

const C_qk = ({ name: e }) => {
  let t = {
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.7`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  };
  switch (e) {
    case `coordinator`:
      return (
        <svg {...t}>
          <circle cx="12" cy="7" r="3.2" />
          <path d="M5 20v-1.6A4.4 4.4 0 0 1 9.4 14h5.2A4.4 4.4 0 0 1 19 18.4V20" />
          <path d="M18.6 8.6a3 3 0 0 1 0 5.8" />
          <path d="M20.5 15.6A3.6 3.6 0 0 1 22 18.5V20" />
        </svg>
      );
    case `updates`:
      return (
        <svg {...t}>
          <path d="M20 15.5a2 2 0 0 1-2 2H8l-4 3v-14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
          <path d="M8 10h8" />
          <path d="M8 13.5h5" />
        </svg>
      );
    case `doctor`:
      return (
        <svg {...t}>
          <path d="M8 3.5h8v4H8z" />
          <path d="M6 7.5h12v13H6z" />
          <path d="M12 10v6" />
          <path d="M9 13h6" />
        </svg>
      );
    case `timezone`:
      return (
        <svg {...t}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3.4 2" />
          <path d="M5.8 5.8 4.2 4.2" />
          <path d="m18.2 5.8 1.6-1.6" />
        </svg>
      );
    case `emergency`:
      return (
        <svg {...t}>
          <path d="M12 3 3.8 18a2 2 0 0 0 1.8 3h12.8a2 2 0 0 0 1.8-3z" />
          <path d="M12 9v4.5" />
          <path d="M12 17h.01" />
        </svg>
      );
    case `location`:
      return (
        <svg {...t}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z" />
          <circle cx="12" cy="10" r="2.5" />
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
    case `globe`:
      return (
        <svg {...t}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3z" />
        </svg>
      );
    default:
      return null;
  }
};

const FamiliesLivingAway = () => {
  let [e, t] = useState(0);
  let n = (n) => {
    t(e === n ? -1 : n);
  };
  return (
    <div className="fla-page">
      <section className="fla-hero">
        <div className="fla-container fla-hero__inner">
          <div className="fla-hero__content">
            <nav className="fla-breadcrumb" aria-label="Breadcrumb">
              <span>Who We Serve</span>
              <span className="fla-breadcrumb__sep">/</span>
              <span className="fla-breadcrumb__active">Families Living Away</span>
            </nav>
            <span className="fla-hero__badge">
              <span className="fla-hero__badge-dot" />
              NRI & Out-of-Town Parent Care
            </span>
            <h1 className="fla-hero__title">
              Trusted, Doctor-Led Care for Parents in Pondicherry —{" "}
              <span className="fla-text-gold">Wherever You Are</span>
            </h1>
            <p className="fla-hero__lead">
              For families living abroad or in another city, Aureal Healthcare becomes a trusted
              local presence for your parents — offering physician-led care, regular updates, and
              one accountable point of contact.
            </p>
            <div className="fla-hero__actions">
              <a href="#fla-cta" className="fla-btn fla-btn--gold">
                Arrange Parent Care
                <C_qk name="arrow" />
              </a>
              <a href="#fla-how" className="fla-btn fla-btn--ghost">
                How It Works
              </a>
            </div>
            <div className="fla-hero__stats">
              <div className="fla-stat">
                <span className="fla-stat__num">1</span>
                <span className="fla-stat__label">Named Local Coordinator</span>
              </div>
              <div className="fla-stat">
                <span className="fla-stat__num">100%</span>
                <span className="fla-stat__label">Doctor-Led Care Plans</span>
              </div>
              <div className="fla-stat">
                <span className="fla-stat__num">7+</span>
                <span className="fla-stat__label">Areas Across Pondicherry</span>
              </div>
            </div>
          </div>
          <div className="fla-hero__media">
            <div className="fla-hero__image-frame">
              <img
                src="/fam1.jpg"
                alt="Family member speaking to an elderly parent through a video call"
                className="fla-hero__image"
                loading="eager"
              />
            </div>
            <div className="fla-hero__floating-card">
              <span className="fla-hero__floating-icon">
                <C_qk name="globe" />
              </span>
              <div>
                <strong>Distance Should Not Mean Disconnection</strong>
                <p>Regular updates from your local care team.</p>
              </div>
            </div>
            <div className="fla-hero__floating-pill">
              <C_qk name="check" />
              Connected Care, Anywhere
            </div>
          </div>
        </div>
      </section>
      <section className="fla-quick fla-container">
        <div className="fla-quick__card">
          <span className="fla-quick__label">Quick Answer</span>
          <p>
            Aureal Healthcare provides doctor-led parent care in Pondicherry for families living
            abroad or in another city. A physician-designed care plan, named local care coordinator,
            and regular updates help ensure distance does not mean losing track of your parent's
            health and wellbeing.
          </p>
        </div>
      </section>
      <section className="fla-section">
        <div className="fla-container fla-overview__grid">
          <div className="fla-overview__content">
            <div className="fla-head">
              <span className="fla-eyebrow">Overview</span>
              <h2 className="fla-title">
                A Trusted Local Presence,{" "}
                <span className="fla-text-gold">Even When You Are Far Away</span>
              </h2>
            </div>
            <p className="fla-text">
              When adult children live abroad or in another Indian city, the hardest part of parent
              care is often not making a medical decision — it is not being there to see what is
              happening every day.
            </p>
            <p className="fla-text">
              Who checks on your parents today? Who notices a subtle change in their health? Who do
              you call if there is a concern while you are thousands of kilometres away?
            </p>
            <p className="fla-text">
              Aureal Healthcare is built to answer those questions with one accountable structure: a
              physician who oversees the care plan, a named local coordinator who stays connected
              with the family, and proactive updates that keep everyone informed.
            </p>
            <p className="fla-text">
              This is long-distance caregiving with real local accountability — designed for
              families who need reassurance, visibility, and reliable clinical support in
              Pondicherry.
            </p>
            <div className="fla-areas">
              <span className="fla-areas__title">
                <C_qk name="location" />
                Areas Covered
              </span>
              <div className="fla-areas__list">
                {Wk.map((e) => (
                  <span className="fla-area-pill" key={e}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="fla-overview__media">
            <img src="/fam2.jpg" alt="Family discussing care options together" loading="lazy" />
            <div className="fla-overview__badge">
              <span className="fla-overview__badge-num">01</span>
              <span className="fla-overview__badge-text">
                One Family.
                <br />
                One Care Team.
                <br />
                One Clear Connection.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="fla-section fla-section--tint">
        <div className="fla-container">
          <div className="fla-head fla-head--center">
            <span className="fla-eyebrow">What's Included</span>
            <h2 className="fla-title">
              Care That Keeps Your Family{" "}
              <span className="fla-text-gold">Connected and Informed</span>
            </h2>
            <p className="fla-lead">
              A structured support system designed around the needs of families who cannot always be
              physically present.
            </p>
          </div>
          <div className="fla-included__grid">
            {Vk.map((e, t) => (
              <article className="fla-included-card" key={e.title}>
                <span className="fla-included-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <span className="fla-included-card__icon">
                  <C_qk name={e.icon} />
                </span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="fla-section" id="fla-how">
        <div className="fla-container">
          <div className="fla-head fla-head--center">
            <span className="fla-eyebrow">How It Works</span>
            <h2 className="fla-title">
              Parent Care Designed for{" "}
              <span className="fla-text-gold">Families Across Borders</span>
            </h2>
          </div>
          <div className="fla-steps">
            {Hk.map((e, t) => (
              <article className="fla-step" key={e.title}>
                <div className="fla-step__num">
                  <span>{t + 1}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="fla-why">
        <div className="fla-container fla-why__grid">
          <div className="fla-why__left">
            <span className="fla-eyebrow fla-eyebrow--light">Why This Matters in Pondicherry</span>
            <h2 className="fla-title fla-title--light">
              Replace Uncertainty With{" "}
              <span className="fla-text-gold">One Accountable Structure</span>
            </h2>
            <div className="fla-why__quote">
              “A trusted physician, a local coordinator, and regular communication — so your
              parent's care never feels distant.”
            </div>
          </div>
          <div className="fla-why__right">
            <p>
              Families living away from Pondicherry often piece together parent care through a
              neighbour, a relative visiting occasionally, or an informal caregiver. While these
              arrangements may help, they can leave families anxious about what happens if no one
              notices a concern in time.
            </p>
            <p>
              Aureal Healthcare replaces that patchwork with a coordinated doctor-led plan, a named
              local coordinator, and consistent communication that the family can rely on.
            </p>
          </div>
        </div>
      </section>
      <section className="fla-section">
        <div className="fla-container fla-difference__grid">
          <div className="fla-difference__media">
            <img
              src="/fam3.jpg"
              alt="Doctor reviewing a parent's care plan with a family member"
              loading="lazy"
            />
            <div className="fla-difference__badge">
              <C_qk name="shield" />
              <span>Doctor-Led Clinical Governance</span>
            </div>
          </div>
          <div className="fla-difference__content">
            <div className="fla-head">
              <span className="fla-eyebrow">The Aureal Healthcare Difference</span>
              <h2 className="fla-title">
                Remote Trust Starts With{" "}
                <span className="fla-text-gold">Real Clinical Accountability</span>
              </h2>
            </div>
            <p className="fla-text">
              For families who cannot be physically present, knowing that a physician — not only a
              caregiver — is accountable for the plan makes all the difference.
            </p>
            <p className="fla-text">
              It means families can ask meaningful clinical questions, receive informed answers, and
              know that care decisions are guided by a consistent authority rather than whoever
              happens to be present on a given day.
            </p>
            <ul className="fla-check-list">
              <li>
                <span className="fla-check-list__icon">
                  <C_qk name="check" />
                </span>
                A physician-led plan your family can understand and trust
              </li>
              <li>
                <span className="fla-check-list__icon">
                  <C_qk name="check" />
                </span>
                One named local coordinator for dependable communication
              </li>
              <li>
                <span className="fla-check-list__icon">
                  <C_qk name="check" />
                </span>
                Prompt updates when a parent's health or care needs change
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="fla-section fla-section--tint">
        <div className="fla-container">
          <div className="fla-head fla-head--center">
            <span className="fla-eyebrow">Who It's For</span>
            <h2 className="fla-title">
              For Families Who Need{" "}
              <span className="fla-text-gold">Confidence From a Distance</span>
            </h2>
          </div>
          <div className="fla-who__grid">
            {Uk.map((e, t) => (
              <article className="fla-who-card" key={e}>
                <span className="fla-who-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <p>{e}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="fla-trust">
        <div className="fla-container fla-trust__inner">
          <span className="fla-trust__icon">
            <C_qk name="shield" />
          </span>
          <div className="fla-trust__content">
            <span className="fla-eyebrow fla-eyebrow--light">Trust & Credibility</span>
            <h2 className="fla-title fla-title--light">
              Consistent People. Consistent Communication.
            </h2>
            <p>
              Parent care for families living away follows the same doctor-led clinical governance
              used across every Aureal Healthcare and AUREAL program in Pondicherry.
            </p>
            <p>
              With a named physician and a named care coordinator, trust is built through clear
              communication and consistent accountability — not one-off updates from whoever is
              available.
            </p>
            <div className="fla-trust__badges">
              <span>Named Care Coordinator</span>
              <span>Doctor-Led Care Plan</span>
              <span>Scheduled Family Updates</span>
            </div>
          </div>
        </div>
      </section>
      <section className="fla-section" id="fla-faq">
        <div className="fla-container fla-container--narrow">
          <div className="fla-head fla-head--center">
            <span className="fla-eyebrow">FAQ</span>
            <h2 className="fla-title">
              Frequently Asked <span className="fla-text-gold">Questions</span>
            </h2>
          </div>
          <div className="fla-faq__list">
            {Kk.map((t, r) => (
              <div className={`fla-faq__item ${e === r ? `is-open` : ``}`} key={t.q}>
                <button className="fla-faq__question" onClick={() => n(r)} aria-expanded={e === r}>
                  <span>{t.q}</span>
                  <span className="fla-faq__icon" aria-hidden="true" />
                </button>
                <div className="fla-faq__answer">
                  <div className="fla-faq__answer-inner">
                    <p>{t.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="fla-section fla-section--tint">
        <div className="fla-container">
          <div className="fla-head fla-head--center">
            <span className="fla-eyebrow">Explore More</span>
            <h2 className="fla-title">
              Related <span className="fla-text-gold">Aureal Healthcare</span> Services
            </h2>
          </div>
          <div className="fla-related__grid">
            {Gk.map((e) => (
              <a href={e.link} className="fla-related-card" key={e.name}>
                <h3>{e.name}</h3>
                <span className="fla-related-card__arrow">
                  <C_qk name="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="fla-cta" id="fla-cta">
        <div className="fla-container fla-cta__inner">
          <span className="fla-cta__label">Care That Travels Beyond Distance</span>
          <h2>
            Arrange trusted, doctor-led care for your parents in Pondicherry —{" "}
            <span className="fla-text-gold">wherever you are in the world.</span>
          </h2>
          <p>
            Speak with our care team and create a reliable local support system for the people who
            matter most.
          </p>
          <div className="fla-cta__actions">
            <a href="tel:+919944969049" className="fla-btn fla-btn--gold">
              <C_qk name="phone" />
              Speak With Our Care Team
            </a>
            <a href="#fla-faq" className="fla-btn fla-btn--ghost">
              Read FAQs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamiliesLivingAway;
