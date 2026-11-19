// Appointment.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./Appointment.css";
import Whybookus from "../components/whybokus";
import Form from "../components/Form";
import Call from "../components/Call";

gsap.registerPlugin(ScrollTrigger);

const Appointment = () => {
  const pageRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const heroRef = useRef(null);
  const heroPinRef = useRef(null);
  const stepsRef = useRef(null);
  const counterRefs = useRef([]);

  const [formData, setFormData] = useState({
    patientName: "",
    whatsapp: "",
    age: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenis;
    if (!reduceMotion) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }

    const ctx = gsap.context(() => {
      const cursor = cursorRef.current;
      const dot = cursorDotRef.current;
      const isTouch = window.matchMedia("(pointer: coarse)").matches;

      if (cursor && dot && !isTouch && !reduceMotion) {
        gsap.set([cursor, dot], { xPercent: -50, yPercent: -50 });
        const move = (e) => {
          gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.55, ease: "power3.out" });
          gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
        };
        window.addEventListener("mousemove", move);
      } else if (cursor) {
        cursor.style.display = "none";
        if (dot) dot.style.display = "none";
      }

      gsap.set(".apt-hero-title-line", { y: 70, opacity: 0, filter: "blur(12px)" });

      const heroTl = gsap.timeline({ delay: 0.12 });
      heroTl
        .fromTo(
          ".apt-hero-mask",
          { clipPath: "circle(8% at 50% 42%)" },
          { clipPath: "circle(160% at 50% 42%)", duration: 1.45, ease: "power4.inOut" }
        )
        .fromTo(
          ".apt-hero-badge",
          { y: 28, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "expo.out" },
          "-=0.85"
        )
        .to(
          ".apt-hero-title-line",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.95,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .from(".apt-hero-sub", { y: 24, opacity: 0, duration: 0.85, ease: "power3.out" }, "-=0.45")
        .from(
          ".apt-hero-chips .apt-chip",
          { y: 18, opacity: 0, stagger: 0.08, duration: 0.55, ease: "back.out(1.7)" },
          "-=0.4"
        );

      if (heroPinRef.current && !reduceMotion) {
        gsap.fromTo(
          ".apt-hero-bg-img",
          { scale: 1.35, yPercent: -5 },
          {
            scale: 1,
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: heroPinRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );

        gsap.to(".apt-hero-overlay", {
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: heroPinRef.current,
            start: "top top",
            end: "80% top",
            scrub: 1,
          },
        });

        gsap.to(".apt-hero-content", {
          y: -70,
          opacity: 0.2,
          scale: 0.94,
          ease: "none",
          scrollTrigger: {
            trigger: heroPinRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      gsap.utils.toArray(".apt-float-el").forEach((el, i) => {
        gsap.to(el, {
          y: "random(-18, 18)",
          x: "random(-10, 10)",
          rotation: "random(-5, 5)",
          duration: "random(4, 7)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });

      counterRefs.current.forEach((el) => {
        if (!el) return;
        const target = parseFloat(el.getAttribute("data-count"));
        const suffix = el.getAttribute("data-suffix") || "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          onUpdate: () => {
            el.textContent =
              (target % 1 !== 0 ? obj.val.toFixed(1) : Math.ceil(obj.val)) + suffix;
          },
        });
      });

      gsap.from(".apt-stats-strip", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".apt-stats-strip", start: "top 90%" },
      });

      gsap.from(".apt-steps-eyebrow", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".apt-steps-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".apt-steps-sub", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.utils.toArray(".apt-step-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", y: 40, opacity: 0 },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.inOut",
            delay: i * 0.08,
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.fromTo(
        ".apt-steps-connector",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          duration: 1.3,
          ease: "power3.inOut",
          scrollTrigger: { trigger: stepsRef.current, start: "top 70%" },
        }
      );

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      ctx.revert();
      if (lenis) lenis.destroy();
    };
  }, []);

  const steps = [
    { num: "01", icon: "📋", title: "Fill the Form", desc: "Enter your basic details and describe your health concern briefly." },
    { num: "02", icon: "📞", title: "We Call You Back", desc: "Our clinical coordinator contacts you within 30 minutes to confirm." },
    { num: "03", icon: "🏥", title: "Specialist Assigned", desc: "A board-certified specialist is matched to your specific clinical need." },
    { num: "04", icon: "🏠", title: "Care at Your Door", desc: "Receive hospital-grade precision care in the comfort of your home." },
  ];

  const stats = [
    { count: 30, suffix: "+", label: "Specialities" },
    { count: 500, suffix: "+", label: "MBBS Doctors" },
    { count: 10, suffix: "+", label: "Centers" },
    { count: 30, suffix: " min", label: "Avg. Emergency Visits" },
    { count: 4.9, suffix: "+", label: "Google Rating" },
  ];

  return (
    <div className="apt-page" ref={pageRef}>
      <div className="apt-cursor" ref={cursorRef}></div>
      <div className="apt-cursor-dot" ref={cursorDotRef}></div>

      {/* HERO SECTION WITH ADVANCED ZOOM-OUT & 2-LINE BALANCED HEADING */}
      <section className="apt-hero" ref={heroRef}>
        <div className="apt-hero-pin" ref={heroPinRef}>
          <div
            className="apt-hero-bg-img"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2400&q=85')",
            }}
          />
          <div className="apt-hero-overlay" />
          <div className="apt-hero-vignette" />

          {/* <div className="apt-hero-deco-group">
            <div className="apt-hero-deco apt-float-el" style={{ top: "14%", left: "8%" }} />
            <div className="apt-hero-deco apt-float-el" style={{ top: "22%", right: "10%" }} />
            <div className="apt-hero-deco apt-float-el" style={{ bottom: "22%", left: "12%" }} />
            <div className="apt-hero-deco apt-float-el" style={{ bottom: "16%", right: "8%" }} />
          </div> */}

          <div className="apt-hero-mask">
            <div className="apt-hero-content">
              <span className="apt-hero-badge">Book an Appointment</span>

              <h1 className="apt-hero-title">
                <span className="apt-hero-title-line">Your Health Journey</span>
                <span className="apt-hero-title-line apt-hero-title-accent">Starts Here</span>
              </h1>

              <p className="apt-hero-sub">
                Schedule a consultation with our specialist team. Experience precision
                medicine delivered directly to your home with UK-standard clinical
                protocols.
              </p>

              <div className="apt-hero-chips">
                <span className="apt-chip">✓ Board-Certified</span>
                <span className="apt-chip">✓ Home-Based</span>
                <span className="apt-chip">✓ NABH Aligned</span>
              </div>
            </div>
          </div>

          <div className="apt-scroll-cue">
            <span />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="apt-stats-strip">
        <div className="apt-stats-inner">
          {stats.map((s, i) => (
            <div className="apt-stat-block" key={i}>
              <div
                className="apt-stat-num"
                ref={(el) => (counterRefs.current[i] = el)}
                data-count={s.count}
                data-suffix={s.suffix}
              >
                0
              </div>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION — LIGHT MILK BG, YELLOW NUMBERS, DARK GREEN HEADERS, BLACK PARAGRAPHS */}
      <section className="apt-steps" ref={stepsRef}>
        <span className="apt-steps-glow apt-steps-glow--a" aria-hidden="true" />
        <span className="apt-steps-glow apt-steps-glow--b" aria-hidden="true" />
        <span className="apt-steps-mesh" aria-hidden="true" />
        <span className="apt-steps-grain" aria-hidden="true" />

        <div className="apt-steps-inner">
          <div className="apt-steps-head">
            <span className="apt-steps-eyebrow">
              <i className="apt-eyebrow-dot" />
              Simple 4-Step Process
            </span>
            <h2 className="apt-steps-title">
              How It <span className="apt-accent">Works</span>
            </h2>
            <p className="apt-steps-sub">
              From your first request to hospital-grade care at your doorstep — precision at every step.
            </p>
            <span className="apt-steps-rule" aria-hidden="true"><i /></span>
          </div>

          <div className="apt-steps-grid">
            <div className="apt-steps-connector" />
            {steps.map((step) => (
              <div className="apt-step-card" key={step.num}>
                <span className="apt-step-sheen" aria-hidden="true" />
                <div className="apt-step-num">{step.num}</div>
                <div className="apt-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="apt-step-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="" />

      <Whybookus />
      <Form />
      <Call />
    </div>
  );
};

export default Appointment;