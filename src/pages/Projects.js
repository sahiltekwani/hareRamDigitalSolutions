import React from 'react';
import './css/Projects.css'; // Optional: Style file

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-featured online store built with React, Node.js, and Stripe for seamless payment integration.',
    tech: 'React, Node.js, Express, MongoDB',
    link: '#', // Replace with actual URL
  },
  {
    title: 'Mobile Fitness App',
    description: 'A cross-platform app developed with React Native, offering workout plans, progress tracking, and push notifications.',
    tech: 'React Native, Firebase, Expo',
    link: '#',
  },
  {
    title: 'Interior Design Tool',
    description: 'An interactive 3D tool for designing home spaces using WebGL and the ByMe API.',
    tech: 'Three.js, WebGL, HomeByMe SDK',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio site to showcase work and experience, fully responsive and SEO-optimized.',
    tech: 'HTML, CSS, JavaScript',
    link: '#',
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Our Projects</h1>
      <p className="intro-text">
        Here are some of the exciting projects we've worked on recently. We take pride in delivering high-quality solutions tailored to client needs.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
