import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: `Khoushal`,
    role: `Family Member`,
    avatar: `K`,
    color: `#4285F4`,
    rating: 5,
    time: `3 months ago`,
    reviewCount: `4 reviews`,
    reviewUrl: `https://www.google.com/maps/contrib/116640003707491660101/reviews?hl=en-GB`,
    text: `Very satisfied with the service provided. The home care nurses have been very caring and professional. When a Doctor's visit was needed, there was a prompt response and Dr Sanjay arrived quickly. He too was very compassionate, took his time explaining every detail and assuaged our fears. Very grateful for their help.`,
  },
  {
    id: 2,
    name: `Bala S`,
    role: `Family Caregiver`,
    avatar: `BS`,
    color: `#DB4437`,
    rating: 5,
    time: `3 months ago`,
    reviewCount: `6 reviews · 4 photos`,
    reviewUrl: `https://www.google.com/maps/contrib/109511985512359244984/reviews?hl=en-GB`,
    text: `Aureal Healthcare provides truly outstanding and compassionate healthcare services. From day one, the support, professionalism, and attention to detail have been exceptional. A very special thanks to Rajakumari, whose dedication, kindness, and genuine concern for patients are remarkable. She cares for patients as if they were her own family, always ensuring their comfort, safety, and well-being. The entire team is dependable, responsive, and highly professional. We are deeply grateful for the excellent care and support provided. Without hesitation, I highly recommend Aureal Healthcare to anyone looking for the highest standard of home healthcare services.`,
  },
  {
    id: 3,
    name: `Varthinii K`,
    role: `Family Member`,
    avatar: `VK`,
    color: `#0F9D58`,
    rating: 5,
    time: `1 week ago`,
    reviewCount: `4 reviews`,
    reviewUrl: `https://www.google.com/maps/contrib/115731382855532887457/reviews?hl=en-GB`,
    text: `I had an excellent experience with this home care service done by Dr. Yogesh sir and nurse Rajkumari. The caregivers were compassionate, professional, and always treated my family member with dignity and respect. They were punctual, attentive to individual needs, and communicated clearly with our family. I would confidently recommend their services to anyone looking for reliable and caring home assistance.`,
  },
  {
    id: 4,
    name: `Sundaran Krishnamurthy`,
    role: `Patient Family`,
    avatar: `SK`,
    color: `#F4B400`,
    rating: 5,
    time: `1 month ago`,
    reviewCount: `4 reviews`,
    reviewUrl: `https://www.google.com/maps/contrib/105003963065757367381/reviews?hl=en-GB`,
    text: `I had a very good experience at this center. The doctors are kind, caring, and take the time to treat patients with compassion. The staff are supportive, friendly, and always ready to help. The service is quick, well-organized, and assistance is provided without unnecessary delays. Overall, I highly recommend this center for its excellent patient care and professional service.`,
  },
  {
    id: 5,
    name: `DHAYANANDHAN V`,
    role: `Son of Patient`,
    avatar: `DV`,
    color: `#AB47BC`,
    rating: 5,
    time: `2 months ago`,
    reviewCount: `2 reviews`,
    reviewUrl: `https://www.google.com/maps/contrib/103039352886853552735/reviews?hl=en-GB`,
    text: `Excellent service! Aureal Healthcare provided an ortho doctor and nurse for my mother at home. Their service was excellent, and we are very happy with the care and support provided. Thank you to the entire team.`,
  },
  {
    id: 6,
    name: `Sitalakshmi Gautham`,
    role: `Family Caregiver`,
    avatar: `SG`,
    color: `#00ACC1`,
    rating: 5,
    time: `2 months ago`,
    reviewCount: `8 reviews`,
    reviewUrl: `https://www.google.com/maps/contrib/102508182181280389314/reviews?hl=en-GB`,
    text: `First of a kind complete healthcare solution for elderly at home in Chennai, where complete hospital-kind care is provided at home for the elderly with all the medical needs addressed by the entire team.`,
  },
  {
    id: 7,
    name: `Muthukrishan Rama`,
    role: `Family Member`,
    avatar: `MR`,
    color: `#7E57C2`,
    rating: 5,
    time: `3 months ago`,
    reviewCount: `1 review`,
    reviewUrl: `https://www.google.com/maps/contrib/104573855043040475816/reviews?hl=en-GB`,
    text: `Very young, energetic and very prompt in attending the case of my wife, who had suddenly developed high BP and pulse rate. They attended immediately with first aid kits, acted very promptly and professionally, advised and assisted us in getting a specialist referral and followed up continuously. Excellent service and without any hesitation I will recommend them for any medical assistance or advice.`,
  },
  {
    id: 8,
    name: `Girija Narayanan`,
    role: `Family Caregiver`,
    avatar: `GN`,
    color: `#E67E22`,
    rating: 5,
    time: `3 months ago`,
    reviewCount: `2 reviews`,
    reviewUrl: `https://www.google.com/maps/contrib/103948648865764878204/reviews?hl=en-GB`,
    text: `Excellent service! We used their home care nursing services for my mother, and the nurses they sent were absolutely wonderful — professional, punctual, and deeply caring. They made a challenging time much easier for our family. Highly recommended!`,
  },
  {
    id: 9,
    name: `Christina Stanley`,
    role: `Local Guide`,
    avatar: `CS`,
    color: `#8E44AD`,
    rating: 5,
    time: `2 months ago`,
    reviewCount: `10 reviews · 29 photos`,
    reviewUrl: `https://www.google.com/maps/contrib/105260638849231513474/reviews?hl=en-GB`,
    text: `Doctor was very attentive and checked the patient thoroughly before prescribing the medicines. Nurse Maheswari took very good care.`,
  },
  {
    id: 10,
    name: `Yuva Raj`,
    role: `Family Member`,
    avatar: `YR`,
    color: `#009688`,
    rating: 5,
    time: `3 months ago`,
    reviewCount: `5 reviews · 1 photo`,
    reviewUrl: `https://www.google.com/maps/contrib/100127268538111922013/reviews?hl=en-GB`,
    text: `We tried with Aureal Healthcare after trying to connect with many hospitals, but we got a quick response only from them during an emergency situation. They treated the patient very attentively, and Rajkumari was extremely supportive throughout the care.`,
  },
];

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const GoogleIcon = ({ size: e = 20 }) => (
  <svg width={e} height={e} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const Testimonials = () => {
  let e = useRef(null);
  let t = useRef(null);
  let c = [...reviews, ...reviews];
  useEffect(() => {
    let e = t.current;
    if (!e || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
      return;
    }
    let n = false;
    let r = () => {
      n = true;
    };
    let i = () => {
      n = false;
    };
    e.addEventListener(`mouseenter`, r);
    e.addEventListener(`mouseleave`, i);
    let a;
    let o = () => {
      if (!n) {
        e.scrollLeft += 0.5;
        if (e.scrollLeft >= e.scrollWidth / 2) {
          e.scrollLeft = 0;
        }
      }
      a = requestAnimationFrame(o);
    };
    a = requestAnimationFrame(o);
    return () => {
      cancelAnimationFrame(a);
      e.removeEventListener(`mouseenter`, r);
      e.removeEventListener(`mouseleave`, i);
    };
  }, []);
  useEffect(() => {
    if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
      return;
    }
    let t = gsap.context(() => {
      gsap.to(`.tst-orb-1`, {
        yPercent: 40,
        ease: `none`,
        scrollTrigger: {
          trigger: e.current,
          start: `top bottom`,
          end: `bottom top`,
          scrub: true,
        },
      });
      gsap.to(`.tst-orb-2`, {
        yPercent: -40,
        ease: `none`,
        scrollTrigger: {
          trigger: e.current,
          start: `top bottom`,
          end: `bottom top`,
          scrub: true,
        },
      });
      let t = gsap.timeline({
        scrollTrigger: {
          trigger: e.current,
          start: `top 80%`,
          toggleActions: `play none none reverse`,
        },
      });
      t.from(`.tst-badge`, {
        y: 40,
        opacity: 0,
        scale: 0.8,
        rotationX: 45,
        duration: 0.8,
        ease: `back.out(2)`,
      });
      t.from(
        `.tst-title .tst-word span`,
        {
          yPercent: 120,
          opacity: 0,
          rotationZ: 8,
          rotationX: -60,
          duration: 1,
          stagger: 0.05,
          ease: `expo.out`,
        },
        `-=0.4`,
      );
      t.from(
        `.tst-subtitle`,
        {
          y: 30,
          opacity: 0,
          filter: `blur(10px)`,
          duration: 1,
          ease: `power3.out`,
        },
        `-=0.6`,
      );
      gsap.utils.toArray(`.tst-section-head`).forEach((e) => {
        gsap.from(e, {
          scrollTrigger: {
            trigger: e,
            start: `top 85%`,
            toggleActions: `play none none reverse`,
          },
          x: -50,
          opacity: 0,
          duration: 1,
          ease: `power4.out`,
        });
      });
      gsap.from(`.tst-text-track`, {
        scrollTrigger: {
          trigger: `.tst-text-section`,
          start: `top 80%`,
          toggleActions: `play none none reverse`,
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: `power3.out`,
      });
      gsap.to(`.tst-orb-1`, {
        x: 60,
        y: -40,
        scale: 1.15,
        duration: 12,
        ease: `sine.inOut`,
        yoyo: true,
        repeat: -1,
      });
      gsap.to(`.tst-orb-2`, {
        x: -50,
        y: 50,
        scale: 1.1,
        duration: 14,
        ease: `sine.inOut`,
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }, e);
    return () => t.revert();
  }, []);
  return (
    <section className="tst-section" ref={e}>
      <div className="tst-decoration">
        <div className="tst-orb tst-orb-1" />
        <div className="tst-orb tst-orb-2" />
        <div className="tst-grid-pattern" />
      </div>
      <div className="tst-container">
        <div className="tst-header">
          <div className="tst-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            Patient Success Stories
          </div>
          <h2 className="tst-title">
            {`Trusted by Families Everywhere`.split(` `).map((e, t) => (
              <span className="tst-word" key={t}>
                <span>{e}</span>
              </span>
            ))}
          </h2>
          <p className="tst-subtitle">
            Real experiences from patients and families who have experienced compassionate,
            professional and specialist-led home healthcare with Aureal Healthcare.
          </p>
        </div>
        <div className="tst-text-section">
          <div className="tst-section-head">
            <div className="tst-google-brand">
              <GoogleIcon size={22} />
              <div className="tst-google-info">
                <span className="tst-google-title">Google Reviews</span>
                <span className="tst-google-rating">
                  <strong>5.0</strong>
                  <span className="tst-google-stars">
                    {[...[, , , , ,]].map((e, t) => (
                      <Star key={t} />
                    ))}
                  </span>
                  <span className="tst-google-count">Real Patient Reviews</span>
                </span>
              </div>
            </div>
          </div>
          <div className="tst-text-carousel">
            <div className="tst-text-track" ref={t}>
              {c.map((e, t) => (
                <div className="tst-review-card" key={`${e.id}-${t}`}>
                  <div className="tst-review-top">
                    <div
                      className="tst-review-avatar"
                      style={{
                        background: e.color,
                      }}
                    >
                      {e.avatar}
                    </div>
                    <div className="tst-review-meta">
                      <span className="tst-review-name">{e.name}</span>
                      <span className="tst-review-role">{e.role}</span>
                    </div>
                    <a
                      href={e.reviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tst-review-google"
                      aria-label={`View ${e.name}'s Google review`}
                    >
                      <GoogleIcon size={20} />
                    </a>
                  </div>
                  <div className="tst-review-stars">
                    {[...Array(e.rating)].map((e, t) => (
                      <Star key={t} />
                    ))}
                    <span className="tst-review-time">{e.time}</span>
                  </div>
                  <p className="tst-review-text">{e.text}</p>
                  <div className="tst-review-footer">
                    {" "}
                    <br />
                    <a href={e.reviewUrl} target="_blank" rel="noopener noreferrer">
                      View Review
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
