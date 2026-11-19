import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import "./Updates.css";

const programs = [
  {
    id: 1,
    code: "ACD-01",
    title: "Patient Handling Techniques",
    category: "Foundational Skills",
    level: "Foundation",
    duration: "3 Weeks",
    mode: "Live Online Sessions + Practical Demonstration",
    credential: "Competency Certified",
    modules: "08 Modules",
    hours: "40 Hours",
    batch: "20 Learners",
    status: "Enrolling Now",
    startDate: "Starts August 2026",
    deliveryMode: "100% Online",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=90",
    highlights: [
      "Safe Transfer & Positioning",
      "Ergonomic Body Mechanics",
      "Caregiver Injury Prevention",
    ],
    description:
      "A foundational program equipping home care professionals with safe patient transfer, positioning and mobility support techniques — the essential skill set that protects both patient dignity and caregiver wellbeing in every home visit.",
  },
  {
    id: 2,
    code: "ACD-02",
    title: "WHO – International Patient Safety Goals (IPSG)",
    category: "Patient Safety",
    level: "Core",
    duration: "2 Weeks",
    mode: "Live Online Sessions + Case Studies",
    credential: "IPSG Certified",
    modules: "06 Modules",
    hours: "32 Hours",
    batch: "25 Learners",
    status: "Enrolling Now",
    startDate: "Starts August 2026",
    deliveryMode: "100% Online",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=90",
    highlights: [
      "Patient Identification Protocols",
      "Medication Safety",
      "Error-Free Documentation",
    ],
    description:
      "Structured training built around the World Health Organization's International Patient Safety Goals, equipping nurses and care staff with globally recognised protocols for safe, error-free care delivery at home.",
  },
  {
    id: 3,
    code: "ACD-03",
    title: "Geriatric Nursing",
    category: "Elderly Care",
    level: "Intermediate",
    duration: "6 Weeks",
    mode: "Live Online Sessions + Guided Practicum",
    credential: "Specialty Certificate",
    modules: "12 Modules",
    hours: "90 Hours",
    batch: "18 Learners",
    status: "Enrolling Now",
    startDate: "Starts August 2026",
    deliveryMode: "100% Online",
    image:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1000&q=90",
    highlights: [
      "ICOPE-Aligned Assessment",
      "Fall Prevention",
      "Chronic Condition Management",
    ],
    description:
      "Specialised training in elder care covering mobility support, chronic condition management and fall prevention — aligned with the WHO ICOPE framework used in Aureal's dedicated Geriatric Care module.",
  },
  {
    id: 4,
    code: "ACD-04",
    title: "Basic Nursing Skills – Adult",
    category: "Core Certification",
    level: "Foundation",
    duration: "8 Weeks",
    mode: "Live Online Sessions + Skill Assessments",
    credential: "Bedside Care Certified",
    modules: "14 Modules",
    hours: "120 Hours",
    batch: "24 Learners",
    status: "Enrolling Now",
    startDate: "Starts August 2026",
    deliveryMode: "100% Online",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=90",
    highlights: [
      "Vitals Monitoring",
      "Hygiene & Comfort Care",
      "Clinical Documentation",
    ],
    description:
      "An entry-level certification covering the essentials of adult nursing care — vitals monitoring, hygiene assistance, medication support and accurate clinical documentation for confident, competent home-based care.",
  },
  {
    id: 5,
    code: "ACD-05",
    title: "Advanced Nursing Skills – Adult",
    category: "Advanced Certification",
    level: "Advanced",
    duration: "10 Weeks",
    mode: "Live Online Sessions + Applied Case Simulation",
    credential: "Critical Care Certified",
    modules: "16 Modules",
    hours: "160 Hours",
    batch: "16 Learners",
    status: "Enrolling Now",
    startDate: "Starts August 2026",
    deliveryMode: "100% Online",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=90",
    highlights: [
      "Wound & IV Care",
      "Post-Operative Monitoring",
      "High-Acuity Case Management",
    ],
    description:
      "Progresses into complex adult nursing procedures — wound management, IV care and post-operative monitoring — preparing experienced nurses to confidently handle higher-acuity cases within the home environment.",
  },
  {
    id: 6,
    code: "ACD-06",
    title: "Paediatric Level 1 – Basic Newborn & Baby Care",
    category: "Newborn Care",
    level: "Foundation",
    duration: "4 Weeks",
    mode: "Live Online Sessions + Guided Practice",
    credential: "Newborn Care Certified",
    modules: "10 Modules",
    hours: "60 Hours",
    batch: "20 Learners",
    status: "Enrolling Now",
    startDate: "Starts August 2026",
    deliveryMode: "100% Online",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=90",
    highlights: [
      "Feeding & Lactation Support",
      "Growth Monitoring",
      "Safe Handling Practices",
    ],
    description:
      "An introductory certification in newborn and infant care covering feeding support, hygiene, growth monitoring and safe handling — guided by Indian Academy of Pediatrics (IAP) standards.",
  },
  {
    id: 7,
    code: "ACD-07",
    title: "Advanced Nursing Skills – Paediatric",
    category: "Advanced Certification",
    level: "Advanced",
    duration: "9 Weeks",
    mode: "Live Online Sessions + Clinical Scenario Training",
    credential: "IAP-Aligned Certification",
    modules: "15 Modules",
    hours: "140 Hours",
    batch: "14 Learners",
    status: "Enrolling Now",
    startDate: "Starts August 2026",
    deliveryMode: "100% Online",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1000&q=90",
    highlights: [
      "Chronic Childhood Conditions",
      "Complex Home-Care Protocols",
      "Family-Centred Counselling",
    ],
    description:
      "Builds on foundational paediatric care with advanced clinical skills for managing chronic childhood conditions and complex home-care needs — fully aligned with Indian Academy of Pediatrics (IAP) guidelines.",
  },
  {
    id: 8,
    code: "ACD-08",
    title: "Quality Control Nurse – NABH",
    category: "Quality & Compliance",
    level: "Professional",
    duration: "6 Weeks",
    mode: "Live Online Sessions + Live Audit Practice",
    credential: "NABH Audit Ready",
    modules: "12 Modules",
    hours: "80 Hours",
    batch: "22 Learners",
    status: "Enrolling Now",
    startDate: "Starts August 2026",
    deliveryMode: "100% Online",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=90",
    highlights: [
      "Clinical Quality Audits",
      "KPI Monitoring",
      "CAPA Documentation",
    ],
    description:
      "Certification in NABH nursing excellence standards, preparing nurses to lead quality assurance, compliance monitoring and continuous improvement initiatives within a home care setting.",
  },
  {
    id: 9,
    code: "ACD-09",
    title: "Infection Control Nurse – NABH",
    category: "Quality & Compliance",
    level: "Professional",
    duration: "6 Weeks",
    mode: "Live Online Sessions + Applied Practicum",
    credential: "ICN Certified",
    modules: "13 Modules",
    hours: "85 Hours",
    batch: "22 Learners",
    status: "Enrolling Now",
    startDate: "Starts August 2026",
    deliveryMode: "100% Online",
    image:
      "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&w=1000&q=90",
    highlights: [
      "Infection Surveillance",
      "Biomedical Waste Segregation",
      "Hand Hygiene Auditing",
    ],
    description:
      "Focused training in infection prevention and control under NABH standards — critical for maintaining hospital-grade hygiene and safety within the home care environment.",
  },
  {
    id: 10,
    code: "ACD-10",
    title: "Effective Communication in Healthcare",
    category: "Professional Skills",
    level: "All Levels",
    duration: "3 Weeks",
    mode: "Live Online Sessions + Role-Play Practice",
    credential: "Soft Skills Certified",
    modules: "09 Modules",
    hours: "36 Hours",
    batch: "30 Learners",
    status: "Enrolling Now",
    startDate: "Starts August 2026",
    deliveryMode: "100% Online",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=90",
    highlights: [
      "SBAR Handover",
      "Empathetic Family Communication",
      "Confidence Under Pressure",
    ],
    description:
      "Builds the interpersonal and communication skills nurses and care staff need to support patients and families with clarity, empathy and confidence — even in high-stress home care situations.",
  },
];

const HERO_TITLE =
  "Certificate programs, clinical courses and academic pathways built for healthcare professionals.";

const heroStats = [];

const EASE = [0.21, 0.92, 0.3, 1];

/* ---------------- Icons ---------------- */
const CapIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4 2 9l10 5 10-5-10-5Z" />
    <path d="M6 11.5V17c0 1.1 2.7 3 6 3s6-1.9 6-3v-5.5" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const StackIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
    <path d="m3 12 9 4.5L21 12" />
    <path d="m3 16.5 9 4.5 9-4.5" />
  </svg>
);
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17 21a5 5 0 0 0-10 0" />
    <circle cx="12" cy="8" r="4" />
    <path d="M21 21a4 4 0 0 0-3-3.85" />
  </svg>
);
const BadgeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="9" r="5.5" />
    <path d="m8.5 13.5-1 7.5 4.5-2.5 4.5 2.5-1-7.5" />
  </svg>
);
const GridIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
  </svg>
);
const ListIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 6h13M8 12h13M8 18h13" />
    <path d="M3 6h.01M3 12h.01M3 18h.01" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m20 6-11 11-5-5" />
  </svg>
);
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
  </svg>
);
const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    style={{ width: 14, height: 14 }}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
  </svg>
);

/* ---------------- Word-by-word hero title ---------------- */
const HeroTitle = ({ text }) => {
  const container = {
    hidden: {},
    visible: { transition: { delayChildren: 0.35, staggerChildren: 0.04 } },
  };
  const word = {
    hidden: { y: "120%", opacity: 0, rotateX: 35, filter: "blur(10px)" },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { duration: 1.05, ease: EASE },
    },
  };

  return (
    <motion.h1
      className="acd-hero-title"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split(" ").map((w, i) => (
        <span className="acd-word" key={i}>
          <motion.span variants={word} style={{ display: "inline-block" }}>
            {w}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
};

/* ---------------- Program card with parallax image + footer ---------------- */
const ProgramCardShell = ({ program, index, onEnroll }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  const bodyContainer = {
    hidden: {},
    visible: { transition: { delayChildren: 0.9, staggerChildren: 0.09 } },
  };
  const bodyItem = {
    hidden: { y: 30, opacity: 0, filter: "blur(7px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.68, ease: EASE },
    },
  };

  return (
    <ScrollReveal
      direction="up"
      delay={0.75}
      duration={0.95}
      scale={0.96}
      blur={9}
      threshold={0.15}
      className="acd-card-reveal"
    >
      <article className="acd-card" ref={cardRef}>
        <span className="acd-accent" aria-hidden="true" />

        <div className="acd-media">
          <motion.img
            src={program.image}
            alt={program.title}
            loading="lazy"
            decoding="async"
            style={{ y: imgY }}
            initial={{ scale: 1.25, filter: "blur(8px)", opacity: 0 }}
            whileInView={{ scale: 1.08, filter: "blur(0px)", opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.3, delay: 0.8, ease: EASE }}
          />
          <span className="acd-media-veil" aria-hidden="true" />
          <span className="acd-cat">{program.category}</span>
          <span className="acd-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="acd-level">{program.level}</span>
        </div>

        <motion.div
          className="acd-body"
          variants={bodyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="acd-body-head" variants={bodyItem}>
            <div className="acd-anim-inner">
              <span className="acd-code">{program.code}</span>
              <h3>{program.title}</h3>
              <span className="acd-mode">
                <GlobeIcon />
                {program.mode}
              </span>

              {/* Enrollment status strip */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "10px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#0b3d24",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <motion.span
                    animate={{ opacity: [1, 0.35, 1], scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#1f9d4d",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {program.status}
                </span>
                <span style={{ opacity: 0.35 }}>|</span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <CalendarIcon />
                  {program.startDate}
                </span>
                <span style={{ opacity: 0.35 }}>|</span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#c9971b",
                  }}
                >
                  {program.deliveryMode}
                </span>
              </div>
            </div>

            <div className="acd-duration">
              <span>Duration</span>
              <strong>{program.duration}</strong>
            </div>
          </motion.div>

          <motion.p className="acd-desc" variants={bodyItem}>
            {program.description}
          </motion.p>

          <motion.ul className="acd-tags" variants={bodyItem}>
            {program.highlights.map((h) => (
              <li key={h}>
                <CheckIcon />
                {h}
              </li>
            ))}
          </motion.ul>

          <motion.div className="acd-foot" variants={bodyItem}>
            <div className="acd-meta">
              <span>
                <StackIcon />
                {program.modules}
              </span>
              <span>
                <ClockIcon />
                {program.hours}
              </span>
              <span>
                <UsersIcon />
                {program.batch}
              </span>
              <span>
                <BadgeIcon />
                {program.credential}
              </span>
            </div>

            <div className="acd-foot-cta">
              <button
                type="button"
                className="acd-btn acd-btn-enroll"
                onClick={() => onEnroll(program)}
                aria-label={`Enroll now in ${program.title}`}
              >
                <span className="acd-btn-txt">Enroll Now</span>
                <span className="acd-btn-ico">→</span>
              </button>
              <span className="acd-foot-note">
                <span className="acd-foot-note-dot" aria-hidden="true" />
                {"Limited seats · "}
                {program.startDate}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </article>
    </ScrollReveal>
  );
};

/* ---------------- Animated counter (kept for future heroStats) ---------------- */
const StatNum = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <strong>
      <span className="acd-stat-num" ref={ref}>
        {display.toLocaleString("en-IN")}
      </span>
      {suffix}
    </strong>
  );
};

const Academics = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const modalRef = useRef(null);

  const [view, setView] = useState("list");
  const [filter, setFilter] = useState("All Programs");
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = useMemo(
    () => ["All Programs", ...new Set(programs.map((p) => p.category))],
    []
  );

  const filtered = useMemo(
    () =>
      filter === "All Programs"
        ? programs
        : programs.filter((p) => p.category === filter),
    [filter]
  );

  /* Scroll progress bar */
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  /* Hero parallax */
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroInnerY = useTransform(heroScroll, [0, 1], ["0%", "-12%"]);
  const heroInnerOpacity = useTransform(heroScroll, [0, 1], [1, 0.28]);
  const glow1Y = useTransform(heroScroll, [0, 1], ["0%", "35%"]);
  const glow2Y = useTransform(heroScroll, [0, 1], ["0%", "-28%"]);

  const openModal = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: "", whatsapp: "", location: "" });
    setSelectedProgram(null);
    document.body.style.overflow = "auto";
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.whatsapp || !formData.location) {
      alert("Please fill all fields");
      setIsSubmitting(false);
      return;
    }

    const message = `Hello! I would like to enroll in the following course:\n\n*Course Name:* ${selectedProgram.title}\n*Course Code:* ${selectedProgram.code}\n*Duration:* ${selectedProgram.duration}\n*Batch:* ${selectedProgram.startDate}\n\n*My Details:*\nName: ${formData.name}\nWhatsApp: ${formData.whatsapp}\nLocation: ${formData.location}`;

    const whatsappNumber = "919944969049";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      closeModal();
    }, 600);
  };

  return (
    <main className="acd-page" ref={pageRef}>
      <div className="acd-progress" aria-hidden="true">
        <motion.span ref={null} style={{ scaleX: progress, transformOrigin: "left center" }} />
      </div>

      {/* ===================== HERO ===================== */}
      <section className="acd-hero" ref={heroRef}>
        <div className="acd-hero-bg" aria-hidden="true">
          <motion.span className="acd-glow acd-glow-1" style={{ y: glow1Y }} />
          <motion.span className="acd-glow acd-glow-2" style={{ y: glow2Y }} />
          <span className="acd-dots" />
          <span className="acd-rings" />
        </div>

        <motion.div
          className="acd-container acd-hero-inner"
          style={{ y: heroInnerY, opacity: heroInnerOpacity }}
        >
          <motion.div
            className="acd-badge"
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          >
            <span className="acd-dot" />
            Academics · Online Certificate Programs
          </motion.div>

          <HeroTitle text={HERO_TITLE} />

          <motion.p
            className="acd-hero-text"
            initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.8, ease: EASE }}
          >
            Structured, competency-based nursing and allied healthcare
            certifications — designed with NABH, WHO and IAP-aligned patient-safety
            standards, delivered through live online sessions, guided practicums
            and assessed sign-off for home care professionals across India.
          </motion.p>

          <div className="acd-stats">
            {heroStats.map((s) => (
              <div className="acd-stat" key={s.label}>
                <StatNum value={s.value} suffix={s.suffix} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <motion.div
            className="acd-toolbar"
            initial={{ y: 38, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
          >
            <div
              className="acd-filters"
              role="tablist"
              aria-label="Program categories"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat}
                  className={`acd-chip ${filter === cat ? "is-active" : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="acd-toolbar-right">
              <div className="acd-count">
                <CapIcon />
                {String(filtered.length).padStart(2, "0")} Programs
              </div>

              <div className="acd-view" role="group" aria-label="Layout">
                <button
                  type="button"
                  className={view === "list" ? "is-active" : ""}
                  onClick={() => setView("list")}
                  aria-label="List view"
                >
                  <ListIcon />
                </button>
                <button
                  type="button"
                  className={view === "grid" ? "is-active" : ""}
                  onClick={() => setView("grid")}
                  aria-label="Grid view"
                >
                  <GridIcon />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="acd-scroll-cue" aria-hidden="true">
          <span />
          Scroll
        </div>
      </section>

      {/* ===================== CATALOGUE ===================== */}
      <section className="acd-section" id="programs">
        <div className="acd-container">
          <ScrollReveal
            direction="up"
            delay={0.6}
            duration={0.9}
            blur={8}
            className="acd-sec-head"
          >
            <span className="acd-sec-line" />
            <h2>Program Catalogue</h2>
            <p>
              Ten focused, online-delivered certifications spanning bedside
              fundamentals, elderly and paediatric care, accreditation
              compliance and professional communication — with new batches
              starting August 2026.
            </p>
          </ScrollReveal>

          <div className={`acd-list ${view === "grid" ? "is-grid" : ""}`}>
            {filtered.map((p, i) => (
              <ProgramCardShell
                key={`${p.id}-${view}-${filter}`}
                program={p}
                index={i}
                onEnroll={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="acd-cta">
        <ScrollReveal
          direction="up"
          delay={0.35}
          duration={1}
          scale={0.48}
          blur={8}
          staggerChildren={0.1}
          className="acd-container acd-cta-inner"
        >
          <span className="acd-cta-badge">Admissions Open · August 2026</span>
          <h2>Build a clinically confident, accreditation-ready nursing team.</h2>
          <p>
            All programs are delivered 100% online with live sessions and
            guided practicums. Speak with our academic coordinator to map the
            right certification pathway for your hospital or your career.
          </p>
          <div className="acd-cta-actions">
            <a className="acd-btn acd-btn-solid" href="#programs">
              <span className="acd-btn-txt">Request Prospectus</span>
              <span className="acd-btn-ico">→</span>
            </a>
            <a className="acd-btn acd-btn-ghost" href="tel:+919944969049">
              <span className="acd-btn-txt">Talk to Coordinator</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ===================== ENROLL MODAL ===================== */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="acd-modal-overlay"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="acd-modal-content"
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ duration: 0.5, ease: [0.34, 1.4, 0.64, 1] }}
            >
              <div className="acd-modal-header">
                <h2>Enroll in Course</h2>
                <button
                  className="acd-modal-close"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {selectedProgram && (
                <div className="acd-modal-info">
                  <div className="acd-info-item">
                    <span className="acd-info-label">Course</span>
                    <span className="acd-info-value">
                      {selectedProgram.title}
                    </span>
                  </div>
                  <div className="acd-info-item">
                    <span className="acd-info-label">Code</span>
                    <span className="acd-info-value">
                      {selectedProgram.code}
                    </span>
                  </div>
                  <div className="acd-info-item">
                    <span className="acd-info-label">Duration</span>
                    <span className="acd-info-value">
                      {selectedProgram.duration}
                    </span>
                  </div>
                  <div className="acd-info-item">
                    <span className="acd-info-label">Batch</span>
                    <span className="acd-info-value">
                      {selectedProgram.startDate}
                    </span>
                  </div>
                </div>
              )}

              <motion.form
                className="acd-modal-form"
                onSubmit={handleSubmit}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { delayChildren: 0.2, staggerChildren: 0.08 },
                  },
                }}
              >
                {[
                  <div className="acd-form-group" key="name">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>,
                  <div className="acd-form-group" key="wa">
                    <label htmlFor="whatsapp">WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleFormChange}
                      placeholder="Enter WhatsApp number with country code"
                      required
                    />
                  </div>,
                  <div className="acd-form-group" key="loc">
                    <label htmlFor="location">Location *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleFormChange}
                      placeholder="Enter your city/location"
                      required
                    />
                  </div>,
                  <div className="acd-form-actions" key="actions">
                    <button
                      type="button"
                      className="acd-btn-secondary"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="acd-btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Submit"}
                    </button>
                  </div>,
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: EASE },
                      },
                    }}
                  >
                    {node}
                  </motion.div>
                ))}
              </motion.form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Academics;