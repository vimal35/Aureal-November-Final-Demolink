// ServicesList.jsx

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Stethoscope,
  Users,
  RefreshCw,
  HeartPulse,
  Dumbbell,
  Brain,
  Waves,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Truck,
  Home,
  ArrowRight,
} from 'lucide-react';
import './ServicesList.css';

const clinicalPillars = [
  {
    number: '01',
    title: 'Clinical Care',
    subtitle:
      'Specialist-led medical pathways engineered for precision, safety and measurable clinical outcomes.',
    image:
      '/serviceslist1.jpg',
    tag: 'MEDICAL EXCELLENCE',

    services: [
      {
        icon: Stethoscope,
        title: 'Multi-Specialty Consultations',
        path: '/Multi-Specialty-Consultations',
        description:
          'Access to 20+ specialties and super-specialties under one roof, backed by unified electronic medical records for seamless, continuous care planning.',
      },
      {
        icon: Users,
        title: 'Integrated Doctor-Led Team',
        path: '/Integrated-Doctor-Led-Team',
        description:
          'A multidisciplinary, doctor-led care team collaborates across specialties to design personalized treatment plans — ensuring coordinated, patient-centered care at every stage.',
      },
      {
        icon: RefreshCw,
        title: 'Continuum of Care',
        path: '/ContinuumofCare',
        description:
          'Seamless continuity across hospital-to-home and home-to-hospital transitions, supported by standalone assisted living facilities offering dedicated care for those who need ongoing support beyond the home setting.',
      },
      {
        icon: HeartPulse,
        title: 'Advanced Diagnostics',
        path: '/AdvancedDiagnostics',
        description:
          'Backed by a robust network of accredited diagnostic centres, delivering fast, accurate results that support precise diagnosis and timely treatment decisions.',
      },
    ],
  },

  {
    number: '02',
    title: 'Rehabilitation',
    subtitle:
      'Structured recovery journeys that restore mobility, independence and quality of life — measurably.',
    image:
      '/serviceslist2.jpg',
    tag: 'HOLISTIC RECOVERY',

    services: [
      {
        icon: Dumbbell,
        title: 'Person-Centric Rehab',
        path: '/PersonCentricRehab',
        description:
          "Individualised physiotherapy plans built around each patient's goals, combining robotic gait training, hydrotherapy and neuromuscular stimulation for measurable functional recovery.",
      },
      {
        icon: Brain,
        title: 'Comprehensive Neuro Rehab',
        path: '/ComprehensiveNeuroRehab',
        description:
          'Comprehensive post-stroke and spinal cord injury rehabilitation integrating cognitive training, motor re-learning and neuroplasticity-based therapies for full-spectrum neurological recovery.',
      },
      {
        icon: Waves,
        title: 'Therapeutic Modalities',
        path: '/TherapeuticModalities',
        description:
          'Occupational, speech and pain therapy, along with nutritional rehabilitation — delivered by board-certified rehabilitation specialists for complete recovery support.',
      },
      {
        icon: Sparkles,
        title: 'Wellness & Preventive Care',
        path: '/WellnessPreventiveCare',
        description:
          'Personalised wellness programs — nutrition counselling, sleep therapy and mind-body practices — designed to prevent relapse and support long-term, sustainable recovery.',
      },
    ],
  },

  {
    number: '03',
    title: 'Seamless Access',
    subtitle:
      'A seamless door-to-doctor experience — from first enquiry to safe return home, in India.',
    image:
      '/serviceslist3.jpg',
    tag: 'LOGISTICS & ACCESS',

    services: [
      {
        icon: PhoneCall,
        title: '24/7 Emergency Support & Teleconsultation',
        path: '/EmergencySupport',
        description:
          'Round-the-clock emergency tele-triage and scheduled virtual consultations — connecting you to a qualified clinician within minutes, from anywhere in India.',
      },
      {
        icon: ShieldCheck,
        title: 'Patient Coordination & Cashless Treatment',
        path: '/PatientCoordination',
        description:
          'End-to-end coordination in the event of hospitalization, including cashless treatment assistance and insurance liaison, managed by a dedicated care coordinator.',
      },
      {
        icon: Truck,
        title: 'Ground Ambulance & Local Transfers',
        path: '/GroundAmbulance',
        description:
          'Fully-equipped ambulances with paramedic escort ensure safe, medically supervised local and inter-city patient transfers.',
      },
      {
        icon: Home,
        title: 'Home Based Support',
        path: '/HomeBasedSupport',
        description:
          'At-home diagnostic sample collection, nursing support and post-discharge care — bringing essential healthcare services to your doorstep.',
      },
    ],
  },
];

const PILLAR_COUNT = clinicalPillars.length;

const ServicesList = () => {
  const navigate = useNavigate();

  const headingRef = useRef(null);
  const pillarRefs = useRef([]);
  const directionRef = useRef('down');
  const lastScrollYRef = useRef(0);
  const intersectionRatiosRef = useRef(new Map());

  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollYRef.current;

      if (Math.abs(difference) > 2) {
        directionRef.current = difference > 0 ? 'down' : 'up';
        lastScrollYRef.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScrollDirection, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScrollDirection);
    };
  }, []);

  useEffect(() => {
    const heading = headingRef.current;
    const pillars = pillarRefs.current.filter(Boolean);

    if (!('IntersectionObserver' in window)) {
      setHeaderVisible(true);
      setVisibleCards(new Set(clinicalPillars.map((_, index) => index)));
      return undefined;
    }

    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        const shouldReveal =
          entry.isIntersecting && entry.intersectionRatio >= 0.1;

        const enterDirection = directionRef.current;
        const exitDirection = enterDirection === 'down' ? 'up' : 'down';

        entry.target.dataset.revealDirection = shouldReveal
          ? enterDirection
          : exitDirection;

        setHeaderVisible(shouldReveal);
      },
      {
        threshold: [0, 0.1, 0.2, 0.4],
        rootMargin: '0px 0px -6% 0px',
      }
    );

    const pillarObserver = new IntersectionObserver(
      (entries) => {
        const enterDirection = directionRef.current;
        const exitDirection = enterDirection === 'down' ? 'up' : 'down';

        setVisibleCards((currentVisibleCards) => {
          const nextVisibleCards = new Set(currentVisibleCards);
          let hasChanged = false;

          entries.forEach((entry) => {
            const index = Number(entry.target.dataset.index);
            const shouldReveal =
              entry.isIntersecting && entry.intersectionRatio >= 0.08;

            entry.target.dataset.revealDirection = shouldReveal
              ? enterDirection
              : exitDirection;

            intersectionRatiosRef.current.set(
              index,
              entry.isIntersecting ? entry.intersectionRatio : 0
            );

            if (shouldReveal && !nextVisibleCards.has(index)) {
              nextVisibleCards.add(index);
              hasChanged = true;
            }

            if (!shouldReveal && nextVisibleCards.has(index)) {
              nextVisibleCards.delete(index);
              hasChanged = true;
            }
          });

          return hasChanged ? nextVisibleCards : currentVisibleCards;
        });

        let largestRatio = 0;
        let nextActiveIndex = activeIndex;

        clinicalPillars.forEach((_, index) => {
          const ratio = intersectionRatiosRef.current.get(index) || 0;

          if (ratio > largestRatio) {
            largestRatio = ratio;
            nextActiveIndex = index;
          }
        });

        if (largestRatio > 0.04) {
          setActiveIndex(nextActiveIndex);
        }
      },
      {
        threshold: [0, 0.08, 0.16, 0.3, 0.5, 0.7],
        rootMargin: '-5% 0px -5% 0px',
      }
    );

    if (heading) {
      headingObserver.observe(heading);
    }

    pillars.forEach((pillar) => {
      pillarObserver.observe(pillar);
    });

    return () => {
      headingObserver.disconnect();
      pillarObserver.disconnect();
    };
  }, [activeIndex]);

  const scrollToPillar = (index) => {
    const pillar = pillarRefs.current[index];

    if (!pillar) return;

    const destination =
      pillar.getBoundingClientRect().top + window.scrollY - 32;

    window.scrollTo({
      top: Math.max(0, destination),
      behavior: 'auto',
    });
  };

  const goToService = (path) => {
    if (!path) return;
    navigate(path);
    // Fallback in case the route-level ScrollToTop listener hasn't
    // fired yet on this render cycle — guarantees the destination
    // page always opens at the top, never mid-scroll.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const handleServiceKeyDown = (event, path) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      goToService(path);
    }
  };

  return (
    <section className="psl-section" aria-labelledby="psl-main-title">
      <div className="psl-shell">
        <header
          ref={headingRef}
          className={`psl-heading psl-hero ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <div className="psl-hero-media" aria-hidden="true">
            <img
              className="psl-hero-image"
              src="/servicehome.jpg"
              alt=""
              decoding="async"
            />
          </div>

          <div className="psl-hero-overlay" aria-hidden="true" />

          <div className="psl-hero-sweep" aria-hidden="true" />

          <div className="psl-hero-orbit" aria-hidden="true">
            <span className="psl-orbit-one" />
            <span className="psl-orbit-two" />
            <span className="psl-orbit-dot" />
          </div>

          <span className="psl-heading-number">
            <span className="psl-num-current">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>

            <span className="psl-num-slash">—</span>

            <span className="psl-num-total">
              {String(PILLAR_COUNT).padStart(2, '0')}
            </span>
          </span>

          <div className="psl-heading-content">
            <div className="psl-heading-kicker">
              <span className="psl-kicker-dot" />
              <span>OUR CARE PILLARS</span>
            </div>

            <h2 id="psl-main-title">
              <span className="psl-title-line">
                Clinical care, rehabilitation
              </span>

              <em className="psl-title-line">and seamless access.</em>
            </h2>

            <p>
              A complete care ecosystem built around continuity,
              coordination and measurable outcomes — from first
              consultation to full recovery.
            </p>

            <div className="psl-intro-index">
              {clinicalPillars.map((pillar, index) => (
                <button
                  key={pillar.number}
                  type="button"
                  className={`psl-intro-item ${
                    activeIndex === index ? 'is-active' : ''
                  }`}
                  onClick={() => scrollToPillar(index)}
                  aria-label={`Go to ${pillar.title}`}
                >
                  <span className="psl-intro-item-num">
                    {pillar.number}
                  </span>

                  <span className="psl-intro-item-title">
                    {pillar.title}
                  </span>

                  <ArrowRight
                    size={15}
                    strokeWidth={2.2}
                    className="psl-intro-item-icon"
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="psl-heading-decoration" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="psl-deco-circle">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.7"
                strokeDasharray="5 5"
              />
            </svg>

            <span className="psl-deco-inner">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
          </div>
        </header>

        <div className="psl-stack">
          {clinicalPillars.map((pillar, pillarIndex) => {
            const isVisible = visibleCards.has(pillarIndex);
            const isActive = activeIndex === pillarIndex;

            return (
              <article
                key={pillar.title}
                ref={(element) => {
                  pillarRefs.current[pillarIndex] = element;
                }}
                data-index={pillarIndex}
                className={`psl-pillar ${
                  isVisible ? 'is-visible' : ''
                } ${isActive ? 'is-active' : ''} ${
                  pillarIndex % 2 === 1 ? 'is-reverse' : ''
                }`}
                aria-labelledby={`psl-pillar-title-${pillarIndex}`}
              >
                <div className="psl-pillar-num-bg" aria-hidden="true">
                  {pillar.number}
                </div>

                <div className="psl-pillar-inner">
                  <div className="psl-pillar-image-wrap">
                    <div className="psl-pillar-image-frame">
                      <img
                        className="psl-pillar-image"
                        src={pillar.image}
                        alt={`${pillar.title} healthcare services`}
                        loading={pillarIndex === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />

                      <div
                        className="psl-pillar-image-overlay"
                        aria-hidden="true"
                      />

                      <div
                        className="psl-pillar-image-shine"
                        aria-hidden="true"
                      />

                      <div className="psl-pillar-tag">
                        <span className="psl-tag-dot" />
                        <span>{pillar.tag}</span>
                      </div>

                      <span className="psl-corner psl-corner-tl" />
                      <span className="psl-corner psl-corner-tr" />
                      <span className="psl-corner psl-corner-bl" />
                      <span className="psl-corner psl-corner-br" />

                      <div className="psl-pillar-caption" aria-hidden="true">
                        <span className="psl-caption-line" />
                        <span>{pillar.title.toUpperCase()}</span>
                      </div>
                    </div>

                    <div className="psl-info-badge">
                      <span className="psl-info-num">
                        {pillar.services.length}
                      </span>

                      <span className="psl-info-label">Core Services</span>
                    </div>
                  </div>

                  <div className="psl-pillar-content">
                    <div className="psl-pillar-topline">
                      <span className="psl-topline-num">
                        {pillar.number}
                      </span>

                      <span className="psl-topline-rule" />

                      <span className="psl-topline-tag">{pillar.tag}</span>
                    </div>

                    <h3
                      id={`psl-pillar-title-${pillarIndex}`}
                      className="psl-pillar-title"
                    >
                      {pillar.title}
                    </h3>

                    <p className="psl-pillar-subtitle">{pillar.subtitle}</p>

                    <div className="psl-services">
                      {pillar.services.map((service, serviceIndex) => {
                        const Icon = service.icon;

                        return (
                          <div
                            key={service.title}
                            className="psl-service"
                            role="link"
                            tabIndex={0}
                            onClick={() => goToService(service.path)}
                            onKeyDown={(event) =>
                              handleServiceKeyDown(event, service.path)
                            }
                            aria-label={`Learn more about ${service.title}`}
                            style={{
                              '--stagger': `${
                                serviceIndex * 100 + 260
                              }ms`,
                            }}
                          >
                            <div className="psl-service-icon">
                              <Icon
                                size={19}
                                strokeWidth={1.8}
                                aria-hidden="true"
                              />
                            </div>

                            <div className="psl-service-body">
                              <h4>{service.title}</h4>
                              <p>{service.description}</p>
                            </div>

                            <span className="psl-service-num">
                              0{serviceIndex + 1}
                            </span>

                            <span
                              className="psl-service-arrow"
                              aria-hidden="true"
                            >
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M7 17L17 7M17 7H8M17 7v9"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;