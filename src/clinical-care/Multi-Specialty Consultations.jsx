import { goTo } from "../utils/goTo";

import React, { useState } from "react";
import "./Multi-Specialty Consultations.css";

const faqs = [
  {
    q: "What does “doctor-led multi-specialty consultation” mean?",
    a: "It means a physician designs and owns the overall care plan before any specialist is brought in, and every specialist consulted afterward works from that same doctor-led plan and shared medical record, rather than operating as an independent, disconnected visit."
  },
  {
    q: "Can I book a home visit doctor in Pondicherry through Aureal Healthcare?",
    a: "Yes — a home visit doctor is available across Puducherry town and the surrounding communes, with the same doctor-led record used whether the consultation happens at home or in-clinic."
  },
  {
    q: "How is this different from booking a single home doctor visit?",
    a: "A single home doctor visit typically ends with that one appointment; Aureal Healthcare's doctor-led model keeps one physician accountable for coordinating every specialist's input into a single ongoing plan."
  },
  {
    q: "Do I need a separate referral to see a specialist?",
    a: "No separate referral process is required within the doctor-led network — your care coordinator arranges the right specialist based on the overseeing physician's assessment."
  },
  {
    q: "Which areas of Pondicherry are covered?",
    a: "Coverage spans Puducherry town and surrounding areas including White Town, Muthialpet, Lawspet, Reddiarpalayam, Ozhukarai, Ariyankuppam, and Villianur — ask your care coordinator to confirm coverage for your exact address."
  },
  {
    q: "How quickly can a multi-specialty consultation be arranged?",
    a: "Timing depends on the specialty and urgency of the case — the initial doctor-led assessment determines which specialists are needed and how quickly they should be involved."
  },
  {
    q: "Is the medical record shared between every specialist I see?",
    a: "Yes — one unified, doctor-led medical record is shared across every specialist in your care plan, so you don't have to repeat your history at each visit."
  },
  {
    q: "Who is ultimately responsible for my care plan?",
    a: "A named physician remains accountable for your overall care plan at every stage, even as multiple specialists contribute to it — that accountability is the core of the doctor-led model."
  }
];

export default function MultiSpecialtyConsultations() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="msc-page">
      {/* HERO */}
      <section className="msc-hero">
        <div className="msc-hero-content">
          <div className="msc-breadcrumb">
            <span>Clinical Care</span> <i>/</i>{" "}
            <span className="active">Multi-Specialty Consultations</span>
          </div>

          <div className="msc-badge">
            <span className="dot"></span> Doctor-Led Model • Pondicherry
          </div>

          <h1>Doctor-Led Multi-Specialty Consultations in Pondicherry</h1>

          <p className="msc-hero-sub">
            A <strong>home visit doctor in Pondicherry</strong> backed by
            <strong> 20+ specialties and super-specialties</strong>, with a
            single shared medical record, led end-to-end by a physician — so
            every doctor involved in your care works from the same file,
            instead of you starting over at each visit.
          </p>

          <div className="msc-quick-answer">
            <div className="msc-quick-label">QUICK ANSWER</div>
            <p>
              Aureal Healthcare's multi-specialty consultation service in
              Pondicherry gives patients access to a home visit doctor plus
              20+ specialties and super-specialties under one doctor-led care
              plan, with every consulting physician working from a single
              shared medical record — so care stays coordinated instead of
              fragmented across separate visits.
            </p>
          </div>

          <div className="msc-hero-actions">
  <button
    className="msc-btn primary"
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
    Book Consultation in Pondicherry
  </button>

  <a
    href="tel:+919944969049"
    className="msc-btn secondary"
  >
    <span>Talk to Care Coordinator</span>
  </a>
</div>

          <div className="msc-trust-row">
            <div className="avatars">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="doctor"
              />
              <img
                src="https://i.pravatar.cc/100?img=32"
                alt="doctor"
              />
              <img
                src="https://i.pravatar.cc/100?img=8"
                alt="doctor"
              />
            </div>

            <p>
              Trusted by families across Pondicherry & Puducherry
            </p>
          </div>
        </div>

        <div className="msc-hero-visual">
          <div className="msc-image-card main">
            <img
              src="/multi1.jpg"
              alt="Doctor led multi-specialty consultation in Pondicherry"
            />

            <div className="msc-float-card top">
              <div className="icon">🩺</div>
              <div>
                <strong>One Shared Record</strong>
                <span>No repeated history</span>
              </div>
            </div>

            <div className="msc-float-card bottom">
              <div className="icon green">✓</div>
              <div>
                <strong>Physician-Owned Plan</strong>
                <span>Single point of accountability</span>
              </div>
            </div>
          </div>

          <div className="msc-stats">
            <div>
              <b>20+</b>
              <span>Specialties</span>
            </div>

            <div>
              <b>1</b>
              <span>Unified Record</span>
            </div>

            <div>
              <b>24/7</b>
              <span>Initial Triage</span>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="msc-section overview">
        <div className="msc-container">
          <div className="msc-grid-2">
            <div>
              <h2 className="msc-h2">
                Coordination is the real medicine, not just access.
              </h2>

              <p className="msc-p">
                Pondicherry households searching for a{" "}
                <strong>home visit doctor</strong> or{" "}
                <strong>doctor at home</strong> are usually looking for more
                than a single appointment — they need someone who can see the
                whole picture.
              </p>

              <p className="msc-p">
                Aureal Healthcare is built around a{" "}
                <strong>doctor-led structure</strong>: a physician designs and
                owns the overall care plan, and every specialist consulted
                afterward — cardiologist, neurologist, geriatrician, or
                physiotherapist — works from that same plan and the same
                medical record.
              </p>

              <div className="msc-highlight-box">
                <p>
                  For families in Pondicherry managing a condition that touches
                  more than one system of the body — an elderly parent with
                  diabetes, hypertension, and mobility issues, for example —
                  this doctor-led coordination removes the burden of being the
                  one who has to re-explain the same history to every new
                  specialist.
                </p>
              </div>

              <p className="msc-p small">
                The specialist network is accessible either at home or
                in-clinic, with the same doctor-led record following the
                patient regardless of where the consultation happens — a
                distinction that matters across Puducherry town, White Town,
                Muthialpet, Lawspet, Reddiarpalayam, Ozhukarai, and
                Ariyankuppam, where travel itself can be a barrier to getting
                the right care quickly.
              </p>
            </div>

            <div className="msc-img-stack">
              <img
                className="img1"
                src="/multi2.jpg"
                alt="Specialist healthcare team"
              />

              
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="msc-section included">
        <div className="msc-container">
          <div className="msc-section-head">
            <span className="msc-eyebrow">WHAT'S INCLUDED</span>

            <h2>
              Everything coordinated under one physician-led plan
            </h2>
          </div>

          <div className="msc-cards-5">
            <div className="msc-card">
              <div className="msc-card-icon">🧭</div>

              <h3>Doctor-led Initial Triage</h3>

              <p>
                Every patient begins with a physician-led assessment that
                determines which specialists are actually needed — not a
                generic intake form.
              </p>
            </div>

            <div className="msc-card">
              <div className="msc-card-icon">🏥</div>

              <h3>20+ Specialties & Super-Specialties</h3>

              <p>
                From general medicine to geriatrics, cardiology, and neurology,
                all coordinated within one doctor-led network serving
                Pondicherry.
              </p>
            </div>

            <div className="msc-card">
              <div className="msc-card-icon">📁</div>

              <h3>One Shared Medical Record</h3>

              <p>
                Every specialist who sees the patient — this visit or the next
                — works from the same unified record, established and
                maintained under physician oversight.
              </p>
            </div>

            <div className="msc-card">
              <div className="msc-card-icon">🔄</div>

              <h3>Coordinated In-Network Referrals</h3>

              <p>
                Referrals between specialists happen inside the same
                doctor-led plan, avoiding duplicate tests and repeated
                paperwork.
              </p>
            </div>

            <div className="msc-card">
              <div className="msc-card-icon">🏠</div>

              <h3>Home Visit or In-Clinic, Your Choice</h3>

              <p>
                Patients across Pondicherry can choose a home visit doctor
                consultation or an in-clinic visit, with the doctor-led record
                carrying over either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="msc-section steps">
        <div className="msc-container">
          <div className="msc-section-head center">
            <span className="msc-eyebrow">HOW IT WORKS</span>

            <h2>
              From first assessment to ongoing review
            </h2>
          </div>

          <div className="msc-stepper">
            <div className="msc-step">
              <div className="num">01</div>

              <div className="content">
                <h4>Initial Physician Assessment</h4>

                <p>
                  A doctor reviews the patient's condition and history and
                  identifies which specialists are actually needed — the first
                  and most important doctor-led decision in the process.
                </p>
              </div>
            </div>

            <div className="msc-step">
              <div className="num">02</div>

              <div className="content">
                <h4>Specialist Coordination</h4>

                <p>
                  The relevant specialists are brought into the same care
                  plan, each working from the same doctor-led record rather
                  than starting a new file.
                </p>
              </div>
            </div>

            <div className="msc-step">
              <div className="num">03</div>

              <div className="content">
                <h4>Consultation Delivery</h4>

                <p>
                  Consultations happen at home or in-clinic across Pondicherry
                  and surrounding communes, based on the patient's condition
                  and preference.
                </p>
              </div>
            </div>

            <div className="msc-step">
              <div className="num">04</div>

              <div className="content">
                <h4>Ongoing Doctor-Led Review</h4>

                <p>
                  The overseeing physician reviews the combined specialist
                  input and keeps the care plan aligned as the patient's needs
                  evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="msc-section why">
        <div className="msc-container">
          <div className="msc-why-box">
            <div className="why-content">
              <span className="msc-eyebrow light">
                WHY THIS MATTERS IN PONDICHERRY
              </span>

              <h2>
                Ending the cycle of fragmented care
              </h2>

              <p>
                Pondicherry families searching for a home visit doctor today
                typically find single-doctor or single-service listings — a
                doctor for one visit, a separate nursing agency for another, a
                separate ambulance operator for a third. Coordinating those
                three yourself, while also managing an elderly parent's
                health, is a real burden common across the home healthcare
                landscape in Puducherry, not a flaw specific to any one
                provider.
              </p>

              <p>
                Aureal Healthcare's doctor-led, multi-specialty model
                exists specifically to close that gap — one physician-owned
                care plan, one shared record, and every specialist working
                inside the same coordinated structure, whether the patient is
                seen in Puducherry town or in the surrounding communes.
              </p>

              <ul className="msc-check-list">
                <li>One physician-owned care plan</li>
                <li>One shared record across all visits</li>
                <li>
                  Every specialist working inside the same structure
                </li>
              </ul>

              <div className="msc-note">
                Whether the patient is seen in Puducherry town or surrounding
                communes — coordination stays intact.
              </div>
            </div>

            <div className="why-image">
              <img
                src="/multi3.jpg"
                alt="Home healthcare in Pondicherry"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="msc-section diff">
        <div className="msc-container">
          <div className="msc-grid-2">
            <div className="diff-left">
              <span className="msc-eyebrow">
                THE AUREAL HEALTHCARE DOCTOR-LED DIFFERENCE
              </span>

              <h2>
                Accountability that fragmented models miss
              </h2>

              <p className="msc-p">
                Every Aureal Healthcare service in Pondicherry is built
                around a doctor-led model: a physician designs the care plan,
                and every other professional involved — specialist, nurse,
                therapist — works inside that plan rather than operating
                independently.
              </p>

              <p className="msc-p">
                For multi-specialty consultations specifically, doctor-led
                means one physician remains accountable for the whole picture
                even as multiple specialists get involved, so no decision is
                made in isolation from the patient's overall health status.
              </p>

              <div className="diff-compare">
                <div className="compare-col bad">
                  <h5>Usual Way</h5>

                  <ul>
                    <li>Separate files per specialist</li>
                    <li>Patient repeats history</li>
                    <li>No single owner</li>
                  </ul>
                </div>

                <div className="compare-col good">
                  <h5>Aureal Healthcare Way</h5>

                  <ul>
                    <li>One unified record</li>
                    <li>Physician owns plan</li>
                    <li>Specialists aligned</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="diff-cards">
              <div className="trust-card">
                <h4>Trust & Credibility</h4>

                <p>
                  Every consultation in Pondicherry is governed by the same
                  doctor-led clinical protocols Aureal Healthcare applies
                  across all of its home care programs —
                  physician-designed, not just caregiver-delivered.
                </p>

                <div className="trust-badge">
                  <span>✓</span> Single accountable clinical voice, not
                  disconnected opinions
                </div>
              </div>

              <div className="persona-title">
                Who It's For
              </div>

              <div className="persona-grid">
                <div className="persona">
                  <span>👨‍👩‍👧</span>

                  <p>
                    A family managing multiple conditions in an elderly parent
                    who needs one coordinated plan, not four separate ones
                  </p>
                </div>

                <div className="persona">
                  <span>🦿</span>

                  <p>
                    A post-surgical patient who needs a surgeon, physician, and
                    physiotherapist aligned under one doctor-led plan
                  </p>
                </div>

                <div className="persona">
                  <span>✈️</span>

                  <p>
                    Families coordinating care for a relative in Pondicherry
                    from abroad or another city, who need one accountable
                    point of contact instead of many
                  </p>
                </div>

                <div className="persona">
                  <span>🔍</span>

                  <p>
                    Patients with a complex or unclear diagnosis who need a
                    physician to direct which specialists are actually
                    relevant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="msc-section faq">
        <div className="msc-container">
          <div className="msc-section-head center">
            <span className="msc-eyebrow">FAQ</span>

            <h2>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="msc-faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`msc-faq-item ${
                  activeFaq === i ? "open" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === i ? null : i)
                  }
                  className="faq-q"
                >
                  <span>{f.q}</span>

                  <span className="faq-icon">
                    {activeFaq === i ? "−" : "+"}
                  </span>
                </button>

                {activeFaq === i && (
                  <div className="faq-a">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="msc-section related">
        <div className="msc-container">
          <div className="related-head">
            <h3>
              Related Aureal Healthcare Services
            </h3>

            <p>
              Integrated care beyond consultations
            </p>
          </div>

          <div className="related-grid">
            <a href="/Integrated-Doctor-Led-Team" className="related-card">
              Integrated Doctor-Led Team →
            </a>

            <a href="/ContinuumofCare" className="related-card">
              Continuum of Care →
            </a>

            <a href="/AdvancedDiagnostics" className="related-card">
              Advanced Diagnostics →
            </a>

            <a href="/EmergencySupport" className="related-card">
              24/7 Emergency Support & Teleconsultation →
            </a>
          </div>
        </div>
      </section>

      {/* CTA 
      <section className="msc-section cta">
        <div className="msc-container">
          <div className="msc-cta-box">
            <h2>
              Book a doctor-led multi-specialty consultation in Pondicherry
            </h2>

            <p>
              One physician-owned care plan, every specialist aligned.
            </p><br />

            <button className="msc-btn primary">
              Book Consultation in Pondicherry
            </button>
          </div>
        </div>
      </section>*/}
    </div>
  );
}