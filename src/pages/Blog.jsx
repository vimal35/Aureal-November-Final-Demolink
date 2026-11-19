// Blog.jsx
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "How Smart ICU Monitoring Is Changing Critical Care Outcomes",
    date: "March 18, 2026",
    author: "Dr. Ananya Rao",
    category: "Critical Care",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=90",
    link: "https://www.who.int/news-room/fact-sheets/detail/patient-safety",
    description:
      "Modern intensive care units are moving beyond traditional bedside observation toward connected monitoring ecosystems. Smart ICU devices help clinicians track respiratory patterns, blood pressure changes, oxygen saturation and early warning indicators in real time. With accurate data visibility, nurses and physicians can respond faster, reduce manual errors and improve patient safety. Hospitals adopting centralized monitoring also benefit from better workflow coordination and reduced response delays during critical events.",
  },
  {
    id: 2,
    title: "Hospital Infection Control: Building Safer Clinical Environments",
    date: "April 02, 2026",
    author: "Meera Iyer",
    category: "Hospital Safety",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=90",
    link: "https://www.cdc.gov/infection-control/index.html",
    description:
      "Infection control remains one of the most important pillars of hospital quality management. From sterilized surgical zones to antimicrobial surfaces and hand hygiene protocols, every detail contributes to safer patient recovery. Healthcare facilities are now combining staff training, automated disinfection systems and continuous compliance checks to prevent healthcare-associated infections. A strong infection-control culture protects patients, clinical teams and long-term institutional trust.",
  },
  {
    id: 3,
    title: "Why Diagnostic Imaging Technology Is Essential for Early Detection",
    date: "April 21, 2026",
    author: "Dr. Rohan Menon",
    category: "Diagnostics",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=90",
    link: "https://www.radiologyinfo.org/",
    description:
      "Advanced diagnostic imaging gives clinicians the ability to detect disease at earlier and more treatable stages. MRI, CT, ultrasound and digital X-ray systems now offer sharper image resolution, faster scan times and safer patient experiences. For hospitals, investing in reliable imaging infrastructure improves clinical accuracy, reduces diagnostic delays and supports multidisciplinary treatment planning. Imaging technology is no longer just a department asset; it is central to modern patient care.",
  },
  {
    id: 4,
    title: "The Future of Remote Patient Monitoring in Home Healthcare",
    date: "May 09, 2026",
    author: "Sarah Mathew",
    category: "Homecare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=90",
    link: "https://www.healthit.gov/topic/health-it-and-health-information-exchange-basics/telemedicine-and-telehealth",
    description:
      "Remote patient monitoring is helping hospitals extend care beyond physical wards. Connected blood pressure monitors, pulse oximeters, glucose meters and wearable devices allow clinicians to track recovery from home. This model supports chronic disease management, post-surgery follow-up and elderly care without unnecessary hospital visits. When integrated with electronic health records, remote monitoring creates a continuous care loop that improves convenience, safety and clinical decision-making.",
  },
  {
    id: 5,
    title: "Surgical Robotics: Precision, Control and Safer Operating Rooms",
    date: "May 27, 2026",
    author: "Dr. Vikram Shah",
    category: "Surgery",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=90",
    link: "https://www.fda.gov/medical-devices/surgery-devices/computer-assisted-surgical-systems",
    description:
      "Robotic-assisted surgery is transforming how complex procedures are planned and performed. Surgeons gain enhanced visualization, improved instrument control and greater movement precision through advanced robotic systems. For patients, this can mean smaller incisions, reduced blood loss and faster recovery in selected procedures. Hospitals adopting surgical robotics must also focus on staff training, maintenance standards and clinical governance to ensure consistent, safe and effective use.",
  },
  {
    id: 6,
    title: "Digital Hospital Infrastructure: From Devices to Connected Care",
    date: "June 11, 2026",
    author: "Nisha Kapoor",
    category: "Digital Health",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=90",
    link: "https://www.who.int/health-topics/digital-health",
    description:
      "Hospitals are becoming connected ecosystems where devices, departments and clinical teams share information securely. Digital infrastructure links diagnostic machines, monitoring systems, pharmacy workflows and patient records into one coordinated environment. This reduces duplicate work, improves reporting accuracy and enables faster clinical decisions. A successful digital hospital strategy requires cybersecurity, interoperability and user-friendly systems that support doctors and nurses rather than complicating their workflow.",
  },
];

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3v4" />
    <path d="M17 3v4" />
    <path d="M4 9h16" />
    <path d="M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
  </svg>
);

const AuthorIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 21a8 8 0 0 0-16 0" />
    <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
  </svg>
);

/* ------------------------------------------------------------
   Cinematic word-by-word text reveal
   ------------------------------------------------------------ */
const RevealWords = ({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.04,
}) => {
  const container = {
    hidden: {},
    visible: {
      transition: { delayChildren: delay, staggerChildren: stagger },
    },
  };

  const word = {
    hidden: {
      y: "115%",
      opacity: 0,
      rotateX: 45,
      filter: "blur(10px)",
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.21, 0.92, 0.3, 1] },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      style={{ display: "inline" }}
    >
      {text.split(" ").map((w, i) => (
        <span className={wordClassName} key={`${w}-${i}`}>
          <motion.span variants={word} style={{ display: "inline-block" }}>
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

/* ------------------------------------------------------------
   Blog card with parallax image + coordinated reveal
   ------------------------------------------------------------ */
const BlogCard = ({ blog, index }) => {
  const cardRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.05, 1.12]);

  return (
    <ScrollReveal
      direction={"up"}
      delay={0.75}
      duration={1.05}
      scale={0.96}
      blur={10}
      threshold={0.2}
      className="blog-card-reveal"
    >
      <article className="blog-card" ref={cardRef}>
        <a
          className="blog-card-image"
          href={blog.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Read more about ${blog.title}`}
        >
          <motion.img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
            style={{ y: imgY, scale: imgScale }}
          />
          <motion.span
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: 1.05,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {blog.category}
          </motion.span>
        </a>

        <ScrollReveal
          direction="right"
          delay={0.9}
          duration={0.95}
          blur={6}
          scale={1}
          threshold={0.2}
          className="blog-card-content"
        >
          <div className="blog-card-top">
            <motion.span
              className="blog-number"
              initial={{ scale: 0.45, rotate: -12, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: 1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>

            <div className="blog-meta">
              <span>
                <CalendarIcon />
                {blog.date}
              </span>
              <span>
                <AuthorIcon />
                {blog.author}
              </span>
            </div>
          </div>

          <h3>{blog.title}</h3>

          <p>{blog.description}</p>

          <a
            className="blog-read-btn"
            href={blog.link}
            target="_blank"
            rel="noreferrer"
          >
            Read More
            <span>→</span>
          </a>
        </ScrollReveal>
      </article>
    </ScrollReveal>
  );
};

const Blog = () => {
  const heroRef = React.useRef(null);

  const heroTitle =
    "Healthcare insights for modern hospitals and clinical teams.";
  const heroDescription =
    "Explore professional articles on hospital technology, patient safety, diagnostics, digital health, surgical innovation and advanced clinical infrastructure.";

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const titleBlur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(5px)"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.48]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.72]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  const softBlur = useSpring(titleBlur, { stiffness: 100, damping: 30 });

  return (
    <div className="blog-page">
      {/* ===================== HERO ===================== */}
      <section className="blog-hero" ref={heroRef}>
        <motion.img
          className="hero-bg-image"
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=90"
          alt=""
          style={{ y: bgY, scale: bgScale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
        />

        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-shine" aria-hidden="true" />

        <div className="blog-container">
          <div className="blog-hero-content">
            <motion.div
              className="blog-hero-badge"
              style={{ y: badgeY, opacity: badgeOpacity }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.21, 0.92, 0.3, 1],
              }}
            >
              <span className="pulse-dot"></span>
              Hospital Sector Knowledge Hub
            </motion.div>

            <motion.h1
              className="blog-hero-title"
              style={{ y: titleY, filter: softBlur, opacity: titleOpacity }}
            >
              <RevealWords
                text={heroTitle}
                wordClassName="blog-title-word"
                delay={0.25}
                stagger={0.045}
              />
            </motion.h1>

            <motion.p
              className="blog-hero-text"
              style={{ y: textY, opacity: textOpacity }}
              initial={{ opacity: 0, y: 26, scale: 0.96, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.75,
                ease: [0.21, 0.92, 0.3, 1],
              }}
            >
              <RevealWords
                text={heroDescription}
                wordClassName="blog-desc-word"
                delay={0.9}
                stagger={0.018}
              />
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===================== LIST ===================== */}
      <section className="blog-section">
        <div className="blog-container">
          <ScrollReveal
            direction="up"
            delay={0.6}
            duration={0.9}
            blur={8}
            className="blog-section-head"
          >
            <span>Latest Publications</span>
            <h2>Hospital Sector Blogs</h2>
          </ScrollReveal>

          <div className="blog-list">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;