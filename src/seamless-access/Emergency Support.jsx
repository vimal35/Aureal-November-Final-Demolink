import React, { useState } from "react";
import "./Emergency Support.css";

const emergencyServices = [
  {
    icon: "🕒",
    title: "24/7 Physician Teleconsultation",
    desc: "A physician is reachable by phone or video at any hour, working from the patient's existing doctor-led record rather than starting from zero.",
    tag: "Round-the-Clock",
    highlight: true,
  },
  {
    icon: "🏠",
    title: "Emergency Home Visits",
    desc: "When a patient's condition requires in-person assessment at home, emergency home visits can be arranged as part of the escalation pathway.",
    tag: "In-Person Support",
    highlight: true,
  },
  {
    icon: "🚑",
    title: "Clear Emergency Escalation Pathway",
    desc: "When a situation genuinely requires urgent in-person or hospital-level care, the physician escalates immediately and coordinates the next steps.",
    tag: "Immediate Escalation",
  },
  {
    icon: "🏥",
    title: "Hospital Coordination",
    desc: "When hospital-level treatment is required, the 24/7 team coordinates the transition and communicates relevant clinical information to support continuity of care.",
    tag: "Hospital Support",
    highlight: true,
  },
  {
    icon: "📍",
    title: "Designated Nodal Emergency Centre",
    desc: "Every client has a designated nodal emergency centre identified as part of their care pathway, providing a clear destination when emergency hospital care is required.",
    tag: "Designated Centre",
    highlight: true,
  },
  {
    icon: "📋",
    title: "Continuity With the Daytime Care Plan",
    desc: "Every after-hours consultation is logged into the same shared medical record used by the patient's regular care team.",
    tag: "Shared Record",
    highlight: true,
  },
  {
    icon: "🏠",
    title: "Guidance for Non-Emergency Concerns",
    desc: "Many after-hours concerns can be addressed through teleconsultation alone, helping avoid an unnecessary trip when it is not clinically required.",
    tag: "Home Guidance",
  },
  {
    icon: "📞",
    title: "Phone & Video Consultation",
    desc: "Families can connect with a physician through phone or video consultation at any hour across Chennai.",
    tag: "Phone • Video",
  },
  {
    icon: "⚡",
    title: "Ambulance & Transfer Coordination",
    desc: "Where in-person emergency care is needed, the 24/7 team coordinates directly with ground ambulance and transfer support as part of the escalation process.",
    tag: "Emergency Transfer",
  },
];

const emergencyFaqs = [
  {
    q: "Is a doctor really available 24/7 in Chennai?",
    a: "Yes — patients on a Aureal Healthcare plan can reach a physician by phone or video at any hour, with the consultation logged into the same doctor-led record used for daytime care.",
  },
  {
    q: "Can an emergency home visit be arranged?",
    a: "Yes — when the clinical situation requires an in-person assessment at home, an emergency home visit can be arranged as part of the escalation pathway.",
  },
  {
    q: "What should I do in a medical emergency at home?",
    a: "Contact the 24/7 line immediately. The physician will assess the situation and either provide guidance, arrange an emergency home visit, or escalate to hospital-level care depending on the clinical requirement.",
  },
  {
    q: "Does teleconsultation replace an emergency room visit?",
    a: "No — teleconsultation is used to assess the situation and provide guidance or immediate escalation. Where genuine emergency-level care is needed, the physician coordinates that escalation rather than delaying it.",
  },
  {
    q: "Will the after-hours doctor know my medical history?",
    a: "Yes — the consulting physician works from the patient's existing doctor-led record, rather than starting from no prior information.",
  },
  {
    q: "Does every client have a designated emergency centre?",
    a: "Yes — every client is assigned a designated nodal emergency centre as part of their emergency care pathway, providing a clear hospital destination when escalation is clinically required.",
  },
  {
    q: "How does hospital coordination work during an emergency?",
    a: "When hospital-level care is required, the 24/7 team coordinates the transition, supports communication of relevant clinical information, and helps connect the patient with the designated nodal emergency centre.",
  },
  {
    q: "Is 24/7 support available across all of Chennai?",
    a: "Yes — teleconsultation is available across Chennai town and surrounding areas for patients on a Aureal Healthcare plan.",
  },
  {
    q: "How is an ambulance arranged if one is needed after hours?",
    a: "The 24/7 team coordinates directly with ground ambulance and transfer support as part of the escalation process.",
  },
];

export default function EmergencySupport() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="es-page">

      {/* HERO SECTION */}
      <section className="es-hero">
        <div className="es-hero-bg-pattern"></div>

        <div className="es-container">
          <div className="es-hero-grid">

            <div className="es-hero-left">

              <div className="es-breadcrumb">
                Seamless Access /{" "}
                <span>
                  24/7 Emergency Care & Teleconsultation Chennai
                </span>
              </div>

              <div className="es-emergency-pill">
                <span className="es-pulse-dot"></span>
                24/7 SUPPORT • PHYSICIAN-LED
              </div>

              <h1>
                24/7 Emergency Support and Teleconsultation Across Chennai
              </h1>

              <p className="es-hero-sub">
                A physician reachable around the clock — with teleconsultation,
                emergency home visits, hospital coordination and a designated
                nodal emergency centre for every client, all connected to the
                same doctor-led care record.
              </p>

              <div className="es-quick-answer">
                <div className="es-quick-label">
                  ⚡ QUICK ANSWER
                </div>

                <p>
                  Aureal Healthcare provides 24/7 emergency support and
                  teleconsultation across Chennai, giving patients on a
                  doctor-led care plan access to a physician at any hour
                  through phone or video consultation. When in-person care is
                  required, the pathway can extend to emergency home visits,
                  ambulance and hospital coordination, with every client
                  having a designated nodal emergency centre for escalation
                  when clinically necessary.
                </p>
              </div>

              <div className="es-hero-actions">

                <a
                  href="tel:+919944969049"
                  className="es-btn es-btn-primary"
                >
                  Call Emergency Line
                </a>

                <a
                  href="/Appointment"
                  className="es-btn es-btn-secondary"
                >
                  Book Virtual Consultation
                </a>

              </div>
            </div>

            <div className="es-hero-right">

              <div className="es-hero-visual">

                <img
                  className="es-main-img"
                  src="/tel1.jpg"
                  alt="24/7 emergency care and teleconsultation Chennai"
                />

                <div className="es-float-card es-float-top">

                  <div className="es-f-icon">
                    📞
                  </div>

                  <div>
                    <b>Physician On Call</b>
                    <p>Doctor-led support • 24/7</p>
                  </div>

                </div>

                <div className="es-float-card es-float-bottom">

                  <img
                    src="/tel4.jpg"
                    alt="teleconsultation physician"
                  />

                  <div>
                    <b>Virtual Consultation</b>

                    <p>
                      Same doctor-led record
                    </p>

                    <div className="es-progress-bar">
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
      <section className="es-section es-overview">

        <div className="es-container">

          <div className="es-grid-2">

            <div className="es-overview-media">

              <img
                className="es-ov-img-1"
                src="/tel2.jpg"
                alt="emergency physician consultation Chennai"
              />

              <div className="es-ov-badge">
                <h4>Clinical Context Matters</h4>
                <p>
                  Every call uses the patient's doctor-led record
                </p>
              </div>

            </div>

            <div>

              <span className="es-eyebrow">
                OVERVIEW
              </span>

              <h2>
                One of the most stressful moments in home-based care is
                realizing something feels wrong at 2 a.m.
              </h2>

              <p className="es-p">
                One of the most stressful moments in home-based care is
                realizing something feels wrong at 2 a.m., with no clear sense
                of whether it warrants an emergency room visit or can be
                managed at home. Chennai families searching for
                “24/7 emergency care” or a “doctor on call” are often in
                exactly that moment.
              </p>

              <p className="es-p">
                Aureal Healthcare's 24/7 support model gives patients and
                families access to a physician at any hour through
                teleconsultation — not a generic call center, but a clinician
                who can review the patient's doctor-led record and make an
                informed judgment about the next step.
              </p>

              <p className="es-p">
                Depending on the clinical requirement, the pathway can extend
                from remote guidance to an emergency home visit, ambulance
                support, hospital coordination and escalation to the client's
                designated nodal emergency centre.
              </p>

              <div className="es-quote">
                For elderly patients, post-surgical patients, and anyone
                managing a chronic or high-acuity condition at home across
                Chennai, round-the-clock access can help avoid an
                unnecessary emergency room trip when it is not clinically
                required — or ensure a genuine emergency is escalated
                immediately through a clearly coordinated pathway.
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* WHAT'S INCLUDED */}
      <section className="es-section es-included">

        <div className="es-container">

          <div className="es-section-head">

            <span className="es-eyebrow">
              WHAT'S INCLUDED
            </span>

            <h2>
              24/7 physician-led emergency support, from your home
            </h2>

            <p className="es-p">
              A connected emergency support pathway designed to provide
              clinical guidance, in-person support and coordinated escalation
              whenever required.
            </p>

          </div>

          <div className="es-included-grid">

            {emergencyServices.map((item, index) => (

              <div
                key={index}
                className={`es-inc-card ${
                  item.highlight ? "es-highlight" : ""
                }`}
              >

                <div className="es-inc-top">

                  <div className="es-inc-icon">
                    {item.icon}
                  </div>

                  <span className="es-inc-tag">
                    {item.tag}
                  </span>

                </div>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.desc}
                </p>

                <div className="es-inc-num">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="es-section es-how">

        <div className="es-container">

          <div className="es-section-head center">

            <span className="es-eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              From emergency call to coordinated care
            </h2>

          </div>

          <div className="es-steps-wrap">

            <div className="es-steps-line"></div>

            <div className="es-steps">

              <div className="es-step">

                <div className="es-step-circle">
                  01
                </div>

                <h4>
                  Call or Connect Anytime
                </h4>

                <p>
                  Families reach the 24/7 line by phone or video at any hour
                  across Chennai.
                </p>

              </div>

              <div className="es-step">

                <div className="es-step-circle">
                  02
                </div>

                <h4>
                  Physician Assessment
                </h4>

                <p>
                  The consulting physician reviews the patient's doctor-led
                  record and assesses the situation.
                </p>

              </div>

              <div className="es-step">

                <div className="es-step-circle">
                  03
                </div>

                <h4>
                  Home Visit or Escalation
                </h4>

                <p>
                  Depending on the clinical requirement, the physician may
                  provide home guidance, arrange an emergency home visit or
                  escalate directly to hospital-level care.
                </p>

              </div>

              <div className="es-step">

                <div className="es-step-circle">
                  04
                </div>

                <h4>
                  Hospital Coordination
                </h4>

                <p>
                  When hospital care is required, the team coordinates the
                  transition and connects the patient with the designated
                  nodal emergency centre.
                </p>

              </div>

              <div className="es-step">

                <div className="es-step-circle">
                  05
                </div>

                <h4>
                  Record Continuity
                </h4>

                <p>
                  The consultation, escalation and resulting plan changes are
                  logged into the shared record for ongoing care.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* WHY MATTERS IN Chennai */}
      <section className="es-why-dark">

        <div className="es-container">

          <div className="es-why-grid">

            <div className="es-why-left">

              <span className="es-eyebrow es-light">
                WHY THIS MATTERS IN Chennai
              </span>

              <h2>
                Clinical continuity — with a clearly defined emergency pathway.
              </h2>

              <p>
                Many home care arrangements in Chennai leave families
                without a clear after-hours point of contact — a generic
                ambulance number, or no clinical guidance at all until the
                next scheduled visit.
              </p>

              <p>
                Aureal Healthcare's 24/7 emergency support model is
                designed to provide a connected pathway from physician
                assessment to emergency home visits, ambulance support,
                hospital coordination and the client's designated nodal
                emergency centre when escalation is clinically required.
              </p>

              <div className="es-why-points">

                <div className="es-bad">
                  <span>✕</span>
                  Generic after-hours support: limited clinical context and
                  unclear escalation pathway
                </div>

                <div className="es-good">
                  <span>✓</span>
                  Aureal Healthcare: physician-led assessment with
                  coordinated home, ambulance and hospital escalation
                </div>

                <div className="es-good">
                  <span>✓</span>
                  Every client has a designated nodal emergency centre for
                  hospital-level escalation
                </div>

              </div>

              <div className="es-convo-queries">

                <p>
                  People also ask:
                </p>

                <span>
                  how to reach a doctor at night in Chennai?
                </span>

                <span>
                  is teleconsultation available 24/7 in Chennai?
                </span>

                <span>
                  can I get an emergency doctor home visit in Chennai?
                </span>

                <span>
                  does Aureal Healthcare coordinate hospital admissions?
                </span>

                <span>
                  does every client have a designated emergency centre?
                </span>

              </div>

            </div>

            <div className="es-why-right">

              <img
                src="/tel3.jpg"
                alt="24/7 emergency physician consultation Chennai"
              />

              <div className="es-why-card">

                <h4>
                  Doctor-Led Difference
                </h4>

                <p>
                  Every 24/7 consultation is handled by a physician working
                  from the patient's actual doctor-led record, with a defined
                  escalation pathway that can include emergency home visits,
                  ambulance support and hospital coordination.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* WHO IT'S FOR + TRUST */}
      <section className="es-section es-who-trust">

        <div className="es-container">

          <div className="es-grid-2">

            <div>

              <span className="es-eyebrow">
                THE AUREAL HEALTHCARE DOCTOR-LED DIFFERENCE
              </span>

              <h2 className="es-h2">
                After-hours support is only as valuable as the clinical
                judgment and emergency coordination behind it.
              </h2>

              <p className="es-p">
                That is why every 24/7 consultation is handled by a physician
                working from the patient's actual doctor-led record, not a
                scripted triage line.
              </p>

              <p className="es-p">
                If an in-person assessment is required, the emergency pathway
                can include a home visit. If hospital-level care is needed,
                the team coordinates the transition and connects the patient
                with the designated nodal emergency centre assigned to the
                client's care pathway.
              </p>

              <div className="es-trust-box">

                <h4>
                  Trust & Credibility
                </h4>

                <p>
                  24/7 emergency support and teleconsultation are governed by
                  the same doctor-led clinical standards applied across every
                  Aureal Healthcare program.
                </p>

                <div className="es-trust-list">

                  <div>
                    <span>✓</span>
                    Every after-hours consultation is logged into the same
                    shared record
                  </div>

                  <div>
                    <span>✓</span>
                    Emergency home visits can be arranged when clinically
                    required
                  </div>

                  <div>
                    <span>✓</span>
                    Hospital coordination supports continuity during escalation
                  </div>

                  <div>
                    <span>✓</span>
                    Every client has a designated nodal emergency centre
                  </div>

                  <div>
                    <span>✓</span>
                    No loss of continuity between night-time support and the
                    regular daytime care team
                  </div>

                </div>

              </div>

            </div>


            <div>

              <div className="es-who-title">
                WHO IT'S FOR
              </div>

              <div className="es-who-grid">

                <div className="es-who-card">

                  <span>🌙</span>

                  <p>
                    Families managing an elderly or high-acuity patient at
                    home who need reassurance and clinical judgment available
                    at any hour.
                  </p>

                </div>

                <div className="es-who-card">

                  <span>⚡</span>

                  <p>
                    Post-surgical or post-hospitalisation patients in the
                    early, higher-risk recovery period.
                  </p>

                </div>

                <div className="es-who-card">

                  <span>❤️</span>

                  <p>
                    Families of patients with chronic conditions who
                    experience occasional acute symptom flares.
                  </p>

                </div>

                <div className="es-who-card">

                  <span>🏠</span>

                  <p>
                    Patients who may require urgent clinical assessment at
                    home rather than immediately travelling to a hospital.
                  </p>

                </div>

                <div className="es-who-card">

                  <span>🏥</span>

                  <p>
                    Patients who may require coordinated hospital escalation
                    through their designated nodal emergency centre.
                  </p>

                </div>

                <div className="es-who-card">

                  <span>📋</span>

                  <p>
                    Anyone on a Aureal Healthcare doctor-led plan who wants
                    continuity of care outside normal daytime hours.
                  </p>

                </div>

              </div>


              <div className="es-related">

                <h4>
                  Related Aureal Healthcare Services
                </h4>

                <div className="es-related-links">

                  <a href="/PatientCoordination">
                    Patient Coordination & Cashless Treatment →
                  </a>

                  <a href="/GroundAmbulance">
                    Ground Ambulance & Local Transfers →
                  </a>

                  <a href="/EmergencySupport">
                    Emergency Home Visits →
                  </a>

                  <a href="/PatientCoordination">
                    Hospital Coordination →
                  </a>

                  <a href="/Multi-Specialty-Consultations">
                    Multi-Specialty Consultations →
                  </a>

                  <a href="/Integrated-Doctor-Led-Team">
                    Integrated Doctor-Led Team →
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FAQ SECTION */}
      <section className="es-section es-faq">

        <div className="es-container">

          <div className="es-section-head center">

            <span className="es-eyebrow">
              FAQ
            </span>

            <h2>
              24/7 Emergency Support — Common Questions
            </h2>

          </div>

          <div className="es-faq-list">

            {emergencyFaqs.map((faq, index) => (

              <div
                key={index}
                className={`es-faq-item ${
                  openFaq === index ? "es-open" : ""
                }`}
              >

                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? null : index
                    )
                  }
                  className="es-faq-q"
                >

                  <span>
                    {faq.q}
                  </span>

                  <span className="es-faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>

                </button>

                {openFaq === index && (

                  <div className="es-faq-a">

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
      <section className="es-cta">

        <div className="es-container es-cta-inner">

          <div>

            <h2>
              Set up 24/7 emergency support and teleconsultation
            </h2>

            <p>
              Doctor-led emergency support across Chennai — including
              teleconsultation, emergency home visits, hospital coordination
              and a designated nodal emergency centre for every client.
            </p>

          </div>

          <div className="es-cta-actions">

            <a
              href="tel:+919944969049"
              className="es-btn es-btn-light"
            >
              Call Emergency Line
            </a>

            <a
              href="tel:+919944969049"
              className="es-btn es-btn-outline"
            >
              +91 99449 69049
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}