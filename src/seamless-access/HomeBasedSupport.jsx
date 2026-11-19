import { goTo } from "../utils/goTo";
import React, { useState } from "react";
import "./HomeBasedSupport.css";

const homeServices = [
  {
    icon: "👩‍⚕️",
    title: "Trained Home Nurses & Attendants",
    desc: "Day-to-day hands-on care including bathing, mobility assistance, medication reminders, and general support delivered by trained staff across Pondicherry.",
    tag: "Daily Home Support",
    highlight: true,
  },
  {
    icon: "🛏️",
    title: "Bedridden & High-Dependency Patient Care",
    desc: "Positioning, pressure-area care, hygiene support, and daily assistance for patients who are bedridden or have significant mobility limitations.",
    tag: "Bedridden Patient Care",
    highlight: true,
  },
  {
    icon: "📋",
    title: "Physician-Designed Care Protocols",
    desc: "Every nurse or attendant follows a plan designed by the overseeing physician, with clear guidance on what to monitor and how care should be delivered.",
    tag: "Doctor-Led Care",
  },
  {
    icon: "🚨",
    title: "Defined Escalation Triggers",
    desc: "Staff are trained to identify specific warning signs that require escalation to the physician or care coordinator rather than waiting for the next scheduled review.",
    tag: "Clinical Escalation",
    highlight: true,
  },
  {
    icon: "⏱️",
    title: "Flexible Visit Duration",
    desc: "Home nursing support can range from a few hours a day to round-the-clock care depending on the patient's needs and physician-guided care plan.",
    tag: "Flexible Support",
  },
  {
    icon: "🔗",
    title: "Ongoing Care Continuity",
    desc: "Daily home support remains connected to the wider doctor-led care structure, helping families maintain consistency throughout the patient's recovery and ongoing care.",
    tag: "Connected Care",
  },
];

const homeFaqs = [
  {
    q: "What does home nursing care in Puducherry typically include?",
    a: "It typically includes hands-on daily support such as bathing, mobility assistance, medication reminders, wound care, and monitoring, delivered by trained nurses or attendants.",
  },
  {
    q: "Is home nursing care supervised by a doctor?",
    a: "Yes — at Aureal Healthcare, every nurse or attendant executes a plan designed by the overseeing physician, with clear escalation triggers rather than operating independently.",
  },
  {
    q: "Can home based support cover a bedridden patient?",
    a: "Yes — care for bedridden patients includes positioning, pressure-area management, hygiene support, and daily assistance as part of the structured home based support plan.",
  },
  {
    q: "How many hours of daily support are available?",
    a: "Support ranges from a few hours a day to round-the-clock care, depending on the patient's needs and the care plan set with the family.",
  },
  {
    q: "Which parts of Pondicherry are covered for home nursing care?",
    a: "Coverage spans Puducherry town and surrounding areas including White Town, Muthialpet, Lawspet, Reddiarpalayam, Ozhukarai, and Ariyankuppam.",
  },
  {
    q: "What happens if the nurse notices a concerning change in the patient?",
    a: "Staff are trained on specific escalation triggers and will raise concerning changes to the physician or care coordinator promptly, rather than waiting for the next scheduled review.",
  },
];

export default function HomeBasedSupport() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="hbs-page">
      {/* HERO SECTION */}
      <section className="hbs-hero">
        <div className="hbs-hero-bg-pattern"></div>

        <div className="hbs-container">
          <div className="hbs-hero-grid">
            <div className="hbs-hero-left">
              <div className="hbs-breadcrumb">
                Seamless Access /{" "}
                <span>Home Nursing Care Pondicherry</span>
              </div>

              <div className="hbs-pill">
                <span className="hbs-pulse-dot"></span>
                DOCTOR-LED • HOME NURSING • PONDICHERRY
              </div>

              <h1>
                Doctor-Led Home Nursing and Daily Support Across Pondicherry
              </h1>

              <p className="hbs-hero-sub">
                Trained nurses and attendants delivering day-to-day home based
                support across Pondicherry — executing a physician-designed
                care plan, not operating as an independent, unsupervised
                service.
              </p>

              <div className="hbs-quick-answer">
                <div className="hbs-quick-label">⚡ QUICK ANSWER</div>

                <p>
                  Aureal Healthcare provides home nursing care and daily
                  home based support across Pondicherry — trained nurses and
                  attendants deliver hands-on care for elderly, bedridden, and
                  recovering patients, executing a plan designed and reviewed
                  by the overseeing physician rather than working without
                  clinical direction.
                </p>
              </div>

              <div className="hbs-hero-actions">
  <button
    type="button"
    className="hbs-btn hbs-btn-primary"
    onClick={() => {
      goTo("/Appointment");
      window.setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }, 50);
    }}
  >
    Book Consultation
  </button>

  <a
    href="tel:+919944969049"
    className="hbs-btn hbs-btn-secondary"
  >
    Talk to Care Coordinator
  </a>
</div>
              
            </div>

            <div className="hbs-hero-right">
              <div className="hbs-hero-visual">
                <img
                  className="hbs-main-img"
                  src="/homel1.jpg"
                  alt="Doctor-led home nursing care in Pondicherry"
                />

                <div className="hbs-float-card hbs-float-top">
                  <div className="hbs-f-icon">🏠</div>

                  <div>
                    <b>Home Nursing Support</b>
                    <p>Doctor-led • At your home</p>
                  </div>
                </div>

                <div className="hbs-float-card hbs-float-bottom">
                  <img
                    src="/homel3.jpg"
                    alt="Home nursing support Pondicherry"
                  />

                  <div>
                    <b>Daily Patient Support</b>
                    <p>Care • Monitoring • Assistance</p>

                    <div className="hbs-progress-bar">
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="hbs-section hbs-overview">
        <div className="hbs-container">
          <div className="hbs-grid-2">
            <div className="hbs-overview-media">
              <img
                className="hbs-ov-img-1"
                src="/homel2.jpg"
                alt="Home nursing care for elderly patients"
              />

              

              <div className="hbs-ov-badge">
                <h4>Structured Daily Care</h4>
                <p>Connected to physician-designed protocols</p>
              </div>
            </div>

            <div>
              <span className="hbs-eyebrow">OVERVIEW</span>

              <h2>
                Home nursing care in Puducherry with clinical structure behind
                daily support.
              </h2>

              <p className="hbs-p">
                “Home nursing care Puducherry” is one of the most searched
                terms among families arranging support for an elderly or
                recovering relative — and it typically means day-to-day,
                hands-on help: bathing, mobility assistance, medication
                reminders, wound care, and general monitoring.
              </p>

              <p className="hbs-p">
                At Aureal Healthcare, this daily support is never delivered
                as a standalone, unsupervised service — every nurse or
                attendant executes a plan designed by the overseeing
                physician, with clear protocols for what to monitor and when
                to escalate a concern.
              </p>

              <div className="hbs-quote">
                Daily caregivers do not operate in isolation — there is a
                clinical structure behind every visit and a defined path for
                escalating anything that looks wrong.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="hbs-section hbs-included">
        <div className="hbs-container">
          <div className="hbs-section-head">
            <span className="hbs-eyebrow">WHAT'S INCLUDED</span>

            <h2>
              Home nursing and daily support designed around patient needs
            </h2>
          </div>

          <div className="hbs-included-grid">
            {homeServices.map((item, index) => (
              <div
                key={index}
                className={`hbs-inc-card ${
                  item.highlight ? "hbs-highlight" : ""
                }`}
              >
                <div className="hbs-inc-top">
                  <div className="hbs-inc-icon">{item.icon}</div>

                  <span className="hbs-inc-tag">{item.tag}</span>
                </div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

                <div className="hbs-inc-num">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="hbs-section hbs-how">
        <div className="hbs-container">
          <div className="hbs-section-head center">
            <span className="hbs-eyebrow">HOW IT WORKS</span>

            <h2>From needs assessment to ongoing daily care</h2>
          </div>

          <div className="hbs-steps-wrap">
            <div className="hbs-steps-line"></div>

            <div className="hbs-steps">
              <div className="hbs-step">
                <div className="hbs-step-circle">01</div>

                <h4>Needs Assessment</h4>

                <p>
                  The care team, with physician input for complex cases,
                  assesses the patient's daily support needs.
                </p>
              </div>

              <div className="hbs-step">
                <div className="hbs-step-circle">02</div>

                <h4>Staff Matching</h4>

                <p>
                  A trained nurse or attendant is matched to the patient based
                  on the required skill level and care intensity.
                </p>
              </div>

              <div className="hbs-step">
                <div className="hbs-step-circle">03</div>

                <h4>Protocol-Guided Daily Care</h4>

                <p>
                  Day-to-day care is delivered according to a plan with clear
                  monitoring and escalation guidance.
                </p>
              </div>

              <div className="hbs-step">
                <div className="hbs-step-circle">04</div>

                <h4>Ongoing Review</h4>

                <p>
                  The overseeing physician or care coordinator reviews how the
                  daily support is going and adjusts the plan as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MATTERS IN PONDICHERRY */}
      <section className="hbs-why-dark">
        <div className="hbs-container">
          <div className="hbs-why-grid">
            <div className="hbs-why-left">
              <span className="hbs-eyebrow hbs-light">
                WHY THIS MATTERS IN PONDICHERRY
              </span>

              <h2>
                Daily home support with a defined clinical structure behind it.
              </h2>

              <p>
                Independent home nursing arrangements across Pondicherry can
                vary significantly in how much clinical structure sits behind
                the day-to-day caregiver — some are well-supervised, others
                operate with little defined protocol or escalation guidance.
                This variability is common across the wider home healthcare
                landscape in Puducherry.
              </p>

              <p>
                Aureal Healthcare's home based support model exists to
                provide consistent structure — every nurse or attendant works
                from a physician-designed plan with clear escalation triggers,
                not ad hoc daily judgment alone.
              </p>

              <div className="hbs-why-points">
                <div className="hbs-bad">
                  <span>✕</span>
                  Independent support: limited clinical structure or escalation
                  guidance
                </div>

                <div className="hbs-good">
                  <span>✓</span>
                  Aureal Healthcare: physician-designed plan with defined
                  escalation triggers
                </div>
              </div>

              <div className="hbs-convo-queries">
                <p>People also ask:</p>

                <span>
                  is home nursing care available in Pondicherry?
                </span>

                <span>
                  how does Aureal Healthcare provide home based support in
                  Puducherry?
                </span>

                <span>
                  what is included in daily home nursing care?
                </span>
              </div>
            </div>

            <div className="hbs-why-right">
              <img
                src="/homel4.jpg"
                alt="Doctor-led home nursing and patient support"
              />

              <div className="hbs-why-card">
                <h4>Doctor-Led Difference</h4>

                <p>
                  Every nurse and attendant works from clear,
                  physician-set protocols with a defined escalation pathway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR + TRUST */}
      <section className="hbs-section hbs-who-trust">
        <div className="hbs-container">
          <div className="hbs-grid-2">
            <div>
              <span className="hbs-eyebrow">
                THE AUREAL HEALTHCARE DOCTOR-LED DIFFERENCE
              </span>

              <h2 className="hbs-h2">
                Home based support works best when daily care stays connected
                to clinical oversight.
              </h2>

              <p className="hbs-p">
                Home based support sits at the point where a physician's plan
                meets daily, hands-on reality — which is why Aureal Healthcare keeps every nurse and attendant working from clear,
                physician-set protocols rather than independent judgment.
              </p>

              <div className="hbs-trust-box">
                <h4>Trust & Credibility</h4>

                <p>
                  Home based support follows the same doctor-led clinical
                  governance applied across every Aureal Healthcare program. Because staff work from physician-set
                  protocols with clear escalation triggers, families get
                  consistent, structured daily care rather than variable,
                  ad hoc support.
                </p>

                <div className="hbs-trust-list">
                  <div>
                    <span>✓</span>
                    Physician-designed protocols guide daily care
                  </div>

                  <div>
                    <span>✓</span>
                    Clear escalation triggers for concerning changes
                  </div>

                  <div>
                    <span>✓</span>
                    Consistent daily support instead of isolated attendance
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="hbs-who-title">WHO IT'S FOR</div>

              <div className="hbs-who-grid">
                <div className="hbs-who-card">
                  <span>👴</span>

                  <p>
                    Families needing daily hands-on support for an elderly
                    parent living at home in Pondicherry
                  </p>
                </div>

                <div className="hbs-who-card">
                  <span>🛏️</span>

                  <p>
                    Bedridden or high-dependency patients requiring
                    positioning, hygiene, and pressure-area care
                  </p>
                </div>

                <div className="hbs-who-card">
                  <span>🏠</span>

                  <p>
                    Patients recovering at home who need consistent daily
                    monitoring alongside medical oversight
                  </p>
                </div>

                <div className="hbs-who-card">
                  <span>👨‍👩‍👧</span>

                  <p>
                    Families who want the reassurance of a clinical structure
                    behind their daily caregiver, not just an unsupervised
                    attendant
                  </p>
                </div>
              </div>

              <div className="hbs-related">
                <h4>Related Aureal Healthcare Services</h4>

                <div className="hbs-related-links">
                  <a href="/PatientCoordination">
                    Patient Coordination & Cashless Treatment →
                  </a>

                  <a href="/EmergencySupport">
                    24/7 Emergency Support & Teleconsultation →
                  </a>

                  <a href="/PersonCentricRehab">Person-Centric Rehab →</a>

                  <a href="/ContinuumofCare">Continuum of Care →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="hbs-section hbs-faq">
        <div className="hbs-container">
          <div className="hbs-section-head center">
            <span className="hbs-eyebrow">FAQ</span>

            <h2>Home Nursing Care — Common Questions</h2>
          </div>

          <div className="hbs-faq-list">
            {homeFaqs.map((faq, index) => (
              <div
                key={index}
                className={`hbs-faq-item ${
                  openFaq === index ? "hbs-open" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="hbs-faq-q"
                >
                  <span>{faq.q}</span>

                  <span className="hbs-faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="hbs-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="hbs-cta">
        <div className="hbs-container hbs-cta-inner">
          <div>
            <h2>
              Arrange doctor-led home nursing and daily support in Pondicherry
            </h2>

            <p>
              Structured home nursing, daily patient support, and physician-led
              care — delivered at home across Pondicherry.
            </p>
          </div>

          <div className="hbs-cta-actions">
  <button
    type="button"
    className="hbs-btn hbs-btn-light"
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Book Consultation
  </button>

  <a
    href="tel:+919944969049"
    className="hbs-btn hbs-btn-outline"
  >
    Talk to Care Coordinator
  </a>
</div>
        </div>
      </section>
    </div>
  );
}