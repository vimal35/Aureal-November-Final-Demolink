import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clinical Governance", href: "/Integrated-Doctor-Led-Team" },
  { name: "Book Appointment", href: "/Appointment" },
  { name: "Contact Us", href: "/contact" },
  { name: "Updates", href: "/updates" },
];

const services = [
  { name: "Multi-Specialty Consultations", href: "/Multi-Specialty-Consultations" },
  { name: "Integrated Doctor-Led Team", href: "/Integrated-Doctor-Led-Team" },
  { name: "Continuum of Care", href: "/ContinuumofCare" },
  { name: "Advanced Diagnostics", href: "/AdvancedDiagnostics" },
  { name: "Emergency Support", href: "/EmergencySupport" },
  { name: "Patient Coordination", href: "/PatientCoordination" },
  { name: "Ground Ambulance", href: "/GroundAmbulance" },
  { name: "Home-Based Support", href: "/HomeBasedSupport" },
];

const ArrowIcon = () => (
  <span className="link-arrow">
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </span>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  const footerRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const footerEl = footerRef.current;
    if (!footerEl) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(footerEl);

      // ───────────────────────────────────────────────
      // ONE entrance timeline.
      // It fires just BEFORE the footer enters the screen
      // (top 105%), runs once, and never hides content again.
      // → no more blank green footer while scrolling slowly.
      // ───────────────────────────────────────────────
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: footerEl,
          start: "top 105%",
          once: true,
        },
      });

      tl.from(
        q(".footer-brand-mark"),
        { opacity: 0, y: 24, duration: 0.7, clearProps: "opacity,transform" },
        0
      )
        .from(
          q(".footer-about-text"),
          { opacity: 0, y: 24, duration: 0.7, clearProps: "opacity,transform" },
          0.1
        )
        .from(
          q(".social-link"),
          {
            opacity: 0,
            scale: 0.6,
            stagger: 0.08,
            duration: 0.5,
            ease: "back.out(2.5)",
            clearProps: "opacity,transform",
          },
          0.2
        )
        .from(
          q(".footer-heading"),
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            clearProps: "opacity,transform",
          },
          0.15
        )
        .from(
          q(".heading-underline"),
          {
            scaleX: 0,
            transformOrigin: "left center",
            stagger: 0.1,
            duration: 0.6,
            clearProps: "transform",
          },
          0.35
        )
        .from(
          q(".footer-link"),
          {
            opacity: 0,
            x: -20,
            stagger: 0.04,
            duration: 0.5,
            clearProps: "opacity,transform",
          },
          0.3
        )
        .from(
          q(".contact-item"),
          {
            opacity: 0,
            y: 24,
            stagger: 0.1,
            duration: 0.6,
            clearProps: "opacity,transform",
          },
          0.35
        )
        .from(
          q(".footer-appointment-btn"),
          {
            opacity: 0,
            y: 24,
            scale: 0.9,
            duration: 0.7,
            ease: "back.out(2)",
            clearProps: "opacity,transform",
          },
          0.6
        )
        .from(
          q(".footer-bottom"),
          { opacity: 0, y: 16, duration: 0.6, clearProps: "opacity,transform" },
          0.7
        );

      // ───────────────────────────────────────────────
      // Floating orbs (x + scale only; parallax owns y)
      // ───────────────────────────────────────────────
      gsap.to(q(".deco-orb-1"), {
        x: 30,
        scale: 1.08,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(q(".deco-orb-2"), {
        x: -25,
        scale: 1.05,
        duration: 10,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });

      // ───────────────────────────────────────────────
      // Parallax (decorative only — content is unaffected)
      // ───────────────────────────────────────────────
      gsap.to(q(".deco-orb-1"), {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: footerEl,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      gsap.to(q(".deco-orb-2"), {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: footerEl,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    }, footerEl);

    // Recalculate trigger positions after images / fonts finish loading
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 600);

    return () => {
      clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <footer className="site-footer" ref={footerRef}>
      {/* Decorative Background Elements */}
      <div className="footer-decoration">
        <div className="deco-orb deco-orb-1"></div>
        <div className="deco-orb deco-orb-2"></div>
        <div className="deco-orb deco-orb-3"></div>
        <div className="deco-grid-pattern"></div>
        <div className="deco-gradient-line"></div>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          {/* ============ COLUMN 1 — BRAND / ABOUT ============ */}
          <div className="footer-column footer-brand-column">
            <Link to="/" className="footer-brand" onClick={scrollTop}>
              <div className="footer-brand-mark">
                <img
                  src="/logo.png"
                  alt="Aureal Healthcare"
                  className="footer-brand-logo"
                />
              </div>
            </Link>

            <p className="footer-about-text">
              Aureal Healthcare is a progressive, tech-enabled clinical
              ecosystem that brings precision medicine directly into the comfort
              of your home. Founded by practicing physicians, we recognized the
              critical limitations of India's fragmented healthcare system and
              built a structured, 100% specialist-led model that redefines how
              high-acuity care is delivered.
            </p>

            <div className="footer-social">
              <a
                href="https://www.facebook.com/profile.php?id=61582677815436"
                className="social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Dr.SANJAYSHOMECARE"
                className="social-link"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.57A3.01 3.01 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.13c1.88.57 9.38.57 9.38.57s7.5 0 9.38-.57a3.01 3.01 0 0 0 2.12-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.93V8.07L16.4 12l-6.8 3.93Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/aureal-healthcare/?viewAsMember=true"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/aureal.health?stkn=MWJvYTlsMWpudTJodA%3D%3D&utm_source=qr"
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ============ COLUMN 2 — QUICK LINKS ============ */}
          <div className="footer-column">
            <h3 className="footer-heading">
              Quick Links
              <span className="heading-underline"></span>
            </h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer-link" onClick={scrollTop}>
                    <ArrowIcon />
                    <span className="link-text">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ COLUMN 3 — SERVICES ============ */}
          <div className="footer-column">
            <h3 className="footer-heading">
              Our Services
              <span className="heading-underline"></span>
            </h3>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="footer-link" onClick={scrollTop}>
                    <ArrowIcon />
                    <span className="link-text">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ COLUMN 4 — CONTACT ============ */}
          <div className="footer-column">
            <h3 className="footer-heading">
              Contact Info
              <span className="heading-underline"></span>
            </h3>

            <ul className="footer-contact">
              <li className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-content">
                  <span className="contact-label">Address</span>
                  <p className="contact-value">
                    No.3, Cardinal Street, COLAS NAGAR, UPPLAM, PONDICHERRY -
                    605001
                    <br />
                    <strong>CENTRES:</strong> LAWSPET, VILLIANUR, CUDDALORE
                  </p>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-content">
                  <span className="contact-label">Call Us</span>
                  <a
                    href="tel:+919944969049"
                    className="contact-value contact-link"
                  >
                    9944969049 | 9600144633
                  </a>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-content">
                  <span className="contact-label">Email Us</span>
                  <a
                    href="mailto:care@aurealhealthcare.com"
                    className="contact-value contact-link"
                  >
                    care@aurealhealthcare.com
                  </a>
                </div>
              </li>
            </ul>

            <Link
              to="/Appointment"
              className="footer-appointment-btn"
              onClick={scrollTop}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Book Appointment</span>
              <svg
                className="btn-arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ============ FOOTER BOTTOM ============ */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <strong>Aureal Healthcare</strong>. All rights
            reserved. Design &amp; Development by{" "}
            <a
              href="https://adlinkwebservices.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Adlink Web Services
            </a>
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-bottom-link" onClick={scrollTop}>
              Privacy Policy
            </Link>
            <span className="footer-bottom-divider"></span>
            <Link to="/terms" className="footer-bottom-link" onClick={scrollTop}>
              Terms of Service
            </Link>
            <span className="footer-bottom-divider"></span>
            <Link to="/cookies" className="footer-bottom-link" onClick={scrollTop}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;