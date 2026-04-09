import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* <h2 className="footer-logo">Shobiya</h2>
        <p className="footer-text">
          Passionate MERN Stack Developer building modern web applications.
        </p> */}

        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:yourmail@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Shobiya | All Rights Reserved
        </p>

      </div>
    </footer>
  );
};

export default Footer;