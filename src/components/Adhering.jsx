import { useEffect, useRef, useState, useCallback } from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import './Adhering.css';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1580281658626-ee379f3cce93?auto=format&fit=crop&w=2400&q=90';

const standards = [
  { name: 'NABH',            region: 'INDIA',  full: 'Nursing Excellence Standards' },
  { name: 'WHO ICOPE',       region: 'GLOBAL', full: 'Integrated Care for Older People' },
  { name: 'WHO IPSG',        region: 'GLOBAL', full: 'International Patient Safety Goals' },
  { name: 'NICE Guidelines', region: 'UK',     full: 'Clinical Pathways' },
  { name: 'CPOC',            region: 'UK',     full: 'Centre for Perioperative Care Guidelines' },
  { name: 'IAP',             region: 'INDIA',  full: 'Indian Academy of Pediatrics Guidelines' },
  { name: 'Pallium India',   region: 'INDIA',  full: 'Palliative Care Protocols' },
  { name: 'CQC',             region: 'UK',     full: 'UK Care Quality Standards' },
  { name: 'NHS',             region: 'UK',     full: 'UK Clinical Governance' },
  { name: 'NABL',            region: 'INDIA',  full: 'Certified Labs' },
];

const Adhering = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const imgRef  = useRef(null);
  const rafRef  = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  /* ---------- HERO: full-screen image, ZOOMS OUT on scroll ---------- */
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const hero = heroRef.current;
        const img  = imgRef.current;
        if (!hero || !img) return;

        const r = hero.getBoundingClientRect();
        const h = r.height || 1;
        const p = Math.min(Math.max(-r.top / h, 0), 1);   // 0 -> 1

        const scale = (1.42 - p * 0.42).toFixed(4);        // ZOOM OUT
        const shift = Math.round(p * 120);                 // integer px parallax

        img.style.transform = `scale(${scale}) translate3d(0, ${shift}px, 0)`;
        hero.style.setProperty('--veil', (0.40 + p * 0.38).toFixed(3));
        hero.style.setProperty('--htxt', Math.max(0, 1 - p * 1.3).toFixed(3));
        hero.style.setProperty('--hy', `${Math.round(-p * 60)}px`);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ---------- reveal ---------- */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setIsVisible(true); return; }

    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ---------- magnetic buttons (transform only) ---------- */
  const onBtnMove = useCallback((e) => {
    const b = e.currentTarget;
    const r = b.getBoundingClientRect();
    b.style.setProperty('--bx', `${Math.round((e.clientX - r.left - r.width / 2) * 0.16)}px`);
    b.style.setProperty('--by', `${Math.round((e.clientY - r.top - r.height / 2) * 0.28)}px`);
  }, []);

  const onBtnLeave = useCallback((e) => {
    e.currentTarget.style.setProperty('--bx', '0px');
    e.currentTarget.style.setProperty('--by', '0px');
  }, []);

  return (
    <div className="adh-wrap" ref={rootRef}>
      {/* =================== HERO (image zooms out) =================== */}
      

      {/* ===================== GOVERNANCE SECTION ===================== */}
      <section className="adhering-section" id="frameworks">
        <span className="adh-bg-grid" aria-hidden="true" />
        <span className="adh-bg-orb adh-orb-1" aria-hidden="true" />
        <span className="adh-bg-orb adh-orb-2" aria-hidden="true" />

        <div className="adh-container">
          {/* ---------------- LEFT ---------------- */}
          <div className={`adh-copy ${isVisible ? 'is-visible' : ''}`}>
            <div className="adh-kicker">
              <span className="adh-kicker-line" />
              <span className="adh-kicker-text">Clinical Governance</span>
              <span className="adh-kicker-dot" />
            </div>

            {/* title — exactly 2 lines */}
            <h2 className="adh-title">
              <span className="adh-line"><span>Our Quality &amp; Safety</span></span>
              <span className="adh-line adh-line--accent"><span>Frameworks.</span></span>
            </h2>

            <p className="adh-description">
              Institutional discipline, independently audited. Each protocol is
              mapped to a recognised global standard and continuously reviewed
              by our clinical board.
            </p>

            <div className="adh-meta">
              <div className="adh-meta-item">
                <span className="adh-meta-value">13+</span>
                <span className="adh-meta-label">GLOBAL STANDARDS</span>
              </div>
              <span className="adh-meta-divider" />
              <div className="adh-meta-item">
                <span className="adh-meta-value">100%</span>
                <span className="adh-meta-label">COMPLIANCE</span>
              </div>
              <span className="adh-meta-divider" />
              <div className="adh-meta-item">
                <span className="adh-meta-value">24x7</span>
                <span className="adh-meta-label">AUDIT READY</span>
              </div>
            </div>

            <a href="#frameworks" className="adh-btn adh-copy__btn"
               onMouseMove={onBtnMove} onMouseLeave={onBtnLeave}>
              Download compliance report <ArrowRight size={17} className="adh-btn__a" />
            </a>
          </div>

          {/* ---------------- RIGHT ---------------- */}
          <div className={`adh-tags-block ${isVisible ? 'is-visible' : ''}`}>
            <div className="adh-tags-header">
              <span className="adh-adhering-label">
                <span className="adh-pulse-dot" /> Adhering to
              </span>
              <span className="adh-count">
                13 FRAMEWORKS
              </span>
            </div>

            <div className="adh-tags-grid">
              {standards.map((s, i) => (
                <article
                  key={s.name}
                  className="adh-tag-card"
                  style={{ '--delay': `${i * 90}ms` }}
                >
                  <span className="adh-tag-sheen" aria-hidden="true" />
                  <div className="adh-tag-inner">
                    <span className="adh-tag-icon">
                      <CheckCircle2 size={16} strokeWidth={2.2} />
                    </span>
                    <div className="adh-tag-content">
                      <div className="adh-tag-name">{s.name}</div>
                      <div className="adh-tag-full">{s.full}</div>
                    </div>
                    <span className="adh-tag-region">{s.region}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="adh-footer-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z"
                  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4"
                  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Independently audited &amp; continuously reviewed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adhering;