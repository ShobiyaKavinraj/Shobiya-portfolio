import React from "react";
import "./home.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section id="home" className="home">
        {/* LEFT */}
        <div className="home-left">
          <p className="home-intro">Hello 👋</p>
          <h1 className="home-title">
            I'm <span className="gradient-text">Shobiya</span>
          </h1>
          <h2 className="home-role">MERN Stack Developer</h2>
          <p className="home-desc">
            I build responsive and scalable web applications using MongoDB,
            Express.js, React.js, and Node.js. Passionate about clean UI,
            efficient backend systems, and modern web technologies.
          </p>

          {/* BUTTONS */}
          <div className="home-buttons">
            <ScrollLink
              to="portfolio"       
              smooth={true}
              duration={800}
              offset={-70}          
              className="btn primary"
            >
              View My Work
            </ScrollLink>

            <ScrollLink
              to="contact"          
              smooth={true}
              duration={800}
              offset={-70}
              className="btn secondary"
            >
              Hire Me
            </ScrollLink>

            <a
              href="/Shobiya_MERN Stack developer.pdf"
              download
              className="btn resume"
            >
              <FaDownload /> Resume
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="home-socials">
            <a
              href="https://github.com/ShobiyaKavinraj"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ShobiyaChandrasekaran"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-right">
          <div className="image-wrapper">
            <img
              src="/assets/shobi.jpg"
              alt="Shobiya"
              className="home-image"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Portfolio /> 
      <About />
      <Contact />
    </>
  );
};

export default Home;