import { goTo } from "../utils/goTo";

import React, { useState } from "react";
import "./GroundAmbulance.css";

const ambulanceServices = [
  {
    icon: "🚑",
    title: "Emergency Ambulance Coordination",
    desc: "In an emergency, the 24/7 team coordinates ground ambulance dispatch across Pondicherry as part of the escalation process.",
    tag: "24/7 Emergency",
    highlight: true,
  },
  {
    icon: "📅",
    title: "Non-Emergency Scheduled Transfers",
    desc: "Routine transfers to a hospital appointment, between care settings, or home after discharge are arranged in advance as part of the care plan.",
    tag: "Scheduled Transfer",
    highlight: true,
  },
  {
    icon: "📋",
    title: "Clinical Information Continuity",
    desc: "Relevant clinical summaries travel with the patient during transfer, so receiving clinicians have the necessary context rather than starting from zero.",
    tag: "Clinical Continuity",
  },
  {
    icon: "🏥",
    title: "Coordination with Receiving Facilities",
    desc: "Where a transfer involves a hospital or clinic, the care team coordinates directly rather than leaving the family to manage handoff communication alone.",
    tag: "Coordinated Handover",
    highlight: true,
  },
  {
    icon: "📍",
    title: "Local Area Coverage",
    desc: "Transfer coordination covers Puducherry town and surrounding communes, reducing delays for patients outside the immediate town center.",
    tag: "Pondicherry Coverage",
  },
];

const ambulanceFaqs = [
  {
    q: "Is ambulance service included as part of a home care plan?",
    a: "Ambulance and transfer coordination can be arranged as part of a patient's doctor-led care plan when clinically required; ambulance services are not routinely included in the care package and may incur an additional cost. Please speak with your care coordinator for details on transport arrangements applicable to your specific plan.",
  },
  {
    q: "How is a routine hospital transfer arranged in Pondicherry?",
    a: "Non-emergency transfers — to a scheduled appointment or between care settings — are arranged in advance as part of the ongoing care plan, with clinical information prepared to travel with the patient.",
  },
  {
    q: "Does the receiving hospital get my medical information during a transfer?",
    a: "Relevant clinical summaries are shared with the receiving facility or team as part of the coordinated transfer process, maintaining continuity rather than starting from zero.",
  },
  {
    q: "Is transfer support available outside Puducherry town?",
    a: "Yes — transfer coordination covers Puducherry town and surrounding communes including Ozhukarai, Ariyankuppam, and Villianur; confirm exact coverage with your care coordinator.",
  },
  {
    q: "What is the difference between emergency and non-emergency transfer?",
    a: "Emergency transfers are arranged urgently through the 24/7 team as part of an escalation; non-emergency transfers are scheduled in advance as part of routine care planning — both maintain the same clinical continuity.",
  },
  {
    q: "Who decides whether a situation needs an ambulance?",
    a: "That is a clinical judgment made by the overseeing physician or the 24/7 teleconsultation team, based on the patient's condition and doctor-led record.",
  },
];

export default function GroundAmbulance() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="ga-page">
      {/* HERO SECTION */}
      <section className="ga-hero">
        <div className="ga-hero-bg-pattern"></div>
        <div className="ga-container">
          <div className="ga-hero-grid">
            <div className="ga-hero-left">
              <div className="ga-breadcrumb">
                Seamless Access / <span>Ambulance & Patient Transfer Pondicherry</span>
              </div>

              <div className="ga-pill">
                <span className="ga-pulse-dot"></span>
                DOCTOR-LED CARE PLAN • CLINICAL CONTINUITY • PONDICHERRY
              </div>

              <h1>
                Ground Ambulance and Local Patient Transfer Support Across Pondicherry
              </h1>

              <p className="ga-hero-sub">
                Ambulance and patient transfer coordination across Pondicherry,
                arranged as part of your doctor-led care plan — with clinical
                information carrying over from home to hospital and back, not lost
                in transit.
              </p>

              <div className="ga-quick-answer">
                <div className="ga-quick-label">⚡ QUICK ANSWER</div>
                <p>
                  Aureal Healthcare coordinates ground ambulance and local
                  patient transfer support across Pondicherry as part of a
                  patient's doctor-led care plan — arranging transport for
                  emergencies, hospital transfers, and non-emergency appointments
                  while carrying the patient's clinical information along, rather
                  than treating transport as a disconnected logistics task.
                </p>
              </div>

             <div className="ga-hero-actions">
  <button
    className="ga-btn ga-btn-primary"
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Book Consultation
  </button>

  <button
    className="ga-btn ga-btn-secondary"
    onClick={() => {
      window.location.href = "tel:+919944969049";
    }}
  >
    Talk to Care Coordinator
  </button>
</div>

              
            </div>

            <div className="ga-hero-right">
              <div className="ga-hero-visual">
                <img
                  className="ga-main-img"
                  src="/ambulance.jpg"
                  alt="Ground ambulance and patient transfer service in Pondicherry"
                />

                <div className="ga-float-card ga-float-top">
                  <div className="ga-f-icon">🚑</div>
                  <div>
                    <b>Coordinated Transfer</b>
                    <p>Doctor-led care plan • Clinical continuity</p>
                  </div>
                </div>

                <div className="ga-float-card ga-float-bottom">
                  <img
                    src="/am2.jpg"
                    alt="Patient transfer care"
                  />
                  <div>
                    <b>Clinical Information</b>
                    <p>Relevant summary travels with the patient</p>
                    <div className="ga-progress-bar">
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
      <section className="ga-section ga-overview">
        <div className="ga-container">
          <div className="ga-grid-2">
            <div className="ga-overview-media">
              <img
                className="ga-ov-img-1"
                src="/am3.jpg"
                alt="Ambulance patient transfer"
              />

              

              <div className="ga-ov-badge">
                <h4>Transfer is Clinical</h4>
                <p>Not just a logistics problem</p>
              </div>
            </div>

            <div>
              <span className="ga-eyebrow">OVERVIEW</span>

              <h2>
                Arranging an ambulance or patient transfer is more than a
                logistics problem.
              </h2>

              <p className="ga-p">
                Arranging an ambulance or patient transfer is often treated as a
                purely logistical problem — get a vehicle, get the patient from
                point A to point B. But for a patient already on a doctor-led care
                plan, transport without clinical continuity means losing exactly
                the coordination that plan was built to provide.
              </p>

              <p className="ga-p">
                Aureal Healthcare coordinates ground ambulance and local
                transfer support across Pondicherry as an extension of the
                doctor-led plan — the overseeing physician's summary and relevant
                clinical information travel with the patient, so the receiving
                hospital or clinic isn't starting from zero.
              </p>

              <div className="ga-quote">
                This applies both to genuine emergencies and to routine,
                non-emergency transfers — a scheduled hospital appointment, a
                transfer between a hospital and home, or a move between care
                settings — all coordinated through the same care team rather than
                an unrelated, disconnected transport booking.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="ga-section ga-included">
        <div className="ga-container">
          <div className="ga-section-head">
            <span className="ga-eyebrow">WHAT'S INCLUDED</span>

            <h2>
              Ground ambulance and patient transfer coordination across
              Pondicherry
            </h2>
          </div>

          <div className="ga-included-grid">
            {ambulanceServices.map((item, index) => (
              <div
                key={index}
                className={`ga-inc-card ${
                  item.highlight ? "ga-highlight" : ""
                }`}
              >
                <div className="ga-inc-top">
                  <div className="ga-inc-icon">{item.icon}</div>
                  <span className="ga-inc-tag">{item.tag}</span>
                </div>

                <h4>{item.title}</h4>
                <p>{item.desc}</p>

                <div className="ga-inc-num">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="ga-section ga-how">
        <div className="ga-container">
          <div className="ga-section-head center">
            <span className="ga-eyebrow">HOW IT WORKS</span>

            <h2>
              From transfer need to coordinated care-plan reconnection
            </h2>
          </div>

          <div className="ga-steps-wrap">
            <div className="ga-steps-line"></div>

            <div className="ga-steps">
              <div className="ga-step">
                <div className="ga-step-circle">01</div>

                <h4>Transfer Need Identified</h4>

                <p>
                  A transfer need is identified either through an emergency
                  escalation or as part of scheduled care planning.
                </p>
              </div>

              <div className="ga-step">
                <div className="ga-step-circle">02</div>

                <h4>Coordination with Transport</h4>

                <p>
                  Ground ambulance or transfer transport is arranged, with the
                  patient's clinical summary prepared to travel with them.
                </p>
              </div>

              <div className="ga-step">
                <div className="ga-step-circle">03</div>

                <h4>In-Transit & Handoff Continuity</h4>

                <p>
                  Relevant clinical information is shared with the receiving
                  facility or team, maintaining continuity across the transfer.
                </p>
              </div>

              <div className="ga-step">
                <div className="ga-step-circle">04</div>

                <h4>Care Plan Reconnection</h4>

                <p>
                  Once the transfer is complete, the patient's doctor-led care
                  plan is updated to reflect the new setting or outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MATTERS IN PONDICHERRY */}
      <section className="ga-why-dark">
        <div className="ga-container">
          <div className="ga-why-grid">
            <div className="ga-why-left">
              <span className="ga-eyebrow ga-light">
                WHY THIS MATTERS IN PONDICHERRY
              </span>

              <h2>
                Transport arranged independently vs. transfer coordinated with
                clinical context.
              </h2>

              <p>
                Ambulance and patient transfer services across Pondicherry are
                widely available, but when booked independently of a patient's
                ongoing care plan, clinical context is often lost in the handoff
                — the receiving team has no record of the patient's existing
                condition, medications, or care plan.
              </p>

              <p>
                Aureal Healthcare's coordinated approach exists to close that
                gap — transport arranged as part of the doctor-led plan, with
                clinical continuity maintained rather than reset at each handoff.
              </p>

              <div className="ga-why-points">
                <div className="ga-bad">
                  <span>✕</span>
                  Independent transport: logistics booking without connection to
                  the patient's ongoing care plan
                </div>

                <div className="ga-good">
                  <span>✓</span>
                  Aureal Healthcare: doctor-led coordination + clinical
                  information continuity + receiving facility coordination
                </div>
              </div>

              <div className="ga-convo-queries">
                <p>People also ask:</p>

                <span>
                  how to arrange patient transfer in Pondicherry
                </span>

                <span>
                  is ambulance service coordinated with home care in Puducherry
                </span>

                <span>
                  how quickly can an ambulance reach my home in Pondicherry
                </span>

                <span>
                  does Aureal Healthcare coordinate ambulance services in
                  Pondicherry
                </span>

                <span>
                  how does patient transfer work for home care patients in
                  Puducherry
                </span>
              </div>
            </div>

            <div className="ga-why-right">
              <img
                src="/am4.jpg"
                alt="Doctor-coordinated patient transfer in Pondicherry"
              />

              <div className="ga-why-card">
                <h4>Doctor-Led Difference</h4>

                <p>
                  Transport is part of the care plan, with clinical continuity
                  maintained throughout the transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR + TRUST */}
      <section className="ga-section ga-who-trust">
        <div className="ga-container">
          <div className="ga-grid-2">
            <div>
              <span className="ga-eyebrow">
                THE AUREAL HEALTHCARE DOCTOR-LED DIFFERENCE
              </span>

              <h2 className="ga-h2">
                Even transport benefits from doctor-led clinical oversight.
              </h2>

              <p className="ga-p">
                Even a purely logistical task like arranging transport benefits
                from doctor-led oversight — the decision about whether a situation
                needs emergency versus non-emergency transport, and what clinical
                information needs to travel with the patient, is a clinical
                judgment.
              </p>

              <div className="ga-trust-box">
                <h4>Trust & Credibility</h4>

                <p>
                  Transfer coordination follows the same doctor-led clinical
                  governance applied across every Aureal Healthcare
                  program. Because clinical information travels with the patient
                  during transfer, families avoid the common gap of a receiving
                  team starting with no context on the patient's condition.
                </p>

                <div className="ga-trust-list">
                  <div>
                    <span>✓</span>
                    Clinical information travels with the patient
                  </div>

                  <div>
                    <span>✓</span>
                    Emergency and non-emergency transfers remain connected to the
                    care plan
                  </div>

                  <div>
                    <span>✓</span>
                    Receiving facility coordination supports continuity
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="ga-who-title">WHO IT'S FOR</div>

              <div className="ga-who-grid">
                <div className="ga-who-card">
                  <span>🚑</span>

                  <p>
                    Families facing a medical emergency at home who need both
                    clinical guidance and transport arranged together
                  </p>
                </div>

                <div className="ga-who-card">
                  <span>🏠</span>

                  <p>
                    Patients being discharged from hospital who need transport
                    home coordinated with their post-hospitalisation care plan
                  </p>
                </div>

                <div className="ga-who-card">
                  <span>📅</span>

                  <p>
                    Families managing routine hospital appointments for a patient
                    with limited mobility
                  </p>
                </div>

                <div className="ga-who-card">
                  <span>📋</span>

                  <p>
                    Patients being transferred between care settings who need
                    their clinical information to travel with them
                  </p>
                </div>
              </div>

              <div className="ga-related">
                <h4>Related Aureal Healthcare Services</h4>

                <div className="ga-related-links">
                  <a href="/EmergencySupport">
                    24/7 Emergency Support & Teleconsultation →
                  </a>

                  <a href="/ContinuumofCare">
                    Continuum of Care →
                  </a>

                  <a href="/PatientCoordination">
                    Patient Coordination & Cashless Treatment →
                  </a>

                  <a href="/HomeBasedSupport">
                    Home Based Support →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="ga-section ga-faq">
        <div className="ga-container">
          <div className="ga-section-head center">
            <span className="ga-eyebrow">FAQ</span>

            <h2>
              Ambulance & Patient Transfer — Common Questions
            </h2>
          </div>

          <div className="ga-faq-list">
            {ambulanceFaqs.map((faq, index) => (
              <div
                key={index}
                className={`ga-faq-item ${
                  openFaq === index ? "ga-open" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="ga-faq-q"
                >
                  <span>{faq.q}</span>

                  <span className="ga-faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="ga-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="ga-cta">
        <div className="ga-container ga-cta-inner">
          <div>
            <h2>
              Coordinate ambulance and patient transfer support in Pondicherry
            </h2>

            <p>
              Ground ambulance and local patient transfer coordination as part
              of your doctor-led care plan, with clinical continuity from home
              to hospital and back.
            </p>
          </div>

          ```jsx
<div className="ga-cta-actions">
  <button
    className="ga-btn ga-btn-light"
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
    Coordinate Transfer
  </button>

  <a
    href="tel:+919944969049"
    className="ga-btn ga-btn-outline"
  >
    +91 99449 69049
  </a>
</div>
```

        </div>
      </section>
    </div>
  );
}

