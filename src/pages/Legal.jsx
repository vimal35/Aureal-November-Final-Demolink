import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Legal.css";

const CONTACT = {
  company: "Aureal Healthcare",
  address: "No.3, Cardinal Street, Colas Nagar, Uppalam, Chennai - 605001",
  phone: "9944969049 | 9600144633",
  phoneHref: "tel:+919944969049",
  email: "care@aurealhealthcare.com",
};

const LAST_UPDATED = "29 October 2026";

/* Content reflects what the website actually does: enquiry forms that open WhatsApp,
   an optional medical-report upload, no analytics and no site-set cookies. */
const PAGES = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "This policy explains what personal information Aureal Healthcare collects through this website, why we collect it, and how we look after it.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "When you use our appointment or enquiry forms we ask for details such as the patient's name, a WhatsApp number, age, location, the type of service needed and a short description of the health concern.",
          "If you choose to upload a medical report, we receive the file you send so that a clinician can review it.",
          "We do not ask for payment details on this website.",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "To respond to your enquiry, arrange consultations, home visits and other services you request, and to coordinate your care with our clinical team.",
          "Health information you share is used only by the people involved in your care and is treated as confidential.",
          "We do not sell your information or use it for third-party advertising.",
        ],
      },
      {
        heading: "WhatsApp and other services",
        body: [
          "Several forms open WhatsApp with your message pre-filled. Once sent, that message is also handled under WhatsApp's own terms and privacy policy.",
          "Links to Facebook, Instagram, LinkedIn and YouTube take you to those platforms, which have their own policies.",
        ],
      },
      {
        heading: "How long we keep information",
        body: [
          "We keep enquiry and care records only for as long as needed to provide care and to meet our legal and medical record-keeping obligations.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can ask us to show, correct or delete the personal information we hold about you, subject to any records we are legally required to keep. Contact us using the details below.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    intro:
      "These terms apply to your use of the Aureal Healthcare website. By using the site you agree to them.",
    sections: [
      {
        heading: "Information on this website",
        body: [
          "The content on this website is general information about our services. It is not medical advice and does not replace a consultation with a qualified doctor.",
          "In a medical emergency, call your local emergency number or go to the nearest hospital immediately.",
        ],
      },
      {
        heading: "Enquiries and appointments",
        body: [
          "Submitting a form or message is a request for contact. A booking is confirmed only when our team confirms it with you directly.",
          "Services, availability and coverage areas may change. Our care coordinators will confirm what applies to you.",
        ],
      },
      {
        heading: "Using the website",
        body: [
          "Please provide accurate information in our forms and do not upload files that you do not have the right to share.",
          "The text, images, logos and design of this website belong to Aureal Healthcare and may not be copied for commercial use without permission.",
        ],
      },
      {
        heading: "Links to other websites",
        body: [
          "We link to third-party websites and platforms for convenience. We are not responsible for their content or practices.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: [
          "We may update these terms from time to time. The date at the top of this page shows when they were last changed.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro: "This page explains how this website uses cookies and similar technologies.",
    sections: [
      {
        heading: "Cookies set by this website",
        body: [
          "This website does not set its own cookies and does not use analytics or advertising trackers.",
        ],
      },
      {
        heading: "Third-party content",
        body: [
          "Our pages load fonts from Google Fonts and some images from external image services. These providers may receive technical information such as your IP address when your browser requests those files.",
          "When you follow a link to WhatsApp, Facebook, Instagram, LinkedIn or YouTube, those services may set their own cookies under their own policies.",
        ],
      },
      {
        heading: "Managing cookies",
        body: [
          "You can block or delete cookies at any time in your browser settings. Doing so will not affect how this website works.",
        ],
      },
    ],
  },
};

export default function Legal({ page }) {
  const content = PAGES[page];

  useEffect(() => {
    document.title = `${content.title} | ${CONTACT.company}`;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [content.title]);

  return (
    <div className="legal-page">
      <header className="legal-hero">
        <div className="legal-container">
          <nav className="legal-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <span>{content.title}</span>
          </nav>
          <h1>{content.title}</h1>
          <p className="legal-intro">{content.intro}</p>
          <p className="legal-updated">Last updated: {LAST_UPDATED}</p>
        </div>
      </header>

      <main className="legal-body legal-container">
        {content.sections.map((section) => (
          <section key={section.heading} className="legal-section">
            <h2>{section.heading}</h2>
            {section.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </section>
        ))}

        <section className="legal-section legal-contact">
          <h2>Contact us</h2>
          <p>If you have any questions about this page, please get in touch:</p>
          <ul>
            <li>{CONTACT.company}</li>
            <li>{CONTACT.address}</li>
            <li>
              Phone: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </li>
            <li>
              Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
          </ul>
        </section>

        <nav className="legal-switch" aria-label="Policies">
          <Link to="/privacy" className={page === "privacy" ? "active" : ""}>Privacy Policy</Link>
          <Link to="/terms" className={page === "terms" ? "active" : ""}>Terms of Service</Link>
          <Link to="/cookies" className={page === "cookies" ? "active" : ""}>Cookie Policy</Link>
        </nav>
      </main>
    </div>
  );
}
