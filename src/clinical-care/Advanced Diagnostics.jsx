import { goTo } from "../utils/goTo";
import React, { useState } from "react";
import "./Advanced Diagnostics.css";

const includedData = [
  {
    icon: "🧪",
    title: "Home Blood Collection",
    desc: "Trained phlebotomy staff collect samples at home across Pondicherry, under protocols set by the overseeing physician.",
    tag: "Blood Test at Home",
  },
  {
    icon: "💓",
    title: "ECG & Point-of-Care Testing at Home",
    desc: "Cardiac and other point-of-care diagnostics are available at home, with results reviewed by the physician on the same care plan.",
    tag: "ECG at Home",
    highlight: true,
  },
  {
    icon: "👨‍⚕️",
    title: "Physician-Reviewed Results",
    desc: "Every result is reviewed in the context of the patient's condition and history — not sent back as a standalone report with no clinical follow-through.",
    tag: "Doctor Reviewed",
    highlight: true,
  },
  {
    icon: "📋",
    title: "Coordinated With the Care Plan",
    desc: "Test results feed directly into the doctor-led plan, triggering a medication change, specialist referral, or monitoring adjustment where needed.",
    tag: "Care Plan Integrated",
  },
  {
    icon: "🔄",
    title: "Routine Chronic Condition Monitoring",
    desc: "Recurring tests for diabetes, hypertension, and kidney function are scheduled as part of ongoing doctor-led management, not one-off visits.",
    tag: "Ongoing Monitoring",
  },
];

const faqs = [
  {
    q: "Is home blood collection available across Pondicherry?",
    a: "Yes — home blood collection and other diagnostic services are available across Puducherry town and surrounding areas as part of a doctor-led care plan.",
  },
  {
    q: "Who reviews my test results?",
    a: "The same physician managing your overall care plan reviews every diagnostic result, rather than the result being sent back with no clinical follow-through.",
  },
  {
    q: "Can I request a specific test without a doctor's order?",
    a: "Aureal Healthcare's model is doctor-led — tests are ordered as part of a physician-designed plan so results are clinically relevant and properly interpreted; speak to your care coordinator about arranging an assessment first.",
  },
  {
    q: "How is home ECG testing done?",
    a: "Trained staff perform ECG and other point-of-care testing at the patient's home in Pondicherry, with results reviewed by the overseeing physician.",
  },
  {
    q: "How often are diagnostic tests repeated for chronic conditions?",
    a: "Frequency is set by the physician based on the condition being monitored — diabetes, hypertension, and kidney function typically follow a recurring schedule as part of the doctor-led plan.",
  },
  {
    q: "What happens if a test result is abnormal?",
    a: "The overseeing physician reviews the result against the patient's history and adjusts the care plan — medication, referral, or closer monitoring — as clinically indicated.",
  },
];

export default function AdvancedDiagnostics() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="advd-page">
      {/* HERO */}
      <section className="advd-hero">
        <div className="advd-hero-left">
          <div className="advd-breadcrumb">
            Clinical Care /{" "}
            <span>Home Diagnostics Pondicherry</span>
          </div>

          <div className="advd-pill">
            <span></span> DOCTOR-LED • PHYSICIAN-REVIEWED • PONDICHERRY
          </div>

          <h1>
            Doctor-Led Home Diagnostics in Pondicherry — Blood Collection,
            ECG, and More
          </h1>

          <p className="advd-hero-sub">
            Home blood collection, ECG, and diagnostic testing across
            Pondicherry — ordered, interpreted, and acted on by a physician as
            part of your doctor-led care plan, not a disconnected lab result.
          </p>

          <div className="advd-quick">
            <div className="advd-quick-label">⚡ QUICK ANSWER</div>

            <p>
              Aureal Healthcare provides home blood collection, ECG, and
              other diagnostic tests across Pondicherry, always ordered and
              reviewed by the overseeing physician as part of the patient's
              doctor-led care plan — so results directly inform the next
              clinical decision rather than sitting unreviewed.
            </p>
          </div>

          <div className="advd-hero-actions">
  <button
    className="advd-btn primary"
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
    className="advd-btn secondary"
  >
    Talk to Care Coordinator
  </a>
</div>

          <div className="advd-loc-tags">
            <span>Home blood test near me Pondicherry</span>
            <span>ECG at home Puducherry</span>
            <span>White Town</span>
            <span>Lawspet</span>
            <span>Muthialpet</span>
            <span>Ozhukarai</span>
          </div>
        </div>

        <div className="advd-hero-right">
          <div className="advd-hero-visual">
            <img
              className="advd-main-img"
              src="/advance1.jpg"
              alt="Home diagnostics Pondicherry"
            />

            <div className="advd-float-card top">
              <div className="advd-f-icon">❤️</div>

              <div>
                <b>Home ECG Testing</b>
                <p>Physician-reviewed diagnostic results</p>
              </div>
            </div>

            <div className="advd-float-card bottom">
              <img
                src="/advance2.jpg"
                alt="Home blood collection"
              />

              <div>
                <b>Home Blood Collection</b>
                <p>Trained staff • Doctor-led care plan</p>

                <div className="advd-progress">
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="advd-stat-row">
            <div>
              <b>Doctor-Led</b>
              <span>Physician Reviewed Results</span>
            </div>

            <div>
              <b>At-Home</b>
              <span>Sample Collection & Testing</span>
            </div>

            <div>
              <b>Integrated</b>
              <span>Care Plan Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="advd-section overview">
        <div className="advd-container">
          <div className="advd-grid-2">
            <div className="advd-overview-media">
              <img
                className="ov-img-1"
                src="/advance3.jpg"
                alt="Home blood sample collection"
              />

              
              <div className="advd-ov-badge">
                <h4>Diagnostics is more than a report</h4>
                <p>Every result is physician-reviewed</p>
              </div>
            </div>

            <div>
              <span className="advd-eyebrow">OVERVIEW</span>

              <h2>
                Home blood collection is only as useful as what happens after
                the result.
              </h2>

              <p className="advd-p">
                Home blood collection is one of the most commonly searched home
                healthcare services in Pondicherry — but a standalone lab
                result, without a physician reviewing it in the context of the
                patient's overall condition, is only half the value. Aureal Healthcare's diagnostics service is built to close that
                gap.
              </p>

              <p className="advd-p">
                Every diagnostic test — blood collection, ECG, or other
                point-of-care testing — is ordered by the overseeing physician
                as part of the patient's doctor-led plan, and the results are
                reviewed by that same physician, who then adjusts the care plan
                if needed.
              </p>

              <div className="advd-quote">
                For elderly patients and those managing chronic conditions
                across Pondicherry, regular monitoring can happen without
                repeated trips to a lab or hospital, while still being
                interpreted by a physician who knows the patient's full
                history.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="advd-section included">
        <div className="advd-container">
          <div className="advd-section-head">
            <span className="advd-eyebrow">WHAT'S INCLUDED</span>

            <h2>Doctor-led diagnostics, from your home</h2>
          </div>

          <div className="advd-included-grid">
            {includedData.map((it, i) => (
              <div
                className={`advd-inc-card ${
                  it.highlight ? "highlight" : ""
                }`}
                key={i}
              >
                <div className="advd-inc-top">
                  <div className="advd-inc-icon">{it.icon}</div>

                  <span className="advd-inc-tag">{it.tag}</span>
                </div>

                <h4>{it.title}</h4>

                <p>{it.desc}</p>

                <div className="advd-inc-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="advd-section how">
        <div className="advd-container">
          <div className="advd-section-head center">
            <span className="advd-eyebrow">HOW IT WORKS</span>

            <h2>From physician order to care-plan adjustment</h2>
          </div>

          <div className="advd-steps-wrap">
            <div className="advd-steps-line"></div>

            <div className="advd-steps">
              <div className="advd-step">
                <div className="advd-step-circle">01</div>

                <h4>Physician Orders the Test</h4>

                <p>
                  The overseeing physician determines which diagnostic tests
                  are clinically necessary as part of the care plan.
                </p>
              </div>

              <div className="advd-step">
                <div className="advd-step-circle">02</div>

                <h4>Home Sample Collection or Testing</h4>

                <p>
                  Trained staff visit the patient's home in Pondicherry to
                  collect samples or perform point-of-care testing.
                </p>
              </div>

              <div className="advd-step">
                <div className="advd-step-circle">03</div>

                <h4>Physician Review</h4>

                <p>
                  Results are reviewed by the same physician managing the care
                  plan, in the context of the patient's full history.
                </p>
              </div>

              <div className="advd-step">
                <div className="advd-step-circle">04</div>

                <h4>Care Plan Adjustment</h4>

                <p>
                  Where results indicate a change is needed, the doctor-led
                  plan is updated — medication, referral, or monitoring
                  frequency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MATTERS */}
      <section className="advd-why-dark">
        <div className="advd-container">
          <div className="advd-why-grid">
            <div className="advd-why-left">
              <span className="advd-eyebrow light">
                WHY THIS MATTERS IN PONDICHERRY
              </span>

              <h2>
                Home diagnostics should lead to action, not just a report.
              </h2>

              <p>
                Standalone home lab collection services are common across
                Pondicherry, but a result delivered without physician
                interpretation often leaves families unsure what to do next.
                That gap is common across the wider home healthcare landscape
                in Puducherry, not specific to any one lab or provider.
              </p>

              <p>
                Aureal Healthcare's doctor-led diagnostics model exists to
                close that gap — every test result is reviewed by the physician
                managing the patient's overall plan, so results translate into
                action, not just a report.
              </p>

              <div className="advd-why-points">
                <div className="bad">
                  <span>✕</span> Usual: Home collection, standalone report,
                  family interprets alone
                </div>

                <div className="good">
                  <span>✓</span> Aureal Healthcare: Physician order +
                  physician review + care-plan adjustment
                </div>
              </div>

              <div className="advd-convo-queries">
                <p>People also ask:</p>

                <span>
                  can I get blood tests done at home in Pondicherry?
                </span>

                <span>how does home ECG testing work?</span>

                <span>
                  who reviews my diagnostic test results at home?
                </span>
              </div>
            </div>

            <div className="advd-why-right">
              <img
                src="/advance4.jpg"
                alt="Elderly patient receiving home diagnostics"
              />

              <div className="advd-why-card">
                <h4>Doctor-Led Difference</h4>

                <p>
                  Test results are reviewed against the patient's full picture
                  and directly inform the ongoing care plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO + TRUST */}
      <section className="advd-section who-trust">
        <div className="advd-container">
          <div className="advd-grid-2">
            <div>
              <span className="advd-eyebrow">
                THE AUREAL HEALTHCARE DOCTOR-LED DIFFERENCE
              </span>

              <h2 className="advd-h2">
                Diagnostics only have clinical value when someone accountable
                reviews them.
              </h2>

              <p className="advd-p">
                Diagnostics only have clinical value when someone accountable
                reviews them against the patient's full picture — that is the
                physician's role in every Aureal Healthcare diagnostic
                order.
              </p>

              <p className="advd-p">
                Ordering the right test, at the right time, for the right
                reason is itself a doctor-led decision — not every symptom
                needs every test, and over-testing without physician judgment
                can create its own confusion.
              </p>

              <div className="advd-trust-box">
                <h4>Trust & Credibility</h4>

                <p>
                  All diagnostic services in Pondicherry follow the same
                  doctor-led clinical governance used across every Aureal Healthcare program.
                </p>

                <div className="advd-trust-list">
                  <div>
                    <span>✓</span> The ordering and reviewing physician manages
                    the overall care plan
                  </div>

                  <div>
                    <span>✓</span> Test results are never interpreted in
                    isolation from the patient's broader condition
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="advd-who-title">WHO IT'S FOR</div>

              <div className="advd-who-grid">
                <div className="advd-who-card">
                  <span>👴</span>

                  <p>
                    Elderly patients in Pondicherry who need regular blood work
                    but for whom repeated hospital or lab visits are difficult
                  </p>
                </div>

                <div className="advd-who-card">
                  <span>💓</span>

                  <p>
                    Patients managing chronic conditions such as diabetes,
                    hypertension, and kidney disease who need recurring
                    monitoring
                  </p>
                </div>

                <div className="advd-who-card">
                  <span>🛌</span>

                  <p>
                    Post-surgical or post-hospitalisation patients whose
                    recovery plan requires periodic testing
                  </p>
                </div>

                <div className="advd-who-card">
                  <span>👨‍👩‍👧</span>

                  <p>
                    Families who want diagnostic results explained and acted
                    upon by a physician, not just delivered as a raw report
                  </p>
                </div>
              </div>

              <div className="advd-related">
                <h4>Related Aureal Healthcare Services</h4>

                <div className="advd-related-links">
                  <a href="/ContinuumofCare">Continuum of Care →</a>

                  <a href="/Multi-Specialty-Consultations">Multi-Specialty Consultations →</a>

                  <a href="/ComprehensiveNeuroRehab">Comprehensive Neuro Rehab →</a>

                  <a href="/WellnessPreventiveCare">Wellness & Preventive Care →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="advd-section faq">
        <div className="advd-container">
          <div className="advd-section-head center">
            <span className="advd-eyebrow">FAQ</span>

            <h2>Home Diagnostics — Common Questions</h2>
          </div>

          <div className="advd-faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`advd-faq-item ${
                  openFaq === i ? "open" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                  className="advd-faq-q"
                >
                  <span>{f.q}</span>

                  <span className="advd-faq-icon">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>

                {openFaq === i && (
                  <div className="advd-faq-a">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="advd-cta">
        <div className="advd-container advd-cta-inner">
          <div>
            <h2>
              Arrange doctor-led home diagnostics in Pondicherry
            </h2>

            <p>
              Home blood collection, ECG, and diagnostic testing — ordered,
              reviewed, and acted on by a physician as part of your care plan.
            </p>
          </div>

          <div className="advd-cta-actions">
  <button
    className="advd-btn light"
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Book Consultation
  </button>

  <a
    href="tel:+919944969049"
    className="advd-btn outline"
  >
    Talk to Care Coordinator
  </a>
</div>
        </div>
      </section>
    </div>
  );
}