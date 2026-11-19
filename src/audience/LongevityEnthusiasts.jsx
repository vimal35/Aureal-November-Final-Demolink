import React, { useState } from "react";
import "./LongevityEnthusiasts.css";

const Nk = [
  {
    icon: `assessment`,
    title: `Doctor-Led Health & Risk Assessment`,
    text: `A physician reviews your health history, lifestyle patterns, current concerns, and diagnostic results to identify meaningful risk areas.`,
  },
  {
    icon: `diagnostics`,
    title: `Root-Cause Diagnostic Screening`,
    text: `Targeted screening goes beyond a routine checkup to help identify underlying drivers of chronic-condition risk.`,
  },
  {
    icon: `plan`,
    title: `Personalized Preventive Protocol`,
    text: `Your protocol is built around nutrition, activity, recovery, monitoring, and your individual health profile — never a generic template.`,
  },
  {
    icon: `monitoring`,
    title: `Ongoing Physician Monitoring`,
    text: `Progress is reviewed over time using relevant health data, with your physician adjusting the plan as needed.`,
  },
  {
    icon: `coordination`,
    title: `Chronic Care Coordination`,
    text: `For people already managing a condition, the wellness protocol is aligned with existing doctor-led treatment and follow-up.`,
  },
];

const Pk = [
  {
    title: `Assess`,
    text: `Your physician reviews your history, lifestyle, goals, and relevant diagnostic information.`,
  },
  {
    title: `Understand`,
    text: `Key health risks and root contributors are identified through clinical review and targeted screening.`,
  },
  {
    title: `Personalize`,
    text: `A practical, physician-guided wellness protocol is designed around your needs and priorities.`,
  },
  {
    title: `Evolve`,
    text: `Your progress is reviewed periodically and the protocol is refined using your real results.`,
  },
];

const Fk = [
  `People with a family history of diabetes, hypertension, cardiovascular disease, or other chronic conditions.`,
  `Individuals who want a structured preventive plan instead of waiting for symptoms or a future diagnosis.`,
  `Patients already managing a chronic condition who want coordinated, root-cause-focused support alongside treatment.`,
  `People in Pondicherry who have tried generic diets, fitness plans, or wellness advice without measurable progress.`,
];

const Ik = [
  {
    q: `What is a doctor-led wellness and longevity program?`,
    a: `It is a personalized preventive health program in which a physician reviews your diagnostic data, lifestyle patterns, and health risks to create an individualized protocol focused on long-term health and chronic-condition prevention.`,
  },
  {
    q: `How is a longevity program different from a routine health checkup?`,
    a: `A routine health checkup provides a snapshot of your current health. A wellness and longevity program uses that information as a starting point for an ongoing, physician-guided preventive plan with regular review and adjustments.`,
  },
  {
    q: `Can this program support an existing chronic condition?`,
    a: `Yes. For people already managing a chronic condition, the program can be coordinated with their existing doctor-led care plan. It is designed to complement appropriate medical management, not replace it.`,
  },
  {
    q: `Does the program include nutrition and activity guidance?`,
    a: `Yes. Your personalized protocol may address nutrition, activity, lifestyle routines, and monitoring based on your individual risk profile and physician review.`,
  },
  {
    q: `How is progress tracked over time?`,
    a: `Progress is reviewed periodically through relevant health data, clinical follow-up, and measurable lifestyle or diagnostic markers. The physician can adjust the protocol according to your results.`,
  },
  {
    q: `Is the wellness and longevity program available across Pondicherry?`,
    a: `Yes. Aureal Healthcare offers doctor-led wellness and longevity support across Puducherry town and surrounding locations, including White Town, Lawspet, Muthialpet, Reddiarpalayam, and Ozhukarai.`,
  },
];

const Lk = [
  {
    name: `Advanced Diagnostics`,
    link: `/AdvancedDiagnostics`,
  },
  {
    name: `Multi-Specialty Consultations`,
    link: `/Multi-Specialty-Consultations`,
  },
  {
    name: `Wellness & Preventive Care`,
    link: `/WellnessPreventiveCare`,
  },
  {
    name: `Geriatric People`,
    link: `/GeriatricPeople`,
  },
];

const Rk = [
  `Puducherry Town`,
  `White Town`,
  `Lawspet`,
  `Muthialpet`,
  `Reddiarpalayam`,
  `Ozhukarai`,
  `Ariyankuppam`,
];

const C_zk = ({ name: e }) => {
  let t = {
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.8`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  };
  switch (e) {
    case `assessment`:
      return (
        <svg {...t}>
          <rect x="5" y="3.5" width="14" height="17" rx="2.2" />
          <path d="M9 3.5V2.5h6v1" />
          <path d="M8.5 13h2l1.4-3.1 2.1 5 1.3-2.2h1.9" />
        </svg>
      );
    case `diagnostics`:
      return (
        <svg {...t}>
          <circle cx="10.5" cy="10.5" r="5.5" />
          <path d="m15 15 4.5 4.5" />
          <path d="M10.5 8v5" />
          <path d="M8 10.5h5" />
        </svg>
      );
    case `plan`:
      return (
        <svg {...t}>
          <path d="M6 3.5h9l3 3v14H6z" />
          <path d="M15 3.5v3h3" />
          <path d="m9 13 1.7 1.7 4-4" />
        </svg>
      );
    case `monitoring`:
      return (
        <svg {...t}>
          <path d="M4 18V9" />
          <path d="M10 18V5" />
          <path d="M16 18v-7" />
          <path d="M22 18V3" />
          <path d="M3 20.5h19" />
        </svg>
      );
    case `coordination`:
      return (
        <svg {...t}>
          <circle cx="12" cy="6" r="3" />
          <path d="M5.5 20v-1.5A4.5 4.5 0 0 1 10 14h4a4.5 4.5 0 0 1 4.5 4.5V20" />
          <path d="M18.5 8.5a3 3 0 0 1 0 5.8" />
          <path d="M20.4 15.6A3.8 3.8 0 0 1 22 18.7V20" />
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
    case `heart`:
      return (
        <svg {...t}>
          <path d="M12 20.6S3.6 15.5 2.4 11A5.2 5.2 0 0 1 12 6.6a5.2 5.2 0 0 1 9.6 4.4c-1.2 4.5-9.6 9.6-9.6 9.6z" />
          <path d="M7 12h2.4l1.4-2.5 2 5 1.5-2.5H17" />
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

const LongevityEnthusiasts = () => {
  let [e, t] = useState(0);
  return (
    <main className="longevity-page">
      <section className="longevity-hero">
        <div className="longevity-container longevity-hero__grid">
          <div className="longevity-hero__content">
            <nav className="longevity-breadcrumb" aria-label="Breadcrumb">
              <span>Who We Serve</span>
              <span>/</span>
              <strong>Longevity Enthusiasts</strong>
            </nav>
            <span className="longevity-hero__badge">
              <span />
              Preventive Health • Physician Guided
            </span>
            <h1>
              Personalized, Doctor-Led <em>Wellness and Longevity Programs</em>
              {" in Pondicherry"}
            </h1>
            <p className="longevity-hero__lead">
              Advanced, root-cause-focused programs designed to help you understand health risks
              early, manage chronic-condition risk, and build a stronger foundation for healthy
              ageing at every stage of life.
            </p>
            <div className="longevity-hero__actions">
              <a href="#longevity-cta" className="longevity-btn longevity-btn--gold">
                {"Start Your Wellness Journey "}
                <C_zk name="arrow" />
              </a>
              <a href="#how-it-works" className="longevity-btn longevity-btn--outline">
                Explore How It Works
              </a>
            </div>
            <div className="longevity-hero__stats">
              <div>
                <strong>100%</strong>
                <span>Physician-Led Protocols</span>
              </div>
              <div>
                <strong>1:1</strong>
                <span>Personalized Health Planning</span>
              </div>
              <div>
                <strong>7+</strong>
                <span>Areas Across Pondicherry</span>
              </div>
            </div>
          </div>
          <div className="longevity-hero__media">
            <div className="longevity-hero__image-wrap">
              <img
                src="/Longevity1.jpg"
                alt="Doctor discussing a personalized wellness and longevity plan"
                loading="eager"
              />
            </div>
            <div className="longevity-hero__floating-card">
              <span className="longevity-icon-box">
                <C_zk name="heart" />
              </span>
              <div>
                <strong>Health Before Illness</strong>
                <p>Preventive care built around your data.</p>
              </div>
            </div>
            <div className="longevity-hero__floating-pill">
              <C_zk name="shield" />
              Doctor-Led Care
            </div>
          </div>
        </div>
      </section>
      <section className="longevity-quick longevity-container">
        <div className="longevity-quick__card">
          <span>Quick Answer</span>
          <p>
            Aureal Healthcare's wellness and longevity program in Pondicherry is a doctor-led,
            personalized preventive health service. It combines diagnostic screening, root-cause
            assessment, and an individualized protocol designed to support long-term health — not
            simply treat illness after it appears.
          </p>
        </div>
      </section>
      <section className="longevity-section">
        <div className="longevity-container longevity-overview">
          <div className="longevity-overview__content">
            <span className="longevity-eyebrow">Overview</span>
            <h2>
              Move From Reactive Care to <em>Proactive, Informed Health</em>
            </h2>
            <p>
              Most healthcare begins after a problem appears. Our wellness and longevity program in
              Pondicherry takes a different approach: identifying risk factors for diabetes,
              hypertension, cardiovascular disease, and other chronic conditions early — then
              creating a practical, physician-guided plan around them.
            </p>
            <p>
              This is not generic fitness advice or a one-time diagnostic report. It is a clinically
              grounded program that uses diagnostic data and physician judgment to help you make
              more informed decisions about your long-term health.
            </p>
            <p>
              Whether you want to optimize your wellbeing or better support an existing
              chronic-condition care plan, your protocol is designed around your specific health
              profile, priorities, and progress.
            </p>
            <div className="longevity-area-box">
              <strong>Available across Pondicherry:</strong>
              <div>
                {Rk.map((e) => (
                  <span key={e}>{e}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="longevity-overview__media">
            <img
              src="/Longevity2.jpg"
              alt="Preventive health consultation and wellness planning"
              loading="lazy"
            />
            <div className="longevity-overview__badge">
              <strong>01</strong>
              <span>
                Your data.
                <br />
                Your doctor.
                <br />
                Your plan.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="longevity-section longevity-section--tint">
        <div className="longevity-container">
          <header className="longevity-heading longevity-heading--center">
            <span className="longevity-eyebrow">What's Included</span>
            <h2>
              More Than a Preventive Health Checkup in <em>Pondicherry</em>
            </h2>
            <p>
              A structured wellness journey that turns health information into an actionable
              physician-guided plan.
            </p>
          </header>
          <div className="longevity-included-grid">
            {Nk.map((e, t) => (
              <article className="longevity-included-card" key={e.title}>
                <span className="longevity-included-card__number">
                  {String(t + 1).padStart(2, `0`)}
                </span>
                <span className="longevity-included-card__icon">
                  <C_zk name={e.icon} />
                </span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="longevity-section" id="how-it-works">
        <div className="longevity-container">
          <header className="longevity-heading longevity-heading--center">
            <span className="longevity-eyebrow">How It Works</span>
            <h2>
              {"A Smarter Path to "}
              <em>Healthy Ageing</em>
            </h2>
          </header>
          <div className="longevity-steps">
            {Pk.map((e, t) => (
              <article className="longevity-step" key={e.title}>
                <span>{t + 1}</span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="longevity-dark-band">
        <div className="longevity-container longevity-dark-band__grid">
          <div>
            <span className="longevity-eyebrow longevity-eyebrow--light">
              Why This Matters in Pondicherry
            </span>
            <h2>
              Wellness Advice Is Easy to Find. <em>Clinical Direction Is Different.</em>
            </h2>
            <blockquote>
              “A longevity plan should be based on your health data and medical needs — not a
              generic template.”
            </blockquote>
          </div>
          <div className="longevity-dark-band__text">
            <p>
              Much of the wellness content available today is broad lifestyle advice with little
              personalization or clinical context. On the other hand, many diagnostic checkups end
              with a report but no structured plan for what happens next.
            </p>
            <p>
              Aureal Healthcare bridges that gap by combining diagnostic assessment with
              physician-designed preventive protocols, so you receive more than a list of results or
              one-size-fits-all recommendations.
            </p>
          </div>
        </div>
      </section>
      <section className="longevity-section">
        <div className="longevity-container longevity-difference">
          <div className="longevity-difference__media">
            <img
              src="/Longevity3.jpg"
              alt="Physician reviewing health diagnostics for preventive care"
              loading="lazy"
            />
            <div>
              <C_zk name="shield" />
              <span>Doctor-Led Clinical Governance</span>
            </div>
          </div>
          <div className="longevity-difference__content">
            <span className="longevity-eyebrow">The Aureal Healthcare Difference</span>
            <h2>
              A Physician Interprets the Data. <em>Your Plan Follows.</em>
            </h2>
            <p>
              A wellness and longevity program is only as useful as the clinical judgment behind it.
              Our model keeps a physician involved in understanding your diagnostic findings,
              identifying risks, and designing the protocol.
            </p>
            <p>
              This physician-led approach matters especially when health risks, medications, chronic
              conditions, or lifestyle changes need to be considered together.
            </p>
            <ul>
              <li>
                <span>
                  <C_zk name="check" />
                </span>
                Personalized recommendations based on your actual health data
              </li>
              <li>
                <span>
                  <C_zk name="check" />
                </span>
                Ongoing review instead of a one-time wellness report
              </li>
              <li>
                <span>
                  <C_zk name="check" />
                </span>
                Better alignment with existing medical and chronic-care needs
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="longevity-section longevity-section--tint">
        <div className="longevity-container">
          <header className="longevity-heading longevity-heading--center">
            <span className="longevity-eyebrow">Who It's For</span>
            <h2>
              {"For People Who Want to "}
              <em>Invest in Their Healthspan</em>
            </h2>
          </header>
          <div className="longevity-who-grid">
            {Fk.map((e, t) => (
              <article className="longevity-who-card" key={e}>
                <strong>{String(t + 1).padStart(2, `0`)}</strong>
                <p>{e}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="longevity-trust">
        <div className="longevity-container longevity-trust__inner">
          <span className="longevity-trust__icon">
            <C_zk name="shield" />
          </span>
          <div>
            <span className="longevity-eyebrow longevity-eyebrow--light">Trust & Credibility</span>
            <h2>Personalized Care, Backed by Clinical Governance</h2>
            <p>
              Wellness and longevity protocols are developed under the same doctor-led clinical
              governance used across Aureal Healthcare and AUREAL programs in Pondicherry.
            </p>
            <p>
              Because your protocol is grounded in diagnostic information and reviewed by a
              physician over time, you receive a genuinely individualized plan instead of
              generalized wellness advice.
            </p>
            <div className="longevity-trust__tags">
              <span>Doctor-Led Review</span>
              <span>Data-Informed Protocols</span>
              <span>Personalized Preventive Care</span>
            </div>
          </div>
        </div>
      </section>
      <section className="longevity-section" id="longevity-faq">
        <div className="longevity-container longevity-container--narrow">
          <header className="longevity-heading longevity-heading--center">
            <span className="longevity-eyebrow">FAQ</span>
            <h2>
              {"Frequently Asked "}
              <em>Questions</em>
            </h2>
          </header>
          <div className="longevity-faq">
            {Ik.map((n, r) => (
              <div className={`longevity-faq__item ${e === r ? `is-open` : ``}`} key={n.q}>
                <button onClick={() => t(e === r ? -1 : r)} aria-expanded={e === r}>
                  <span>{n.q}</span>
                  <i aria-hidden="true" />
                </button>
                <div className="longevity-faq__answer">
                  <div>
                    <p>{n.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="longevity-section longevity-section--tint">
        <div className="longevity-container">
          <header className="longevity-heading longevity-heading--center">
            <span className="longevity-eyebrow">Explore More</span>
            <h2>
              {"Related Aureal Healthcare "}
              <em>Services</em>
            </h2>
          </header>
          <div className="longevity-related-grid">
            {Lk.map((e) => (
              <a href={e.link} key={e.name}>
                <span>{e.name}</span>
                <i>
                  <C_zk name="arrow" />
                </i>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="longevity-cta" id="longevity-cta">
        <div className="longevity-container longevity-cta__inner">
          <span>YOUR LONG-TERM HEALTH, DESIGNED WITH INTENTION</span>
          <h2>Start a personalized wellness and longevity program in Pondicherry.</h2>
          <p>
            Build a doctor-led preventive health plan around your actual health data, goals, and
            future wellbeing.
          </p>
          <div className="longevity-cta__actions">
            <a href="tel:+919944969049" className="longevity-btn longevity-btn--gold">
              <C_zk name="phone" />
              Speak With Our Care Team
            </a>
            <a href="#longevity-faq" className="longevity-btn longevity-btn--outline">
              Read FAQs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LongevityEnthusiasts;
