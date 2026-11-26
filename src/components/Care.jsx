import React from "react";
import "./Care.css";

const nodes = [
  {
    id: "nursing",
    side: "is-left",
    className: "node-nutrition",
    title: "Skilled Nursing Care",
    body: "Doctor-led nursing care.",
    accent: "#c9971c",
    image: "/Skilled Nursing Care.jpg",
  },
  {
    id: "specialist",
    side: "is-right",
    className: "node-consultation",
    title: "Specialist Doctor Visits",
    body: "Expert doctor home consultations.",
    accent: "#1f6b47",
    image: "/Specialist Doctor Visits.jpg",
  },
  {
    id: "caregivers",
    side: "is-left",
    className: "node-preventive",
    title: "Trained Caregivers",
    body: "Assisted daily living support.",
    accent: "#e0b232",
    image: "/Trained Caregivers.jpg",
  },
  {
    id: "doctor-visits",
    side: "is-right",
    className: "node-diagnostics",
    title: "Doctor Home Visits",
    body: "In-home doctor medical check-ups.",
    accent: "#174d35",
    image: "/Doctor Home Visits.jpg",
  },
  {
    id: "rehabilitation",
    side: "is-left",
    className: "node-fitness",
    title: "Integrated Rehabilitation",
    body: "Physiotherapy, speech therapy, OT.",
    accent: "#1f6b47",
    image: "/Integrated Rehabilitation.jpg",
  },
  {
    id: "nutrition",
    side: "is-right",
    className: "node-treatment",
    title: "Nutrition & Diet",
    body: "Personalized clinical diet planning.",
    accent: "#c9971c",
    image: "/NutritionDiet.jpg",
  },
  {
    id: "diagnostics",
    side: "is-left",
    className: "node-mental",
    title: "Diagnostics at Home",
    body: "At-home X-ray, lab sample collection.",
    accent: "#174d35",
    image: "/Diagnostics at Home.jpg",
  },
  {
    id: "care-team",
    side: "is-right",
    className: "node-rehabilitation",
    title: "24/7 Care Team",
    body: "Providing seamless healthcare.",
    accent: "#e0b232",
    image: "/care-team.jpg",
  },
];

function ShieldArt({ large = false }) {
  return (
    <svg
      className={large ? "large-shield-art" : "shield-art"}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        d="M24 3.5 40 9v11.2c0 10.3-6.7 19.7-16 23.3-9.3-3.6-16-13-16-23.3V9l16-5.5Z"
        fill="currentColor"
      />
      <path
        d="M24 9.1 34.2 12v8.2c0 6.6-4 12.8-10.2 15.9-6.2-3.1-10.2-9.3-10.2-15.9V12L24 9.1Z"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        opacity=".9"
      />
      <path
        d="M21.3 15.3h5.4v5.4h5.4v5.4h-5.4v5.4h-5.4v-5.4h-5.4v-5.4h5.4v-5.4Z"
        fill="white"
      />
    </svg>
  );
}

function NodeArt({ node }) {
  if (node.type === "shield") {
    return <ShieldArt />;
  }

  return <img src={node.image} alt="" loading="lazy" />;
}

function BenefitIcon({ type }) {
  if (type === "care") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M24 40S7 30.8 7 18.3C7 12.7 10.8 9 15.7 9c3.1 0 6.3 1.8 8.3 4.8C26 10.8 29.2 9 32.3 9 37.2 9 41 12.7 41 18.3 41 30.8 24 40 24 40Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="M18 24h4l2-5 3 10 2-5h4"
          fill="none"
          stroke="#c9971c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "trusted") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M24 4.5 39 10v10.7c0 9.7-6.3 18.2-15 22.1-8.7-3.9-15-12.4-15-22.1V10l15-5.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m16.5 24 5 5 10-11"
          fill="none"
          stroke="#c9971c"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "support") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle
          cx="24"
          cy="25"
          r="13"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M24 17v8l5 3M24 7v4M9.5 13.5l3 3M38.5 13.5l-3 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 25h.1"
          stroke="#c9971c"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle
        cx="17"
        cy="17"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="32"
        cy="17"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 39c.7-7 4.4-10.5 10-10.5S26.3 32 27 39M21 39c.7-7 4.4-10.5 10-10.5S41.3 32 42 39"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 11v10M19 16h10"
        stroke="#c9971c"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Care() {
  return (
    <section className="care-section">
      <div className="care-blob care-blob-top" />
      <div className="care-blob care-blob-bottom" />
      <div className="care-dots care-dots-left" />
      <div className="care-dots care-dots-right" />
      <div className="care-wave care-wave-left" />
      <div className="care-wave care-wave-right" />

      <div className="care-container">
        <header className="care-heading">
          <br />
          <br />
          <h1>
            COMPLETE CARE, <span>360° AROUND YOU</span>
          </h1>

          <p>SPECIALIST LED · PERSONALISED PLANS · PRECISION CARE</p>

          <div className="heading-line">
            <i />
          </div>
        </header>
        <br />
        <br />

        <div className="care-map" aria-label="Complete care services">
          <svg
            className="orbit-lines"
            viewBox="0 0 1080 560"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <ellipse
              className="main-orbit"
              cx="540"
              cy="280"
              rx="405"
              ry="250"
            />

            <ellipse
              className="secondary-orbit"
              cx="540"
              cy="280"
              rx="350"
              ry="220"
            />

            <path
              className="connector"
              d="M376 54 C410 65 433 90 457 117"
            />
            <path
              className="connector"
              d="M704 54 C670 65 647 90 623 117"
            />

            <path
              className="connector"
              d="M301 183 C338 192 363 207 382 225"
            />
            <path
              className="connector"
              d="M779 183 C742 192 717 207 698 225"
            />

            <path
              className="connector"
              d="M301 334 C338 333 363 333 382 335"
            />
            <path
              className="connector"
              d="M779 334 C742 333 717 333 698 335"
            />

            <path
              className="connector"
              d="M386 485 C414 468 438 447 457 430"
            />
            <path
              className="connector"
              d="M694 485 C666 468 642 447 623 430"
            />

            <circle className="orbit-dot dot-1" cx="457" cy="117" r="6" />
            <circle className="orbit-dot dot-2" cx="623" cy="117" r="6" />
            <circle className="orbit-dot dot-3" cx="382" cy="225" r="6" />
            <circle className="orbit-dot dot-4" cx="698" cy="225" r="6" />
            <circle className="orbit-dot dot-5" cx="382" cy="335" r="6" />
            <circle className="orbit-dot dot-6" cx="698" cy="335" r="6" />
            <circle className="orbit-dot dot-7" cx="457" cy="430" r="6" />
            <circle className="orbit-dot dot-8" cx="623" cy="430" r="6" />
          </svg>

          <div className="orbit-spark spark-one" />
          <div className="orbit-spark spark-two" />
          <div className="orbit-spark spark-three" />
          <div className="orbit-spark spark-four" />

          {nodes.map((node, index) => (
            <article
              className={`care-node ${node.side} ${node.className}`}
              key={node.id}
              tabIndex={0}
              style={{
                "--node-delay": `${index * -0.55}s`,
              }}
            >
              <div className="node-content">
                <div
                  className="node-image"
                  style={{ "--accent": node.accent }}
                >
                  <div className="node-image-glow" />

                  <div className="node-art">
                    <NodeArt node={node} />
                  </div>
                </div>

                <div className="node-copy">
                  <h2>{node.title}</h2>
                  <p>{node.body}</p>
                </div>
              </div>
            </article>
          ))}

          <div className="care-center" tabIndex={0}>
            <div className="core-shadow" />
            <div className="core-spinner" />
            <div className="core-spinner-inner" />

            <div className="core-satellite">
              <span />
            </div>

            <div className="core-disc">
              <div className="core-photo">
                <img
                  src="/dr-sanjay.png"
                  alt="Patient receiving compassionate home healthcare"
                />
                <div className="core-photo-shine" />
              </div>
            </div>

            <div className="core-caption">
              <strong>Care Calibrated to you</strong>
            </div>
          </div>
        </div>
        <br />
        <br />

        <footer className="care-benefits">
          <div className="benefit-item">
            <div className="benefit-icon">
              <BenefitIcon type="care" />
            </div>
            <span>
              Compassionate
              <br />
              Care
            </span>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <BenefitIcon type="trusted" />
            </div>
            <span>
              Trusted
              <br />
              Experts
            </span>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <BenefitIcon type="support" />
            </div>
            <span>
              24/7
              <br />
              Support
            </span>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <BenefitIcon type="life" />
            </div>
            <span>
              Better Health,
              <br />
              Better Life
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Care;