import { goTo } from "../utils/goTo";
import { useEffect, useState } from "react";
import "./WellnessPreventiveCare.css";

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

const includedData = [
  {
    icon: "🩺",
    title: "Routine Wellness Check-Ins",
    desc: "Scheduled visits track vital signs, medication adherence, and general health trends over time, not just isolated snapshots.",
    tag: "Routine",
  },
  {
    icon: "🏠",
    title: "Fall-Risk Assessment",
    desc: "A structured assessment of the patient's home environment and physical condition identifies fall risks before an incident occurs.",
    tag: "Prevention",
    highlight: true,
  },
  {
    icon: "❤️",
    title: "Chronic Condition Monitoring",
    desc: "Diabetes, hypertension, and other chronic conditions are tracked and managed proactively as part of an ongoing care plan.",
    tag: "Ongoing",
  },
  {
    icon: "💊",
    title: "Medication Adherence Support",
    desc: "Regular check-ins help ensure medications are being taken correctly and consistently, addressing a common gap in elderly self-managed care.",
    tag: "Medication",
  },
  {
    icon: "👨‍⚕️",
    title: "Early Physician Escalation",
    desc: "Any concerning trend identified during a wellness visit is escalated to the overseeing physician promptly, rather than waiting for the next scheduled check-up.",
    tag: "Doctor-Led",
  },
];

const steps = [
  {
    tag: "Assessment",
    title: "Initial Wellness Assessment",
    desc: "A baseline assessment covers the patient's overall health, home safety, and chronic condition status.",
  },
  {
    tag: "Planning",
    title: "Preventive Care Plan Design",
    desc: "A schedule of wellness check-ins, fall-risk monitoring, and chronic condition management is set based on the patient's individual needs.",
  },
  {
    tag: "Delivery",
    title: "Ongoing Routine Visits",
    desc: "Scheduled visits across Pondicherry track health trends over time and help catch emerging issues early.",
  },
  {
    tag: "Review",
    title: "Physician Escalation When Needed",
    desc: "Concerning changes are escalated promptly to the overseeing physician for review and plan adjustment.",
  },
];

const whoCards = [
  {
    icon: "🏠",
    text: "Elderly parents living independently or with limited daily supervision in Pondicherry",
  },
  {
    icon: "🚶",
    text: "Families concerned about fall risk for a parent with reduced mobility or balance issues",
  },
  {
    icon: "❤️",
    text: "Patients managing chronic conditions who need consistent monitoring rather than occasional, reactive check-ups",
  },
  {
    icon: "🛡️",
    text: "Families whose elderly relative has had a recent minor health scare and want proactive monitoring going forward",
  },
];

const relatedLinks = [
  "Comprehensive Neuro Rehab",
  "Continuum of Care",
  "Advanced Diagnostics",
  "Patient Coordination & Cashless Treatment",
];

const marqueeItems = [
  "Wellness Check-Ins",
  "Fall-Risk Assessment",
  "Chronic Condition Monitoring",
  "Medication Support",
  "Physician Review",
  "Preventive Care",
  "Elderly Home Care",
  "Pondicherry",
];

const faqs = [
  {
    q: "What does elderly wellness and preventive care include?",
    a: "It includes routine wellness check-ins tracking vital signs and health trends, structured fall-risk assessment, chronic condition monitoring, and medication adherence support, all under physician oversight.",
  },
  {
    q: "How can I prevent falls for an elderly parent at home?",
    a: "A structured fall-risk assessment evaluates the home environment and the patient's physical condition to identify specific risks, which then inform targeted changes and monitoring — a general awareness of fall risk alone is not the same as an individualized assessment.",
  },
  {
    q: "How often should elderly parents get wellness check-ins at home?",
    a: "Frequency depends on the patient's health status and risk factors; the preventive care plan sets a schedule based on individual need rather than a fixed interval for everyone.",
  },
  {
    q: "Is this different from regular home nursing visits?",
    a: "Wellness and preventive care specifically focuses on catching and managing issues early — fall risk, chronic condition trends, and medication adherence — rather than only responding to an existing acute need.",
  },
  {
    q: "Which parts of Pondicherry are covered for elderly wellness visits?",
    a: "Coverage spans Puducherry town and surrounding areas including White Town, Muthialpet, Lawspet, Reddiarpalayam, Ozhukarai, Ariyankuppam, and Villianur.",
  },
  {
    q: "What happens if a wellness check-in identifies a concerning change?",
    a: "The finding is escalated promptly to the overseeing physician for review, rather than waiting until the next scheduled visit.",
  },
];

const locationTags = [
  "Elderly home care Pondicherry",
  "White Town",
  "Muthialpet",
  "Lawspet",
  "Reddiarpalayam",
  "Ozhukarai",
  "Ariyankuppam",
  "Villianur",
];

const peopleAlsoAsk = [
  "how do I prevent falls in elderly at home?",
  "what does preventive elderly care include?",
  "how often should elderly parents get health check-ups at home?",
];

export default function WellnessPreventiveCare() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const els = document.querySelectorAll(".wpc-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("wpc-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <div className="wpc-page">
      {/* TOP BAR */}
      

      {/* HERO */}
      <section className="wpc-hero">
        <div className="wpc-hero-left">
          <div className="wpc-breadcrumb">
            <b>Elderly Care</b> <span>›</span>{" "}
            <span>Wellness &amp; Preventive Care Pondicherry</span>
          </div>

          <div className="wpc-pill">
            <i></i> DOCTOR-GUIDED · PREVENTIVE CARE · PONDICHERRY
          </div>

          <h1>
            Elderly Wellness and Preventive Care at Home in Pondicherry
          </h1>

          <p className="wpc-hero-sub">
            Doctor-led elderly home care in Pondicherry focused on preventing
            problems before they escalate — routine wellness check-ins,
            fall-risk assessment, and chronic condition management under one
            ongoing plan.
          </p>

          <div className="wpc-quick">
            <div className="wpc-quick-label">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              QUICK ANSWER
            </div>

            <p>
              Aureal Healthcare's wellness and preventive care service
              supports elderly home care across Pondicherry through routine
              physician-guided check-ins, fall-risk assessment, and chronic
              condition monitoring — aimed at catching and managing problems
              early, rather than only responding after a health crisis.
            </p>
          </div>

          <div className="wpc-hero-actions">
  <button
    className="wpc-btn primary"
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Start Elderly Wellness Care
  </button>

  <button
    className="wpc-btn secondary"
    onClick={() => {
      window.location.href = "tel:+919944969049";
    }}
  >
    Talk to Care Coordinator
  </button>
</div>

          
        </div>

        <div className="wpc-hero-right wpc-reveal">
          <div className="wpc-hero-visual">
            <div className="wpc-arch">
              <img
                src="/well1.jpg"
                alt="Doctor providing elderly wellness care at home in Pondicherry"
              />
            </div>

            <div className="wpc-float tl">
              <div className="wpc-f-icon">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                  <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
                  <circle cx="20" cy="10" r="2" />
                </svg>
              </div>

              <div>
                <b>Doctor-Led Preventive Care</b>
                <p>Concerning trends escalated for physician review</p>
              </div>
            </div>

            <div className="wpc-float br">
              <img
                src="https://images.pexels.com/photos/8844387/pexels-photo-8844387.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200"
                alt="Elderly wellness monitoring and preventive care"
              />

              <div>
                <b>Wellness &amp; Fall-Risk Monitoring</b>
                <p>Routine care designed to identify issues early</p>
                <div className="wpc-progress">
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* MARQUEE */}
      <div className="wpc-marquee" aria-hidden="true">
        <div className="wpc-marquee-track">
          {[0, 1].map((copy) => (
            <div className="wpc-marquee-set" key={copy}>
              {marqueeItems.map((m) => (
                <span
                  className="wpc-marquee-item"
                  key={`${copy}-${m}`}
                >
                  <i></i>
                  {m}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CARE CONTINUUM */}
      <section className="wpc-continuum">
        <div className="wpc-container">
          <div className="wpc-ct-head wpc-reveal">
            <span
              className="wpc-eyebrow"
              style={{ justifyContent: "center" }}
            >
              WHERE THIS FITS
            </span>

            <h2
              className="wpc-h2"
              style={{ marginBottom: 8 }}
            >
              Preventive care before the next health crisis
            </h2>

            <p>
              Elderly wellness care is designed to identify and manage health
              risks early — helping families stay ahead of falls, chronic
              condition changes, and other preventable concerns.
            </p>
          </div>

          <div className="wpc-ct-track">
            <div className="wpc-ct-node wpc-reveal wpc-d1">
              <div className="wpc-ct-dot"></div>

              <div>
                <h4>Baseline Health</h4>
                <p>
                  Overall health, home safety, and chronic condition status
                </p>
              </div>
            </div>

            <div className="wpc-ct-node wpc-reveal wpc-d2">
              <div className="wpc-ct-dot"></div>

              <div>
                <h4>Preventive Assessment</h4>
                <p>
                  Wellness trends and fall risks are assessed proactively
                </p>
              </div>
            </div>

            <div className="wpc-ct-node now wpc-reveal wpc-d3">
              <div className="wpc-ct-dot"></div>

              <div>
                <h4>Wellness &amp; Preventive Care</h4>
                <p>
                  Routine monitoring and doctor-guided preventive support
                </p>

                <span className="wpc-ct-now-badge">
                  Ongoing Care
                </span>
              </div>
            </div>

            <div className="wpc-ct-node wpc-reveal wpc-d4">
              <div className="wpc-ct-dot"></div>

              <div>
                <h4>Physician Review</h4>
                <p>
                  Concerning changes are escalated for timely clinical review
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="wpc-section">
        <div className="wpc-container">
          <div className="wpc-grid-2">
            <div className="wpc-media-collage wpc-reveal">
              <img
                className="wpc-mc-1"
                src="/well2.jpg"
                alt="Doctor-led elderly wellness assessment at home"
              />

              <img
                className="wpc-mc-2"
                src="/well3.jpg"
                alt="Elderly home care and preventive health monitoring"
              />

              <div className="wpc-mc-badge">
                <h4>Prevention, not just reaction</h4>
                <p>Identify health risks before they become a crisis</p>
              </div>
            </div>

            <div className="wpc-reveal wpc-d1">
              <span className="wpc-eyebrow">OVERVIEW</span>

              <h2 className="wpc-h2">
                Elderly care should begin before the next crisis.
              </h2>

              <p className="wpc-p">
                Much of home healthcare, understandably, focuses on recovery
                after an event — a surgery, a stroke, a hospitalization. Aureal Healthcare's wellness and preventive care service
                addresses the other half of elderly home care in Pondicherry:
                keeping older adults stable and independent before a crisis
                happens.
              </p>

              <p className="wpc-p">
                This includes routine wellness check-ins that track vital
                signs and general health trends over time, structured
                fall-risk assessment of the patient's home environment and
                physical condition, and ongoing management of chronic
                conditions like diabetes and hypertension — all under
                physician guidance rather than left to occasional, reactive
                visits.
              </p>

              <div className="wpc-quote">
                <p>
                  For Pondicherry families, especially those with a parent
                  living independently or with limited daily supervision,
                  this preventive layer is often what helps prevent the next
                  hospitalization, rather than simply reacting to it after
                  the fact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="wpc-section included">
        <div className="wpc-container">
          <div className="wpc-section-head wpc-reveal">
            <span className="wpc-eyebrow">
              WHAT'S INCLUDED
            </span>

            <h2>
              A proactive elderly wellness plan, piece by piece
            </h2>

            <p>
              Preventive support designed to monitor health trends, reduce
              avoidable risks, and escalate concerns to a physician when
              needed.
            </p>
          </div>

          <div className="wpc-inc-grid">
            {includedData.map((it, i) => (
              <div
                className={`wpc-inc-card ${
                  it.highlight ? "highlight" : ""
                } wpc-reveal ${
                  i % 3 === 1
                    ? "wpc-d1"
                    : i % 3 === 2
                    ? "wpc-d2"
                    : ""
                }`}
                key={i}
              >
                <div className="wpc-inc-top">
                  <div className="wpc-inc-icon">
                    {it.icon}
                  </div>

                  <span className="wpc-inc-tag">
                    {it.tag}
                  </span>
                </div>

                <h4>{it.title}</h4>

                <p>{it.desc}</p>

                <div className="wpc-inc-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="wpc-section">
        <div className="wpc-container">
          <div className="wpc-section-head center wpc-reveal">
            <span className="wpc-eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              From initial wellness assessment to physician review
            </h2>
          </div>

          <div className="wpc-steps-wrap">
            <div className="wpc-steps-line"></div>

            <div className="wpc-steps">
              {steps.map((s, i) => (
                <div
                  className={`wpc-step wpc-reveal ${
                    i === 1
                      ? "wpc-d1"
                      : i === 2
                      ? "wpc-d2"
                      : i === 3
                      ? "wpc-d3"
                      : ""
                  }`}
                  key={i}
                >
                  <span className="wpc-step-tag">
                    {s.tag}
                  </span>

                  <div className="wpc-step-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <h4>{s.title}</h4>

                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY MATTERS — DARK */}
      <section className="wpc-why-dark">
        <div className="wpc-why-grid">
          <div className="wpc-why-left">
            <span className="wpc-eyebrow light wpc-reveal">
              WHY THIS MATTERS IN PONDICHERRY
            </span>

            <h2 className="wpc-reveal wpc-d1">
              Elderly care shouldn't begin only after something goes wrong.
            </h2>

            <p className="wpc-reveal wpc-d2">
              Elderly home care in Pondicherry is often structured
              reactively — care begins only after a fall, a hospitalization,
              or a significant health decline. That pattern is common across
              the wider home healthcare landscape in Puducherry, not specific
              to any one provider.
            </p>

            <p className="wpc-reveal wpc-d2">
              Aureal Healthcare's wellness and preventive model exists to
              shift that pattern — identifying and managing risk before it
              becomes a crisis, under consistent physician-guided oversight.
            </p>

            <div className="wpc-why-points wpc-reveal wpc-d3">
              <div className="bad">
                <i>✕</i>

                <span>
                  Usual: Care begins after a fall, hospitalization, or
                  significant health decline
                </span>
              </div>

              <div className="good">
                <i>✓</i>

                <span>
                  Aureal Healthcare: Routine monitoring identifies risks
                  early, with physician escalation when needed
                </span>
              </div>
            </div>

            <div className="wpc-people-ask wpc-reveal wpc-d4">
              <p>People also ask:</p>

              {peopleAlsoAsk.map((q) => (
                <span key={q}>{q}</span>
              ))}
            </div>
          </div>

          <div className="wpc-why-right wpc-reveal">
            <img
              src="/well4.jpg"
              alt="Elderly person receiving preventive wellness care at home"
            />

            <div className="wpc-why-card">
              <h4>
                Doctor-Led Difference
              </h4>

              <p>
                Preventive care is supported by a clear physician escalation
                pathway so concerning trends are reviewed promptly rather
                than simply recorded for the next visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO + TRUST */}
      <section className="wpc-section">
        <div className="wpc-container">
          <div className="wpc-grid-2">
            <div className="wpc-reveal">
              <span className="wpc-eyebrow">
                THE AUREAL HEALTHCARE DOCTOR-LED DIFFERENCE
              </span>

              <h2 className="wpc-h2">
                Preventive care is only as good as the clinical judgment
                behind it.
              </h2>

              <p className="wpc-p">
                Preventive care is only as good as the clinical judgment
                behind it — Aureal Healthcare's wellness program is
                designed so that any concerning trend is escalated to a
                physician promptly, not just logged and left for the next
                visit.
              </p>

              <p className="wpc-p">
                <strong>
                  This doctor-led escalation pathway
                </strong>{" "}
                is what separates genuine preventive care from a routine
                check-in that never actually changes anything about the
                patient's management.
              </p>

              <div className="wpc-trust-box">
                <h4>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1E8E5A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>

                  Trust &amp; Credibility
                </h4>

                <p>
                  Wellness and preventive care follows the same doctor-led
                  clinical governance used across every Aureal Healthcare program. Because concerning trends are
                  escalated promptly to a physician, families get a genuinely
                  proactive layer of care, not just a routine visit log.
                </p>

                <div className="wpc-trust-list">
                  <div>
                    <i>✓</i>

                    <span>
                      Routine wellness monitoring designed to identify
                      concerning health trends early
                    </span>
                  </div>

                  <div>
                    <i>✓</i>

                    <span>
                      Concerning changes are escalated promptly to a physician
                      for review and plan adjustment
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="wpc-reveal wpc-d1">
              <div className="wpc-who-title">
                WHO IT'S FOR
              </div>

              <div className="wpc-who-grid">
                {whoCards.map((c, i) => (
                  <div
                    className="wpc-who-card"
                    key={i}
                  >
                    <i>{c.icon}</i>

                    <p>{c.text}</p>
                  </div>
                ))}
              </div>

              <div className="wpc-related">
                <h4>
                  Related Aureal Healthcare Services
                </h4>

                <div className="wpc-related-links">
                  {relatedLinks.map((l) => (
                    <a href={RELATED_ROUTES[l] || "/services"} key={l}>
                      {l} <span>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wpc-section faq">
        <div className="wpc-container">
          <div className="wpc-section-head center wpc-reveal">
            <span className="wpc-eyebrow">
              FAQ
            </span>

            <h2>
              Elderly Wellness &amp; Preventive Care — Common Questions
            </h2>
          </div>

          <div className="wpc-faq-list wpc-reveal wpc-d1">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`wpc-faq-item ${
                  openFaq === i ? "open" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === i ? null : i
                    )
                  }
                  className="wpc-faq-q"
                  aria-expanded={openFaq === i}
                >
                  <span>{f.q}</span>

                  <span className="wpc-faq-icon">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div className="wpc-faq-a">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wpc-cta">
        <div className="wpc-container wpc-cta-inner">
          <div>
            <h2>
              Set up proactive elderly wellness and preventive care in
              Pondicherry
            </h2>

            <p>
              Support your elderly parent before the next health crisis —
              with routine wellness monitoring, fall-risk assessment, chronic
              condition management, and physician-guided escalation when
              needed.
            </p>

           
          </div>

          
<div className="wpc-cta-actions">
  <button
    className="wpc-btn primary"
    style={{
      background: "var(--white)",
      color: "var(--dark)",
    }}
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Book Elderly Wellness Consultation
  </button>

  <a
    href="tel:+919944969049"
    className="wpc-btn ghost"
  >
    Talk to Care Coordinator
  </a>
</div>


        </div>
      </section>

      {/* FOOTER STRIP */}
      
    </div>
  );
}