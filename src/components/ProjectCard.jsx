import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub />
            </a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              <FaCode className="tech-icon" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
