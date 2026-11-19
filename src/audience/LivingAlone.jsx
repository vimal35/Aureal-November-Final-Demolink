import React, { useState } from "react";
import "./LivingAlone.css";

const Yk = [
  {
    icon: `checkin`,
    title: `Regular Daily or Scheduled Check-Ins`,
    text: `A consistent visit or contact routine ensures that a missed check-in is noticed and followed up, rather than going unseen.`,
  },
  {
    icon: `homeSafety`,
    title: `Home Fall-Risk Assessment`,
    text: `A structured review of the senior's home environment helps identify and reduce practical risks before a fall or incident occurs.`,
  },
  {
    icon: `medicine`,
    title: `Medication & Routine Support`,
    text: `Support with medication schedules and important daily routines helps seniors stay consistent while living independently.`,
  },
  {
    icon: `emergency`,
    title: `Clear Emergency Escalation`,
    text: `If a concern is identified during a check-in, there is a defined pathway to physician review or emergency support when appropriate.`,
  },
  {
    icon: `family`,
    title: `Family Visibility & Reassurance`,
    text: `Families gain confidence that their loved one is being checked on regularly, without needing to manage every detail themselves.`,
  },
];

const Xk = [
  {
    title: `Safety & Needs Assessment`,
    text: `A physician or care coordinator reviews the senior's routine, home environment, health needs, and specific safety concerns.`,
  },
  {
    title: `Check-In Schedule Created`,
    text: `A suitable contact or visit schedule is established around the senior's needs, independence, and preferences.`,
  },
  {
    title: `Ongoing Monitoring`,
    text: `Regular check-ins continue across Pondicherry, with missed or concerning contact triggering timely follow-up.`,
  },
  {
    title: `Escalation When Needed`,
    text: `If an issue is identified, the care team escalates it promptly to a physician or emergency response as appropriate.`,
  },
];

const Zk = [
  `Seniors in Pondicherry who want to remain safely in their own home rather than move in with family or into a facility.`,
  `Families who live locally but work full-time and cannot check on an elderly parent as often as they would like.`,
  `Seniors recovering from a recent fall, hospital visit, or health scare who need a more reliable safety net.`,
  `Families deciding whether a parent can safely continue living alone and need a structured way to assess support needs.`,
];

const Qk = [
  {
    q: `How can I keep an elderly parent living alone safe in Pondicherry?`,
    a: `A structured daily or scheduled check-in routine, a home fall-risk assessment, medication and routine support, and a clear escalation pathway to a physician can create a reliable safety net while allowing the senior to remain independent.`,
  },
  {
    q: `What happens if a senior misses a scheduled check-in?`,
    a: `A missed or concerning check-in triggers follow-up from the care team. This means that a gap in contact becomes a signal that should be checked, rather than something that goes unnoticed.`,
  },
  {
    q: `Is this different from an emergency alert button?`,
    a: `Yes. An emergency alert button is useful only if the senior is able to press it during a crisis. This service is proactive, using regular scheduled check-ins that do not depend on the senior initiating contact when something is wrong.`,
  },
  {
    q: `Can family members get updates without calling every day?`,
    a: `Yes. Families can receive appropriate updates from the care team, providing reassurance that their parent is being checked on without requiring family members to call every day.`,
  },
  {
    q: `Is a physician involved in the living-alone care service?`,
    a: `Yes. Any concerning finding identified during check-ins can be escalated to a physician as part of the doctor-led care model, rather than being handled as only a caregiving or logistical matter.`,
  },
  {
    q: `Which areas around Pondicherry are covered?`,
    a: `Coverage includes Puducherry town and surrounding areas such as White Town, Muthialpet, Lawspet, Reddiarpalayam, Ozhukarai, and Ariyankuppam.`,
  },
];

const $k = [
  {
    name: `Families Living Away`,
    link: `/FamiliesLivingAway`,
  },
  {
    name: `Geriatric People`,
    link: `/GeriatricPeople`,
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

const eA = [
  `Puducherry Town`,
  `White Town`,
  `Muthialpet`,
  `Lawspet`,
  `Reddiarpalayam`,
  `Ozhukarai`,
  `Ariyankuppam`,
];

const C_tA = ({ name: e }) => {
  let t = {
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.7`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  };
  switch (e) {
    case `checkin`:
      return (
        <svg {...t}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3.4 2.2" />
          <path d="m8.6 12 2.1 2.1 4.8-4.9" />
        </svg>
      );
    case `homeSafety`:
      return (
        <svg {...t}>
          <path d="m3.5 11 8.5-7 8.5 7v9H3.5z" />
          <path d="M9.2 20v-5.2h5.6V20" />
          <path d="m9.2 10.8 1.7 1.7 3.6-3.6" />
        </svg>
      );
    case `medicine`:
      return (
        <svg {...t}>
          <rect x="5.5" y="3.5" width="13" height="17" rx="2.2" />
          <path d="M9 3.5V2.4h6v1.1" />
          <path d="M9 10.5h6" />
          <path d="M12 7.5v6" />
          <path d="M9 17h6" />
        </svg>
      );
    case `emergency`:
      return (
        <svg {...t}>
          <path d="M12 3 3.8 18a2 2 0 0 0 1.8 3h12.8a2 2 0 0 0 1.8-3z" />
          <path d="M12 9v4.7" />
          <path d="M12 17.2h.01" />
        </svg>
      );
    case `family`:
      return (
        <svg {...t}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17.5" cy="9.5" r="2.2" />
          <path d="M3.7 20v-1.5A4.7 4.7 0 0 1 8.4 14h1.2a4.7 4.7 0 0 1 4.7 4.5V20" />
          <path d="M16 15.2h1.6a3.6 3.6 0 0 1 3.6 3.6V20" />
        </svg>
      );
    case `shield`:
      return (
        <svg {...t}>
          <path d="M12 2.8 4.5 5.6v5.7c0 4.6 3.2 8 7.5 9.9 4.3-1.9 7.5-5.3 7.5-9.9V5.6z" />
          <path d="m8.8 11.8 2.2 2.2 4.2-4.4" />
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
    case `phone`:
      return (
        <svg {...t}>
          <path d="M5.2 3.5h3.4l1.7 4.3-2.1 1.6a12.8 12.8 0 0 0 5.4 5.4l1.6-2.1 4.3 1.7v3.4a1.9 1.9 0 0 1-2.1 1.9A16.4 16.4 0 0 1 3.3 5.6a1.9 1.9 0 0 1 1.9-2.1z" />
        </svg>
      );
    case `heart`:
      return (
        <svg {...t}>
          <path d="M12 20.6S3.6 15.5 2.4 11A5.2 5.2 0 0 1 12 6.6a5.2 5.2 0 0 1 9.6 4.4c-1.2 4.5-9.6 9.6-9.6 9.6z" />
          <path d="M7 12h2.3l1.4-2.5 2 4.8 1.4-2.3h2.9" />
        </svg>
      );
    default:
      return null;
  }
};

const LivingAlone = () => {
  let [e, t] = useState(0);
  let n = (n) => {
    t(e === n ? -1 : n);
  };
  return (
    <main className="la-page">
      <section className="la-hero">
        <div className="la-container la-hero__inner">
          <div className="la-hero__content">
            <nav className="la-breadcrumb" aria-label="Breadcrumb">
              <span>Who We Serve</span>
              <span className="la-breadcrumb__sep">/</span>
              <span className="la-breadcrumb__active">Living Alone</span>
            </nav>
            <span className="la-hero__badge">
              <span className="la-hero__badge-dot" />
              Independent Living Support
            </span>
            <h1 className="la-hero__title">
              A Safety Net for Seniors Living Alone in{" "}
              <span className="la-text-gold">Pondicherry</span>
            </h1>
            <p className="la-hero__lead">
              Doctor-led support for seniors managing independently — with regular check-ins,
              fall-risk awareness, and a clear physician escalation path, so independence never has
              to mean isolation.
            </p>
            <div className="la-hero__actions">
              <a href="#la-cta" className="la-btn la-btn--gold">
                Set Up a Safety Net
                <C_tA name="arrow" />
              </a>
              <a href="#la-how" className="la-btn la-btn--ghost">
                How It Works
              </a>
            </div>
            <div className="la-hero__stats">
              <div className="la-stat">
                <span className="la-stat__num">Daily</span>
                <span className="la-stat__label">or Scheduled Check-Ins</span>
              </div>
              <div className="la-stat">
                <span className="la-stat__num">1</span>
                <span className="la-stat__label">Clear Escalation Pathway</span>
              </div>
              <div className="la-stat">
                <span className="la-stat__num">7+</span>
                <span className="la-stat__label">Areas Across Pondicherry</span>
              </div>
            </div>
          </div>
          <div className="la-hero__media">
            <div className="la-hero__img-frame">
              <img
                src="https://images.unsplash.com/photo-1559234938-b60fff04894d?auto=format&fit=crop&w=1000&q=85"
                alt="Senior citizen living independently and safely at home"
                className="la-hero__img"
                loading="eager"
              />
            </div>
            <div className="la-hero__float-card">
              <span className="la-hero__float-icon">
                <C_tA name="shield" />
              </span>
              <div>
                <strong>Support Without Taking Away Independence</strong>
                <p>Reliable check-ins, practical safety, real reassurance.</p>
              </div>
            </div>
            <div className="la-hero__float-pill">
              <C_tA name="check" />
              Doctor-Led Safety Net
            </div>
          </div>
        </div>
      </section>
      <section className="la-quick la-container">
        <div className="la-quick__card">
          <span className="la-quick__label">Quick Answer</span>
          <p>
            Aureal Healthcare supports seniors living alone in Pondicherry through a doctor-led
            safety net: regular daily or scheduled check-ins, structured fall-risk reduction, and a
            clear pathway to physician support when a concern is identified.
          </p>
        </div>
      </section>
      <section className="la-section">
        <div className="la-container la-overview__grid">
          <div className="la-overview__content">
            <div className="la-head">
              <span className="la-eyebrow">Overview</span>
              <h2 className="la-title">
                Staying Home Should Feel <span className="la-text-gold">Safe and Supported</span>
              </h2>
            </div>
            <p className="la-text">
              Many seniors in Pondicherry choose to live independently in their own home,
              maintaining familiar routines and a sense of freedom. Independence is not the risk —
              being unnoticed when something goes wrong is.
            </p>
            <p className="la-text">
              Aureal Healthcare provides elderly living alone care in Pondicherry that focuses on
              closing this gap. Regular check-ins, home-safety awareness, medication support, and a
              defined escalation pathway create a dependable layer of support around the senior.
            </p>
            <p className="la-text">
              This helps older adults continue living independently while giving their families
              confidence that someone reliable is actively checking in — not just available in
              theory if an emergency happens.
            </p>
            <div className="la-areas">
              <span className="la-areas__title">
                <C_tA name="location" />
                Areas Covered
              </span>
              <div className="la-areas__list">
                {eA.map((e) => (
                  <span className="la-area-pill" key={e}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="la-overview__media">
            <img
              src="/alone2.jpg"
              alt="Senior person comfortably living at home with care support"
              loading="lazy"
            />
            <div className="la-overview__badge">
              <span className="la-overview__badge-num">01</span>
              <span className="la-overview__badge-text">
                Independence.
                <br />
                Connection.
                <br />
                Peace of Mind.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="la-section la-section--tint">
        <div className="la-container">
          <div className="la-head la-head--center">
            <span className="la-eyebrow">What's Included</span>
            <h2 className="la-title">
              A Practical Safety System for{" "}
              <span className="la-text-gold">Independent Seniors</span>
            </h2>
            <p className="la-lead">
              Proactive support that helps identify concerns early — before they become a bigger
              problem.
            </p>
          </div>
          <div className="la-include__grid">
            {Yk.map((e, t) => (
              <article className="la-include-card" key={e.title}>
                <span className="la-include-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <span className="la-include-card__icon">
                  <C_tA name={e.icon} />
                </span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="la-section" id="la-how">
        <div className="la-container">
          <div className="la-head la-head--center">
            <span className="la-eyebrow">How It Works</span>
            <h2 className="la-title">
              A Clear Path to <span className="la-text-gold">Safer Independent Living</span>
            </h2>
          </div>
          <div className="la-steps">
            {Xk.map((e, t) => (
              <article className="la-step" key={e.title}>
                <div className="la-step__num">
                  <span>{t + 1}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="la-why">
        <div className="la-container la-why__grid">
          <div className="la-why__left">
            <span className="la-eyebrow la-eyebrow--light">Why This Matters in Pondicherry</span>
            <h2 className="la-title la-title--light">
              Don't Leave Safety to <span className="la-text-gold">Chance or Guesswork</span>
            </h2>
            <div className="la-why__quote">
              “A scheduled check-in turns silence into something worth noticing — not something that
              gets missed.”
            </div>
          </div>
          <div className="la-why__right">
            <p>
              Seniors living alone often rely on informal check-ins: a neighbour who visits
              occasionally, a family call that might go unanswered, or someone who is available only
              when contacted. That can leave a critical gap when a problem develops quietly.
            </p>
            <p>
              Aureal Healthcare replaces uncertainty with a structured check-in model. Regular
              contact, clear follow-up, and defined escalation help ensure that someone is actively
              paying attention.
            </p>
          </div>
        </div>
      </section>
      <section className="la-section">
        <div className="la-container la-diff__grid">
          <div className="la-diff__media">
            <img
              src="/alone3.jpg"
              alt="Physician reviewing senior care needs and safety plan"
              loading="lazy"
            />
            <div className="la-diff__media-badge">
              <C_tA name="shield" />
              <span>Physician Escalation Pathway</span>
            </div>
          </div>
          <div className="la-diff__content">
            <div className="la-head">
              <span className="la-eyebrow">The Aureal Healthcare Difference</span>
              <h2 className="la-title">
                A Missed Check-In Is More Than{" "}
                <span className="la-text-gold">a Scheduling Issue</span>
              </h2>
            </div>
            <p className="la-text">
              A missed check-in or a subtle change in a senior's condition can be an important
              signal — especially for older adults managing chronic conditions or recovering from a
              recent health event.
            </p>
            <p className="la-text">
              That is why this model includes a physician in the escalation pathway. Concerns are
              not treated only as a logistical issue; they can receive appropriate clinical
              attention when needed.
            </p>
            <ul className="la-check-list">
              <li>
                <span className="la-check-list__icon">
                  <C_tA name="check" />
                </span>
                Regular check-ins that provide proactive reassurance
              </li>
              <li>
                <span className="la-check-list__icon">
                  <C_tA name="check" />
                </span>
                A clear process when contact is missed or concerns are noticed
              </li>
              <li>
                <span className="la-check-list__icon">
                  <C_tA name="check" />
                </span>
                Physician involvement for concerns that need clinical judgment
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="la-section la-section--tint">
        <div className="la-container">
          <div className="la-head la-head--center">
            <span className="la-eyebrow">Who It's For</span>
            <h2 className="la-title">
              Support for Seniors Who Value <span className="la-text-gold">Their Independence</span>
            </h2>
          </div>
          <div className="la-who__grid">
            {Zk.map((e, t) => (
              <article className="la-who-card" key={e}>
                <span className="la-who-card__num">{String(t + 1).padStart(2, `0`)}</span>
                <p>{e}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="la-trust">
        <div className="la-container la-trust__inner">
          <span className="la-trust__icon">
            <C_tA name="heart" />
          </span>
          <div className="la-trust__content">
            <span className="la-eyebrow la-eyebrow--light">Trust & Credibility</span>
            <h2 className="la-title la-title--light">Reassurance Built Into Every Check-In</h2>
            <p>
              Care for seniors living alone follows the same doctor-led clinical governance applied
              across Aureal Healthcare and AUREAL programs in Pondicherry.
            </p>
            <p>
              Because check-ins are scheduled and consistent, families receive meaningful
              reassurance — rather than relying only on an emergency line after something has
              already gone wrong.
            </p>
            <div className="la-trust__badges">
              <span>Scheduled Check-Ins</span>
              <span>Fall-Risk Awareness</span>
              <span>Doctor-Led Escalation</span>
            </div>
          </div>
        </div>
      </section>
      <section className="la-section" id="la-faq">
        <div className="la-container la-container--narrow">
          <div className="la-head la-head--center">
            <span className="la-eyebrow">FAQ</span>
            <h2 className="la-title">
              Frequently Asked <span className="la-text-gold">Questions</span>
            </h2>
          </div>
          <div className="la-faq__list">
            {Qk.map((t, r) => (
              <div className={`la-faq__item ${e === r ? `is-open` : ``}`} key={t.q}>
                <button className="la-faq__question" onClick={() => n(r)} aria-expanded={e === r}>
                  <span>{t.q}</span>
                  <span className="la-faq__icon" aria-hidden="true" />
                </button>
                <div className="la-faq__answer">
                  <div className="la-faq__answer-inner">
                    <p>{t.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="la-section la-section--tint">
        <div className="la-container">
          <div className="la-head la-head--center">
            <span className="la-eyebrow">Explore More</span>
            <h2 className="la-title">
              Related <span className="la-text-gold">Aureal Healthcare</span> Services
            </h2>
          </div>
          <div className="la-related__grid">
            {$k.map((e) => (
              <a href={e.link} className="la-related-card" key={e.name}>
                <h3>{e.name}</h3>
                <span className="la-related-card__arrow">
                  <C_tA name="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="la-cta" id="la-cta">
        <div className="la-container la-cta__inner">
          <span className="la-cta__brand">Independent Living, Reliably Supported</span>
          <h2>
            Set up a doctor-led safety net for a senior living alone in Pondicherry —{" "}
            <span className="la-text-gold">regular check-ins, real accountability.</span>
          </h2>
          <p>
            Speak with our care team to create practical support that helps your loved one remain
            safe, connected, and independent at home.
          </p>
          <div className="la-cta__actions">
            <a href="tel:+919944969049" className="la-btn la-btn--gold">
              <C_tA name="phone" />
              Speak With Our Care Team
            </a>
            <a href="#la-faq" className="la-btn la-btn--ghost">
              Read FAQs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LivingAlone;
