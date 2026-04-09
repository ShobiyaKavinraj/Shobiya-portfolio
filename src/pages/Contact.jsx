// import React from "react";
import "./contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    // ✅ The id="contact" here must match the ScrollLink 'to' attribute
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss opportunities, collaborate on projects, or just connect
            and share ideas.
          </p>
        </div>

        <div className="contact-container">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div className="info-text">
                <span>Email</span>
                <a href="mailto:shobiyachandrasekaran2096@gmail.com">
                  shobiyachandrasekaran2096@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-text">
                <span>Location</span>
                <p>Chennai, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaLinkedin /></div>
              <div className="info-text">
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/ShobiyaChandrasekaran/"
                  target="_blank"
                  rel="noreferrer"
                >
                  shobiyachandrasekaran
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaGithub /></div>
              <div className="info-text">
                <span>GitHub</span>
                <a
                  href="https://github.com/ShobiyaKavinraj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ShobiyaKavinraj
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3>Send a Message</h3>

            <div className="input-group">
              <input type="text" required placeholder=" " />
              <label>Name*</label>
            </div>

            <div className="input-group">
              <input type="email" required placeholder=" " />
              <label>Email*</label>
            </div>

            <div className="input-group">
              <input type="text" required placeholder=" " />
              <label>Subject*</label>
            </div>

            <div className="input-group">
              <textarea required placeholder=" "></textarea>
              <label>Message*</label>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}