import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Heart, Brain, Activity, Shield, Stethoscope, Droplet, Baby, Ambulance,
  X, Zap, Award, User, Calendar, ChevronLeft, ChevronRight, CheckCircle2,
} from "lucide-react";
import "./mainservices.css";

/* ============================================================
   Scroll reveal hook — re-triggers EVERY time in/out of view
   ============================================================ */
const useReveal = (options = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? "0px 0px -8% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, visible];
};

/* Reveal wrapper */
const Reveal = ({
  children, direction = "up", delay = 0.75, duration = 0.9,
  className = "", threshold, as: Tag = "div",
}) => {
  const [ref, visible] = useReveal({ threshold });
  return (
    <Tag
      ref={ref}
      className={`msr ${direction} ${visible ? "in" : ""} ${className}`}
      style={{ "--msr-delay": `${delay}s`, "--msr-dur": `${duration}s` }}
    >
      {children}
    </Tag>
  );
};

/* Word-by-word title */
const RevealTitle = ({ text, className = "" }) => {
  const [ref, visible] = useReveal({ threshold: 0.35 });
  return (
    <h2 ref={ref} className={`${className} msr-title ${visible ? "in" : ""}`} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span className="msr-word-mask" key={i} aria-hidden="true">
          <span className="msr-word" style={{ "--w": i }}>{w}</span>
        </span>
      ))}
    </h2>
  );
};

const SERVICES = [
  {
    id: "01",
    category: "GERIATRIC MULTISPECIALITY CARE | 24/7 SERVICES",
    title: "Geriatric Care",
    description:
      "Specialist-led elderly care at home, designed to preserve independence, mobility, cognitive wellbeing, and overall quality of life through coordinated geriatric multispeciality support.",
    image:
      "/services1.jpg",
    icon: Heart,
    badge: "WHO ICOPE",
    stats: [
      { value: "Geriatrician", label: "LED CARE TEAM" },
      { value: "WHO ICOPE", label: "CARE FRAMEWORK" },
      { value: "24/7", label: "CARE SUPPORT" },
    ],
    compliance:
      "GOVERNED BY WHO ICOPE (INTEGRATED CARE FOR OLDER PEOPLE) GUIDELINES",
    accent: "#d4af37",
    goldBadge: "ELDERLY CARE SPECIALISTS",
    overview:
      "Our Geriatric Care programme provides comprehensive, personalised care for older adults in the comfort of their home. A lead geriatrician coordinates multidisciplinary support focused on maintaining intrinsic capacity, functional ability, independence, and dignity.",
    procedures: [
      "Comprehensive Geriatric Assessment & Care Planning",
      "Polypharmacy Review & Medication Optimisation",
      "Nutrition Planning & Muscle-Wasting Prevention",
      "Balance, Mobility & Fall-Prevention Physiotherapy",
      "Cognitive Decline & Social Isolation Monitoring",
    ],
    specialists: [
      {
        name: "Dr. SIVARAMAN, MD, PGDGM",
        title: "Lead Geriatrician",
        exp: "Senior Specialist",
      },
      {
        name: "Dr. PRAVIN KUMAR, MD",
        title: "Consultant Physician",
        exp: "Multispeciality Care",
      },
    ],
  },

  {
    id: "02",
    category: "HOLISTIC PALLIATIVE SUPPORT | 24/7 SERVICES",
    title: "Palliative Care",
    description:
      "Compassionate, specialist-led palliative care at home focused on advanced symptom management, comfort, dignity, emotional wellbeing, and continuous support for patients and families.",
    image:
      "/services2.jpg",
    icon: Heart,
    badge: "24/7",
    stats: [
      { value: "Specialist", label: "LED CARE" },
      { value: "24/7", label: "SUPPORT TEAM" },
      { value: "Home", label: "ASSISTED LIVING" },
    ],
    compliance:
      "GOVERNED BY PALLIUM INDIA PALLIATIVE CARE GUIDELINES",
    accent: "#f59e0b",
    goldBadge: "PALLIATIVE CARE LEADER",
    overview:
      "Our Palliative Care programme brings specialist medical care into the home for people living with chronic, advanced, or life-limiting illnesses. The team works closely with patients and families to manage symptoms while preserving comfort, dignity, and meaningful daily living.",
    procedures: [
      "Acute Pain, Breathlessness & Symptom Management",
      "Wound Care & Specialist Nursing Support",
      "Emotional & Family Decision-Making Support",
      "Physiotherapy & Occupational Therapy",
      "24/7 Clinical Support & Assisted Living",
    ],
    specialists: [
      {
        name: "Dr. NEPOLEAN, MD",
        title: "Pain Specialist",
        exp: "Specialist Care",
      },
      {
        name: "Dr. SANJAY, MBBS",
        title: "Palliative Care Physician",
        exp: "Supportive Care",
      },
    ],
  },

  {
    id: "03",
    category: "INTEGRATED NEURO REHABILITATION | 24/7 SERVICES",
    title: "Neuro Care",
    description:
      "Integrated neurological rehabilitation and assisted care at home for stroke and other neurological conditions, combining specialist medical management with therapy-led functional recovery.",
    image:
      "/services3.jpg",
    icon: Brain,
    badge: "STROKE CARE",
    stats: [
      { value: "Integrated", label: "REHABILITATION" },
      { value: "24/7", label: "ASSISTED CARE" },
      { value: "Multi", label: "DISCIPLINARY TEAM" },
    ],
    compliance:
      "GOVERNED BY AMERICAN STROKE ASSOCIATION & WORLD STROKE ORGANISATION GUIDELINES",
    accent: "#d4af37",
    goldBadge: "STROKE REHABILITATION LEADER",
    overview:
      "Our Neuro Care programme delivers coordinated neurological management and rehabilitation in the home and skilled nursing environment. Neurologists, neurosurgeons, physiotherapists, speech therapists, occupational therapists, and nurses work together to improve mobility, communication, swallowing, independence, and quality of life.",
    procedures: [
      "Neurological Assessment & Medication Optimisation",
      "Motor Function & Mobility Rehabilitation",
      "Speech and Swallowing Rehabilitation",
      "Occupational Therapy & Home Adaptation",
      "Stroke Recovery & Long-Term Assisted Care",
    ],
    specialists: [
      {
        name: "Dr. SANTHOSH, M.Ch",
        title: "Consultant Neurosurgeon",
        exp: "Neurosurgical Care",
      },
      {
        name: "Dr. SHOBANA, DM",
        title: "Consultant Neurologist",
        exp: "Neurological Care",
      },
    ],
  },

  {
    id: "04",
    category: "MATERNAL & NEWBORN CARE | 24/7 SERVICES",
    title: "Obstetrics & Baby Care",
    description:
      "Specialist-led antenatal, postnatal, and newborn care at home, combining obstetric and paediatric expertise with structured levels of support for mothers and babies.",
    image:
      "/services4.jpg",
    icon: Baby,
    badge: "MATERNAL & NEWBORN",
    stats: [
      { value: "Antenatal", label: "MATERNITY CARE" },
      { value: "Postnatal", label: "MOTHER & BABY" },
      { value: "3", label: "LEVELS OF CARE" },
    ],
    compliance:
      "GUIDED BY LAQSHYA & IAP (INDIAN ACADEMY OF PEDIATRICS) GUIDELINES",
    accent: "#ec4899",
    goldBadge: "MATERNAL & NEWBORN CARE LEADER",
    overview:
      "Our Obstetrics & Baby Care programme provides seamless support throughout pregnancy, recovery, and early infancy. Specialist obstetricians, gynaecologists, neonatologists, and paediatricians coordinate care around the individual needs of mother and child.",
    procedures: [
      "Specialist Antenatal Care & Pregnancy Monitoring",
      "Postnatal Recovery & Maternal Support",
      "Newborn Assessment & Clinical Monitoring",
      "Breastfeeding & Early Infant Support",
      "Structured Three-Level Maternal & Baby Care",
    ],
    specialists: [
      {
        name: "Dr. SHABNAM KHAN, MS",
        title: "Consultant Obstetrician & Gynaecologist",
        exp: "Specialist Care",
      },
      {
        name: "Dr. PREM KUMAR, DM",
        title: "Consultant Neonatologist",
        exp: "Newborn Care",
      },
      {
        name: "Dr. AGILA, MD",
        title: "Consultant Paediatrician",
        exp: "Paediatric Care",
      },
    ],
  },

  {
    id: "05",
    category: "SURGICAL RECOVERY | 24/7 SERVICES",
    title: "Perioperative Care",
    description:
      "A seamless surgical recovery pathway delivered at home, combining prehabilitation, post-operative clinical support, wound management, and structured rehabilitation to promote safer recovery.",
    image:
      "/services5.jpg",
    icon: Stethoscope,
    badge: "SURGICAL RECOVERY",
    stats: [
      { value: "Prehab", label: "BEFORE SURGERY" },
      { value: "24/7", label: "POST-OP SUPPORT" },
      { value: "Structured", label: "REHABILITATION" },
    ],
    compliance:
      "GOVERNED BY CENTRE FOR PERIOPERATIVE CARE (CPOC) GUIDELINES",
    accent: "#10b981",
    goldBadge: "SURGICAL RECOVERY LEADER",
    overview:
      "Our Perioperative Care pathway extends specialist support beyond the hospital. From preparing the body and mind before surgery to managing recovery at home, our multidisciplinary team focuses on wound healing, mobility, nutrition, medication adherence, and prevention of avoidable complications and readmissions.",
    procedures: [
      "Prehabilitation & Surgical Fitness Optimisation",
      "Post-Operative Clinical Monitoring",
      "Wound Care & Recovery Management",
      "Pain, Nutrition & Medication Support",
      "Structured Physiotherapy & Rehabilitation",
    ],
    specialists: [
      {
        name: "Dr. ILANGO, M.Ch",
        title: "Lead Oncosurgeon",
        exp: "Surgical Care",
      },
      {
        name: "Dr. VIMAL, M.S",
        title: "Consultant Surgeon",
        exp: "Post-Operative Care",
      },
      {
        name: "Dr. EUVALINGAM, MS",
        title: "Consultant Surgeon",
        exp: "Surgical Recovery",
      },
    ],
  },
];

const GAP = 24;

const MainServices = () => {
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const [formName, setFormName] = useState("");
  const [formContact, setFormContact] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const recalc = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const firstCard = track.children[0];
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth;
    const viewportWidth = viewport.offsetWidth;
    const visible = Math.max(1, Math.floor((viewportWidth + GAP) / (cardWidth + GAP)));
    const newMax = Math.max(0, SERVICES.length - visible);
    setMaxIndex(newMax);
    setIndex((prev) => {
      const clamped = Math.min(prev, newMax);
      setOffset(clamped * (cardWidth + GAP));
      return clamped;
    });
  }, []);

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  useEffect(() => {
    if (paused || activeService) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, activeService, maxIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.children[0];
    if (!firstCard) return;
    setOffset(index * (firstCard.offsetWidth + GAP));
  }, [index]);

  const goNext = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const goPrev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  const openModal = (service) => {
    setActiveService(service);
    setFormSubmitted(false);
    setFormName("");
    setFormContact("");
  };
  const closeModal = () => setActiveService(null);

  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const onKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeService]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formContact.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <section className="mainservices-section">
      <div className="ms-glow ms-glow-1" />
      <div className="ms-glow ms-glow-2" />
      <div className="ms-grid-pattern" />

      <div className="ms-container">
        {/* Header */}
        <div className="ms-header">
          <div>
            <Reveal direction="up" delay={0.1} duration={0.8}>
              <div className="ms-badge">
                <span className="ms-badge-dot" />
                <span>Centres of Clinical Excellence</span>
              </div>
            </Reveal>

            <RevealTitle text="Our Core Modules" className="ms-main-title" />

            <Reveal direction="up" delay={0.75} duration={0.95}>
              <p className="ms-subtitle">
                Five specialist-led care modules delivering home-based, high-acuity medical care — each 
                governed by internationally validated clinical frameworks and backed by 24/7 support.
                </p>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.85} duration={0.8}>
            <div className="ms-arrow-group">
              <button className="ms-arrow-btn" onClick={goPrev} aria-label="Previous services">
                <ChevronLeft size={20} />
              </button>
              <button className="ms-arrow-btn" onClick={goNext} aria-label="Next services">
                <ChevronRight size={20} />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal direction="up" delay={0.8} duration={1.1} threshold={0.1}>
          <div
            className="ms-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="ms-viewport" ref={viewportRef}>
              <div
                className="ms-track"
                ref={trackRef}
                style={{ transform: `translateX(-${offset}px)` }}
              >
                {SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <article className="ms-card" key={service.id}>
                      <div className="ms-card-media">
                        <img src={service.image} alt={service.title} loading="lazy" />
                        <div className="ms-card-media-overlay" />
                        <span className="ms-card-badge">{service.badge}</span>
                        <div className="ms-card-icon-circle">
                          <Icon size={22} />
                        </div>
                      </div>

                      <div className="ms-card-body">
                        <span className="ms-card-category">{service.category}</span>
                        <h3 className="ms-card-title">{service.title}</h3>
                        <p className="ms-card-desc">{service.description}</p>

                        <div className="ms-card-stats">
                          {service.stats.map((s, i) => (
                            <div className="ms-stat-box" key={i}>
                              <span className="ms-stat-value">{s.value}</span>
                              <span className="ms-stat-label">{s.label}</span>
                            </div>
                          ))}
                        </div>

                        <div className="ms-card-compliance">
                          <Shield size={14} />
                          <span>{service.compliance}</span>
                        </div>

                        <button className="ms-explore-btn" onClick={() => openModal(service)}>
                          <span>Explore More</span>
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="ms-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`ms-dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to position ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* MODAL */}
      {activeService && (
        <div className="ms-modal-backdrop" onClick={closeModal}>
          <div className="ms-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ms-modal-close" onClick={closeModal} aria-label="Close">
              <X size={18} />
            </button>

            <div className="ms-modal-goldbadge">
              <Award size={15} />
              <span>{activeService.goldBadge}</span>
            </div>
            <h2 className="ms-modal-title">{activeService.title}</h2>
            <p className="ms-modal-catline">
              {activeService.category} • {activeService.compliance}
            </p>

            <div className="ms-modal-grid">
              <div className="ms-modal-left">
                <h4 className="ms-modal-heading">Clinical Overview</h4>
                <p className="ms-modal-overview">{activeService.overview}</p>

                <h4 className="ms-modal-heading">Key Advanced Procedures</h4>
                <ul className="ms-modal-procedures">
                  {activeService.procedures.map((p, i) => (
                    <li key={i}>
                      <Zap size={15} className="ms-zap-icon" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="ms-modal-stats">
                  {activeService.stats.map((s, i) => (
                    <div className="ms-modal-stat-box" key={i}>
                      <span className="ms-modal-stat-value">{s.value}</span>
                      <span className="ms-modal-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ms-modal-right">
                <h4 className="ms-modal-heading">Lead Specialists</h4>
                <div className="ms-specialist-list">
                  {activeService.specialists.map((sp, i) => (
                    <div className="ms-specialist-card" key={i}>
                      <div className="ms-specialist-avatar">
                        <User size={20} />
                      </div>
                      <div>
                        <span className="ms-specialist-name">{sp.name}</span>
                        <span className="ms-specialist-title">{sp.title}</span>
                        <span className="ms-specialist-exp">{sp.exp}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="ms-consult-box">
                  <h4 className="ms-modal-heading">Request Specialist Consultation</h4>
                  {formSubmitted ? (
                    <div className="ms-form-success">
                      <CheckCircle2 size={34} />
                      <strong>Request Received!</strong>
                      <p>
                        Our {activeService.title} coordination desk will call you within 15 minutes to schedule your priority consultation.
                      </p>
                    </div>
                  ) : (
                    <form className="ms-consult-form" onSubmit={handleFormSubmit}>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Phone Number / Email"
                        value={formContact}
                        onChange={(e) => setFormContact(e.target.value)}
                        required
                      />
                      <button type="submit" className="ms-schedule-btn">
                        <Calendar size={16} />
                        <span>Schedule Priority Call</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainServices;