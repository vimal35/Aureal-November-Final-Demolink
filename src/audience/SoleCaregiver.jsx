import React, { useState } from "react";
import "./SoleCaregiver.css";

const rA = [
  {
    number: `01`,
    icon: `clock`,
    title: `Flexible Respite Scheduling`,
    text: `Arrange relief for a few hours, a full day, or on a recurring schedule — built around the time and support the family caregiver actually needs.`,
  },
  {
    number: `02`,
    icon: `continuity`,
    title: `Seamless Care Continuity`,
    text: `Respite staff work from the patient's existing doctor-led care plan, so temporary support does not mean starting over or changing the approach.`,
  },
  {
    number: `03`,
    icon: `doctor`,
    title: `Physician Oversight Continues`,
    text: `The overseeing physician's care plan and accountability remain in place even when the primary family caregiver steps away.`,
  },
  {
    number: `04`,
    icon: `heart`,
    title: `Caregiver Well-Being`,
    text: `The caregiver matters too. Our approach recognizes exhaustion, stress and burnout as important parts of the overall care picture.`,
  },
  {
    number: `05`,
    icon: `calendar`,
    title: `Planned or Short-Notice Relief`,
    text: `Respite can be scheduled in advance or, subject to availability, arranged when an unexpected personal or family need arises.`,
  },
];

const iA = [
  {
    number: `01`,
    title: `Tell Us What You Need`,
    text: `Our team speaks with the family caregiver about the kind of relief required — regular breaks, occasional support, or help during a specific event.`,
  },
  {
    number: `02`,
    title: `Build the Respite Plan`,
    text: `A practical respite schedule is created around the patient's existing doctor-led care plan and the family's routine.`,
  },
  {
    number: `03`,
    title: `Care Team Steps In`,
    text: `Trained caregiving staff step in during the agreed periods, already briefed on the patient's established care requirements.`,
  },
  {
    number: `04`,
    title: `Adjust as Life Changes`,
    text: `The respite arrangement can evolve as the caregiver's responsibilities, availability and support needs change.`,
  },
];

const aA = [
  {
    icon: `spouse`,
    title: `A Sole-Caregiving Spouse`,
    text: `A husband, wife or partner who has gradually become the primary person responsible for almost every aspect of their loved one's daily care.`,
  },
  {
    icon: `family`,
    title: `The Closest Adult Child`,
    text: `An adult child who lives nearby and has become the default caregiver while balancing work, children and their own responsibilities.`,
  },
  {
    icon: `burnout`,
    title: `A Caregiver Showing Burnout`,
    text: `Someone experiencing persistent exhaustion, declining personal health or the feeling that they cannot take even one day away.`,
  },
  {
    icon: `travel`,
    title: `Families Planning Ahead`,
    text: `Families who need dependable care coverage while the primary caregiver attends a medical procedure, travels or handles an important personal need.`,
  },
];

const oA = [
  {
    q: `What is respite care?`,
    a: `Respite care is temporary professional care that steps in so a family caregiver can rest, attend to personal needs or take time away while the patient's care continues. It may be arranged for a few hours, a full day or on a recurring schedule.`,
  },
  {
    q: `How do I know if I need respite care?`,
    a: `Persistent exhaustion, neglecting your own health, feeling overwhelmed or being unable to take even a short break are common signs that structured respite support may help. Getting relief can protect both the caregiver's well-being and the quality of care they are able to provide.`,
  },
  {
    q: `Will my loved one's care plan change during respite?`,
    a: `No. Respite staff work from the patient's existing doctor-led care plan. This creates continuity of care rather than introducing a completely different approach when the family caregiver temporarily steps away.`,
  },
  {
    q: `Can respite care be arranged on short notice?`,
    a: `Planned respite is generally easier to arrange in advance. However, the team can try to accommodate shorter-notice requirements depending on staff availability and the patient's care needs.`,
  },
  {
    q: `Is respite care only for elderly patients?`,
    a: `No. Respite care can support the caregiver of a patient who is on a doctor-led care plan, whether the patient is elderly, recovering after surgery or living with a chronic or serious illness.`,
  },
  {
    q: `Is respite care available across Pondicherry?`,
    a: `Yes. Respite support is available across Puducherry town and surrounding areas including White Town, Muthialpet, Lawspet, Reddiarpalayam and Ozhukarai.`,
  },
  {
    q: `How does respite care help with caregiver burnout?`,
    a: `Respite care creates protected time for the primary caregiver to rest, attend appointments, work, travel or simply recover. By allowing care responsibilities to be shared temporarily, families can create a more sustainable long-term caregiving arrangement.`,
  },
];

const sA = [
  {
    title: `Living Alone`,
    text: `Coordinated support for individuals managing life at home independently.`,
    link: `/LivingAlone`,
  },
  {
    title: `Families Living Away`,
    text: `Local care coordination for families who cannot be physically present every day.`,
    link: `/FamiliesLivingAway`,
  },
  {
    title: `Palliative Patients`,
    text: `Compassionate, doctor-led support when care needs become more complex.`,
    link: `/PalliativePatients`,
  },
  {
    title: `Geriatric People`,
    text: `Integrated elderly care designed around safety, dignity and independence.`,
    link: `/GeriatricPeople`,
  },
];

const cA = [
  `Puducherry Town`,
  `White Town`,
  `Muthialpet`,
  `Lawspet`,
  `Reddiarpalayam`,
  `Ozhukarai`,
];

const C_lA = ({ name: e }) => {
  let t = {
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.7`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  };
  switch (e) {
    case `clock`:
      return (
        <svg {...t}>
          <circle cx="12" cy="12" r="8.8" />
          <path d="M12 7v5l3.2 2" />
        </svg>
      );
    case `continuity`:
      return (
        <svg {...t}>
          <path d="M7.5 7.5h7a4 4 0 0 1 0 8H11" />
          <path d="m8 11-3.5 3.5L8 18" />
          <path d="M16.5 16.5h-7a4 4 0 0 1 0-8H13" />
          <path d="m16 13 3.5-3.5L16 6" />
        </svg>
      );
    case `doctor`:
      return (
        <svg {...t}>
          <path d="M8 3.5h8" />
          <path d="M9 3.5v3a3 3 0 0 0 6 0v-3" />
          <path d="M12 9.5v4" />
          <path d="M10 11.5h4" />
          <path d="M7 20h10" />
          <path d="M8.2 20v-3.2a3.8 3.8 0 0 1 7.6 0V20" />
        </svg>
      );
    case `heart`:
      return (
        <svg {...t}>
          <path d="M20.5 8.8c0 5.4-8.5 10.1-8.5 10.1S3.5 14.2 3.5 8.8A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.5 2.4Z" />
          <path d="M8.5 10.5h2l1.1-2.1 1.7 4.1 1.2-2h1" />
        </svg>
      );
    case `calendar`:
      return (
        <svg {...t}>
          <rect x="4" y="5.5" width="16" height="14" rx="2" />
          <path d="M8 3.5v4" />
          <path d="M16 3.5v4" />
          <path d="M4 9.5h16" />
          <path d="M8 13h3" />
          <path d="M8 16h5" />
        </svg>
      );
    case `spouse`:
      return (
        <svg {...t}>
          <circle cx="9" cy="7" r="2.5" />
          <circle cx="16.5" cy="8" r="2.2" />
          <path d="M4.8 18a4.2 4.2 0 0 1 8.4 0" />
          <path d="M13 18a3.6 3.6 0 0 1 7.2 0" />
          <path d="m12 12 1.5 1.5L15 12" />
        </svg>
      );
    case `family`:
      return (
        <svg {...t}>
          <circle cx="12" cy="7" r="2.5" />
          <circle cx="6.5" cy="9" r="2" />
          <circle cx="17.5" cy="9" r="2" />
          <path d="M7.5 19a4.5 4.5 0 0 1 9 0" />
          <path d="M2.8 18a3.5 3.5 0 0 1 5.2-3.1" />
          <path d="M21.2 18a3.5 3.5 0 0 0-5.2-3.1" />
        </svg>
      );
    case `burnout`:
      return (
        <svg {...t}>
          <path d="M12 20.5a7 7 0 1 0-7-7c0 3.8 3.1 7 7 7Z" />
          <path d="M12 6.5v5l3 2" />
          <path d="M18.5 4.5 20 3" />
          <path d="m5.5 4.5-1.5-1.5" />
        </svg>
      );
    case `travel`:
      return (
        <svg {...t}>
          <path d="M4 6.5h16v13H4z" />
          <path d="M8 6.5V4h8v2.5" />
          <path d="M8 11h8" />
          <path d="M12 8.5v5" />
          <path d="m8 19.5 2-3h4l2 3" />
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
          <path d="M4 12h15" />
          <path d="m13.5 6 5.5 6-5.5 6" />
        </svg>
      );
    case `shield`:
      return (
        <svg {...t}>
          <path d="M12 2.8 4.5 5.7v5.6c0 4.6 3.2 8 7.5 9.9 4.3-1.9 7.5-5.3 7.5-9.9V5.7z" />
          <path d="m8.8 12 2.2 2.2 4.4-4.5" />
        </svg>
      );
    case `phone`:
      return (
        <svg {...t}>
          <path d="M5.2 3.5h3.4l1.7 4.3-2.1 1.6a12.8 12.8 0 0 0 5.4 5.4l1.6-2.1 4.3 1.7v3.4a1.9 1.9 0 0 1-2.1 1.9A16.4 16.4 0 0 1 3.3 5.6a1.9 1.9 0 0 1 1.9-2.1Z" />
        </svg>
      );
    case `spark`:
      return (
        <svg {...t}>
          <path d="m12 2 1.4 6.6L20 10l-6.6 1.4L12 18l-1.4-6.6L4 10l6.6-1.4Z" />
          <path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6Z" />
        </svg>
      );
    default:
      return null;
  }
};

const SoleCaregiver = () => {
  let [e, t] = useState(0);
  let n = (n) => {
    t(e === n ? -1 : n);
  };
  return (
    <main className="sole-page">
      <section className="sole-hero">
        <div className="sole-hero__glow sole-hero__glow--one" />
        <div className="sole-hero__glow sole-hero__glow--two" />
        <div className="sole-container sole-hero__inner">
          <div className="sole-hero__content">
            <div className="sole-breadcrumb">
              <span>Who We Serve</span>
              <b>/</b>
              <span>Sole Caregiver</span>
            </div>
            <div className="sole-kicker">
              <span className="sole-kicker__dot" />
              Family Caregiver Support · Pondicherry
            </div>
            <h1>
              Respite Care and <span>Real Support</span>
              {" for Pondicherry's Family Caregivers"}
            </h1>
            <p className="sole-hero__lead">
              When one family member has become the entire care system, Aureal Healthcare provides
              doctor-led respite care in Pondicherry — professional backup so you can rest without
              your loved one's care ever pausing.
            </p>
            <div className="sole-hero__actions">
              <a href="#sole-cta" className="sole-btn sole-btn--gold">
                Arrange Respite Care
                <C_lA name="arrow" />
              </a>
              <a href="#sole-how" className="sole-btn sole-btn--outline">
                See How It Works
              </a>
            </div>
            <div className="sole-hero__promise">
              <div>
                <span className="sole-promise__icon">
                  <C_lA name="heart" />
                </span>
                <span>
                  <strong>You can take a break.</strong>
                  <small>Care continues while you step away.</small>
                </span>
              </div>
              <div>
                <span className="sole-promise__icon">
                  <C_lA name="shield" />
                </span>
                <span>
                  <strong>Doctor-led continuity.</strong>
                  <small>The existing care plan stays in place.</small>
                </span>
              </div>
            </div>
          </div>
          <div className="sole-hero__visual">
            <div className="sole-hero__image-wrap">
              <div className="sole-hero__image-ring" />
              <img
                src="/sole1.jpg"
                alt="Family caregiver receiving support from a professional caregiver at home"
                className="sole-hero__image"
              />
              <div className="sole-hero__image-overlay" />
            </div>
            <div className="sole-relief-card">
              <div className="sole-relief-card__icon">
                <C_lA name="heart" />
              </div>
              <div>
                <span>YOUR WELL-BEING MATTERS</span>
                <strong>You don't have to do it all alone.</strong>
              </div>
            </div>
            <div className="sole-floating-note">
              <span className="sole-floating-note__check">
                <C_lA name="check" />
              </span>
              <span>
                <strong>Care doesn't stop</strong>
                <small>when you need to step away.</small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="sole-quick">
        <div className="sole-container">
          <div className="sole-quick__card">
            <div className="sole-quick__mark">
              <C_lA name="spark" />
            </div>
            <div>
              <span className="sole-mini-label">Quick Answer</span>
              <p>
                Aureal Healthcare provides doctor-led respite care in Pondicherry for family
                caregivers carrying the full burden of caring for a parent or spouse alone. Trained
                staff and physician oversight step in temporarily or regularly, allowing the primary
                caregiver to rest while their loved one's care continues without interruption.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sole-section sole-overview">
        <div className="sole-container sole-overview__grid">
          <div className="sole-overview__content">
            <span className="sole-eyebrow">The Reality of Sole Caregiving</span>
            <h2>
              When Caring for Someone Else<span>{" Starts Consuming Everything."}</span>
            </h2>
            <div className="sole-accent-line" />
            <p>
              In many Pondicherry families, one person — often a spouse or the adult child who lives
              closest — gradually becomes the entire care system for an ageing or unwell relative.
            </p>
            <p>
              Medication, meals, appointments, mobility, supervision and countless small decisions
              can become a daily responsibility that continues for months or even years without
              meaningful relief.
            </p>
            <p>
              Aureal Healthcare's respite care model exists specifically for this situation. Trained
              caregiving staff, supported by the same doctor-led clinical plan, temporarily step in
              so the primary caregiver can rest, attend to their own health or simply take a moment
              away.
            </p>
            <div className="sole-highlight">
              <div className="sole-highlight__icon">
                <C_lA name="heart" />
              </div>
              <div>
                <strong>Supporting the caregiver is part of supporting the patient.</strong>
                <p>
                  A sustainable care plan must consider the person providing day-to-day care too.
                </p>
              </div>
            </div>
          </div>
          <div className="sole-overview__visual">
            <div className="sole-image-frame">
              <img
                src="/sole2.jpg"
                alt="Professional caregiver supporting a family member at home"
                loading="lazy"
              />
            </div>
            <div className="sole-image-caption">
              <span className="sole-image-caption__number">01</span>
              <div>
                <strong>Real Relief.</strong>
                <span>Without a gap in care.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sole-section sole-section--soft">
        <div className="sole-container">
          <div className="sole-section-head">
            <div>
              <span className="sole-eyebrow">What's Included</span>
              <h2>
                Relief Designed Around<span>{" Your Real Life"}</span>
              </h2>
            </div>
            <p>
              Respite support is not a one-size-fits-all service. The schedule and level of support
              are shaped around the patient's care plan and the caregiver's actual needs.
            </p>
          </div>
          <div className="sole-included-grid">
            {rA.map((e) => (
              <article className="sole-included-card" key={e.number}>
                <div className="sole-card-top">
                  <span className="sole-card-number">{e.number}</span>
                  <span className="sole-card-icon">
                    <C_lA name={e.icon} />
                  </span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                <span className="sole-card-bottom" />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sole-section sole-how" id="sole-how">
        <div className="sole-container">
          <div className="sole-section-head sole-section-head--center">
            <span className="sole-eyebrow">How It Works</span>
            <h2>
              A Simple Way to<span>{" Share the Care"}</span>
            </h2>
            <p>
              Getting support should not feel complicated. We build respite around the care already
              happening at home.
            </p>
          </div>
          <div className="sole-timeline">
            <div className="sole-timeline-line" />
            {iA.map((e, t) => (
              <div className="sole-timeline-item" key={e.number}>
                <div className="sole-timeline-marker">
                  <span>{e.number}</span>
                </div>
                <div className="sole-timeline-content">
                  <span className="sole-step-label">
                    {"STEP "}
                    {t + 1}
                  </span>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sole-why">
        <div className="sole-why__orb sole-why__orb--one" />
        <div className="sole-why__orb sole-why__orb--two" />
        <div className="sole-container sole-why__grid">
          <div className="sole-why__content">
            <span className="sole-eyebrow sole-eyebrow--light">
              Why This Matters in Pondicherry
            </span>
            <h2>
              Caregiving Shouldn't Mean<span>{" Losing Yourself."}</span>
            </h2>
            <p>
              Family caregivers in Pondicherry can often feel that taking time away means abandoning
              their responsibility. That pressure can make asking for help feel almost impossible.
            </p>
            <p>
              But caregiver exhaustion has consequences. When the person providing day-to-day care
              becomes physically and emotionally depleted, sustainable care becomes harder for
              everyone.
            </p>
            <div className="sole-why-quote">
              <span>"</span>
              <p>
                Taking a break is not stepping away from your responsibility. It is creating the
                strength to continue it.
              </p>
            </div>
          </div>
          <div className="sole-why__points">
            <div className="sole-why-point">
              <span>01</span>
              <div>
                <strong>Rest Without Guilt</strong>
                <p>Take time to sleep, recover, attend appointments or simply breathe.</p>
              </div>
            </div>
            <div className="sole-why-point">
              <span>02</span>
              <div>
                <strong>Keep Care Consistent</strong>
                <p>
                  Temporary support works from the patient's existing care plan rather than creating
                  a disruptive handoff.
                </p>
              </div>
            </div>
            <div className="sole-why-point">
              <span>03</span>
              <div>
                <strong>Make Care Sustainable</strong>
                <p>
                  Regular relief can help families build a caregiving routine that is realistic for
                  the long term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sole-section">
        <div className="sole-container sole-difference">
          <div className="sole-difference__visual">
            <div className="sole-difference__image">
              <img
                src="/sole3.jpg"
                alt="Doctor discussing a home care plan with a family"
                loading="lazy"
              />
            </div>
            <div className="sole-difference__badge">
              <C_lA name="shield" />
              <div>
                <strong>Doctor-Led Continuity</strong>
                <span>Care remains clinically accountable.</span>
              </div>
            </div>
          </div>
          <div className="sole-difference__content">
            <span className="sole-eyebrow">The Aureal Healthcare Difference</span>
            <h2>
              Professional Backup.<span>{" Same Care Plan."}</span>
            </h2>
            <p>
              Respite care only works when the temporary support feels like a continuation of care —
              not a completely different system.
            </p>
            <p>
              That is why respite caregiving staff work from the patient's existing doctor-led care
              plan. The overseeing physician's plan and accountability remain in place while the
              primary caregiver takes their break.
            </p>
            <div className="sole-check-list">
              <div>
                <span>
                  <C_lA name="check" />
                </span>
                <p>Existing doctor-led care plan remains the foundation.</p>
              </div>
              <div>
                <span>
                  <C_lA name="check" />
                </span>
                <p>Respite staff are briefed before stepping into care.</p>
              </div>
              <div>
                <span>
                  <C_lA name="check" />
                </span>
                <p>Caregiver well-being is considered part of the care picture.</p>
              </div>
              <div>
                <span>
                  <C_lA name="check" />
                </span>
                <p>Support can be temporary, recurring or adjusted over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sole-section sole-section--soft">
        <div className="sole-container">
          <div className="sole-section-head sole-section-head--center">
            <span className="sole-eyebrow">Who It's For</span>
            <h2>
              If You're Carrying the Care,<span>{" This Support Is For You."}</span>
            </h2>
            <p>
              Respite care can help families create breathing room without compromising the
              continuity of their loved one's care.
            </p>
          </div>
          <div className="sole-who-grid">
            {aA.map((e, t) => (
              <article className="sole-who-card" key={e.title}>
                <div className="sole-who-icon">
                  <C_lA name={e.icon} />
                </div>
                <span className="sole-who-number">{String(t + 1).padStart(2, `0`)}</span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sole-burnout">
        <div className="sole-container sole-burnout__inner">
          <div className="sole-burnout__icon">
            <C_lA name="heart" />
          </div>
          <div className="sole-burnout__content">
            <span>FOR THE PERSON BEHIND THE CARE</span>
            <h2>You deserve care too.</h2>
            <p>
              If you are exhausted, constantly worried, unable to attend to your own health or
              simply wondering how much longer you can keep going, asking for support is not a
              failure.
            </p>
          </div>
          <a href="#sole-cta" className="sole-burnout__link">
            Explore Respite Support
            <C_lA name="arrow" />
          </a>
        </div>
      </section>
      <section className="sole-trust">
        <div className="sole-container sole-trust__grid">
          <div className="sole-trust__seal">
            <C_lA name="shield" />
            <span>CLINICAL</span>
            <strong>CONTINUITY</strong>
          </div>
          <div className="sole-trust__content">
            <span className="sole-eyebrow sole-eyebrow--light">Trust & Credibility</span>
            <h2>
              Stepping Away Doesn't Mean<span>{" Stepping Down the Quality of Care."}</span>
            </h2>
            <p>
              Respite care in Pondicherry follows the same doctor-led clinical governance applied
              across Aureal Healthcare and the AUREAL program.
            </p>
            <p>
              Because respite staff work from the existing care plan rather than starting fresh,
              families get continuity rather than a disruptive handoff.
            </p>
            <div className="sole-trust-tags">
              <span>Doctor-Led Care</span>
              <span>Existing Care Plan</span>
              <span>Caregiver Support</span>
              <span>Continuity of Care</span>
            </div>
          </div>
        </div>
      </section>
      <section className="sole-areas">
        <div className="sole-container">
          <div className="sole-areas__inner">
            <div>
              <span className="sole-eyebrow">Local Support</span>
              <h2>
                Respite Care Across<span>{" Pondicherry"}</span>
              </h2>
              <p>Supporting family caregivers across Puducherry town and surrounding localities.</p>
            </div>
            <div className="sole-area-list">
              {cA.map((e) => (
                <span key={e}>
                  <C_lA name="check" />
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="sole-section sole-faq" id="sole-faq">
        <div className="sole-container sole-container--narrow">
          <div className="sole-section-head sole-section-head--center">
            <span className="sole-eyebrow">Frequently Asked Questions</span>
            <h2>
              Questions Family Caregivers<span>{" Often Ask"}</span>
            </h2>
          </div>
          <div className="sole-faq-list">
            {oA.map((t, r) => (
              <div className={`sole-faq-item ${e === r ? `is-open` : ``}`} key={t.q}>
                <button
                  type="button"
                  className="sole-faq-question"
                  onClick={() => n(r)}
                  aria-expanded={e === r}
                >
                  <span>{t.q}</span>
                  <i />
                </button>
                <div className="sole-faq-answer">
                  <div>
                    <p>{t.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sole-section sole-section--soft">
        <div className="sole-container">
          <div className="sole-section-head sole-section-head--center">
            <span className="sole-eyebrow">Explore More</span>
            <h2>
              Related<span>{" Homecare Services"}</span>
            </h2>
          </div>
          <div className="sole-related-grid">
            {sA.map((e) => (
              <a href={e.link} className="sole-related-card" key={e.title}>
                <span className="sole-related-arrow">
                  <C_lA name="arrow" />
                </span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                <span className="sole-related-link">
                  Explore Service
                  <C_lA name="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="sole-cta" id="sole-cta">
        <div className="sole-cta__circle sole-cta__circle--one" />
        <div className="sole-cta__circle sole-cta__circle--two" />
        <div className="sole-container sole-cta__inner">
          <span className="sole-cta__label">Aureal Healthcare · AUREAL</span>
          <h2>
            You Don't Have to<span>{" Carry It All Alone."}</span>
          </h2>
          <p>
            Arrange doctor-led respite care in Pondicherry and give yourself the space to rest,
            recover and take care of what you need — without leaving your loved one's care behind.
          </p>
          <div className="sole-cta__actions">
            <a href="tel:+919944969049" className="sole-btn sole-btn--gold">
              <C_lA name="phone" />
              Call Our Care Team
            </a>
            <a href="#sole-faq" className="sole-btn sole-btn--outline">
              Read FAQs
            </a>
          </div>
          <div className="sole-cta__bottom">
            <span>
              <C_lA name="check" />
              Flexible respite
            </span>
            <span>
              <C_lA name="check" />
              Doctor-led continuity
            </span>
            <span>
              <C_lA name="check" />
              Pondicherry support
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SoleCaregiver;
