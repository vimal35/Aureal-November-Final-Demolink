import { goTo } from "../utils/goTo";
import React, { useState } from "react";
import "./PatientCoordination.css";

const coordinationServices = [
  {
    icon: "👤",
    title: "Named Care Coordinator",
    desc: "Every patient in Pondicherry is assigned a single, named point of contact for scheduling and logistics, not a rotating call center.",
    tag: "Single Point",
    highlight: true,
  },
  {
    icon: "💳",
    title: "Cashless Treatment Support",
    desc: "Where applicable, the coordination team assists families with cashless treatment documentation and processes.",
    tag: "Cashless Support",
    highlight: true,
  },
  {
    icon: "📄",
    title: "Insurance & Paperwork Assistance",
    desc: "Documentation for insurance claims and reimbursement is supported by the coordination team rather than left entirely to the family.",
    tag: "Paperwork Support",
  },
  {
    icon: "📅",
    title: "Multi-Provider Scheduling",
    desc: "Doctor visits, nursing, therapy, and diagnostics are scheduled through one coordinator, helping avoid conflicting or missed appointments.",
    tag: "Coordinated Care",
  },
  {
    icon: "💰",
    title: "Transparent Billing",
    desc: "Families receive clear, itemized information about costs and billing for the services provided.",
    tag: "Clear Billing",
    highlight: true,
  },
];

const coordinationFaqs = [
  {
    q: "Is cashless treatment available for home care in Pondicherry?",
    a: "Where applicable, Aureal Healthcare's coordination team assists families with cashless treatment documentation and processes — ask your care coordinator to confirm eligibility and requirements for your specific policy.",
  },
  {
    q: "Do I get a single point of contact for scheduling?",
    a: "Yes — every patient is assigned a named care coordinator who manages scheduling for all providers involved, rather than a rotating call center.",
  },
  {
    q: "Who handles insurance paperwork for home care patients?",
    a: "The care coordination team supports families through insurance and reimbursement documentation, working alongside — but separate from — the clinical care plan.",
  },
  {
    q: "Does the coordinator make clinical decisions?",
    a: "No — the coordinator manages logistics, scheduling, and paperwork; clinical decisions remain the responsibility of the overseeing physician.",
  },
  {
    q: "How is billing handled?",
    a: "Families receive clear, itemized billing information for the services provided, coordinated through the named care coordinator.",
  },
  {
    q: "Is patient coordination available across all of Pondicherry?",
    a: "Yes — coordination support is available for patients across Puducherry town and surrounding areas.",
  },
];

export default function PatientCoordination() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="pc-page">
      {/* HERO SECTION */}
      <section className="pc-hero">
        <div className="pc-hero-bg-pattern"></div>

        <div className="pc-container">
          <div className="pc-hero-grid">
            <div className="pc-hero-left">
              <div className="pc-breadcrumb">
                Seamless Access /{" "}
                <span>Patient Coordination Pondicherry</span>
              </div>

              <div className="pc-pill">
                <span className="pc-pulse-dot"></span>
                DEDICATED COORDINATOR • DOCTOR-LED • PONDICHERRY
              </div>

              <h1>
                Dedicated Patient Coordination and Cashless Treatment Support
                in Pondicherry
              </h1>

              <p className="pc-hero-sub">
                A single point of contact manages scheduling, paperwork, and
                cashless treatment coordination across Pondicherry — so
                families can focus on the patient, not logistics.
              </p>

              <div className="pc-quick-answer">
                <div className="pc-quick-label">⚡ QUICK ANSWER</div>

                <p>
                  Aureal Healthcare provides dedicated patient coordination
                  in Pondicherry, including cashless treatment support where
                  applicable — a named care coordinator manages scheduling,
                  documentation, and insurance-related paperwork so families
                  are not left managing logistics alongside a medical crisis.
                </p>
              </div>

              <div className="pc-hero-actions">
  <button
    className="pc-btn pc-btn-primary"
    onClick={() => {
      goTo("/Appointment");
    }}
  >
    Get a Coordinator
  </button>

  <button
    className="pc-btn pc-btn-secondary"
    onClick={() => {
      window.location.href = "tel:+919944969049";
    }}
  >
    Talk to Our Team
  </button>
</div>

              
            </div>

            <div className="pc-hero-right">
              <div className="pc-hero-visual">
                <img
                  className="pc-main-img"
                  src="/support1.jpg"
                  alt="Patient coordination and cashless treatment in Pondicherry"
                />

                <div className="pc-float-card pc-float-top">
                  <div className="pc-f-icon">🤝</div>

                  <div>
                    <b>Dedicated Coordinator</b>
                    <p>One point of contact • Complete care journey</p>
                  </div>
                </div>

                <div className="pc-float-card pc-float-bottom">
                  <img
                    src="/support2.jpg"
                    alt="Insurance and paperwork assistance"
                  />

                  <div>
                    <b>Cashless Treatment Support</b>
                    <p>Insurance + documentation assistance</p>

                    <div className="pc-progress-bar">
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
      <section className="pc-section pc-overview">
        <div className="pc-container">
          <div className="pc-grid-2">
            <div className="pc-overview-media">
              <img
                className="pc-ov-img-1"
                src="/support3.jpg"
                alt="Home healthcare coordination in Pondicherry"
              />

             

              <div className="pc-ov-badge">
                <h4>Coordination is Care</h4>
                <p>Connected to your doctor-led clinical plan</p>
              </div>
            </div>

            <div>
              <span className="pc-eyebrow">OVERVIEW</span>

              <h2>
                Home healthcare involves more than clinical visits.
              </h2>

              <p className="pc-p">
                Home healthcare involves more than clinical visits —
                scheduling multiple providers, tracking documentation, and in
                many cases navigating insurance or cashless treatment
                paperwork. Left entirely to the family, this logistical burden
                often falls on whoever is least equipped to manage it during
                an already stressful time.
              </p>

              <p className="pc-p">
                Aureal Healthcare assigns a dedicated care coordinator to
                every patient in Pondicherry — a single named point of contact
                who manages the scheduling of doctor visits, nursing, therapy,
                and diagnostics, and who supports the family through cashless
                treatment and insurance-related documentation where applicable.
              </p>

              <div className="pc-quote">
                This coordination role works alongside the doctor-led clinical
                plan, not instead of it — the coordinator manages logistics;
                the physician remains accountable for clinical decisions — so
                families get both administrative support and clinical
                continuity from the same organized structure.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="pc-section pc-included">
        <div className="pc-container">
          <div className="pc-section-head">
            <span className="pc-eyebrow">WHAT'S INCLUDED</span>

            <h2>
              Complete patient coordination and cashless treatment support
            </h2>
          </div>

          <div className="pc-included-grid">
            {coordinationServices.map((item, index) => (
              <div
                key={index}
                className={`pc-inc-card ${
                  item.highlight ? "pc-highlight" : ""
                }`}
              >
                <div className="pc-inc-top">
                  <div className="pc-inc-icon">{item.icon}</div>

                  <span className="pc-inc-tag">{item.tag}</span>
                </div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

                <div className="pc-inc-num">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="pc-section pc-how">
        <div className="pc-container">
          <div className="pc-section-head center">
            <span className="pc-eyebrow">HOW IT WORKS</span>

            <h2>
              From coordinator assignment to ongoing paperwork support
            </h2>
          </div>

          <div className="pc-steps-wrap">
            <div className="pc-steps-line"></div>

            <div className="pc-steps">
              <div className="pc-step">
                <div className="pc-step-circle">01</div>

                <h4>Coordinator Assignment</h4>

                <p>
                  A named care coordinator is assigned to the patient's file
                  from the start of the doctor-led care plan.
                </p>
              </div>

              <div className="pc-step">
                <div className="pc-step-circle">02</div>

                <h4>Documentation Setup</h4>

                <p>
                  Relevant insurance and cashless treatment documentation is
                  reviewed and organized early, before it becomes urgent.
                </p>
              </div>

              <div className="pc-step">
                <div className="pc-step-circle">03</div>

                <h4>Ongoing Scheduling</h4>

                <p>
                  The coordinator manages the scheduling of every provider
                  involved in the patient's care across Pondicherry.
                </p>
              </div>

              <div className="pc-step">
                <div className="pc-step-circle">04</div>

                <h4>Billing & Paperwork Support</h4>

                <p>
                  The coordinator supports families through billing questions
                  and insurance-related paperwork as they arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MATTERS IN PONDICHERRY */}
      <section className="pc-why-dark">
        <div className="pc-container">
          <div className="pc-why-grid">
            <div className="pc-why-left">
              <span className="pc-eyebrow pc-light">
                WHY THIS MATTERS IN PONDICHERRY
              </span>

              <h2>
                One point of contact for the logistics behind home healthcare.
              </h2>

              <p>
                Families managing home healthcare in Pondicherry are frequently
                left to coordinate multiple providers and paperwork on their
                own — a burden that compounds the stress of an existing medical
                situation. This gap is common across the wider home healthcare
                landscape in Puducherry, not specific to any one provider.
              </p>

              <p>
                Aureal Healthcare's dedicated coordination role exists to
                close that gap — one named person managing logistics and
                paperwork, working alongside the doctor-led clinical plan rather
                than leaving families to manage both on their own.
              </p>

              <div className="pc-why-points">
                <div className="pc-bad">
                  <span>✕</span>
                  Family manages multiple providers and paperwork alone
                </div>

                <div className="pc-good">
                  <span>✓</span>
                  Aureal Healthcare: one coordinator manages logistics and
                  paperwork
                </div>
              </div>

              <div className="pc-convo-queries">
                <p>People also ask:</p>

                <span>
                  how does patient coordination work for home care in
                  Puducherry?
                </span>

                <span>
                  is cashless treatment available for home care in Pondicherry?
                </span>

                <span>
                  is insurance paperwork handled by the home care provider?
                </span>
              </div>
            </div>

            <div className="pc-why-right">
              <img
                src="/support4.jpg"
                alt="Home healthcare coordination in Pondicherry"
              />

              <div className="pc-why-card">
                <h4>Doctor-Led Difference</h4>

                <p>
                  Coordination manages logistics while clinical decisions
                  remain with the overseeing physician.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR + TRUST */}
      <section className="pc-section pc-who-trust">
        <div className="pc-container">
          <div className="pc-grid-2">
            <div>
              <span className="pc-eyebrow">
                THE AUREAL HEALTHCARE DOCTOR-LED DIFFERENCE
              </span>

              <h2 className="pc-h2">
                Coordination without clinical responsibility keeps care clear.
              </h2>

              <p className="pc-p">
                Coordination and clinical decision-making are kept distinct by
                design: the care coordinator manages logistics and paperwork,
                while the overseeing physician remains solely accountable for
                clinical decisions — this separation keeps clinical judgment
                from being influenced by administrative or billing
                considerations.
              </p>

              <p className="pc-p">
                This structure also means clinical urgency is never delayed by
                paperwork — the doctor-led plan proceeds on clinical timing,
                with the coordinator managing the administrative side in
                parallel.
              </p>

              <div className="pc-trust-box">
                <h4>Trust & Credibility</h4>

                <p>
                  Every patient's coordination is handled by a named,
                  accountable coordinator, working alongside the same doctor-led
                  clinical governance applied across Aureal Healthcare programs.
                </p>

                <div className="pc-trust-list">
                  <div>
                    <span>✓</span>
                    Logistics and clinical decisions remain clearly separated
                  </div>

                  <div>
                    <span>✓</span>
                    Organized support without compromising clinical judgment
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="pc-who-title">WHO IT'S FOR</div>

              <div className="pc-who-grid">
                <div className="pc-who-card">
                  <span>👨‍⚕️</span>

                  <p>
                    Families managing multiple providers — doctor, nurse,
                    therapist, and diagnostics — who want one point of contact
                    instead of several
                  </p>
                </div>

                <div className="pc-who-card">
                  <span>💳</span>

                  <p>
                    Patients or families navigating cashless treatment or
                    insurance paperwork for the first time
                  </p>
                </div>

                <div className="pc-who-card">
                  <span>🌍</span>

                  <p>
                    Families coordinating care for a relative in Pondicherry
                    from another city or abroad who need a reliable local point
                    of contact
                  </p>
                </div>

                <div className="pc-who-card">
                  <span>📋</span>

                  <p>
                    Anyone who wants clear, itemized billing rather than
                    ambiguous or unpredictable costs
                  </p>
                </div>
              </div>

              <div className="pc-related">
                <h4>Related Aureal Healthcare Services</h4>

                <div className="pc-related-links">
                  <a href="/EmergencySupport">
                    24/7 Emergency Support & Teleconsultation →
                  </a>

                  <a href="/ContinuumofCare">Continuum of Care →</a>

                  <a href="/HomeBasedSupport">Home Based Support →</a>

                  <a href="/Integrated-Doctor-Led-Team">Integrated Doctor-Led Team →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="pc-section pc-faq">
        <div className="pc-container">
          <div className="pc-section-head center">
            <span className="pc-eyebrow">FAQ</span>

            <h2>
              Patient Coordination & Cashless Treatment — Common Questions
            </h2>
          </div>

          <div className="pc-faq-list">
            {coordinationFaqs.map((faq, index) => (
              <div
                key={index}
                className={`pc-faq-item ${
                  openFaq === index ? "pc-open" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="pc-faq-q"
                >
                  <span>{faq.q}</span>

                  <span className="pc-faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="pc-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pc-cta">
        <div className="pc-container pc-cta-inner">
          <div>
            <h2>
              Ask for a dedicated care coordinator in Pondicherry
            </h2>

            <p>
              One point of contact for scheduling, paperwork, and cashless
              treatment support — working alongside a doctor-led clinical plan.
            </p>
          </div>

          <div className="pc-cta-actions">
  <button
    className="pc-btn pc-btn-light"
    onClick={() => {
      goTo("/Appointment");
    }}
  >
    Request Coordinator
  </button>

  <a
    href="tel:+919944969049"
    className="pc-btn pc-btn-outline"
  >
    +91 99449 69049
  </a>
</div>
        </div>
      </section>
    </div>
  );
}