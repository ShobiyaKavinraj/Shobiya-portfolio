// import React from "react";
// import "./about.css";
// import { FaDownload, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

// const About = () => {
//   return (
//     <section id="about" className="about">
//       <div className="about-container">
//         <h2 className="about-title">About Me</h2>

//         {/* Contact Information */}
//         <div className="contact-info">
//           <h3>Shobiya Chandrasekaran</h3>
//           <p className="contact-title">MERN Stack Developer | Passionate about Full-Stack Web Development</p>
//           <div className="contact-details">
//             <div className="contact-item">
//               <FaMapMarkerAlt /> Chennai, Tamil Nadu
//             </div>
//             <div className="contact-item">
//               <FaPhone /> 9944772593
//             </div>
//             <div className="contact-item">
//               <FaEnvelope /> shobiyachandrasekaran2096@gmail.com
//             </div>
//             <div className="contact-item">
//               <FaLinkedin /> <a href="https://linkedin.com/in/shobiyachandrasekaran" target="_blank" rel="noopener noreferrer">linkedin.com/in/shobiyachandrasekaran</a>
//             </div>
//             <div className="contact-item">
//               <FaGithub /> <a href="https://github.com/ShobiyaKavinraj" target="_blank" rel="noopener noreferrer">github.com/ShobiyaKavinraj</a>
//             </div>
//           </div>
//         </div>

//         <div className="about-content">
//           {/* Introduction */}
//           <div className="about-intro">
//             <div className="intro-icon">
//               <FaUser />
//             </div>
//             <div className="intro-text">
//               <h3>About Me</h3>
//               <p>
//                 I am a self-motivated and enthusiastic MERN Stack Developer with a background in Mathematics and Education.
//                 I enjoy building full-stack web applications and have a passion for learning new technologies. I take pride
//                 in writing clean, efficient code and thrive in collaborative environments where I can contribute to impactful
//                 projects and grow professionally.
//               </p>
//               <div className="objective">
//                 <h4>Objective</h4>
//                 <p>
//                   Detail-oriented B.Sc. Mathematics graduate with hands-on experience in building full-stack applications
//                   using the MERN stack. Passionate about web development and committed to continuous learning and contributing
//                   to real-world projects with clean, scalable code.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Skills */}
//           <div className="about-skills">
//             <div className="skills-icon">
//               <FaCode />
//             </div>
//             <div className="skills-content">
//               <h3>Key Skills</h3>
//               <div className="skills-list">
//                 <div className="skill-item">• MERN Stack (MongoDB, Express.js, React.js, Node.js)</div>
//                 <div className="skill-item">• JavaScript (ES6+)</div>
//                 <div className="skill-item">• HTML5, CSS3</div>
//                 <div className="skill-item">• RESTful API Development</div>
//                 <div className="skill-item">• Razorpay Payment Gateway Integration</div>
//                 <div className="skill-item">• JWT Authentication & Authorization</div>
//                 <div className="skill-item">• Responsive Web Design</div>
//                 <div className="skill-item">• Git & GitHub Version Control</div>
//                 <div className="skill-item">• UI Development & State Management (Redux - basic)</div>
//               </div>
//             </div>
//           </div>

//           {/* Professional Journey */}
//           <div className="about-journey">
//             <div className="journey-icon">
//               <FaBriefcase />
//             </div>
//             <div className="journey-content">
//               <h3>My Journey</h3>
//               <p>
//                 My journey into web development began with a strong foundation in Mathematics and Education.
//                 This analytical background helps me approach programming challenges with logical thinking and
//                 attention to detail. I've transitioned from education to technology, bringing a unique perspective
//                 to full-stack development.
//               </p>
//               <p>
//                 I'm passionate about creating user-friendly applications and continuously expanding my skills
//                 in modern web technologies. My experience includes building responsive web applications,
//                 implementing secure authentication systems, and integrating payment gateways.
//               </p>
//             </div>
//           </div>

//           {/* Education */}
//           <div className="about-education">
//             <div className="education-icon">
//               <FaGraduationCap />
//             </div>
//             <div className="education-content">
//               <h3>Education</h3>
//               <div className="education-item">
//                 <h4>B.Sc. Mathematics</h4>
//                 <p className="education-institution">Kongunadu Arts and Science College, Coimbatore</p>
//                 <p className="education-year">2014 – 2017</p>
//               </div>
//               <div className="education-item">
//                 <h4>Bachelor of Education</h4>
//                 <p className="education-institution">RVS College of Education, Coimbatore</p>
//                 <p className="education-year">2018 – 2020</p>
//               </div>
//             </div>
//           </div>

//           {/* Soft Skills */}
//           <div className="about-soft-skills">
//             <div className="soft-skills-icon">
//               <FaUser />
//             </div>
//             <div className="soft-skills-content">
//               <h3>Soft Skills</h3>
//               <div className="soft-skills-list">
//                 <div className="soft-skill-item">
//                   <div className="skill-label">
//                     <span>Communication</span>
//                     <span>95%</span>
//                   </div>
//                   <div className="skill-bar">
//                     <div className="skill-progress"></div>
//                   </div>
//                 </div>
//                 <div className="soft-skill-item">
//                   <div className="skill-label">
//                     <span>Teamwork</span>
//                     <span>90%</span>
//                   </div>
//                   <div className="skill-bar">
//                     <div className="skill-progress"></div>
//                   </div>
//                 </div>
//                 <div className="soft-skill-item">
//                   <div className="skill-label">
//                     <span>Problem Solving</span>
//                     <span>92%</span>
//                   </div>
//                   <div className="skill-bar">
//                     <div className="skill-progress"></div>
//                   </div>
//                 </div>
//                 <div className="soft-skill-item">
//                   <div className="skill-label">
//                     <span>Adaptability</span>
//                     <span>88%</span>
//                   </div>
//                   <div className="skill-bar">
//                     <div className="skill-progress"></div>
//                   </div>
//                 </div>
//                 <div className="soft-skill-item">
//                   <div className="skill-label">
//                     <span>Time Management</span>
//                     <span>85%</span>
//                   </div>
//                   <div className="skill-bar">
//                     <div className="skill-progress"></div>
//                   </div>
//                 </div>
//                 <div className="soft-skill-item">
//                   <div className="skill-label">
//                     <span>Leadership</span>
//                     <span>80%</span>
//                   </div>
//                   <div className="skill-bar">
//                     <div className="skill-progress"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Languages */}
//           <div className="about-languages">
//             <div className="languages-icon">
//               <FaGlobe />
//             </div>
//             <div className="languages-content">
//               <h3>Languages</h3>
//               <div className="languages-list">
//                 <div className="language-item">
//                   <span className="language-name">English</span>
//                   <span className="language-level">Professional</span>
//                 </div>
//                 <div className="language-item">
//                   <span className="language-name">Tamil</span>
//                   <span className="language-level">Native</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Resume Download */}
//           <div className="about-resume">
//             <h3>Want to know more?</h3>
//             <p>Download my complete resume to learn about my full background, experience, and projects.</p>
//             <a
//               href="/Shobiya_MERN Stack developer.pdf"
//               download
//               className="resume-download-btn"
//             >
//               <FaDownload /> Download Resume
//             </a>
//           </div>

//           {/* Call to Action */}
//           <div className="about-cta">
//             <h3>Let's Work Together!</h3>
//             <p>
//               I'm always interested in new opportunities and exciting projects.
//               Whether you have a project in mind or just want to connect, I'd love to hear from you.
//             </p>
//             <a href="/#contact" className="cta-btn">
//               Get In Touch
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from "react";
import "./about.css";
import { 
  FaDownload, FaUser, FaCode, FaBriefcase, FaGraduationCap, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaGlobe 
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; 

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Shobiya Chandrasekaran</h3>
          <p className="contact-title">MERN Stack Developer | Passionate about Full-Stack Web Development</p>
          <div className="contact-details">
            <div className="contact-item"><FaMapMarkerAlt /> Chennai, Tamil Nadu</div>
            <div className="contact-item"><FaPhone /> 9944772593</div>
            <div className="contact-item"><FaEnvelope /> shobiyachandrasekaran2096@gmail.com</div>
            <div className="contact-item">
              <FaLinkedin /> 
              <a href="https://linkedin.com/in/shobiyachandrasekaran" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/shobiyachandrasekaran
              </a>
            </div>
            <div className="contact-item">
              <FaGithub /> 
              <a href="https://github.com/ShobiyaKavinraj" target="_blank" rel="noopener noreferrer">
                github.com/ShobiyaKavinraj
              </a>
            </div>
          </div>
        </div>

        <div className="about-content">
          {/* Introduction */}
          <div className="about-intro">
            <div className="intro-icon"><FaUser /></div>
            <div className="intro-text">
              <h3>About Me</h3>
              <p>
                I am a self-motivated and enthusiastic MERN Stack Developer with a background in Mathematics and Education.
                I enjoy building full-stack web applications and have a passion for learning new technologies. I take pride
                in writing clean, efficient code and thrive in collaborative environments where I can contribute to impactful
                projects and grow professionally.
              </p>
              <div className="objective">
                <h4>Objective</h4>
                <p>
                  Detail-oriented B.Sc. Mathematics graduate with hands-on experience in building full-stack applications
                  using the MERN stack. Passionate about web development and committed to continuous learning and contributing
                  to real-world projects with clean, scalable code.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="about-skills">
            <div className="skills-icon"><FaCode /></div>
            <div className="skills-content">
              <h3>Key Skills</h3>
              <div className="skills-list">
                <div className="skill-item">• MERN Stack (MongoDB, Express.js, React.js, Node.js)</div>
                <div className="skill-item">• JavaScript (ES6+)</div>
                <div className="skill-item">• HTML5, CSS3</div>
                <div className="skill-item">• RESTful API Development</div>
                <div className="skill-item">• Razorpay Payment Gateway Integration</div>
                <div className="skill-item">• JWT Authentication & Authorization</div>
                <div className="skill-item">• Responsive Web Design</div>
                <div className="skill-item">• Git & GitHub Version Control</div>
                <div className="skill-item">• UI Development & State Management (Redux - basic)</div>
              </div>
            </div>
          </div>

          {/* Professional Journey */}
          <div className="about-journey">
            <div className="journey-icon"><FaBriefcase /></div>
            <div className="journey-content">
              <h3>My Journey</h3>
              <p>
                My journey into web development began with a strong foundation in Mathematics and Education.
                This analytical background helps me approach programming challenges with logical thinking and
                attention to detail. I've transitioned from education to technology, bringing a unique perspective
                to full-stack development.
              </p>
              <p>
                I'm passionate about creating user-friendly applications and continuously expanding my skills
                in modern web technologies. My experience includes building responsive web applications,
                implementing secure authentication systems, and integrating payment gateways.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="about-education">
            <div className="education-icon"><FaGraduationCap /></div>
            <div className="education-content">
              <h3>Education</h3>
              <div className="education-item">
                <h4>B.Sc. Mathematics</h4>
                <p className="education-institution">Kongunadu Arts and Science College, Coimbatore</p>
                <p className="education-year">2014 – 2017</p>
              </div>
              <div className="education-item">
                <h4>Bachelor of Education</h4>
                <p className="education-institution">RVS College of Education, Coimbatore</p>
                <p className="education-year">2018 – 2020</p>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="about-soft-skills">
            <div className="soft-skills-icon"><FaUser /></div>
            <div className="soft-skills-content">
              <h3>Soft Skills</h3>
              <div className="soft-skills-list">
                <div className="soft-skill-item">
                  <div className="skill-label"><span>Communication</span><span>95%</span></div>
                  <div className="skill-bar"><div className="skill-progress"></div></div>
                </div>
                <div className="soft-skill-item">
                  <div className="skill-label"><span>Teamwork</span><span>90%</span></div>
                  <div className="skill-bar"><div className="skill-progress"></div></div>
                </div>
                <div className="soft-skill-item">
                  <div className="skill-label"><span>Problem Solving</span><span>92%</span></div>
                  <div className="skill-bar"><div className="skill-progress"></div></div>
                </div>
                <div className="soft-skill-item">
                  <div className="skill-label"><span>Adaptability</span><span>88%</span></div>
                  <div className="skill-bar"><div className="skill-progress"></div></div>
                </div>
                <div className="soft-skill-item">
                  <div className="skill-label"><span>Time Management</span><span>85%</span></div>
                  <div className="skill-bar"><div className="skill-progress"></div></div>
                </div>
                <div className="soft-skill-item">
                  <div className="skill-label"><span>Leadership</span><span>80%</span></div>
                  <div className="skill-bar"><div className="skill-progress"></div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="about-languages">
            <div className="languages-icon"><FaGlobe /></div>
            <div className="languages-content">
              <h3>Languages</h3>
              <div className="languages-list">
                <div className="language-item"><span className="language-name">English</span><span className="language-level">Professional</span></div>
                <div className="language-item"><span className="language-name">Tamil</span><span className="language-level">Native</span></div>
              </div>
            </div>
          </div>

          {/* Resume Download */}
          <div className="about-resume">
            <h3>Want to know more?</h3>
            <p>Download my complete resume to learn about my full background, experience, and projects.</p>
            <a href="/Shobiya_MERN Stack developer.pdf" download className="resume-download-btn">
              <FaDownload /> Download Resume
            </a>
          </div>

          {/* Call to Action */}
          <div className="about-cta">
            <h3>Let's Work Together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            <ScrollLink to="contact" smooth={true} duration={800} offset={-70} className="cta-btn">
              Get In Touch
            </ScrollLink>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;