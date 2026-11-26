import { goTo } from "../utils/goTo";

import React, { useState } from "react";
import "./Therapeutic Modalities.css";

const RELATED_ROUTES = {
  "Advanced Diagnostics": "/AdvancedDiagnostics",
  "Comprehensive Neuro Rehab": "/ComprehensiveNeuroRehab",
  "Person-Centric Rehab": "/PersonCentricRehab",
  "Wellness & Preventive Care": "/WellnessPreventiveCare",
  "Continuum of Care": "/ContinuumofCare",
  "Patient Coordination & Cashless Treatment": "/PatientCoordination",
  "Therapeutic Modalities": "/TherapeuticModalities",
  "Integrated Doctor-Led Team": "/Integrated-Doctor-Led-Team",
  "Multi-Specialty Consultations": "/Multi-Specialty-Consultations",
  "24/7 Emergency Support & Teleconsultation": "/EmergencySupport",
  "Ground Ambulance & Local Transfers": "/GroundAmbulance",
  "Home Based Support": "/HomeBasedSupport",
};

const modalities = [
  {
    id: "electrotherapy",
    icon: "⚡",
    tag: "Pain Modulation & Muscle Re-education",
    title: "Electrotherapy",
    short: "Clinical electrotherapy within your rehab plan.",
    desc: "Used for pain modulation and muscle re-education where clinically appropriate, applied within the patient's overall rehabilitation plan rather than offered as a standalone equipment session.",
    points: [
      "Pain modulation where clinically appropriate",
      "Muscle re-education support",
      "Selected within the overall rehabilitation plan",
    ],
  },
  {
    id: "manual",
    icon: "🤲",
    tag: "Hands-on Clinical Therapy",
    title: "Manual Therapy",
    short: "Hands-on treatment for movement restrictions.",
    desc: "Hands-on techniques are used to address joint stiffness, soft-tissue restrictions, and movement limitations as part of a broader recovery goal and individualized rehabilitation plan.",
    points: [
      "Joint stiffness management",
      "Soft-tissue restriction treatment",
      "Combined with therapeutic exercise",
    ],
  },
  {
    id: "exercise",
    icon: "🏃",
    tag: "Strength, Balance & Mobility",
    title: "Targeted Therapeutic Exercise",
    short: "Structured exercise for functional recovery.",
    desc: "Structured exercise progressions are designed around the patient's specific strength, balance, mobility, and functional deficits, and adjusted as recovery progresses.",
    points: [
      "Patient-specific exercise progressions",
      "Strength, balance & mobility focus",
      "Adjusted according to functional progress",
    ],
  },
  {
    id: "pain",
    icon: "🩹",
    tag: "Integrated Pain Management",
    title: "Pain Management Integration",
    short: "Modalities aligned with functional recovery.",
    desc: "Therapeutic modalities are combined and sequenced specifically to support functional recovery and, where relevant, coordinated with the broader medical approach to pain management.",
    points: [
      "Modalities selected for specific functional goals",
      "Integrated with the broader rehabilitation plan",
      "Coordinated with the overseeing physician where appropriate",
    ],
  },
  {
    id: "equipment",
    icon: "🧰",
    tag: "In-Home Rehabilitation",
    title: "Equipment Brought to Your Home",
    short: "Necessary therapeutic equipment delivered to you.",
    desc: "Necessary therapeutic equipment is brought to the patient's home in Chennai as part of the scheduled physiotherapy session, making clinical rehabilitation more convenient without requiring travel.",
    points: [
      "Equipment brought to the patient's home",
      "No travel required for scheduled sessions",
      "Equipment used according to clinical need",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Clinical Assessment",
    desc: "The physiotherapist assesses which modalities are appropriate for the patient's specific condition, functional limitations, and rehabilitation goals.",
  },
  {
    n: "02",
    title: "Modality Selection Within the Rehab Plan",
    desc: "Electrotherapy, manual therapy, or targeted therapeutic exercise is selected as part of the broader rehabilitation plan rather than offered in isolation.",
  },
  {
    n: "03",
    title: "In-Home Delivery",
    desc: "Sessions are delivered at the patient's home in Chennai, with necessary therapeutic equipment brought to the home as needed.",
  },
  {
    n: "04",
    title: "Progress-Based Adjustment",
    desc: "Modalities are adjusted or discontinued as the patient's function improves and the underlying rehabilitation plan evolves.",
  },
];

const whoFor = [
  {
    icon: "🩹",
    text: "Patients with chronic pain who have tried generic exercise sheets without addressing underlying joint or soft-tissue restrictions",
  },
  {
    icon: "🏥",
    text: "Post-surgical patients who need a combination of manual therapy and progressive exercise, not just one or the other",
  },
  {
    icon: "👴",
    text: "Elderly patients in Chennai managing arthritis or chronic musculoskeletal pain who prefer treatment at home",
  },
  {
    icon: "👨‍👩‍👧",
    text: "Families who want to understand exactly which rehabilitation techniques are being used and why",
  },
];

const faqs = [
  {
    q: "What therapeutic modalities are used in home physiotherapy?",
    a: "Aureal Healthcare uses electrotherapy, manual therapy, and targeted therapeutic exercise, each selected by the treating physiotherapist based on the patient's specific condition and rehabilitation goals.",
  },
  {
    q: "Is electrotherapy safe to use at home?",
    a: "When applied by a trained physiotherapist as part of an appropriate clinical plan, electrotherapy is a standard and safe rehabilitation modality; it is not recommended as an unsupervised, standalone treatment.",
  },
  {
    q: "Do I need to bring my own equipment for home therapy sessions?",
    a: "No — necessary therapeutic equipment is brought to the patient's home in Chennai as part of the scheduled session.",
  },
  {
    q: "How is manual therapy different from exercise-based physiotherapy?",
    a: "Manual therapy uses hands-on techniques to address joint stiffness and soft-tissue restrictions, typically combined with therapeutic exercise as part of one broader rehabilitation plan rather than used alone.",
  },
  {
    q: "Are these modalities available across all of Chennai?",
    a: "Yes — therapeutic modalities are delivered at home across Chennai town and surrounding areas as part of the broader home physiotherapy service.",
  },
  {
    q: "Will my pain management be coordinated with my doctor?",
    a: "For patients on a broader doctor-led care plan, modality and pain-management decisions are coordinated with the overseeing physician rather than handled in isolation.",
  },
];

const relatedServices = [
  "Person-Centric Rehab",
  "Comprehensive Neuro Rehab",
  "Wellness & Preventive Care",
  "Advanced Diagnostics",
];

export default function TherapeuticModalities() {
  const [activeModality, setActiveModality] = useState(
    modalities[0].id
  );
  const [openFaq, setOpenFaq] = useState(0);

  const current = modalities.find(
    (m) => m.id === activeModality
  );

  return (
    <div className="tmod-page">
      {/* HERO */}
      <section className="tmod-hero">
        <div className="tmod-hero-inner">
          <div className="tmod-hero-left">
            <div className="tmod-breadcrumb">
              Rehabilitation /{" "}
              <span>Therapeutic Modalities Chennai</span>
            </div>

            <div className="tmod-pill">
              <span></span> HOME REHABILITATION · CLINICAL MODALITIES · Chennai
            </div>

            <h1>
              Therapeutic Modalities for Comprehensive Home Rehabilitation in
              Chennai
            </h1>

            <p className="tmod-hero-sub">
              Electrotherapy, manual therapy, and other clinical rehab
              modalities delivered at home in Chennai — selected and
              applied as part of a doctor-informed physiotherapy plan, not
              offered as standalone equipment sessions.
            </p>

            <div className="tmod-quick">
              <div className="tmod-quick-label">⚡ QUICK ANSWER</div>
              <p>
                Aureal Healthcare applies a range of therapeutic
                modalities — including electrotherapy, manual therapy, and
                targeted therapeutic exercise — at home across Chennai,
                each selected by the treating physiotherapist as part of a
                broader, individualized rehabilitation plan rather than
                offered as an isolated equipment-based session.
              </p>
            </div>

            <div className="tmod-hero-actions">
  {/* Book Consultation → /Appointment */}
  <button
    className="tmod-btn primary"
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Book Home Rehabilitation
  </button>

  {/* Talk to Care Coordinator → Phone Dial Pad */}
  <button
    className="tmod-btn secondary"
    onClick={() => {
      window.location.href = "tel:+919944969049";
    }}
  >
    Talk to Care Coordinator
  </button>
</div>

         
          </div>

          <div className="tmod-hero-right">
            <div className="tmod-hero-visual">
              <img
                className="tmod-main-img"
                src="/the1.jpg"
                alt="Physiotherapist providing home rehabilitation treatment"
              />

              <div className="tmod-float-card top">
                <div className="tmod-f-icon">⚡</div>
                <div>
                  <b>Clinical Modalities</b>
                  <p>Selected within the rehab plan</p>
                </div>
              </div>

              <div className="tmod-float-card bottom">
                <div className="tmod-f-icon alt">🧰</div>
                <div>
                  <b>Equipment at Home</b>
                  <p>Necessary equipment brought to you</p>
                  <div className="tmod-progress">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="tmod-section tmod-overview">
        <div className="tmod-container">
          <div className="tmod-grid-2">
            <div>
              <span className="tmod-eyebrow">OVERVIEW</span>

              <h2 className="tmod-h2">
                Clinical modalities. One individualized home rehabilitation
                plan.
              </h2>

              <p className="tmod-p">
                Beyond basic mobility exercises, effective home rehabilitation
                often draws on specific clinical modalities — electrotherapy
                for pain modulation and muscle re-education, manual therapy
                for joint and soft-tissue restrictions, and targeted
                therapeutic exercise for strength and function. Chennai
                families researching{" "}
                <strong>home rehabilitation Chennai</strong> options
                increasingly ask what modalities are actually used, not just
                whether “physiotherapy” is offered.
              </p>

              <p className="tmod-p">
                At Aureal Healthcare, these modalities are never applied as
                a standalone service — each is selected by the treating
                physiotherapist as part of the patient's broader,
                individualized rehab plan, and used specifically where the
                clinical evidence and patient's condition support it.
              </p>

              <div className="tmod-quote">
                This distinction matters because modality-only services —
                offering electrotherapy or a piece of equipment without a
                broader clinical plan around it — can provide short-term
                symptom relief without addressing the underlying functional
                recovery a patient actually needs.
              </div>
            </div>

            <div className="tmod-overview-media">
              <img
                className="tmod-ov-img-1"
                src="/the2.jpg"
                alt="Physiotherapist providing home rehabilitation treatment"
              />

              

              <div className="tmod-ov-badge">
                <h4>Coordinated, not standalone</h4>
                <p>
                  Every modality supports a broader functional recovery plan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED - INTERACTIVE TABS */}
      <section className="tmod-section tmod-included">
        <div className="tmod-container">
          <div className="tmod-section-head center">
            <span className="tmod-eyebrow">WHAT'S INCLUDED</span>

            <h2>
              Explore the therapeutic modalities used in home rehabilitation
            </h2>

            <p className="tmod-head-sub">
              Electrotherapy, manual therapy, targeted therapeutic exercise,
              pain-management integration, and necessary equipment — selected
              according to the patient's rehabilitation needs.
            </p>
          </div>

          <div className="tmod-tabs">
            {modalities.map((m) => (
              <button
                key={m.id}
                className={`tmod-tab ${
                  activeModality === m.id ? "active" : ""
                }`}
                onClick={() => setActiveModality(m.id)}
              >
                <span className="tmod-tab-icon">{m.icon}</span>

                <span>
                  <b>{m.title}</b>
                  <em>{m.short}</em>
                </span>
              </button>
            ))}
          </div>

          <div className="tmod-tab-panel">
            <div className="tmod-tab-panel-icon">
              {current.icon}
            </div>

            <div className="tmod-tab-panel-body">
              <span className="tmod-inc-tag">
                {current.tag}
              </span>

              <h3>{current.title}</h3>

              <p>{current.desc}</p>

              <ul>
                {current.points.map((p, i) => (
                  <li key={i}>
                    <span>✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="tmod-combined-card">
            <div className="tmod-combined-icon">🔗</div>

            <div>
              <h4>
                Clinical modalities inside one comprehensive rehab plan
              </h4>

              <p>
                Modalities are selected and sequenced according to the
                patient's condition and functional recovery goals, rather than
                being offered as disconnected equipment-based sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - VERTICAL TIMELINE */}
      <section className="tmod-section tmod-how">
        <div className="tmod-container">
          <div className="tmod-section-head center">
            <span className="tmod-eyebrow">HOW IT WORKS</span>

            <h2>
              From clinical assessment to progress-based home treatment
            </h2>
          </div>

          <div className="tmod-timeline">
            {steps.map((s, i) => (
              <div className="tmod-tl-item" key={i}>
                <div className="tmod-tl-marker">
                  {s.n}
                </div>

                <div className="tmod-tl-content">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MATTERS - DARK */}
      <section className="tmod-why-dark">
        <div className="tmod-container">
          <div className="tmod-why-grid">
            <div className="tmod-why-left">
              <span className="tmod-eyebrow light">
                WHY THIS MATTERS IN Chennai
              </span>

              <h2>
                The modality is only useful when it supports the recovery
                goal.
              </h2>

              <p>
                Standalone modality services — a single electrotherapy or
                manual therapy session without a broader clinical plan — are
                available across the Chennai market, but they can leave
                the underlying functional recovery need unaddressed.
              </p>

              <p>
                Aureal Healthcare's approach exists to close that gap —
                modalities are always applied within the context of an
                individualized rehabilitation plan, selected because they
                support a specific functional goal, not offered as a
                stand-alone service.
              </p>

              <div className="tmod-why-points">
                <div className="bad">
                  <span>✕</span> Usual: Standalone modality session without a
                  broader rehabilitation plan
                </div>

                <div className="good">
                  <span>✓</span> Aureal Healthcare: Modalities selected
                  within an individualized functional recovery plan
                </div>
              </div>

              <div className="tmod-convo-queries">
                <p>People also ask:</p>

                <span>
                  what therapeutic modalities are used in home physiotherapy?
                </span>

                <span>
                  is electrotherapy safe to use at home?
                </span>

                <span>
                  how does manual therapy help chronic pain?
                </span>
              </div>
            </div>

            <div className="tmod-why-right">
              <img
                src="/the3.jpg"
                alt="Physiotherapist delivering therapeutic home rehabilitation"
              />

              <div className="tmod-why-card">
                <h4>Clinical Difference</h4>

                <p>
                  Therapeutic modalities are selected according to the
                  patient's condition and functional recovery goals rather
                  than delivered as standalone equipment sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR-LED DIFFERENCE + WHO + TRUST */}
      <section className="tmod-section tmod-who-trust">
        <div className="tmod-container">
          <div className="tmod-grid-2">
            <div>
              <span className="tmod-eyebrow">
                THE AUREAL HEALTHCARE DIFFERENCE
              </span>

              <h2 className="tmod-h2">
                Modalities work best when they are part of the bigger plan.
              </h2>

              <p className="tmod-p">
                For patients on a broader doctor-led care plan, the
                physiotherapist coordinates modality selection with the
                overseeing physician, particularly where pain management
                intersects with medication or other medical treatment.
              </p>

              <p className="tmod-p">
                This coordination avoids a common gap where pain-relief
                modalities and medical pain management are handled by entirely
                separate, uncommunicating providers.
              </p>

              <div className="tmod-trust-box">
                <h4>Trust &amp; Credibility</h4>

                <p>
                  Modality selection follows the same clinical,
                  individualized-planning standard applied across all Aureal Healthcare rehabilitation services.
                </p>

                <div className="tmod-trust-list">
                  <div>
                    <span>✓</span> Modalities are selected within a broader
                    rehabilitation plan
                  </div>

                  <div>
                    <span>✓</span> Treatment is aimed at functional recovery,
                    not just temporary symptom relief
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="tmod-who-title">
                WHO IT'S FOR
              </div>

              <div className="tmod-who-grid">
                {whoFor.map((w, i) => (
                  <div className="tmod-who-card" key={i}>
                    <span>{w.icon}</span>
                    <p>{w.text}</p>
                  </div>
                ))}
              </div>

              <div className="tmod-related">
                <h4>
                  Related Aureal Healthcare Services
                </h4>

                <div className="tmod-related-links">
                  {relatedServices.map((r, i) => (
                    <a href={RELATED_ROUTES[r] || "/services"} key={i}>
                      {r} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tmod-section tmod-faq">
        <div className="tmod-container">
          <div className="tmod-section-head center">
            <span className="tmod-eyebrow">FAQ</span>

            <h2>
              Therapeutic Modalities — Common Questions
            </h2>
          </div>

          <div className="tmod-faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`tmod-faq-item ${
                  openFaq === i ? "open" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === i ? null : i
                    )
                  }
                  className="tmod-faq-q"
                >
                  <span>{f.q}</span>

                  <span className="tmod-faq-icon">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>

                {openFaq === i && (
                  <div className="tmod-faq-a">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tmod-cta">
        <div className="tmod-container tmod-cta-inner">
          <div>
            <h2>
              Ask about therapeutic modalities as part of your home
              rehabilitation plan in Chennai
            </h2>

            <p>
              Electrotherapy, manual therapy, targeted therapeutic exercise,
              and other clinical rehabilitation modalities — selected
              according to your condition and delivered as part of a broader
              home physiotherapy plan.
            </p>
          </div>

         <div className="tmod-cta-actions">
  <button
    className="tmod-btn light"
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Book Consultation
  </button>

  <a
    href="tel:+919944969049"
    className="tmod-btn outline"
  >
    Talk to Care Coordinator
  </a>
</div>
        </div>
      </section>
    </div>
  );
}

