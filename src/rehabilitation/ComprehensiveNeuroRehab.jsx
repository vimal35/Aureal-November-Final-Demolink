import { goTo } from "../utils/goTo";

import React, { useState } from "react";
import "./ComprehensiveNeuroRehab.css";

const includedData = [
  {
    icon: "🧠",
    title: "Physician-Led Neuro Assessment",
    desc: "A physician evaluates the patient's neurological status and sets the overall direction of the rehabilitation plan, based on mobility, neurological function, and rehabilitation potential.",
    tag: "Neuro Assessment",
    highlight: true,
  },
  {
    icon: "🏃",
    title: "Coordinated Physiotherapy & Occupational Therapy",
    desc: "Mobility training and activities-of-daily-living retraining are delivered as one coordinated plan, rather than separate and disconnected therapy services.",
    tag: "Coordinated Therapy",
  },
  {
    icon: "🛏️",
    title: "Bedridden & Low-Mobility Patient Care",
    desc: "For patients who are bedridden or severely limited in mobility, care includes positioning, pressure-area management, and gradual mobilization under physician guidance.",
    tag: "Bedridden Care",
    highlight: true,
  },
  {
    icon: "🤝",
    title: "Family Caregiver Training",
    desc: "Families are trained in safe transfer techniques, positioning, and supporting exercises so they can confidently assist the patient between professional visits.",
    tag: "Caregiver Training",
  },
  {
    icon: "📊",
    title: "Ongoing Physician Review",
    desc: "The overseeing physician reviews neurological progress regularly and adjusts the rehabilitation plan as the patient's condition and recovery needs evolve.",
    tag: "Doctor Review",
  },
];

const faqs = [
  {
    q: "What does neuro rehabilitation at home include?",
    a: "It typically includes physiotherapy for mobility, occupational therapy for daily-living skills, physician oversight of the overall neurological recovery plan, and family caregiver training — coordinated as one plan rather than separate services.",
  },
  {
    q: "Can a bedridden stroke patient be cared for at home in Pondicherry?",
    a: "Yes — bedridden patient care in Pondicherry includes positioning, pressure-area management, and gradual mobilization, coordinated under physician guidance alongside rehabilitation therapy.",
  },
  {
    q: "How soon after a stroke should rehabilitation start?",
    a: "Early, physician-guided rehabilitation is generally important for recovery potential; a physician assessment can determine the appropriate starting point and pace for each patient's specific condition.",
  },
  {
    q: "Is a physician involved throughout neuro rehabilitation, or just at the start?",
    a: "The overseeing physician reviews neurological progress on an ongoing basis throughout the rehabilitation process, adjusting the plan as the patient's status changes — not only at the initial assessment.",
  },
  {
    q: "Do you provide caregiver training for families?",
    a: "Yes — families are trained in safe transfer techniques, positioning, and supporting exercises to use between professional visits.",
  },
  {
    q: "Which parts of Pondicherry are covered for neuro rehab home visits?",
    a: "Coverage spans Puducherry town and surrounding areas including White Town, Muthialpet, Lawspet, Reddiarpalayam, Ozhukarai, and Ariyankuppam.",
  },
];

export default function ComprehensiveNeuroRehab() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="cnr-page">
      {/* TOPBAR STRIP */}
      

      {/* HERO */}
      <section className="cnr-hero">
        <div className="cnr-container cnr-hero-grid">
          <div className="cnr-hero-left">
            <div className="cnr-breadcrumb">
              Home Healthcare /{" "}
              <span>Comprehensive Neuro Rehabilitation Pondicherry</span>
            </div>

            <div className="cnr-pill">
              <span></span> DOCTOR-LED · HOME-BASED · PONDICHERRY
            </div>

            <h1 className="cnr-h1">
              Comprehensive Neuro Rehabilitation at Home in Pondicherry —{" "}
              <span className="cnr-accent">
                Stroke & Paralysis Care
              </span>
            </h1>

            <p className="cnr-hero-sub">
              Doctor-led neuro rehabilitation for stroke, paralysis, and other
              neurological conditions — physiotherapy, occupational therapy,
              and physician oversight coordinated under one recovery plan at
              home in Pondicherry.
            </p>

            <div className="cnr-quick">
              <div className="cnr-quick-label">⚡ QUICK ANSWER</div>
              <p>
                Aureal Healthcare provides comprehensive neuro
                rehabilitation at home across Pondicherry for stroke,
                paralysis, and other neurological conditions — combining
                physiotherapy, occupational therapy, and physician oversight
                under one doctor-led recovery plan rather than disconnected
                individual therapy sessions.
              </p>
            </div>

           <div className="cnr-hero-actions">
  <button
    className="cnr-btn primary"
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Start Recovery Assessment
  </button>

  <a
    href="tel:+919944969049"
    className="cnr-btn secondary"
  >
    Talk to Physician
  </a>
</div>

            <div className="cnr-loc-tags">
              <span>Stroke care at home near me Pondicherry</span>
              <span>Paralysis care Puducherry</span>
              <span>Neuro rehab Pondicherry</span>
              <span>White Town</span>
              <span>Lawspet</span>
              <span>Ozhukarai</span>
              <span>Ariyankuppam</span>
            </div>
          </div>

          <div className="cnr-hero-right">
            <div className="cnr-hero-visual">
              <img
                className="cnr-main-img"
                src="/neuro1.jpg"
                alt="Neuro rehabilitation at home in Pondicherry"
              />

              <div className="cnr-float-card top">
                <div className="cnr-f-icon">🧠</div>
                <div>
                  <b>Doctor-Led Neuro Rehabilitation</b>
                  <p>Physician oversight · Home-based recovery</p>
                </div>
              </div>

              <div className="cnr-float-card bottom">
                <img
                  src="/neuro2.jpg"
                  alt="Home-based motor rehabilitation"
                />
                <div>
                  <b>Coordinated Home Rehabilitation</b>
                  <p>Physiotherapy · Occupational therapy</p>
                  <div className="cnr-progress">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cnr-stat-row">
              <div>
                <b>Doctor-Led</b>
                <span>Recovery Plan</span>
              </div>
              <div>
                <b>Home-Based</b>
                <span>Pondicherry Care</span>
              </div>
              <div>
                <b>One Team</b>
                <span>Coordinated Rehab</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="cnr-section overview">
        <div className="cnr-container">
          <div className="cnr-grid-2">
            <div className="cnr-overview-media">
              <img
                className="ov-img-1"
                src="/neuro3.jpg"
                alt="Stroke rehabilitation at home"
              />

              

              <div className="cnr-ov-badge">
                <h4>One Plan. One Physician.</h4>
                <p>Physiotherapy + Occupational Therapy + Medical Oversight</p>
              </div>
            </div>

            <div>
              <span className="cnr-eyebrow">OVERVIEW</span>

              <h2 className="cnr-h2">
                Neurological recovery is rarely something a single therapy
                discipline can manage alone.
              </h2>

              <p className="cnr-p">
                Neurological recovery — after a stroke, spinal injury, or
                other condition causing paralysis or significant mobility loss
                — is rarely something a single therapy discipline can manage
                alone. Pondicherry families searching for “stroke
                rehabilitation at home” or “paralysis care at home” usually
                need a coordinated team, not a single physiotherapist working
                in isolation.
              </p>

              <p className="cnr-p">
                <strong>
                  Aureal Healthcare's comprehensive neuro rehab model
                brings physiotherapy, occupational therapy, and physician
                oversight together under one doctor-led plan:
                </strong>{" "}
                mobility training, activities-of-daily-living retraining, and
                medical management including spasticity, secondary
                complications, and medication are coordinated rather than
                managed by separate, disconnected providers.
              </p>

              <p className="cnr-p">
                This matters most in the early months after a stroke or major
                neurological event, when the pace and direction of recovery are
                still being established, and where a physician needs to be
                involved in adjusting the plan as the patient's neurological
                status evolves.
              </p>

              <div className="cnr-quote">
                "Neuro rehabilitation is not a collection of separate therapy
                sessions — it is one coordinated recovery plan with physician
                oversight."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="cnr-section included">
        <div className="cnr-container">
          <div className="cnr-section-head">
            <span className="cnr-eyebrow">WHAT'S INCLUDED</span>

            <h2 className="cnr-h2">
              Comprehensive neuro rehabilitation, delivered at home
            </h2>

            <p className="cnr-section-sub">
              Coordinated clinical components delivered under one
              doctor-led recovery plan for stroke, paralysis, and other
              neurological conditions.
            </p>
          </div>

          <div className="cnr-included-grid">
            {includedData.map((it, i) => (
              <div
                className={`cnr-inc-card ${
                  it.highlight ? "highlight" : ""
                }`}
                key={i}
              >
                <div className="cnr-inc-top">
                  <div className="cnr-inc-icon">{it.icon}</div>
                  <span className="cnr-inc-tag">{it.tag}</span>
                </div>

                <h4>{it.title}</h4>

                <p>{it.desc}</p>

                <div className="cnr-inc-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="cnr-section how">
        <div className="cnr-container">
          <div className="cnr-section-head center">
            <span className="cnr-eyebrow">HOW IT WORKS</span>

            <h2 className="cnr-h2">
              From neurological assessment to ongoing doctor-led review
            </h2>

            <p className="cnr-section-sub">
              Four structured steps that bring physician oversight,
              physiotherapy, occupational therapy, and home-based care
              together.
            </p>
          </div>

          <div className="cnr-steps-wrap">
            <div className="cnr-steps-line"></div>

            <div className="cnr-steps">
              <div className="cnr-step">
                <div className="cnr-step-circle">01</div>

                <h4>Neurological Assessment</h4>

                <p>
                  A physician assesses the patient's neurological status,
                  mobility, and rehabilitation potential.
                </p>
              </div>

              <div className="cnr-step">
                <div className="cnr-step-circle">02</div>

                <h4>Multidisciplinary Plan Design</h4>

                <p>
                  Physiotherapy and occupational therapy plans are built
                  together under the physician's direction, not as separate
                  silos.
                </p>
              </div>

              <div className="cnr-step">
                <div className="cnr-step-circle">03</div>

                <h4>Home-Based Rehabilitation Delivery</h4>

                <p>
                  Therapy sessions and medical management are delivered at
                  home across Pondicherry, coordinated on a shared schedule.
                </p>
              </div>

              <div className="cnr-step">
                <div className="cnr-step-circle">04</div>

                <h4>Ongoing Doctor-Led Review</h4>

                <p>
                  The physician reviews progress regularly and adjusts therapy
                  intensity, medication, or goals as the patient's neurological
                  status changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS — DARK SECTION */}
      <section className="cnr-why-dark">
        <div className="cnr-container cnr-why-grid">
          <div className="cnr-why-left">
            <span className="cnr-eyebrow light">
              WHY THIS MATTERS IN PONDICHERRY
            </span>

            <h2 className="cnr-why-h">
              Coordinated neuro rehabilitation at home — under one physician.
            </h2>

            <p className="cnr-why-p">
              Neuro rehabilitation delivered as separate, uncoordinated
              therapy sessions — a physiotherapist here, an occupational
              therapist there, with no physician tracking the whole picture —
              can create a significant gap for stroke and paralysis cases that
              need close medical oversight alongside therapy.
            </p>

            <p className="cnr-why-p">
              Aureal Healthcare's comprehensive, doctor-led model exists to
              close that gap for Pondicherry families — one physician tracking
              the full neurological recovery picture, with therapy disciplines
              coordinated underneath that oversight.
            </p>

            <div className="cnr-why-points">
              <div className="bad">
                <span>✕</span> Usual: Separate therapy sessions with limited
                coordination between physiotherapy, occupational therapy, and
                medical management
              </div>

              <div className="good">
                <span>✓</span> Aureal Healthcare: Doctor-led home
                rehabilitation combining physiotherapy, occupational therapy,
                caregiver support, and ongoing physician review
              </div>
            </div>

            <div className="cnr-convo">
              <p>People also ask:</p>

              <span>
                how to care for a stroke patient at home in Pondicherry
              </span>

              <span>what does neuro rehabilitation include</span>

              <span>paralysis home care services Pondicherry cost</span>

              <span>how long does stroke recovery take at home</span>

              <span>is neuro rehabilitation available at home in Pondicherry</span>
            </div>
          </div>

          <div className="cnr-why-right">
            <img
              src="/neuro4.jpg"
              alt="Doctor-led neuro rehabilitation at home in Pondicherry"
            />

            <div className="cnr-why-card">
              <h4>The Aureal Healthcare Doctor-Led Difference</h4>

              <p>
                One accountable physician across neurological assessment,
                physiotherapy, occupational therapy, medical management, and
                ongoing recovery review — not disconnected providers working
                separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR-LED DIFFERENCE + WHO IT'S FOR */}
      <section className="cnr-section who-trust">
        <div className="cnr-container">
          <div className="cnr-grid-2">
            <div>
              <span className="cnr-eyebrow">
                THE AUREAL HEALTHCARE DOCTOR-LED DIFFERENCE
              </span>

              <h2 className="cnr-h2">
                Neuro rehabilitation needs medical oversight alongside therapy.
              </h2>

              <p className="cnr-p">
                Neuro rehabilitation carries real medical risk alongside the
                therapy component — spasticity management, secondary
                complication prevention, and medication adjustment — which is
                why Aureal Healthcare keeps a physician accountable for
                the whole plan, not just the therapy schedule.
              </p>

              <p className="cnr-p">
                The doctor-led structure means therapy intensity and direction
                are adjusted based on physician assessment of neurological
                status, not therapist judgment alone.
              </p>

              <div className="cnr-trust-box">
                <h4>Trust & Credibility</h4>

                <p>
                  Neuro rehabilitation plans follow the same doctor-led
                  clinical governance as every other Aureal Healthcare program, with a named physician accountable
                  throughout.
                </p>

                <div className="cnr-trust-list">
                  <div>
                    <span>✓</span> Physician accountable for the full
                    neurological recovery plan
                  </div>

                  <div>
                    <span>✓</span> Physiotherapy and occupational therapy
                    coordinated under one plan
                  </div>

                  <div>
                    <span>✓</span> Ongoing medical review as neurological
                    status changes
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="cnr-who-title">WHO IT'S FOR</div>

              <div className="cnr-who-grid">
                <div className="cnr-who-card">
                  <span>🧠</span>

                  <p>
                    Stroke patients in the early recovery period who need
                    coordinated physiotherapy, occupational therapy, and
                    physician oversight
                  </p>
                </div>

                <div className="cnr-who-card">
                  <span>🦴</span>

                  <p>
                    Paralysis or spinal injury patients requiring bedridden or
                    low-mobility care alongside gradual rehabilitation
                  </p>
                </div>

                <div className="cnr-who-card">
                  <span>🏠</span>

                  <p>
                    Families caring for a bedridden relative in Pondicherry
                    who need training in safe positioning and transfers
                  </p>
                </div>

                <div className="cnr-who-card">
                  <span>👨‍⚕️</span>

                  <p>
                    Patients whose neuro rehab needs extend beyond what a
                    single therapy discipline can address
                  </p>
                </div>
              </div>

              <div className="cnr-related">
                <h4>Related Aureal Healthcare Services</h4>

                <div className="cnr-related-links">
                  <a href="/PersonCentricRehab">Person-Centric Rehab →</a>
                  <a href="/TherapeuticModalities">Therapeutic Modalities →</a>
                  <a href="/AdvancedDiagnostics">Advanced Diagnostics →</a>
                  <a href="/Integrated-Doctor-Led-Team">Integrated Doctor-Led Team →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cnr-section faq">
        <div className="cnr-container">
          <div className="cnr-section-head center">
            <span className="cnr-eyebrow">FAQ</span>

            <h2 className="cnr-h2">
              Neuro Rehabilitation — Common Questions
            </h2>

            <p className="cnr-section-sub">
              Clear answers about stroke rehabilitation, paralysis care,
              bedridden patient care, and doctor-led neuro rehabilitation at
              home in Pondicherry.
            </p>
          </div>

          <div className="cnr-faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`cnr-faq-item ${
                  openFaq === i ? "open" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                  className="cnr-faq-q"
                >
                  <span>{f.q}</span>

                  <span className="cnr-faq-icon">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>

                {openFaq === i && (
                  <div className="cnr-faq-a">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cnr-cta">
        <div className="cnr-container cnr-cta-inner">
          <div>
            <h2>
              Arrange a doctor-led neuro rehabilitation assessment in
              Pondicherry
            </h2>

            <p>
              Coordinated physiotherapy, occupational therapy, and physician
              oversight in one recovery plan — delivered at home for stroke,
              paralysis, and other neurological conditions.
            </p>
          </div>

          <div className="cnr-cta-actions">
  {/* Book Consultation → Appointment Page */}
  <button
    className="cnr-btn light"
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Book Consultation
  </button>

  {/* Talk to Care Coordinator → Phone Dial Pad */}
  <a
    href="tel:+919944969049"
    className="cnr-btn outline"
  >
    Talk to Care Coordinator
  </a>
</div>
        </div>
      </section>

  
      
    </div>
  );
}

