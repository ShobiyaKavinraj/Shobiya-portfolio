import React, { useState, useEffect } from "react";
// import "./portfolio.css";
import "./portfolio1.css";
import {
  FaCode,
  FaMobile,
  FaServer,
  FaDatabase,
  FaReact,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaArrowRight,
  FaBuilding,
  FaCertificate,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaDownload,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects";
import experiences from "../data/Experiences";

const Portfolio = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const closeLightbox = () => setSelectedCertificate(null);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && selectedCertificate) {
        closeLightbox();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [selectedCertificate]);

  return (
    <section id="portfolio" className="portfolio-page">
      
      {/* SKILLS SECTION - ID added for scrolling */}
      <section id="skills" className="home-skills">
        <div className="skills-container">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon"><FaReact /></div>
              <h3>Frontend</h3>
              <p>React.js, HTML5, CSS3, JavaScript</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon"><FaServer /></div>
              <h3>Backend</h3>
              <p>Node.js, Express.js, REST APIs</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon"><FaDatabase /></div>
              <h3>Database</h3>
              <p>MongoDB, Mongoose</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon"><FaMobile /></div>
              <h3>Responsive</h3>
              <p>Mobile-first design, CSS Grid, Flexbox</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - ID added */}
      <section id="services" className="home-services">
        <div className="services-container">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">Services I offer to bring your ideas to life</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><FaCode /></div>
              <h3>Full-Stack Development</h3>
              <p>Complete web application development from concept to deployment using MERN stack technologies.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaMobile /></div>
              <h3>Responsive Design</h3>
              <p>Creating mobile-first, responsive websites that work perfectly across all devices.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaServer /></div>
              <h3>API Development</h3>
              <p>Building robust RESTful APIs and backend services with proper authentication and security.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaDatabase /></div>
              <h3>Database Design</h3>
              <p>Efficient database architecture and implementation using MongoDB with optimized queries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - ID added */}
      <section id="projects" className="home-projects">
        <div className="projects-container">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Showcase of my recent work and achievements</p>
          <div className="projects-grid">
            {projects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>

      {/* MY JOURNEY (EXPERIENCE) SECTION - ID added */}
      <section id="journey" className="home-experience">
        <div className="experience-container">
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">Key milestones in my development career</p>
          <div className="timeline">
  {experiences
    .filter(exp => exp.type === "experience")
    .map((exp, index) => (
      <div
        key={exp.id}
        className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
      >
        <div className="timeline-content">
          <div className="timeline-icon">
            {exp.category === "education" ? <FaGraduationCap /> : <FaBriefcase />}
          </div>

          <div className="timeline-box">
            <span className="timeline-date">
              <FaCalendarAlt /> {exp.duration}
            </span>
            <h3>{exp.title}</h3>
            <p className="timeline-company">{exp.company}</p>
            <p className="timeline-desc">{exp.description}</p>
          </div>
        </div>
      </div>
    ))}
</div>
        </div>
      </section>

      {/* INTERNSHIPS SECTION - ID added */}
      <section id="internships" className="home-internships">
        <div className="experience-container">
          <h2 className="section-title">Internships</h2>
          <p className="section-subtitle">Hands-on professional training</p>
          <div className="experience-grid">
            {experiences.filter(exp => exp.type === 'internship').map(internship => (
              <div key={internship.id} className="experience-card internship-card">
                <h4><FaBuilding /> {internship.title}</h4>
                <p className="experience-company">{internship.company}</p>
                <div className="experience-meta">
                   <span><FaCalendarAlt /> {internship.duration}</span>
                   <span><FaMapMarkerAlt /> {internship.location}</span>
                </div>
                {internship.description && <p className="experience-desc">{internship.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION - ID added */}
      <section id="certificates" className="home-certificates">
        <div className="experience-container">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Recognized industry credentials</p>
          <div className="experience-grid">
            {experiences.filter(exp => exp.type === 'certificate').map(cert => (
              <div key={cert.id} className="experience-card cert-card">
                <div className="cert-header">
                   <h4><FaCertificate /> {cert.title}</h4>
                   <p>{cert.issuer} • <FaCalendarAlt /> {cert.issueDate}</p>
                </div>
                {cert.certificatePdf && (
                  <div className="thumbnail-wrapper" onClick={() => setSelectedCertificate(cert)}>
                    {/* Fallback icon if image is missing */}
                    <div className="certificate-placeholder">
                      <FaCertificate className="large-cert-icon" />
                      <span>View Certificate</span>
                    </div>
                    <div className="thumbnail-overlay">Click to view</div>
                  </div>
                )}
                <div className="certificate-achievement">
                  <FaAward /> <strong>Skills:</strong> {cert.skills?.join(", ") || "N/A"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="home-cta">
        <div className="cta-container">
          <h2>Ready to Bring Your Ideas to Life?</h2>
          <div className="cta-buttons">
            {/* to="portfolio" scrolls back to the top of this page */}
            <ScrollLink to="portfolio" smooth={true} duration={800} offset={-70} className="cta-btn primary">
              Back to Top <FaArrowRight />
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={800} offset={-70} className="cta-btn secondary">
              <FaEnvelope /> Get In Touch
            </ScrollLink>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedCertificate && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
            {/* If you have images, use them, otherwise show the PDF download */}
            {selectedCertificate.certificateImage ? (
               <img src={selectedCertificate.certificateImage} alt={selectedCertificate.title} className="lightbox-image" />
            ) : (
               <div className="lightbox-pdf-preview">
                 <FaCertificate size={100} color="#4ecdc4" />
                 <h3>{selectedCertificate.title}</h3>
               </div>
            )}
            <div className="lightbox-info">
              <h3>{selectedCertificate.title}</h3>
              <p>{selectedCertificate.issuer}</p>
              {selectedCertificate.certificatePdf && (
                <a href={selectedCertificate.certificatePdf} target="_blank" rel="noreferrer" className="download-btn">
                  <FaDownload /> View / Download PDF
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Portfolio;