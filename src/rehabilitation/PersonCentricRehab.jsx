import { goTo } from "../utils/goTo";
import React, { useState } from "react";
import "./PersonCentricRehab.css";

const rehabServices = [
  {
    icon: "🎯",
    title: "Individualized Assessment",
    desc: "Every rehabilitation plan starts with an assessment of the patient's specific condition, goals, mobility, and home environment in Chennai — not a standard template.",
    tag: "Personalized Care",
    highlight: true,
  },
  {
    icon: "👨‍⚕️",
    title: "Physician-Informed Rehab Planning",
    desc: "For complex or post-surgical cases, the physiotherapy plan is aligned with the overseeing physician's broader care plan rather than being designed in isolation.",
    tag: "Doctor Coordinated",
    highlight: true,
  },
  {
    icon: "🏠",
    title: "Home-Environment-Specific Therapy",
    desc: "Exercises and mobility training are adapted to the patient's actual home environment, including stairs, furniture, bathroom layout, and daily routine.",
    tag: "Home Based",
    highlight: true,
  },
  {
    icon: "📈",
    title: "Progressive Plan Adjustment",
    desc: "The rehabilitation plan is reviewed and revised as the patient improves, rather than repeating the same exercises regardless of progress.",
    tag: "Progress Driven",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Education",
    desc: "Families are shown how to safely support exercises and mobility between therapist visits, helping patients continue their recovery safely at home.",
    tag: "Family Support",
  },
  {
    icon: "📊",
    title: "Documented Progress Tracking",
    desc: "Patient progress is monitored against individual rehabilitation goals so families can see meaningful, measurable progress instead of following a static exercise routine.",
    tag: "Measured Recovery",
  },
];

const rehabFaqs = [
  {
    q: "Is physiotherapy at home effective compared to clinic visits?",
    a: "For many conditions, home-based physiotherapy can be more effective because training happens in the patient's actual living environment — the same stairs and layout they need to navigate daily — while also removing the burden of travel for patients with limited mobility.",
  },
  {
    q: "How is person-centric rehab different from standard physiotherapy?",
    a: "Person-centric rehabilitation starts from the individual patient's goals, condition, and home environment rather than applying a standard protocol to every patient. The plan is then adjusted according to the patient's specific progress.",
  },
  {
    q: "Is a doctor involved in my physiotherapy plan?",
    a: "For complex or post-surgical cases, the physiotherapy plan is coordinated with the overseeing physician as part of the broader doctor-led care plan. Straightforward cases are managed directly by the physiotherapist.",
  },
  {
    q: "Which areas of Chennai offer home physiotherapy?",
    a: "Home physiotherapy is available across Chennai town and surrounding areas including White Town, Muthialpet, Lawspet, Reddiarpalayam, Ozhukarai, and Ariyankuppam.",
  },
  {
    q: "How often will the physiotherapist visit?",
    a: "Visit frequency depends on the patient's condition and recovery stage and is set as part of the personalized rehabilitation plan rather than following a fixed schedule applied to everyone.",
  },
  {
    q: "Can family members help with exercises between visits?",
    a: "Yes. Families are shown how to safely support exercises and mobility work between therapist visits as part of the rehabilitation plan.",
  },
];

export default function PersonCentricRehab() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="pcr-page">

      {/* HERO SECTION */}
      <section className="pcr-hero">
        <div className="pcr-hero-bg-pattern"></div>

        <div className="pcr-container">
          <div className="pcr-hero-grid">

            <div className="pcr-hero-left">

              <div className="pcr-breadcrumb">
                Rehabilitation /{" "}
                <span>Physiotherapy at Home Chennai</span>
              </div>

              <div className="pcr-pill">
                <span className="pcr-pulse-dot"></span>
                PERSON-CENTRIC • DOCTOR-LED • Chennai
              </div>

              <h1>
                Person-Centric Physiotherapy and Rehabilitation at Home in
                Chennai
              </h1>

              <p className="pcr-hero-sub">
                Physiotherapy at home in Chennai built around each
                patient's specific goals and condition — designed with
                physician input and adjusted as recovery progresses, not a
                one-size-fits-all exercise sheet.
              </p>

              <div className="pcr-quick-answer">
                <div className="pcr-quick-label">⚡ QUICK ANSWER</div>

                <p>
                  Aureal Healthcare provides person-centric physiotherapy
                  at home across Chennai — each rehabilitation plan is
                  built around the individual patient's condition, goals, and
                  pace of recovery, with physician input at the start and
                  therapist-led adjustments throughout, rather than a
                  standardized program applied to every patient.
                </p>
              </div>

              <div className="pcr-hero-actions">
  {/* Book Consultation → Appointment Page */}
  <button
    className="pcr-btn pcr-btn-primary"
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Book Consultation
  </button>

  {/* Talk to Care Coordinator → Phone Dial Pad */}
  <button
    className="pcr-btn pcr-btn-secondary"
    onClick={() => {
      window.location.href = "tel:+919944969049";
    }}
  >
    Talk to Care Coordinator
  </button>
</div>

              <div className="pcr-location-tags">
                <span>Physiotherapy at home Chennai</span>
                <span>White Town</span>
                <span>Lawspet</span>
                <span>Muthialpet</span>
                <span>Ariyankuppam</span>
              </div>

            </div>

            <div className="pcr-hero-right">

              <div className="pcr-hero-visual">

                <img
                  className="pcr-main-img"
                  src="/person1.jpg"
                  alt="Physiotherapy at home in Chennai"
                />

                <div className="pcr-float-card pcr-float-top">
                  <div className="pcr-f-icon">🏠</div>

                  <div>
                    <b>Home Physiotherapy</b>
                    <p>Person-centric • Chennai</p>
                  </div>
                </div>

                <div className="pcr-float-card pcr-float-bottom">

                  <img
                    src="/person2.jpg"
                    alt="Doctor-led physiotherapy at home"
                  />

                  <div>
                    <b>Doctor-Led Rehabilitation</b>

                    <p>
                      Personalized plan • Progress reviewed
                    </p>

                    <div className="pcr-progress-bar">
                      <div></div>
                    </div>
                  </div>

                </div>

              </div>

              <div className="pcr-stat-row">

                <div>
                  <b>Person-Centric</b>
                  <span>Built Around You</span>
                </div>

                <div>
                  <b>Home-Based</b>
                  <span>Real Environment</span>
                </div>

                <div>
                  <b>Progressive</b>
                  <span>Adjusted Over Time</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="pcr-section pcr-overview">

        <div className="pcr-container">

          <div className="pcr-grid-2">

            <div className="pcr-overview-media">

              <img
                className="pcr-ov-img-1"
                src="/person3.jpg"
                alt="Home rehabilitation Chennai"
              />

              

              <div className="pcr-ov-badge">
                <h4>Built Around You</h4>
                <p>Not a generic routine</p>
              </div>

            </div>

            <div>

              <span className="pcr-eyebrow">
                OVERVIEW
              </span>

              <h2>
                Physiotherapy works best when it is built around the
                individual patient.
              </h2>

              <p className="pcr-p">
                "Physiotherapy at home" is one of the most searched home
                healthcare terms in Chennai, but the quality of that
                service varies enormously — from a generic set of exercises
                handed out on a sheet, to a plan genuinely built around what
                a specific patient needs to recover. Aureal Healthcare's
                rehabilitation model is person-centric by design.
              </p>

              <p className="pcr-p">
                Person-centric means the plan starts with the patient's actual
                goals — walking independently again after a stroke, regaining
                strength after a hip replacement, managing chronic back pain
                without surgery — rather than a standard protocol applied
                regardless of the individual's situation, age, or home
                environment.
              </p>

              <div className="pcr-quote">
                For families across Chennai, rehabilitation happens in the
                environment the patient actually lives in — the same stairs,
                the same bathroom, and the same daily routine — making therapy
                practical and relevant to real-world recovery.
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHAT'S INCLUDED */}
      <section className="pcr-section pcr-included">

        <div className="pcr-container">

          <div className="pcr-section-head">

            <span className="pcr-eyebrow">
              WHAT'S INCLUDED
            </span>

            <h2>
              Person-centric home rehabilitation in Chennai
            </h2>

          </div>

          <div className="pcr-included-grid">

            {rehabServices.map((item, index) => (

              <div
                key={index}
                className={`pcr-inc-card ${
                  item.highlight ? "pcr-highlight" : ""
                }`}
              >

                <div className="pcr-inc-top">

                  <div className="pcr-inc-icon">
                    {item.icon}
                  </div>

                  <span className="pcr-inc-tag">
                    {item.tag}
                  </span>

                </div>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.desc}
                </p>

                <div className="pcr-inc-num">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="pcr-section pcr-how">

        <div className="pcr-container">

          <div className="pcr-section-head center">

            <span className="pcr-eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              From home assessment to progressive recovery
            </h2>

          </div>

          <div className="pcr-steps-wrap">

            <div className="pcr-steps-line"></div>

            <div className="pcr-steps">

              <div className="pcr-step">

                <div className="pcr-step-circle">
                  01
                </div>

                <h4>
                  Initial Assessment
                </h4>

                <p>
                  A physiotherapist evaluates the patient's condition,
                  mobility, goals, and home environment at home in
                  Chennai.
                </p>

              </div>

              <div className="pcr-step">

                <div className="pcr-step-circle">
                  02
                </div>

                <h4>
                  Personalized Plan Design
                </h4>

                <p>
                  A rehabilitation plan is built around the individual
                  patient and coordinated with the physician for complex or
                  post-surgical cases.
                </p>

              </div>

              <div className="pcr-step">

                <div className="pcr-step-circle">
                  03
                </div>

                <h4>
                  Home-Based Therapy Sessions
                </h4>

                <p>
                  Regular in-home sessions deliver the plan while adapting
                  exercises and mobility training to the patient's real
                  living environment.
                </p>

              </div>

              <div className="pcr-step">

                <div className="pcr-step-circle">
                  04
                </div>

                <h4>
                  Progress Review & Adjustment
                </h4>

                <p>
                  The plan is reviewed and adjusted regularly as the
                  patient's function improves and rehabilitation goals
                  change.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY MATTERS IN Chennai */}
      <section className="pcr-why-dark">

        <div className="pcr-container">

          <div className="pcr-why-grid">

            <div className="pcr-why-left">

              <span className="pcr-eyebrow pcr-light">
                WHY THIS MATTERS IN Chennai
              </span>

              <h2>
                Home rehabilitation built around the individual, not a
                generic routine.
              </h2>

              <p>
                Generic, one-size-fits-all exercise routines are common across
                the home physiotherapy market in Chennai, but they often
                fail to account for a patient's specific home environment,
                comorbidities, or realistic pace of recovery.
              </p>

              <p>
                Aureal Healthcare's person-centric model exists to close
                that gap — building the plan around the individual patient
                rather than a standard protocol, and adjusting it as recovery
                actually unfolds.
              </p>

              <div className="pcr-why-points">

                <div className="pcr-bad">
                  <span>✕</span>
                  Generic: One-size-fits-all exercises with limited
                  consideration of the patient's home environment
                </div>

                <div className="pcr-good">
                  <span>✓</span>
                  Aureal Healthcare: Person-centric + home-based +
                  physician-informed rehabilitation
                </div>

              </div>

              <div className="pcr-convo-queries">

                <p>
                  People also ask:
                </p>

                <span>
                  is physiotherapy at home available in Chennai?
                </span>

                <span>
                  how is person-centric rehab different from standard
                  physiotherapy?
                </span>

                <span>
                  does Aureal Healthcare offer doctor-led physiotherapy
                  in Chennai?
                </span>

              </div>

            </div>

            <div className="pcr-why-right">

              <img
                src="/person4.jpg"
                alt="Person-centric home physiotherapy"
              />

              <div className="pcr-why-card">

                <h4>
                  Aureal Healthcare Difference
                </h4>

                <p>
                  Physiotherapy is coordinated with the broader doctor-led
                  care plan for complex and medically coordinated cases.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHO IT'S FOR + TRUST */}
      <section className="pcr-section pcr-who-trust">

        <div className="pcr-container">

          <div className="pcr-grid-2">

            <div>

              <span className="pcr-eyebrow">
                THE AUREAL HEALTHCARE DOCTOR-LED DIFFERENCE
              </span>

              <h2 className="pcr-h2">
                Person-centric rehabilitation that fits into the patient's
                real life.
              </h2>

              <p className="pcr-p">
                For complex or post-surgical cases, physiotherapy at
                Aureal Healthcare is coordinated within the broader
                doctor-led care plan — the physiotherapist is not working in
                isolation from the overseeing physician's clinical judgment.
              </p>

              <div className="pcr-trust-box">

                <h4>
                  Trust & Credibility
                </h4>

                <p>
                  Rehabilitation plans follow the same doctor-led clinical
                  governance used across Aureal Healthcare
                  other programs for complex or medically coordinated cases.
                </p>

                <div className="pcr-trust-list">

                  <div>
                    <span>✓</span>
                    Plans built around individual patient needs
                  </div>

                  <div>
                    <span>✓</span>
                    Progress reviewed and adjusted regularly
                  </div>

                  <div>
                    <span>✓</span>
                    Physician coordination for complex cases
                  </div>

                  <div>
                    <span>✓</span>
                    Measurable, documented rehabilitation progress
                  </div>

                </div>

              </div>

            </div>

            <div>

              <div className="pcr-who-title">
                WHO IT'S FOR
              </div>

              <div className="pcr-who-grid">

                <div className="pcr-who-card">

                  <span>🚶</span>

                  <p>
                    Stroke patients working to regain mobility and
                    independence at home in Chennai
                  </p>

                </div>

                <div className="pcr-who-card">

                  <span>🏥</span>

                  <p>
                    Post-surgical patients recovering from joint replacement,
                    fracture repair, or spinal surgery
                  </p>

                </div>

                <div className="pcr-who-card">

                  <span>👴</span>

                  <p>
                    Elderly patients managing chronic pain or reduced
                    mobility who want to avoid unnecessary hospital or clinic
                    visits
                  </p>

                </div>

                <div className="pcr-who-card">

                  <span>👨‍👩‍👧</span>

                  <p>
                    Families who tried generic home exercise sheets without
                    meaningful progress and want a genuinely personalized
                    plan
                  </p>

                </div>

              </div>

              <div className="pcr-related">

                <h4>
                  Related Aureal Healthcare Services
                </h4>

                <div className="pcr-related-links">

                  <a href="/ComprehensiveNeuroRehab">
                    Comprehensive Neuro Rehab →
                  </a>

                  <a href="/TherapeuticModalities">
                    Therapeutic Modalities →
                  </a>

                  <a href="/Integrated-Doctor-Led-Team">
                    Integrated Doctor-Led Team →
                  </a>

                  <a href="/ContinuumofCare">
                    Continuum of Care →
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="pcr-section pcr-faq">

        <div className="pcr-container">

          <div className="pcr-section-head center">

            <span className="pcr-eyebrow">
              FAQ
            </span>

            <h2>
              Physiotherapy at Home in Chennai — Common Questions
            </h2>

          </div>

          <div className="pcr-faq-list">

            {rehabFaqs.map((faq, index) => (

              <div
                key={index}
                className={`pcr-faq-item ${
                  openFaq === index ? "pcr-open" : ""
                }`}
              >

                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="pcr-faq-q"
                >

                  <span>
                    {faq.q}
                  </span>

                  <span className="pcr-faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>

                </button>

                {openFaq === index && (

                  <div className="pcr-faq-a">

                    <p>
                      {faq.a}
                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="pcr-cta">

        <div className="pcr-container pcr-cta-inner">

          <div>

            <h2>
              Book a home physiotherapy assessment in Chennai
            </h2>

            <p>
              A rehabilitation plan built around you, not a generic routine.
            </p>

          </div>

          <div className="pcr-cta-actions">

  <button
    className="pcr-btn pcr-btn-light"
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Book Consultation
  </button>

  <a
  href="tel:+919944969049"
  className="pcr-btn pcr-btn-outline"
  style={{
    color: "#FFFFFF",
    border: "1px solid #FFFFFF",
  }}
>
  Talk to Care Coordinator
</a>

</div>

        </div>

      </section>

    </div>
  );
}