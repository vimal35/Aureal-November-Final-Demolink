// slider.jsx
import { useLayoutEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LuPhoneCall,
  LuUserRound,
  LuStethoscope,
  LuClipboardList,
  LuUsers,
  LuHouse,
  LuHeartPulse,
  LuActivity,
  LuShieldCheck,
  LuCalendarCheck,
  LuBrainCircuit,
  LuNotebookPen,
  LuHandHeart,
  LuTimer,
  LuVideo,
  LuMessageSquareHeart,
  LuPill,
  LuTrendingUp,
  LuSparkles,
  LuFileHeart,
  LuMonitorSmartphone,
  LuBadgeCheck,
  LuRibbon,
  LuMoonStar,
  LuSun,
  LuLeaf,
  LuMapPin,
  LuSyringe,
} from "react-icons/lu";

import "./slider.css";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    id: 1,
    tag: "Begin",
    title: "Patient Enquiry – Tele Triage",
    image:
      "/slider01.webp", 
    desc: "A calm clinical conversation starts the journey. Our tele-triage team listens carefully, records symptoms, reviews urgency, and guides the patient to the safest next step with clarity and confidence.",
    bullets: [
      { icon: LuPhoneCall, label: "Instant response", sub: "Connected quickly by trained care coordinators" },
      { icon: LuClipboardList, label: "Clinical triage", sub: "Structured symptom and history capture" },
      { icon: LuTimer, label: "Urgency scoring", sub: "Priority routed to the right care pathway" },
      { icon: LuShieldCheck, label: "Private & secure", sub: "Consent-first and confidential intake" },
    ],
  },
  {
    id: 2,
    tag: "Match",
    title: "Doctor Assigned",
    image:
      "/slider02.webp",
    desc: "The patient is matched with the right doctor based on condition, complexity, language preference, and care goals. The doctor reviews the triage notes before the first consultation, making every interaction more focused.",
    bullets: [
      { icon: LuUserRound, label: "Dedicated consultant", sub: "One doctor leads the complete journey" },
      { icon: LuBadgeCheck, label: "Specialty matched", sub: "Expertise aligned to the patient’s need" },
      { icon: LuVideo, label: "Intro consult", sub: "Video or home consultation available" },
      { icon: LuFileHeart, label: "Pre-read records", sub: "History reviewed before contact" },
    ],
  },
  {
    id: 3,
    tag: "Evaluate",
    title: "Comprehensive Assessment",
    image:
      "/slider03.webp",
    desc: "A complete evaluation helps us understand the patient’s health, risks, lifestyle, and recovery potential. Findings are explained in clear language, so the family understands exactly what is happening and why.",
    bullets: [
      { icon: LuStethoscope, label: "Bedside exam", sub: "Detailed assessment in the comfort of home" },
      { icon: LuSyringe, label: "Diagnostics", sub: "Labs and investigations coordinated smoothly" },
      { icon: LuBrainCircuit, label: "Risk profiling", sub: "Clinical risks identified early" },
      { icon: LuNotebookPen, label: "Clear reporting", sub: "Simple explanations, no confusing jargon" },
    ],
  },
  {
    id: 4,
    tag: "Design",
    title: "Personalised Care Plan",
    image:
      "/slider4.webp",
    desc: "The care plan is designed around the patient, not a template. Medication, nutrition, therapy, monitoring, and recovery milestones are aligned with the patient’s condition, home environment, and daily routine.",
    bullets: [
      { icon: LuCalendarCheck, label: "Milestone roadmap", sub: "Weekly goals with measurable progress" },
      { icon: LuPill, label: "Medication design", sub: "Optimised treatment with doctor oversight" },
      { icon: LuLeaf, label: "Nutrition & lifestyle", sub: "Practical guidance that fits daily life" },
      { icon: LuMessageSquareHeart, label: "Family briefing", sub: "Everyone understands the care direction" },
    ],
  },
  {
    id: 5,
    tag: "Assemble",
    title: "Multi-Disciplinary Care Team",
    image:
      "/slider055.webp",
    desc: "A connected team is assigned around one shared plan. Doctors, nurses, physiotherapists, nutrition experts, and coordinators work together so care feels seamless, organised, and accountable.",
    bullets: [
      { icon: LuUsers, label: "Unified team", sub: "Multiple specialists working as one unit" },
      { icon: LuActivity, label: "Weekly huddles", sub: "Progress reviewed collectively" },
      { icon: LuHandHeart, label: "Emotional care", sub: "Support for patient and family wellbeing" },
      { icon: LuMapPin, label: "Local response", sub: "Care support coordinated near the patient" },
    ],
  },
  {
    id: 6,
    tag: "Deliver",
    title: "Integrated Care at Home",
    image:
      "/slider06.webp",
    desc: "Hospital-grade discipline is brought into the comfort of home. Scheduled visits, vitals monitoring, escalation pathways, and doctor updates keep recovery safe without unnecessary hospital disruption.",
    bullets: [
      { icon: LuHouse, label: "Care at home", sub: "Clinical care delivered in a familiar space" },
      { icon: LuMonitorSmartphone, label: "Remote monitoring", sub: "Vitals and updates tracked consistently" },
      { icon: LuMoonStar, label: "24/7 escalation", sub: "A care pathway is always available" },
      { icon: LuHeartPulse, label: "Same-day action", sub: "Changes are identified and acted on early" },
    ],
  },
  {
    id: 7,
    tag: "Thrive",
    title: "Full Recovery & Optimal Vitality",
    image:
      "/slider07.webp",
    desc: "Recovery continues into long-term strength and independence. We help patients protect progress, reduce relapse risk, rebuild confidence, and return to daily life with renewed vitality.",
    bullets: [
      { icon: LuTrendingUp, label: "Measured outcomes", sub: "Progress tracked with meaningful health markers" },
      { icon: LuRibbon, label: "Relapse safeguard", sub: "Follow-ups designed to prevent setbacks" },
      { icon: LuSun, label: "Vitality coaching", sub: "Strength, sleep, lifestyle, and longevity support" },
      { icon: LuSparkles, label: "Independent living", sub: "Confidence to return fully to life" },
    ],
  },
];

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const pad = (n) => String(n).padStart(2, "0");

export default function Slider() {
  const rootRef = useRef(null);
  const pinRef = useRef(null);
  const stageRef = useRef(null);
  const cardsRef = useRef([]);
  const panelsRef = useRef([]);
  const barRef = useRef(null);
  const stRef = useRef(null);

  const metrics = useRef({ A: 0, B: 0, small: 0.4, wave: 30 });
  const pos = useRef({ target: 0, current: 0 });
  const [active, setActive] = useState(0);

  const N = STEPS.length;

  const goTo = useCallback(
    (i) => {
      const st = stRef.current;
      if (!st) return;

      window.scrollTo({
        top: st.start + (st.end - st.start) * (i / (N - 1)),
        behavior: "smooth",
      });
    },
    [N]
  );

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      const panels = panelsRef.current.filter(Boolean);
      const stage = stageRef.current;

      /* geometry tuned to reproduce the 67%-zoom composition at 100% */
      const measure = () => {
        const w = stage?.offsetWidth || window.innerWidth;
        const cardW = cards[0]?.offsetWidth || Math.min(w * 0.34, 380);
        const mobile = window.innerWidth < 760;

        const smallScale = mobile ? 0.36 : 0.42;
        const gap = mobile ? w * 0.03 : w * 0.055;

        metrics.current.A = cardW * 0.5 + cardW * smallScale * 0.5 + gap;
        metrics.current.B = cardW * smallScale + gap;
        metrics.current.small = smallScale;
        metrics.current.wave = cardW * (mobile ? 0.075 : 0.09);
      };

      const render = () => {
        const p = pos.current.current;
        const { A, B, small, wave } = metrics.current;

        for (let i = 0; i < cards.length; i++) {
          const d = i - p;
          const ad = Math.abs(d);
          const sign = d < 0 ? -1 : 1;
          const near = Math.min(ad, 1);
          const far = Math.max(ad - 1, 0);

          const x = sign * (A * near + B * far);
          const ripple = Math.sin((i - p) * 1.18) * wave * clamp(1 - ad * 0.12, 0.38, 1);
          const y = ripple + near * 8 + far * 4;
          const z = -(near * 120 + far * 70);
          const rotateY = clamp(-d * 8, -18, 18);
          const rotateZ = clamp(Math.sin(d * 0.9) * 2.4, -3, 3);
          const scale = ad < 1 ? 1 - (1 - small) * near : clamp(small - far * 0.035, 0.24, small);
          const opacity = ad < 0.46 ? 1 : ad < 3.8 ? 0.5 : 0.22;

          const el = cards[i];
          el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
          el.style.opacity = opacity;
          el.style.zIndex = String(1000 - Math.round(ad * 90));
          el.style.pointerEvents = ad < 0.55 ? "auto" : "none";
        }

        for (let i = 0; i < panels.length; i++) {
          const d = i - p;
          const ad = Math.abs(d);
          const o = clamp(1 - ad * 2.65, 0, 1);
          const waveY = Math.sin(d * 1.15) * 12;

          const el = panels[i];
          el.style.opacity = o;
          el.style.transform = `translate3d(0, ${d * 24 + waveY}px, 0)`;
          el.style.visibility = o <= 0.01 ? "hidden" : "visible";
          el.style.pointerEvents = ad < 0.35 ? "auto" : "none";
        }

        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${clamp(p / (N - 1), 0, 1)})`;
        }

        const idx = clamp(Math.round(p), 0, N - 1);
        setActive((prev) => (prev === idx ? prev : idx));
      };

      const tick = () => {
        const s = pos.current;
        const diff = s.target - s.current;

        if (Math.abs(diff) < 0.00025) {
          if (s.current !== s.target) {
            s.current = s.target;
            render();
          }
          return;
        }

        const ease = reduce ? 1 : clamp(0.12 * gsap.ticker.deltaRatio(), 0.06, 0.22);
        s.current += diff * ease;
        render();
      };

      measure();
      render();

      gsap.ticker.add(tick);

      const st = ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: () => "+=" + (N - 1) * window.innerHeight * 1.18,
        pin: pinRef.current,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: reduce
          ? false
          : {
              snapTo: 1 / (N - 1),
              duration: { min: 0.18, max: 0.55 },
              delay: 0.03,
              ease: "power2.inOut",
            },
        onRefresh: (self) => {
          measure();
          pos.current.target = self.progress * (N - 1);
          pos.current.current = pos.current.target;
          render();
        },
        onUpdate: (self) => {
          pos.current.target = self.progress * (N - 1);
        },
      });

      stRef.current = st;

      if (!reduce) {
        gsap.from(".stp__eyebrow, .stp__title, .stp__sub", {
          y: 18,
          opacity: 0,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 78%",
          },
        });
      }

      const onResize = () => {
        measure();
        render();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", onResize);

      return () => {
        gsap.ticker.remove(tick);
        window.removeEventListener("resize", onResize);
      };
    }, rootRef);

    return () => ctx.revert();
  }, [N]);

  return (
    <section className="stp" ref={rootRef}>
      <div className="stp__pin" ref={pinRef}>
        <div className="stp__grid" aria-hidden="true" />
        <div className="stp__aura stp__aura--a" aria-hidden="true" />
        <div className="stp__aura stp__aura--b" aria-hidden="true" />
        <div className="stp__softline" aria-hidden="true" />

        <header className="stp__head">
          {/* <span className="stp__eyebrow">Complete Care. Continuous Support.</span> */}
          <h2 className="stp__title"> 
            CARE CALIBERATED  <em>TO YOU</em>
          </h2>
          <p className="stp__sub">
            From the first enquiry to full recovery — seven deliberate steps, delivered at home.
          </p>
        </header>

        <div className="stp__stage" ref={stageRef}>
          <div className="stp__track">
            {STEPS.map((s, i) => (
              <figure
                key={s.id}
                className="stp__card"
                ref={(el) => (cardsRef.current[i] = el)}
                onClick={() => goTo(i)}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  draggable="false"
                  loading={i <= 1 ? "eager" : "lazy"}
                />
                {/* <figcaption className="stp__chip">
                  <span />
                  {pad(s.id)} · {s.tag}
                </figcaption> */}
              </figure>
            ))}
          </div>
        </div>

        <div className="stp__panels">
          {STEPS.map((s, i) => (
            <article
              key={s.id}
              className={`stp__panel ${active === i ? "is-active" : ""}`}
              ref={(el) => (panelsRef.current[i] = el)}
            >
              <div className="stp__label">
                {/* <span className="stp__num">{pad(s.id)}</span> */}
                <h3 className="stp__h3">{s.title}</h3>
              </div>

              <span className="stp__rule" aria-hidden="true" />

              <p className="stp__desc">{s.desc}</p>

              <ul className="stp__bullets">
                {s.bullets.map((b, k) => {
                  const Icon = b.icon;
                  return (
                    <li key={k} style={{ "--k": k }}>
                      <span className="stp__ico">
                        <Icon />
                      </span>
                      <span className="stp__btxt">
                        <strong>{b.label}</strong>
                        <em>{b.sub}</em>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}