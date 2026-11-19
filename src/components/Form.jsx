import React, { Fragment, useEffect, useRef, useState } from "react";
import "./Form.css";

const VE = [
  {
    id: `patientName`,
    label: `Patient Name`,
    type: `text`,
    req: true,
  },
  {
    id: `whatsapp`,
    label: `WhatsApp Number`,
    type: `tel`,
    req: true,
  },
  {
    id: `age`,
    label: `Age`,
    type: `number`,
    req: true,
  },
  {
    id: `serviceType`,
    label: `Type of Service`,
    type: `select`,
    req: true,
    options: [
      `10 hrs - Day care Home Nursing`,
      `12 Hrs Home Nursing care`,
      `24/7 Home Nursing care`,
      `Doctor home visit`,
      `SPECIALIST MD/ MS Doctor Home visit`,
      `SUPER SPECIALIST DM/Mch Doctor Home visit`,
      `Specialised Physiotherapy at home`,
      `General Physiotherapy at home`,
      `Speech therapy at home`,
      `Nutritionist consultation`,
      `Occupational therapy at home`,
      `Psychologist consultation at home`,
    ],
  },
  {
    id: `message`,
    label: `Message / Health Concern`,
    type: `textarea`,
    req: true,
  },
];

const HE = (e = {}) => {
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

const UE = ({
  children: e,
  direction: t = `up`,
  delay: n = 0.75,
  duration: r = 0.9,
  className: i = ``,
  threshold: a,
  as: C_o = `div`,
}) => {
  let [s, c] = HE({
    threshold: a,
  });
  return (
    <C_o
      ref={s}
      className={`fr ${t} ${c ? `in` : ``} ${i}`}
      style={{
        "--fr-delay": `${n}s`,
        "--fr-dur": `${r}s`,
      }}
    >
      {e}
    </C_o>
  );
};

const WE = () => {
  let [e, t] = HE({
    threshold: 0.4,
  });
  return (
    <h2 ref={e} className={`wizard-title fr-title ${t ? `in` : ``}`}>
      {[`BOOK`, `YOUR`, `CARE`, `TODAY`].map((e, t) => (
        <span className="fr-word-mask" key={`${e}-${t}`}>
          <span
            className="fr-word"
            style={{
              "--w": t,
              color: `#072318`,
            }}
          >
            {e}
          </span>
        </span>
      ))}
    </h2>
  );
};

const GE = (e, t) => {
  let n = String(t ?? ``).trim();
  if (e.req && !n) {
    return `${e.label} is required.`;
  }
  if (e.id === `whatsapp` && n && !/^\d{10}$/.test(n)) {
    return `WhatsApp number must contain exactly 10 digits.`;
  }
  if (e.id === `age` && n) {
    let e = Number(n);
    if (!Number.isInteger(e) || e < 1 || e > 120) {
      return `Please enter a valid age between 1 and 120.`;
    }
  }
  return ``;
};

export default function FormWizard() {
  let [e, t] = useState(0);
  let [n, r] = useState({
    patientName: ``,
    whatsapp: ``,
    age: ``,
    serviceType: ``,
    message: ``,
  });
  let [i, a] = useState(``);
  let [C_o, s] = useState({});
  let [c, l] = useState(false);
  useEffect(() => {
    if (e >= VE.length - 1) {
      return;
    }
    let r = VE[e];
    let i = n[r.id];
    if (GE(r, i)) {
      return;
    }
    let a = setTimeout(() => {
      t((t) => (t === e ? t + 1 : t));
    }, 3000);
    return () => clearTimeout(a);
  }, [n, e]);
  let u = (e) => {
    let { name: t, value: n } = e.target;
    let i = n;
    if (t === `whatsapp`) {
      i = n.replace(/\D/g, ``).slice(0, 10);
    }
    r((e) => ({
      ...e,
      [t]: i,
    }));
    s((e) => {
      if (!e[t]) {
        return e;
      }
      let n = {
        ...e,
      };
      delete n[t];
      return n;
    });
  };
  let d = (e) => {
    a(e);
  };
  let f = () => {
    a(``);
  };
  let p = () => {
    if (e > 0) {
      t((e) => e - 1);
      a(``);
    }
  };
  let m = () => {
    let r = VE[e];
    let i = GE(r, n[r.id]);
    if (i) {
      s((e) => ({
        ...e,
        [r.id]: i,
      }));
      return;
    }
    if (e < VE.length - 1) {
      s((e) => {
        let t = {
          ...e,
        };
        delete t[r.id];
        return t;
      });
      t((e) => e + 1);
      a(``);
    }
  };
  let h = () => {
    let e = {};
    VE.forEach((t) => {
      let r = GE(t, n[t.id]);
      if (r) {
        e[t.id] = r;
      }
    });
    return e;
  };
  let g = (e) => {
    e.preventDefault();
    if (c) {
      return;
    }
    if (c) {
      return;
    }
    let r = h();
    if (Object.keys(r).length > 0) {
      s(r);
      let e = VE.findIndex((e) => r[e.id]);
      if (e !== -1) {
        t(e);
      }
      return;
    }
    let i = [
      `New Appointment Request`,
      ``,
      `Patient Name: ${n.patientName.trim()}`,
      `WhatsApp Number: ${n.whatsapp}`,
      `Age: ${n.age}`,
      `Type of Service: ${n.serviceType}`,
      `Message / Health Concern: ${n.message.trim()}`,
    ].join(`
`);
    let a = `https://wa.me/9944969049?text=${encodeURIComponent(i)}`;
    window.open(a, `_blank`, `noopener,noreferrer`);
  };
  let _ = VE[e];
  let v = C_o[_.id] || ``;
  let y = e === 0;
  let x = e === VE.length - 1;
  let S = String(n[_.id] ?? ``).trim() !== ``;
  let C = i === _.id;
  let w = `field-block ${v ? `has-error` : ``}`;
  let T = `float-label ${S || C ? `lifted` : ``} ${C ? `focused` : ``}`;
  return (
    <section className="form-wizard-section" id="wizard-form">
      <div className="ambient-orb orb-1" aria-hidden="true" />
      <div className="ambient-orb orb-2" aria-hidden="true" />
      <div className="wizard-wrapper">
        <UE
          direction="up"
          delay={0.75}
          duration={1.05}
          threshold={0.15}
          className="wizard-card-reveal"
        >
          <div className="wizard-card">
            <header className="wizard-top">
              <UE direction="up" delay={0.85} duration={0.8}>
                <span className="wizard-badge">
                  {"STEP "}
                  {e + 1}
                  {" / "}
                  {VE.length}
                </span>
              </UE>
              <WE />
              <UE direction="up" delay={1} duration={0.85}>
                <p className="wizard-sub">
                  Complete each step. Our clinical team reaches out within 30 minutes via WhatsApp.
                </p>
              </UE>
            </header>
            <form className="wizard-body" onSubmit={g} noValidate={true}>
              <div className="field-stage" key={_.id}>
                {_.type === `textarea` ? (
                  <div className={w}>
                    <label htmlFor={_.id} className={T}>
                      {_.label}
                      {" *"}
                    </label>
                    <textarea
                      id={_.id}
                      name={_.id}
                      className="modern-input modern-area"
                      value={n[_.id]}
                      onChange={u}
                      onFocus={() => d(_.id)}
                      onBlur={f}
                      rows="4"
                      required={true}
                      aria-required="true"
                      aria-invalid={!!v}
                      aria-describedby={v ? `${_.id}-error` : undefined}
                    />
                    <div className="line-glow" />
                    {v && (
                      <span
                        id={`${_.id}-error`}
                        className="field-error"
                        role="alert"
                        style={{
                          display: `block`,
                          marginTop: `8px`,
                          color: `#b42318`,
                          fontSize: `12px`,
                          lineHeight: `1.4`,
                        }}
                      >
                        {v}
                      </span>
                    )}
                  </div>
                ) : _.type === `select` ? (
                  <div className={w}>
                    <label
                      htmlFor={_.id}
                      className={`float-label ${C || S ? `focused lifted` : ``}`}
                    >
                      {_.label}
                      {" *"}
                    </label>
                    <select
                      id={_.id}
                      name={_.id}
                      className="modern-input modern-select"
                      value={n[_.id]}
                      onChange={u}
                      onFocus={() => d(_.id)}
                      onBlur={f}
                      required={true}
                      aria-required="true"
                      aria-invalid={!!v}
                      aria-describedby={v ? `${_.id}-error` : undefined}
                    >
                      <option value="" disabled={true} />
                      {_.options.map((e) => (
                        <option value={e} key={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                    <div className="line-glow" />
                    {v && (
                      <span
                        id={`${_.id}-error`}
                        className="field-error"
                        role="alert"
                        style={{
                          display: `block`,
                          marginTop: `8px`,
                          color: `#b42318`,
                          fontSize: `12px`,
                          lineHeight: `1.4`,
                        }}
                      >
                        {v}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className={w}>
                    <label htmlFor={_.id} className={T}>
                      {_.label}
                      {" *"}
                    </label>
                    <input
                      id={_.id}
                      type={_.type}
                      name={_.id}
                      className="modern-input"
                      value={n[_.id]}
                      onChange={u}
                      onFocus={() => d(_.id)}
                      onBlur={f}
                      maxLength={_.id === `whatsapp` ? 10 : undefined}
                      inputMode={_.id === `whatsapp` ? `numeric` : undefined}
                      pattern={_.id === `whatsapp` ? `[0-9]{10}` : undefined}
                      min={_.type === `number` ? `1` : undefined}
                      max={_.type === `number` ? `120` : undefined}
                      required={true}
                      aria-required="true"
                      aria-invalid={!!v}
                      aria-describedby={v ? `${_.id}-error` : undefined}
                    />
                    <div className="line-glow" />
                    {v && (
                      <span
                        id={`${_.id}-error`}
                        className="field-error"
                        role="alert"
                        style={{
                          display: `block`,
                          marginTop: `8px`,
                          color: `#b42318`,
                          fontSize: `12px`,
                          lineHeight: `1.4`,
                        }}
                      >
                        {v}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="action-zone">
                <div className="nav-buttons">
                  {!y && (
                    <button
                      type="button"
                      className="nav-btn nav-back visible"
                      onClick={p}
                      aria-label="Back"
                      style={{
                        background: `#e8cb6a`,
                        color: `#000000`,
                        border: `1px solid #E6C34A`,
                        borderRadius: `10px`,
                        padding: `12px 24px`,
                        fontWeight: `600`,
                        cursor: `pointer`,
                        boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
                      }}
                    >
                      <span
                        className="nav-arrow"
                        style={{
                          color: `#000`,
                        }}
                      >
                        ←
                      </span>
                      <span>Back</span>
                    </button>
                  )}
                  <button
                    type={x ? `submit` : `button`}
                    className={`nav-btn nav-next ${x ? `submit-style` : ``}`}
                    disabled={c}
                    onClick={x ? undefined : m}
                    style={{
                      background: `#d4af37`,
                      color: `#000000`,
                      border: `1px solid #A87F00`,
                      borderRadius: `10px`,
                      padding: `12px 24px`,
                      fontWeight: `600`,
                      cursor: c ? `not-allowed` : `pointer`,
                    }}
                  >
                    {c ? (
                      <span className="loader-dots">
                        <span />
                        <span />
                        <span />
                      </span>
                    ) : (
                      <Fragment>
                        <span>{x ? `Send to WhatsApp` : `Next`}</span>
                        <span
                          className="nav-arrow"
                          style={{
                            color: `#000`,
                          }}
                        >
                          →
                        </span>
                      </Fragment>
                    )}
                  </button>
                </div>
                <div className="step-indicator">
                  <span className="pulse-ring" />
                  <span className="indicator-text">
                    {x ? `Ready to send` : `Continue to complete`}
                  </span>
                </div>
                {!x && S && !v && <div className="auto-hint">Next field opening…</div>}
              </div>
            </form>
          </div>
        </UE>
      </div>
    </section>
  );
}
