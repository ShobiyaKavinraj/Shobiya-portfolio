import React from "react";
import "../pages/home.css";

const AboutPreview = () => {
  return (
    <section className="about-preview-section">
      {/* ABOUT PREVIEW */}
      <div className="home-about-preview">
        <div className="preview-content">
          <h3>About Me</h3>
          <p>
            A self-motivated MERN Stack Developer with a background in Mathematics and Education.
            I enjoy building full-stack web applications and have a passion for learning new technologies.
          </p>
          <div className="preview-skills">
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">Express.js</span>
          </div>
          <a href="/about" className="preview-link">Learn More About Me →</a>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;