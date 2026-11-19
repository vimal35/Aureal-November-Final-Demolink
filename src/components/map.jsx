import React, { useEffect, useMemo, useRef, useState } from "react";
import "./map.css";

const AE = `/our-locations-india.png`;

const jE = (e = {}) => {
  let t = useRef(null);
  let [n, r] = useState(false);
  useEffect(() => {
    let n = t.current;
    if (!n) {
      return;
    }
    if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
      r(true);
      return;
    }
    let i = new IntersectionObserver(
      ([e]) => {
        r(e.isIntersecting);
      },
      {
        threshold: e.threshold ?? 0.2,
        rootMargin: e.rootMargin ?? `0px 0px -8% 0px`,
      },
    );
    i.observe(n);
    return () => i.disconnect();
  }, [e.threshold, e.rootMargin]);
  return [t, n];
};

const ME = ({
  children: e,
  direction: t = `up`,
  delay: n = 0.75,
  duration: r = 0.9,
  className: i = ``,
  threshold: a,
  as: C_o = `div`,
}) => {
  let [s, c] = jE({
    threshold: a,
  });
  return (
    <C_o
      ref={s}
      className={`mr ${t} ${c ? `in` : ``} ${i}`}
      style={{
        "--mr-delay": `${n}s`,
        "--mr-dur": `${r}s`,
      }}
    >
      {e}
    </C_o>
  );
};

const NE = () => {
  let [e, t] = jE({
    threshold: 0.4,
  });
  return (
    <h2 ref={e} className={`pm_title mr-title ${t ? `in` : ``}`}>
      {[
        {
          text: `A`,
          accent: false,
        },
        {
          text: `Network`,
          accent: false,
        },
        {
          text: `Across`,
          accent: false,
        },
        {
          text: `South`,
          accent: true,
        },
        {
          text: `India`,
          accent: true,
        },
      ].map((e, t) => (
        <span className="mr-word-mask" key={t}>
          <span
            className={`mr-word ${e.accent ? `mr-accent` : ``}`}
            style={{
              "--w": t,
            }}
          >
            {e.text}
          </span>
        </span>
      ))}
    </h2>
  );
};

const PE = [
  {
    id: `bangalore`,
    city: `Bangalore`,
    state: `Karnataka`,
    top: `66.8%`,
    left: `36.4%`,
    type: `Corporate Office`,
    address: `Demo Address · Outer Ring Road, Bengaluru – 560103`,
    phone: `+91 80 0000 0000`,
    email: `bangalore@company.com`,
    hours: `Mon – Sat · 9:00 AM – 6:30 PM`,
    manager: `Demo Manager, Karnataka Region`,
    services: [`Corporate Office`, `Technology Hub`, `Training Center`],
  },
  {
    id: `chennai`,
    city: `Chennai`,
    state: `Tamil Nadu`,
    top: `66.6%`,
    left: `50.6%`,
    type: `Corporate & Southern HQ`,
    address: `Demo Address · No. 22, Guindy Industrial Estate, Mount Road, Chennai – 600032`,
    phone: `+91 44 0000 0000`,
    email: `chennai@company.com`,
    hours: `Mon – Sat · 9:00 AM – 7:00 PM`,
    manager: `Demo Manager, VP – South Region`,
    services: [`Regional HQ`, `Enterprise Sales`, `Training Academy`],
  },
  {
    id: `pondicherry`,
    city: `Pondicherry`,
    state: `Puducherry (UT)`,
    top: `73.4%`,
    left: `48.4%`,
    type: `Regional Office`,
    address: `Demo Address · 12, Beach Road, White Town, Pondicherry – 605001`,
    phone: `+91 413 000 0000`,
    email: `pondicherry@company.com`,
    hours: `Mon – Sat · 9:30 AM – 6:30 PM`,
    manager: `Demo Manager, Regional Head`,
    services: [`Regional Office`, `Service Center`, `Client Lounge`],
  },
  {
    id: `kochi`,
    city: `Kochi`,
    state: `Kerala`,
    top: `75.6%`,
    left: `32.4%`,
    type: `Service Hub`,
    address: `Demo Address · InfoPark, Kakkanad, Kochi – 682042`,
    phone: `+91 484 000 0000`,
    email: `kochi@company.com`,
    hours: `Mon – Fri · 9:30 AM – 6:30 PM`,
    manager: `Demo Manager, Center Lead`,
    services: [`Service Center`, `Support Hub`, `Warehouse`],
  },
  {
    id: `kottayam`,
    city: `Kottayam`,
    state: `Kerala`,
    top: `83.2%`,
    left: `36.2%`,
    type: `Regional Office`,
    address: `Demo Address · Main Central Road, Kottayam – 686001`,
    phone: `+91 481 000 0000`,
    email: `kottayam@company.com`,
    hours: `Mon – Sat · 9:30 AM – 6:30 PM`,
    manager: `Demo Manager, Regional Coordinator`,
    services: [`Regional Office`, `Home Care Support`, `Client Services`],
  },
];

const FE = {
  "Corporate & Southern HQ": `#C69A37`,
  "Corporate Office": `#C69A37`,
  "Regional Office": `#E8C46A`,
  "Service Hub": `#D4A437`,
};

const IE = (e) => FE[e] || `#E8C46A`;

const LE = {
  building: (e) => (
    <svg viewBox="0 0 24 24" {...e}>
      <path
        fill="currentColor"
        d="M3 21V5l8-3 8 3v16h-6v-5h-2v5H3Zm4-9h2v2H7v-2Zm0-4h2v2H7V8Zm6 4h2v2h-2v-2Zm0-4h2v2h-2V8Z"
      />
    </svg>
  ),
  phone: (e) => (
    <svg viewBox="0 0 24 24" {...e}>
      <path
        fill="currentColor"
        d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.24 1l-2.22 2.3Z"
      />
    </svg>
  ),
  mail: (e) => (
    <svg viewBox="0 0 24 24" {...e}>
      <path
        fill="currentColor"
        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 4 8 5 8-5V6l-8 5-8-5v2Z"
      />
    </svg>
  ),
  clock: (e) => (
    <svg viewBox="0 0 24 24" {...e}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10V6h-2v7l5 3 1-1.7-4-2.3Z"
      />
    </svg>
  ),
  user: (e) => (
    <svg viewBox="0 0 24 24" {...e}>
      <path
        fill="currentColor"
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.3 0-8 1.7-8 5v3h16v-3c0-3.3-4.7-5-8-5Z"
      />
    </svg>
  ),
  route: (e) => (
    <svg viewBox="0 0 24 24" {...e}>
      <path
        fill="currentColor"
        d="M6 2a4 4 0 0 1 4 4c0 1.5-1 2.6-2 3.5V11h6a4 4 0 0 1 0 8h-2v1.5c1 .9 2 2 2 3.5a4 4 0 1 1-4-4c0-1.5 1-2.6 2-3.5V15H6a4 4 0 0 1 0-8V5.5C5 4.6 4 3.5 4 2a4 4 0 0 1 2 0Z"
      />
    </svg>
  ),
  search: (e) => (
    <svg viewBox="0 0 24 24" {...e}>
      <path
        fill="currentColor"
        d="M10 2a8 8 0 1 0 5 14.3l4.7 4.7 1.4-1.4-4.7-4.7A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"
      />
    </svg>
  ),
};

function RE({ icon: e, label: t, children: n }) {
  return (
    <div className="pm_row">
      <span className="pm_row_ic">{e}</span>
      <div className="pm_row_tx">
        <span className="pm_row_lb">{t}</span>
        <span className="pm_row_vl">{n}</span>
      </div>
    </div>
  );
}

export default function PresenceMap() {
  let [e, t] = useState(null);
  let [n, r] = useState(null);
  let [i, a] = useState(``);
  let C_o = useMemo(() => {
    let e = i.trim().toLowerCase();
    if (e) {
      return PE.filter((t) => `${t.city} ${t.state} ${t.type}`.toLowerCase().includes(e));
    } else {
      return PE;
    }
  }, [i]);
  let s = useMemo(() => new Set(PE.map((e) => e.state)).size, []);
  let c = PE.find((t) => t.id === e) || null;
  let l = (e) => t(e);
  return (
    <section className="pm_root" id="presence">
      <div className="pm_container">
        <header className="pm_head">
          <ME direction="up" delay={0.1} duration={0.8}>
            <span className="pm_kicker">
              <i className="pm_kdot" />
              Our Presence
            </span>
          </ME>
          <NE />
          <ME direction="up" delay={0.75} duration={0.95}>
            <p className="pm_sub">
              From our southern headquarters in Chennai to hubs in Bangalore, Pondicherry, Kochi and
              Kottayam — tap any marker on the map, or choose a city from the list.
            </p>
          </ME>
          <ME direction="up" delay={0.85} duration={0.9}>
            <div className="pm_stats">
              <div className="pm_stat">
                <b>{PE.length}+</b>
                <span>Offices</span>
              </div>
              <div className="pm_stat">
                <b>{s}+</b>
                <span>States & UTs</span>
              </div>
              <div className="pm_stat">
                <b>24/7</b>
                <span>Support</span>
              </div>
            </div>
          </ME>
        </header>
        <div className="pm_grid">
          <ME direction="left" delay={0.8} duration={1.15} threshold={0.15} className="pm_mapwrap">
            <div className="pm_viewport">
              <span className="pm_corner pm_c_tl" />
              <span className="pm_corner pm_c_tr" />
              <span className="pm_corner pm_c_bl" />
              <span className="pm_corner pm_c_br" />
              <div className="pm_plane">
                <div className="pm_stage">
                  <div className="pm_screen">
                    <img
                      className="pm_mapimg"
                      src={AE}
                      alt="Our locations across India — Bangalore, Chennai, Pondicherry, Kochi and Kottayam"
                      draggable="false"
                      onError={(e) => {
                        e.currentTarget.style.opacity = `0`;
                      }}
                    />
                  </div>
                  <div className="pm_overlay">
                    {PE.map((t) => {
                      let i = IE(t.type);
                      let a = e === t.id;
                      let C_o = n === t.id;
                      return (
                        <button
                          type="button"
                          className={`pm_pin pm_pin_${t.id} ${a ? `is_active` : ``} ${C_o ? `is_hover` : ``}`}
                          style={{
                            left: t.left,
                            top: t.top,
                            "--pc": i,
                          }}
                          onMouseEnter={() => r(t.id)}
                          onMouseLeave={() => r(null)}
                          onFocus={() => r(t.id)}
                          onBlur={() => r(null)}
                          onClick={() => l(t.id)}
                          aria-label={`${t.city} – ${t.type}`}
                          aria-pressed={a}
                          key={t.id}
                        >
                          <span className="pm_ping" />
                          <span className="pm_hotspot" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="pm_hint">
              <span className="pm_hdot" />
              Click a marker or choose a city from the list →
            </div>
            {c && <div className="pm_backdrop" onClick={() => t(null)} />}
            {c && (
              <div
                className="pm_detail"
                role="dialog"
                aria-modal="true"
                aria-label={c.city}
                style={{
                  "--ac": IE(c.type),
                }}
              >
                <button
                  type="button"
                  className="pm_detail_close"
                  onClick={() => t(null)}
                  aria-label="Close"
                >
                  ✕
                </button>
                <div className="pm_detail_accent" />
                <div className="pm_detail_top">
                  <span className="pm_badge">{c.type}</span>
                  <h3>{c.city}</h3>
                  <p>{c.state}, India</p>
                </div>
                <div className="pm_detail_body">
                  <RE icon={<LE.building width="18" height="18" />} label="Office Address">
                    {c.address}
                  </RE>
                  <RE icon={<LE.phone width="18" height="18" />} label="Phone">
                    <a href={`tel:${c.phone.replace(/[^\d+]/g, ``)}`}>{c.phone}</a>
                  </RE>
                  <RE icon={<LE.mail width="18" height="18" />} label="Email">
                    <a href={`mailto:${c.email}`}>{c.email}</a>
                  </RE>
                  <RE icon={<LE.clock width="18" height="18" />} label="Working Hours">
                    {c.hours}
                  </RE>
                  <RE icon={<LE.user width="18" height="18" />} label="Office Head">
                    {c.manager}
                  </RE>
                </div>
                <div className="pm_tags">
                  {c.services.map((e) => (
                    <span className="pm_tag" key={e}>
                      {e}
                    </span>
                  ))}
                </div>
                <div className="pm_detail_actions">
                  <a
                    className="pm_btn pm_btn_primary"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.address} ${c.city}`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LE.route width="18" height="18" />
                    Get Directions
                  </a>
                  <a className="pm_btn" href={`tel:${c.phone.replace(/[^\d+]/g, ``)}`}>
                    <LE.phone width="18" height="18" />
                    Call Office
                  </a>
                </div>
              </div>
            )}
          </ME>
          <ME
            direction="right"
            delay={0.9}
            duration={1.15}
            threshold={0.15}
            as="aside"
            className="pm_side"
          >
            <div className="pm_side_head">
              <h3>
                Locations<span className="pm_count">{C_o.length}</span>
              </h3>
              <label className="pm_search">
                <LE.search width="16" height="16" />
                <input
                  value={i}
                  onChange={(e) => a(e.target.value)}
                  placeholder="Search city or state…"
                  aria-label="Search locations"
                />
              </label>
            </div>
            <ul className="pm_list">
              {C_o.map((t) => (
                <li key={t.id}>
                  <button
                    type="button"
                    className={`pm_li ${e === t.id ? `is_active` : ``}`}
                    style={{
                      "--pc": IE(t.type),
                    }}
                    onClick={() => l(t.id)}
                    onMouseEnter={() => r(t.id)}
                    onMouseLeave={() => r(null)}
                    onFocus={() => r(t.id)}
                    onBlur={() => r(null)}
                  >
                    <span className="pm_li_dot" />
                    <span className="pm_li_main">
                      <b>{t.city}</b>
                      <small>
                        {t.state}
                        {" · "}
                        {t.type}
                      </small>
                    </span>
                    <span className="pm_li_go">→</span>
                  </button>
                </li>
              ))}
              {C_o.length === 0 && <li className="pm_empty">No locations match "{i}".</li>}
            </ul>
          </ME>
        </div>
      </div>
    </section>
  );
}
