import { goTo } from "../utils/goTo";
import React, { useState } from "react";
import "./Continuum of Care.css";

const includedItems = [
  {
    icon: "📋",
    title: "Pre-Discharge Review",
    desc: "The overseeing physician reviews the hospital discharge summary and medication list before the patient leaves, flagging anything that needs clarification."
  },
  {
    icon: "🏠",
    title: "Structured Home Care Plan",
    desc: "Discharge instructions are converted into a concrete, doctor-led home care plan covering medication schedules, wound care, mobility guidance, and follow-up timelines."
  },
  {
    icon: "⚡",
    title: "Early Post-Discharge Monitoring",
    desc: "The first days at home receive closer monitoring, when readmission risk is highest, under the same doctor-led clinical plan."
  },
  {
    icon: "👨‍⚕️",
    title: "Coordinated Follow-Up",
    desc: "Follow-up consultations with the discharging specialist or another physician in the network are scheduled as part of the same continuum."
  },
  {
    icon: "🔄",
    title: "Seamless Step-Down",
    desc: "Care intensity is adjusted as the patient improves, always under the same physician's oversight rather than switching to an unrelated provider."
  }
];

const faqs = [
  {
    q: "What is post hospitalisation care?",
    a: "It is structured medical and nursing support provided at home after a hospital discharge — covering medication management, wound care, mobility support, and monitoring during the highest-risk recovery period."
  },
  {
    q: "When should I arrange post hospitalisation care in Pondicherry?",
    a: "Ideally before discharge — Aureal Healthcare reviews the discharge summary and puts a home care plan in place so there is no gap between leaving the hospital and receiving structured care at home."
  },
  {
    q: "Does the same doctor manage my care after I leave the hospital?",
    a: "Yes — the overseeing physician who reviews your discharge plan remains accountable for your home recovery plan, rather than handing you off to an unrelated provider."
  },
  {
    q: "How long does post hospitalisation care typically continue?",
    a: "Duration depends on the condition and recovery pace; care intensity is stepped down under the same physician's oversight as the patient improves."
  },
  {
    q: "Can this service coordinate with a hospital outside Pondicherry?",
    a: "Yes — the home recovery plan can be built around a discharge summary from any hospital, with the home care itself delivered across Puducherry town and surrounding areas."
  },
  {
    q: "What is included in a discharge-to-home care plan?",
    a: "Medication scheduling, wound care protocols, mobility guidance, early monitoring, and coordinated follow-up consultations, all under one doctor-led plan."
  }
];

export default function ContinuumOfCare() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="coc-page">
      {/* HERO */}
      <section className="coc-hero">
        <div className="coc-hero-left">
          <div className="coc-breadcrumb">
            Clinical Care / <span>Continuum of Care Pondicherry</span>
          </div>

          <div className="coc-pill">
            <span></span> DOCTOR-LED TRANSITION MODEL • PONDICHERRY
          </div>

          <h1>
            A True Continuum of Care — From Hospital Discharge to Recovery at
            Home in Pondicherry
          </h1>

          <p className="coc-hero-sub">
            Doctor-led post hospitalisation care in Pondicherry that starts
            before discharge and continues through recovery at home — one
            physician, one plan, no gap between hospital and home.
          </p>

          <div className="coc-quick">
            <div className="coc-quick-label">⚡ QUICK ANSWER</div>

            <p>
              Aureal Healthcare's continuum-of-care model manages the full
              journey from hospital discharge through recovery at home in
              Pondicherry — the same overseeing physician who reviews the
              hospital discharge summary designs and leads the home recovery
              plan, closing the gap where care often breaks down.
            </p>
          </div>

         <div className="coc-hero-actions">
  {/* Book Consultation */}
  <button
    className="coc-btn primary"
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

  {/* Talk to Care Coordinator */}
  <button
    className="coc-btn secondary"
    onClick={() => {
      window.location.href = "tel:+919944969049";
    }}
  >
    Talk to Care Coordinator
  </button>
</div>

          <div className="coc-journey-mini">
            <div className="jm-item">
              <span>🏥</span>
              <b>Hospital</b>
            </div>

            <div className="jm-line"></div>

            <div className="jm-item active">
              <span>👨‍⚕️</span>
              <b>Doctor-Led Handover</b>
            </div>

            <div className="jm-line"></div>

            <div className="jm-item">
              <span>🏠</span>
              <b>Home Recovery</b>
            </div>
          </div>
        </div>

        <div className="coc-hero-right">
          <div className="coc-hero-visual">
            <img
              className="coc-main-img"
              src="/con1.jpg"
              alt="Hospital to home transition"
            />

            <div className="coc-float-card top">
              <div className="coc-f-icon">✓</div>

              <div>
                <b>Pre-Discharge Review</b>
                <p>
                  Physician reviews discharge plan and medication list
                </p>
              </div>
            </div>

            <div className="coc-float-card bottom">
              <img
                src="/con2.jpg"
                alt="home care"
              />

              <div>
                <b>Same Team Follows You</b>
                <p>Hospital → Home → Recovery</p>

                <div className="coc-progress">
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="coc-stat-row">
            <div>
              <b>No Gap</b>
              <span>Same physician accountable</span>
            </div>

            <div>
              <b>7–14 Days</b>
              <span>Close early monitoring</span>
            </div>

            <div>
              <b>1 Plan</b>
              <span>Across the recovery journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="coc-section overview">
        <div className="coc-container">
          <div className="coc-grid-2">
            <div className="coc-overview-media">
              <img
                className="ov-img-1"
                src="/con3.jpg"
                alt="doctor reviewing discharge"
              />

              <img
                className="ov-img-2"
                src="/con4.jpg"
                alt="home recovery"
              />

              <div className="coc-ov-badge">
                <h4>Discharge is a Handover</h4>
                <p>Not an endpoint</p>
              </div>
            </div>

            <div>
              <span className="coc-eyebrow">OVERVIEW</span>

              <h2>
                Why hospital discharge needs a true continuum of care.
              </h2>

              <p className="coc-p">
                The period right after a hospital discharge is one of the
                highest-risk points in any patient's care — medication changes,
                wound care instructions, follow-up appointments, and mobility
                restrictions all have to be managed correctly, often by a
                family with no clinical training.
              </p>

              <p className="coc-p">
                Pondicherry families searching for{" "}
                <strong>post hospitalisation care</strong> or{" "}
                <strong>recovery care at home</strong> are usually looking for
                exactly this transition support.
              </p>

              <p className="coc-p">
                <strong>
                  Aureal Healthcare's continuum-of-care model treats
                  hospital discharge not as an endpoint but as a handover,
                </strong>{" "}
                with the overseeing physician reviewing the discharge summary,
                translating it into a concrete home care plan, and staying
                accountable for that plan as the patient recovers.
              </p>

              <div className="coc-quote">
                The same physician who reviews the hospital discharge summary
                designs and leads the home recovery plan, closing the gap where
                care often breaks down.
              </div>

              <p className="coc-p small">
                This matters particularly for post-surgical recovery, stroke
                recovery, and elderly patients discharged after a cardiac or
                respiratory admission, where the first two weeks at home often
                determine whether the patient avoids a readmission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="coc-section included">
        <div className="coc-container">
          <div className="coc-section-head">
            <span className="coc-eyebrow">WHAT'S INCLUDED</span>

            <h2>
              One doctor-led plan, from discharge through home recovery
            </h2>
          </div>

          <div className="coc-included-grid">
            {includedItems.map((it, i) => (
              <div className="coc-inc-card" key={i}>
                <div className="coc-inc-top">
                  <div className="coc-inc-icon">{it.icon}</div>

                  <div className="coc-inc-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <h4>{it.title}</h4>

                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="coc-section how">
        <div className="coc-container">
          <div className="coc-section-head center">
            <span className="coc-eyebrow">HOW IT WORKS</span>

            <h2>
              From hospital discharge to full recovery at home in Pondicherry
            </h2>
          </div>

          <div className="coc-steps-wrap">
            <div className="coc-steps-line"></div>

            <div className="coc-steps">
              <div className="coc-step">
                <div className="coc-step-circle">01</div>

                <h4>Pre-Discharge Coordination</h4>

                <p>
                  The physician reviews the hospital discharge plan and
                  identifies the home care needs before the patient leaves the
                  hospital.
                </p>
              </div>

              <div className="coc-step">
                <div className="coc-step-circle">02</div>

                <h4>Home Care Plan Activation</h4>

                <p>
                  A doctor-led home care plan is put in place from day one at
                  home in Pondicherry, covering medication, wound care, and
                  mobility.
                </p>
              </div>

              <div className="coc-step">
                <div className="coc-step-circle">03</div>

                <h4>Close Early Monitoring</h4>

                <p>
                  The first 7–14 days receive heightened attention, the period
                  when complications and readmissions are most likely.
                </p>
              </div>

              <div className="coc-step">
                <div className="coc-step-circle">04</div>

                <h4>Doctor-Led Step-Down</h4>

                <p>
                  As recovery progresses, the same physician adjusts the
                  plan's intensity, reducing visit frequency without losing
                  clinical oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MATTERS */}
      <section className="coc-why-dark">
        <div className="coc-container">
          <div className="coc-why-grid">
            <div className="coc-why-left">
              <span className="coc-eyebrow light">
                WHY THIS MATTERS IN PONDICHERRY
              </span>

              <h2>The hospital-to-home handover is where care can break.</h2>

              <p>
                The handover from hospital to home is where care most often
                breaks down — discharge instructions are written quickly,
                families are overwhelmed, and there is frequently no single
                clinician accountable for what happens after the hospital doors
                close.
              </p>

              <p>
                This is a widely recognized gap across home healthcare in
                Puducherry, not a shortcoming specific to any one hospital or
                provider.
              </p>

              <p>
                Aureal Healthcare's continuum-of-care model exists
                specifically to close that gap for Pondicherry families — the
                same physician who reviews the discharge plan stays
                accountable for the home recovery that follows.
              </p>

              <div className="coc-why-points">
                <div className="bad">
                  <span>✕</span>
                  Usual: Discharge summary handed over, family coordinates
                  recovery alone
                </div>

                <div className="good">
                  <span>✓</span>
                  Aureal Healthcare: Physician translates discharge plan
                  into actionable home care
                </div>
              </div>
            </div>

            <div className="coc-why-right">
              <img
                src="/con5.jpg"
                alt="Pondicherry family care"
              />

              <div className="coc-why-card">
                <h4>Doctor-Led Difference</h4>

                <p>
                  The same physician stays accountable from discharge review
                  through home recovery, so leaving the hospital does not mean
                  losing clinical continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO + TRUST */}
      <section className="coc-section who-trust">
        <div className="coc-container">
          <div className="coc-grid-2">
            <div>
              <span className="coc-eyebrow">
                THE AUREAL HEALTHCARE DOCTOR-LED DIFFERENCE
              </span>

              <h2 className="coc-h2">
                Accountability across the entire recovery journey.
              </h2>

              <p className="coc-p">
                Continuum of care is doctor-led by definition: without a
                physician tracking the patient across the hospital-to-home
                transition, there is no continuum — just two disconnected
                episodes of care.
              </p>

              <p className="coc-p">
                The overseeing physician's review of the discharge summary is
                not a formality; it is the clinical judgment call that
                determines what the home care plan actually needs to include.
              </p>

              <div className="coc-trust-box">
                <h4>Trust & Credibility</h4>

                <p>
                  Every continuum-of-care plan in Pondicherry follows the same
                  doctor-led clinical governance used across all Aureal Healthcare programs.
                </p>

                <p>
                  Because the same physician stays accountable from discharge
                  review through home recovery, families avoid the common
                  failure point of losing clinical continuity the moment they
                  leave the hospital.
                </p>

                <div className="coc-trust-list">
                  <div>
                    <span>✓</span>
                    Same physician accountable from discharge review through
                    home recovery
                  </div>

                  <div>
                    <span>✓</span>
                    One doctor-led care plan throughout the recovery journey
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="coc-who-title">WHO IT'S FOR</div>

              <div className="coc-who-grid">
                <div className="coc-who-card">
                  <span>🛏️</span>

                  <p>
                    Patients discharged after surgery who need structured
                    wound care and mobility support at home
                  </p>
                </div>

                <div className="coc-who-card">
                  <span>👴</span>

                  <p>
                    Elderly patients discharged after a cardiac, respiratory,
                    or stroke admission, where the first two weeks at home
                    carry the highest risk
                  </p>
                </div>

                <div className="coc-who-card">
                  <span>🏠</span>

                  <p>
                    Families who feel overwhelmed translating hospital
                    discharge instructions into a workable daily routine
                  </p>
                </div>

                <div className="coc-who-card">
                  <span>👨‍⚕️</span>

                  <p>
                    Patients whose discharging hospital is outside Pondicherry
                    but who are recovering at home in Puducherry
                  </p>
                </div>
              </div>

              <div className="coc-related">
                <h4>Related Aureal Healthcare Services</h4>

                <div className="coc-related-links">
                  <a href="/Integrated-Doctor-Led-Team">Integrated Doctor-Led Team →</a>
                  <a href="/AdvancedDiagnostics">Advanced Diagnostics →</a>
                  <a href="/WellnessPreventiveCare">Wellness & Preventive Care →</a>
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
      <section className="coc-section faq">
        <div className="coc-container">
          <div className="coc-section-head center">
            <span className="coc-eyebrow">FAQ</span>

            <h2>
              Post Hospitalisation Care — Common Questions
            </h2>
          </div>

          <div className="coc-faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`coc-faq-item ${
                  openFaq === i ? "open" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                  className="coc-faq-q"
                >
                  <span>{f.q}</span>

                  <span className="coc-faq-icon">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>

                {openFaq === i && (
                  <div className="coc-faq-a">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="coc-cta">
        <div className="coc-container coc-cta-inner">
          <div>
            <h2>
              Arrange doctor-led post hospitalisation care in Pondicherry
              before discharge
            </h2>

            <p>
              One plan, no gap in care — talk to the Aureal Healthcare
              team before discharge and arrange structured recovery support at
              home.
            </p>
          </div>

          <div className="coc-cta-actions">
  <button
    className="coc-btn light"
    onClick={() => {
      goTo("/Appointment");
      window.scrollTo(0, 0);
    }}
  >
    Book Consultation
  </button>

  <button
    className="coc-btn outline"
    onClick={() => {
      window.location.href = "tel:+919944969049";
    }}
  >
    Talk to Care Coordinator
  </button>
</div>
        </div>
      </section>
    </div>
  );
}