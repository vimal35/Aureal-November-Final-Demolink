// serviceshero.jsx

import React, { useCallback, useEffect, useRef } from 'react';
import {
  Sparkles,
  Stethoscope,
  ArrowUpRight,
  ArrowDown,
  HeartPulse,
  Activity,
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react';
import './servicesheros.css';

const MODULE_FEATURES = [
  {
    index: '01',
    icon: HeartPulse,
    title: '24/7 intensivist-led monitoring',
    description:
      'Remote vitals are watched around the clock by senior clinicians.',
  },
  {
    index: '02',
    icon: Activity,
    title: 'Hospital-grade equipment at home',
    description:
      'Calibrated, serviced and supported by our biomedical team.',
  },
  {
    index: '03',
    icon: ClipboardCheck,
    title: 'Daily multidisciplinary rounds',
    description:
      'Physicians, nurses and therapists follow one connected care plan.',
  },
];

const PATHWAYS = [
  {
    index: '01',
    name: 'Recovery & Rehabilitation',
    tag: 'Post-surgical · Physiotherapy · Wound care',
    icon: Activity,
  },
  {
    index: '02',
    name: 'Chronic Condition Management',
    tag: 'Cardiology · Endocrinology · Respiratory',
    icon: HeartPulse,
  },
  {
    index: '03',
    name: 'Palliative & Geriatric Care',
    tag: 'Comfort-focused · 24/7 nursing · Family counselling',
    icon: ShieldCheck,
  },
];

const ServicesHero = () => {
  const sectionRef = useRef(null);
  const showcaseRef = useRef(null);
  const scrollDirectionRef = useRef('down');
  const previousScrollYRef = useRef(0);

  useEffect(() => {
    previousScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference =
        currentScrollY - previousScrollYRef.current;

      if (Math.abs(difference) > 3) {
        scrollDirectionRef.current =
          difference > 0 ? 'down' : 'up';

        previousScrollYRef.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const revealElements = section.querySelectorAll(
      '[data-reveal]'
    );

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (
      reducedMotion ||
      !('IntersectionObserver' in window)
    ) {
      revealElements.forEach((element) => {
        element.classList.add('is-visible');
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.08
          ) {
            element.dataset.from =
              scrollDirectionRef.current === 'up'
                ? 'top'
                : 'bottom';

            element.classList.add('is-visible');
            return;
          }

          if (!entry.isIntersecting) {
            element.classList.remove('is-visible');

            element.dataset.from =
              entry.boundingClientRect.top < 0
                ? 'top'
                : 'bottom';
          }
        });
      },
      {
        threshold: [0, 0.08, 0.16, 0.3],
        rootMargin: '0px 0px -5% 0px',
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleShowcasePointerMove = useCallback((event) => {
    const showcase = showcaseRef.current;

    if (
      !showcase ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      return;
    }

    const bounds = showcase.getBoundingClientRect();
    const x =
      (event.clientX - bounds.left) / bounds.width;
    const y =
      (event.clientY - bounds.top) / bounds.height;

    const rotateX = (0.5 - y) * 5;
    const rotateY = (x - 0.5) * 6;

    showcase.style.setProperty(
      '--tilt-x',
      `${rotateX.toFixed(2)}deg`
    );
    showcase.style.setProperty(
      '--tilt-y',
      `${rotateY.toFixed(2)}deg`
    );
    showcase.style.setProperty(
      '--spot-x',
      `${(x * 100).toFixed(1)}%`
    );
    showcase.style.setProperty(
      '--spot-y',
      `${(y * 100).toFixed(1)}%`
    );
  }, []);

  const resetShowcasePointer = useCallback(() => {
    const showcase = showcaseRef.current;

    if (!showcase) return;

    showcase.style.setProperty('--tilt-x', '0deg');
    showcase.style.setProperty('--tilt-y', '0deg');
    showcase.style.setProperty('--spot-x', '50%');
    showcase.style.setProperty('--spot-y', '50%');
  }, []);

  const handleMagneticMove = useCallback((event) => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      return;
    }

    const button = event.currentTarget;
    const bounds = button.getBoundingClientRect();

    const x =
      event.clientX -
      bounds.left -
      bounds.width / 2;

    const y =
      event.clientY -
      bounds.top -
      bounds.height / 2;

    button.style.setProperty(
      '--mag-x',
      `${(x * 0.13).toFixed(1)}px`
    );
    button.style.setProperty(
      '--mag-y',
      `${(y * 0.18).toFixed(1)}px`
    );
  }, []);

  const resetMagneticButton = useCallback((event) => {
    event.currentTarget.style.setProperty('--mag-x', '0px');
    event.currentTarget.style.setProperty('--mag-y', '0px');
  }, []);

  const scrollToSection = useCallback((event, targetId) => {
    event.preventDefault();

    const target = document.querySelector(targetId);

    if (!target) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    target.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-hero"
      aria-labelledby="services-hero-title"
    >
      <div className="sh-ambient" aria-hidden="true">
        <span className="sh-ambient-shape sh-shape-one" />
        <span className="sh-ambient-shape sh-shape-two" />
        <span className="sh-ambient-ring sh-ring-one" />
        <span className="sh-ambient-ring sh-ring-two" />
      </div>

      <div className="sh-shell">
        {/* Intro */}
        <header
          className="sh-intro sh-reveal"
          data-reveal
          data-from="bottom"
        >
          <div className="sh-intro-topbar">
            <div className="sh-section-kicker">
              <span className="sh-kicker-line" />
              <span>The Aureal Clinical Ecosystem</span>
            </div>

            <span className="sh-availability">
              <span className="sh-availability-dot" />
              Clinical support available 24/7
            </span>
          </div>

          <div className="sh-intro-grid">
            <div className="sh-intro-heading">
              <span className="sh-heading-index">01 / 03</span>

              <h2 id="services-hero-title">
                <span className="sh-heading-line">
                  Institutional-Grade
                </span>

                <em className="sh-heading-line">
                  Care, Expert-Led.
                </em>
              </h2>
            </div>

            <div className="sh-intro-description">
              <p>
                Our team comprises the city&apos;s top medical
                experts who collaborate to deliver elite,
                goal-oriented clinical management in the comfort
                of your home.
              </p>

              <a
                href="#clinical-module"
                className="sh-button sh-magnetic"
                onClick={(event) =>
                  scrollToSection(event, '#clinical-module')
                }
                onMouseMove={handleMagneticMove}
                onMouseLeave={resetMagneticButton}
              >
                <span>Discover our care model</span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <a
            href="#clinical-module"
            className="sh-scroll-cue"
            onClick={(event) =>
              scrollToSection(event, '#clinical-module')
            }
          >
            <span>Scroll to explore</span>

            <span className="sh-scroll-cue-icon">
              <ArrowDown
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>
          </a>
        </header>

        {/* Main clinical showcase */}
        <section
          id="clinical-module"
          ref={showcaseRef}
          className="sh-showcase sh-reveal"
          data-reveal
          data-from="bottom"
          onPointerMove={handleShowcasePointerMove}
          onPointerLeave={resetShowcasePointer}
          aria-labelledby="clinical-showcase-title"
        >
          <div className="sh-showcase-light" aria-hidden="true" />
          <div className="sh-showcase-line" aria-hidden="true" />

          <div className="sh-showcase-copy">
            <span className="sh-showcase-eyebrow">
              <Sparkles
                size={15}
                strokeWidth={1.9}
                aria-hidden="true"
              />
              Coordinated Clinical Excellence
            </span>

            <h3 id="clinical-showcase-title">
              A connected care team.
              <span>One clear clinical direction.</span>
            </h3>

            <p>
              Every care plan is built around the individual,
              aligned by specialists and delivered with clinical
              precision at home.
            </p>

            <a
              href="#care-pathways"
              className="sh-button sh-magnetic"
              onClick={(event) =>
                scrollToSection(event, '#care-pathways')
              }
              onMouseMove={handleMagneticMove}
              onMouseLeave={resetMagneticButton}
            >
              <span>Explore care pathways</span>
              <ArrowUpRight
                size={18}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>

            <div className="sh-proof-grid">
              <div className="sh-proof-item">
                <strong>24/7</strong>
                <span>Clinical oversight</span>
              </div>

              <div className="sh-proof-item">
                <strong>01</strong>
                <span>Connected care plan</span>
              </div>

              <div className="sh-proof-item">
                <strong>100%</strong>
                <span>Home-focused delivery</span>
              </div>
            </div>
          </div>

          <div className="sh-showcase-visual">
            <div className="sh-visual-orbits" aria-hidden="true">
              <span className="sh-visual-orbit-one" />
              <span className="sh-visual-orbit-two" />
              <span className="sh-visual-orbit-dot" />
            </div>

            <article className="sh-module-card">
              <div className="sh-module-head">
                <span className="sh-module-index">
                  Module <strong>01</strong>
                </span>

                <span className="sh-module-status">
                  <span className="sh-status-dot" />
                  Care plan active
                </span>
              </div>

              <div className="sh-ecg-wrap" aria-hidden="true">
                <svg
                  viewBox="0 0 640 70"
                  preserveAspectRatio="none"
                >
                  <path
                    className="sh-ecg-guide"
                    d="M0 39 H110 L128 39 L140 13 L153 58 L166 39 H258 L275 39 L286 25 L300 50 L312 39 H405 L420 39 L432 9 L447 62 L462 39 H640"
                  />

                  <path
                    className="sh-ecg-path"
                    d="M0 39 H110 L128 39 L140 13 L153 58 L166 39 H258 L275 39 L286 25 L300 50 L312 39 H405 L420 39 L432 9 L447 62 L462 39 H640"
                  />
                </svg>
              </div>

              <div className="sh-module-body">
                <div className="sh-module-title-row">
                  <span className="sh-module-icon">
                    <Stethoscope
                      size={27}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    <span className="sh-icon-ring" />
                  </span>

                  <div>
                    <span className="sh-module-label">
                      Primary care module
                    </span>

                    <h4>
                      Home ICU &amp; Post-Operative Care
                    </h4>
                  </div>
                </div>

                <p className="sh-module-description">
                  Hospital-level monitoring and intensivist
                  oversight, re-engineered around your home, your
                  routine and your recovery goals.
                </p>

                <div className="sh-module-features">
                  {MODULE_FEATURES.map((feature) => {
                    const FeatureIcon = feature.icon;

                    return (
                      <div
                        key={feature.index}
                        className="sh-feature"
                      >
                        <span className="sh-feature-index">
                          {feature.index}
                        </span>

                        <div className="sh-feature-copy">
                          <strong>{feature.title}</strong>
                          <span>{feature.description}</span>
                        </div>

                        <span className="sh-feature-icon">
                          <FeatureIcon
                            size={18}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <footer className="sh-module-footer">
                <a
                  href="#care-pathways"
                  className="sh-button sh-module-button sh-magnetic"
                  onClick={(event) =>
                    scrollToSection(event, '#care-pathways')
                  }
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={resetMagneticButton}
                >
                  <span>Request a care assessment</span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>

                <span className="sh-module-ready">
                  <span>03 / 03</span>
                  Clinical protocols aligned
                </span>
              </footer>
            </article>
          </div>
        </section>

        {/* Pathways */}
        <section
          id="care-pathways"
          className="sh-pathways sh-reveal"
          data-reveal
          data-from="bottom"
          aria-labelledby="care-pathways-title"
        >
          <div className="sh-section-kicker">
            <span className="sh-kicker-line" />
            <span>Care Pathways</span>
          </div>

          <div className="sh-pathways-heading">
            <h2 id="care-pathways-title">
              <span>Three pathways.</span>
              <em>One clinical standard.</em>
            </h2>

            <p>
              Every pathway is delivered by the same connected
              team, providing consistency from assessment through
              recovery and long-term support.
            </p>
          </div>

          <div className="sh-pathway-list">
            {PATHWAYS.map((pathway, index) => {
              const PathwayIcon = pathway.icon;

              return (
                <a
                  key={pathway.index}
                  href="#clinical-module"
                  className="sh-pathway-row sh-reveal"
                  data-reveal
                  data-from="bottom"
                  style={{
                    '--reveal-delay': `${index * 90}ms`,
                  }}
                  onClick={(event) =>
                    scrollToSection(event, '#clinical-module')
                  }
                >
                  <span className="sh-pathway-index">
                    {pathway.index}
                  </span>

                  <span className="sh-pathway-icon">
                    <PathwayIcon
                      size={21}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="sh-pathway-name">
                    {pathway.name}
                  </span>

                  <span className="sh-pathway-tag">
                    {pathway.tag}
                  </span>

                  <span className="sh-pathway-arrow">
                    <ArrowUpRight
                      size={20}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                </a>
              );
            })}
          </div>

          <div
            className="sh-closing-panel sh-reveal"
            data-reveal
            data-from="bottom"
          >
            <div>
              <span className="sh-closing-label">
                Begin with a clinical assessment
              </span>

              <h3>
                The right care pathway starts with one
                conversation.
              </h3>
            </div>

            <a
              href="#clinical-module"
              className="sh-button sh-magnetic"
              onClick={(event) =>
                scrollToSection(event, '#clinical-module')
              }
              onMouseMove={handleMagneticMove}
              onMouseLeave={resetMagneticButton}
            >
              <span>Speak with our care team</span>
              <ArrowUpRight
                size={18}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServicesHero;