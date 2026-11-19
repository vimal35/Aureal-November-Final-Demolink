import React from "react";
import { motion } from "framer-motion";
import { FaStethoscope, FaUserMd } from "react-icons/fa";
import "./Team.css";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sanjay Saravanan",
    position: "Founder & CEO",
    degree: "MBBS, PGDMLE, MBA (HA)",
    image: "/dr-sanjay.png",
  },
  {
    id: 2,
    name: "Dr. Ratna Pratap",
    position: "Cofounder & COO",
    degree: "MBBS, MBA (HA)",
    image: "/dr-ratna.png",
  },
  {
    id: 3,
    name: "Dr. Anoop Thankachan",
    position: "Cofounder & CGSO",
    degree: "MBBS, M.Sc AGMP (UK)",
    image: "/dr-anoop.png",
  },
  {
    id: 4,
    name: "Dr. Yogesh",
    position: "Medical Superintendent",
    degree: "MBBS, PGDMLE, MBA (HA)",
    image: "/dr-YOGESH.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-bg-orb team-bg-orb-one"></div>
      <div className="team-bg-orb team-bg-orb-two"></div>

      <div className="team-container">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="team-eyebrow">
            <FaStethoscope />
            Leadership &amp; Expertise
          </span>
          <h2 className="team-title">
            Meet Our <span>Founding Team</span>
          </h2>
          <div className="title-line">
            <span></span>
            <i></i>
            <span></span>
          </div>
          <p className="team-description">
            Experienced healthcare leaders committed to delivering compassionate,
            coordinated and excellence-driven care.
          </p>
        </motion.div>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {teamMembers.map((member, index) => (
            <motion.article
              className="team-card"
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-number">0{index + 1}</div>
              <div className="card-accent"></div>

              <div className="team-image-area">
                <div className="image-ring"></div>
                <div className="team-img-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/400x400.png?text=Doctor";
                    }}
                  />
                </div>
                <div className="doctor-icon">
                  <FaUserMd />
                </div>
              </div>

              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <div className="team-position">{member.position}</div>
                <div className="team-divider"></div>
                <p className="team-degree">{member.degree}</p>
              </div>

              <div className="card-shine"></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
