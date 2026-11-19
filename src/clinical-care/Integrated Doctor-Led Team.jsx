import { goTo } from "../utils/goTo";
import React, { useState } from "react";
import "./Integrated Doctor-Led Team.css";

const includedData = [
  {
    icon: "👨‍⚕️",
    title: "Named Physician Oversight",
    desc: "Every care plan in Pondicherry is assigned to a specific, accountable physician — not a rotating pool of on-call doctors."
  },
  {
    icon: "📅",
    title: "Defined Review Cadence",
    desc: "Care plans are reviewed on a schedule set by clinical need — more frequent for high-acuity recovery, less frequent for stable long-term care — never left open-ended."
  },
  {
    icon: "🤝",
    title: "Coordinated Multidisciplinary Execution",
    desc: "Nurses, therapists, and specialists all execute the same doctor-led plan, with changes flowing back through the overseeing physician."
  },
  {
    icon: "⚡",
    title: "Direct Escalation Pathway",
    desc: "If a patient's condition changes, the doctor-led structure means a clinical decision-maker is reachable, not just a caregiving dispatcher."
  },
  {
    icon: "👨‍👩‍👧",
    title: "One Family Point of Contact",
    desc: "Families get a single, named clinical contact for the whole care journey, reducing the confusion of managing multiple disconnected providers."
  }
];

const faqs = [
  {
    q: "What is doctor-led home care?",
    a: "It means a named physician designs the care plan, sets clinical goals, and reviews progress on a defined schedule — nurses, therapists, and caregivers execute that plan under the physician's ongoing oversight, rather than working independently."
  },
  {
    q: "Is this different from ordinary home nursing care in Puducherry?",
    a: "Ordinary home nursing typically operates without a named, accountable physician behind the plan; Aureal Healthcare keeps a physician accountable for the plan from start to finish, adjusting it as the patient's condition changes."
  },
  {
    q: "How often does the doctor review my care plan?",
    a: "Review frequency is set by clinical need — more often for high-acuity recovery cases, less often for stable long-term care — but it is always scheduled, never open-ended."
  },
  {
    q: "Can I speak directly to the doctor overseeing my plan?",
    a: "Yes — every plan has a named, accountable physician and a single family point of contact, so you are not routed through a rotating call center."
  },
  {
    q: "Which parts of Pondicherry does the doctor-led team cover?",
    a: "Coverage spans Puducherry town and surrounding communes including Lawspet, Muthialpet, Reddiarpalayam, Ozhukarai, Ariyankuppam, Villianur and nearby tamil nadu areas"
  },
  {
    q: "What happens if my condition changes suddenly?",
    a: "The doctor-led structure means a clinical decision-maker — not just a caregiving dispatcher — is reachable to reassess and adjust the plan."
  }
];

export default function IntegratedDoctorLedTeam() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="idl-page">

      {/* HERO */}
      <section className="idl-hero">
        <div className="idl-hero-left">

          <div className="idl-breadcrumb">
            Clinical Care / <span>Doctor-Led Care Team Pondicherry</span>
          </div>

          <div className="idl-pill">
            <span className="idl-pill-dot"></span>
            INTEGRATED CARE MODEL • PONDICHERRY
          </div>

          <h1>
            An Integrated, Doctor-Led Care Team for Every Patient in Pondicherry
          </h1>

          <p className="idl-hero-sub">
            A multidisciplinary, doctor-led team collaborates across specialties
            to design personalized treatment plans — ensuring coordinated,
            patient-centered home nursing care in Pondicherry, not just a
            rotating roster of visiting staff.
          </p>

          <div className="idl-quick-card">
            <div className="idl-quick-head">
              <span>⚡</span> QUICK ANSWER
            </div>

            <p>
              Aureal Healthcare's teams in Pondicherry are doctor-led by
              design: a physician sets the clinical goals and reviews progress
              on a defined schedule, while nurses, therapists, and specialists
              execute the plan under that physician's ongoing oversight — not
              as an independent home nursing service.
            </p>
          </div>

          <div className="idl-hero-btns">
  {/* Book Consultation */}
  <button
    type="button"
    className="idl-btn primary"
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
    Book Care-Plan Consultation
  </button>

  {/* Talk to Care Coordinator */}
  <a
    href="tel:+919944969049"
    className="idl-btn secondary"
  >
    Talk to Care Coordinator
  </a>
</div>

          <div className="idl-trust-mini">
            <div className="idl-avatars">
              <img
                src="https://i.pravatar.cc/100?img=15"
                alt="doctor"
              />
              <img
                src="https://i.pravatar.cc/100?img=16"
                alt="nurse"
              />
              <img
                src="https://i.pravatar.cc/100?img=33"
                alt="therapist"
              />
            </div>

            <span>
              Doctor-Led Clinical Care for Families Across Pondicherry
            </span>
          </div>

        </div>

        <div className="idl-hero-right">
          <div className="idl-hero-img-wrap">

            <img
              className="idl-hero-main-img"
              src="/inter1.jpg"
              alt="Doctor led team"
            />

            <div className="idl-float-card top">
              <div className="idl-f-icon">✓</div>

              <div>
                <b>Named Physician Assigned</b>
                <p>Accountable from Day One</p>
              </div>
            </div>

            <div className="idl-float-card bottom">

              <img
                src="/inter1.jpg"
                alt="team"
              />

              <div>
                <b>Multidisciplinary Team</b>

                <p>
                  Nurse • Physio • Specialist • Care Coordinator
                </p>

                <div className="idl-progress">
                  <div></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* OVERVIEW */}
      <section className="idl-section overview">
        <div className="idl-container">

          <div className="idl-grid-2">

            <div className="idl-overview-images">

              <img
                className="img-a"
                src="/inter2.jpg"
                alt="doctor consultation"
              />

              <img
                className="img-b"
                src="/inter3.jpg"
                alt="care team"
              />

              <div className="idl-exp-card">
                <h3>Doctor-Led is a Commitment</h3>
                <p>Not a Slogan</p>
              </div>

            </div>

            <div>

              <span className="idl-eyebrow">
                OVERVIEW
              </span>

              <h2>
                Why a named physician changes everything.
              </h2>

              <p className="idl-p">
                “Doctor-led” is a specific commitment, not a slogan: it means
                a named physician designs every Aureal Healthcare plan in
                Pondicherry, sets the clinical goals, and reviews progress
                against those goals at a defined cadence. The nurse or
                caregiver who visits day to day is executing that physician's
                plan, not operating independently.
              </p>

              <p className="idl-p">
                This matters most in the cases where things are most likely to
                go wrong without it — a complex wound that needs
                dressing-protocol changes as it heals, a palliative patient
                whose medication needs adjusting as symptoms change, a stroke
                patient whose rehabilitation goals need revising as they
                progress. A doctor-led structure means those judgment calls
                are made by a physician, not left to whoever is on shift.
              </p>

              <div className="idl-quote-box">
                <p>
                  For Pondicherry families, this also means a single point of
                  clinical accountability. Rather than tracking down whichever
                  staff member happens to be available, every Aureal Healthcare plan has a named physician who is answerable for it,
                  start to finish.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* WHAT'S INCLUDED */}
      <section className="idl-section included">
        <div className="idl-container">

          <div className="idl-section-head">

            <span className="idl-eyebrow">
              WHAT'S INCLUDED
            </span>

            <h2>
              Physician-designed, team-executed
            </h2>

          </div>

          <div className="idl-included-grid">

            {includedData.map((item, i) => (

              <div className="idl-inc-card" key={i}>

                <div className="idl-inc-icon">
                  {item.icon}
                </div>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.desc}
                </p>

                <div className="idl-inc-num">
                  0{i + 1}
                </div>

              </div>

            ))}

          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="idl-section how">
        <div className="idl-container">

          <div className="idl-section-head center">

            <span className="idl-eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              From assessment to continuous accountability
            </h2>

          </div>

          <div className="idl-steps">

            <div className="idl-steps-line"></div>

            <div className="idl-step">

              <div className="idl-step-circle">
                01
              </div>

              <h4>
                Physician-led Assessment
              </h4>

              <p>
                A doctor evaluates the patient's condition and sets the initial
                clinical goals for the care plan.
              </p>

            </div>


            <div className="idl-step">

              <div className="idl-step-circle">
                02
              </div>

              <h4>
                Team Assignment
              </h4>

              <p>
                Nurses, therapists, and specialists are assigned to execute
                the plan, briefed directly by the overseeing physician.
              </p>

            </div>


            <div className="idl-step">

              <div className="idl-step-circle">
                03
              </div>

              <h4>
                Ongoing Doctor-led Review
              </h4>

              <p>
                The physician reviews progress at a set cadence and adjusts
                the plan as the patient's condition changes.
              </p>

            </div>


            <div className="idl-step">

              <div className="idl-step-circle">
                04
              </div>

              <h4>
                Family Communication
              </h4>

              <p>
                The family receives updates through a single named point of
                contact tied to the doctor-led plan, not a rotating call center.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* WHY MATTERS - DARK GREEN */}
      <section className="idl-section why-dark">
        <div className="idl-container">

          <div className="idl-why-box">

            <div className="idl-why-left">

              <span className="idl-eyebrow light">
                WHY THIS MATTERS IN PONDICHERRY
              </span>

              <h2>
                Closing the biggest gap in home care.
              </h2>

              <p>
                Across Pondicherry's home care landscape, care is often
                delivered by home nursing or caregiving staff without a named,
                accountable physician behind the plan — appropriate for
                straightforward, low-acuity support, but a real gap for
                complex or high-acuity cases where the plan itself needs to
                change as the patient's condition does.
              </p>

              <p>
                Aureal Healthcare's doctor-led structure exists specifically
                to close that gap: a physician remains accountable for the plan
                throughout, not just at the point of initial assessment.
              </p>

              <div className="idl-why-points">

                <div>
                  <span>✕</span>
                  Usual: Caregiver judgment for clinical changes
                </div>

                <div className="good">
                  <span>✓</span>
                  Aureal Healthcare: Physician makes clinical judgment calls
                </div>

              </div>

            </div>


            <div className="idl-why-right">

              <img
                src="/inter4.jpg"
                alt="Pondicherry home care"
              />

              <div className="idl-why-stat">

                <h3>
                  Physician Accountable
                </h3>

                <p>
                  From Day 1 to Discharge
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* DIFFERENCE + WHO + TRUST */}
      <section className="idl-section diff-who">
        <div className="idl-container">

          <div className="idl-grid-2">

            <div>

              <span className="idl-eyebrow">
                THE AUREAL HEALTHCARE DOCTOR-LED DIFFERENCE
              </span>

              <h2 className="idl-h2">
                One question every family should ask.
              </h2>

              <p className="idl-p">
                <strong>
                  “Who is the doctor behind this plan?”
                </strong>
              </p>

              <p className="idl-p">
                Doctor-led is the defining feature of every Aureal Healthcare service, not just this one — but this page is where
                the model is most directly on display: physician-designed,
                physician-reviewed, and physician-accountable, with the
                caregiving team executing that plan rather than operating on
                its own judgment.
              </p>

              <div className="idl-trust-card">

                <h4>
                  Trust & Credibility
                </h4>

                <p>
                  Care plans are led by Aureal Healthcare's physicians and
                  consulting specialists, applying the same doctor-led
                  clinical governance standard used across every
                  Aureal Healthcare program.
                </p>

                <ul>
                  <li>
                    Consistency of clinical judgment across full duration
                  </li>

                  <li>
                    Not a new opinion every time staff rotates
                  </li>
                </ul>

              </div>

            </div>


            <div>

              <div className="idl-who-head">
                WHO IT'S FOR
              </div>

              <div className="idl-who-grid">

                <div className="idl-who-card">
                  <div className="icon">
                    🩺
                  </div>

                  <p>
                    Complex or high-acuity cases — post-operative recovery,
                    palliative care, stroke rehabilitation — that need more
                    than home nursing alone
                  </p>
                </div>


                <div className="idl-who-card">

                  <div className="icon">
                    🧑‍⚕️
                  </div>

                  <p>
                    Families who want a named doctor accountable for the plan,
                    not a rotating roster of staff
                  </p>

                </div>


                <div className="idl-who-card">

                  <div className="icon">
                    🏥 → 🏠
                  </div>

                  <p>
                    Patients transitioning between hospital and home who need
                    continuity of clinical decision-making, not a reset
                  </p>

                </div>


                <div className="idl-who-card">

                  <div className="icon">
                    🚨
                  </div>

                  <p>
                    Families managing a condition that may change quickly and
                    need a physician reachable for real decisions, not just
                    routine visits
                  </p>

                </div>

              </div>


              <div className="idl-related-mini">

                <h4>
                  Related Aureal Healthcare Services
                </h4>

                <div className="idl-related-links">

                  <a href="/Multi-Specialty-Consultations">
                    Multi-Specialty Consultations →
                  </a>

                  <a href="/ContinuumofCare">
                    Continuum of Care →
                  </a>

                  <a href="/PersonCentricRehab">
                    Person-Centric Rehab →
                  </a>

                  <a href="/PatientCoordination">
                    Patient Coordination & Cashless Treatment →
                  </a>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="idl-section faq">

        <div className="idl-container">

          <div className="idl-section-head center">

            <span className="idl-eyebrow">
              FAQ
            </span>

            <h2>
              Frequently Asked Questions
            </h2>

          </div>

          <div className="idl-faq-list">

            {faqs.map((f, i) => (

              <div
                key={i}
                className={`idl-faq-item ${
                  activeFaq === i ? "open" : ""
                }`}
              >

                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === i ? null : i)
                  }
                  className="idl-faq-q"
                >

                  <span>
                    {f.q}
                  </span>

                  <span className="idl-faq-icon">
                    {activeFaq === i ? "−" : "+"}
                  </span>

                </button>

                {activeFaq === i && (
                  <div className="idl-faq-a">
                    <p>
                      {f.a}
                    </p>
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="idl-cta">

        <div className="idl-container idl-cta-inner">

          <div>

            <h2>
              Ask for a doctor-led home care assessment in Pondicherry
            </h2>

            <p>
              One named physician, accountable from day one.
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

        </div>

      </section>

    </div>
  );
}