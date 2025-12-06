import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'RentEase',
      description: 'My capstone project - A comprehensive rental management platform built with modern web technologies. This project represents a culmination of my learning and demonstrates my ability to work on a full-stack application. Features include property listings, tenant management, rental tracking, and various administrative functions. The application is built using React and TypeScript for the frontend, along with Node.js for the backend infrastructure. Working on RentEase has been an invaluable learning experience, teaching me about project planning, database design, user interface development, API creation, and deployment processes.',
      tech: ['React', 'TypeScript', 'Node.js', 'Vercel'],
      github: 'https://github.com/apixnull/RentEase',
      live: 'https://rent-ease-khaki.vercel.app',
      image: '🏠'
    },
    {
      title: 'Hotel Reservation System',
      description: 'A comprehensive hotel booking and reservation management system built with the .NET C# ecosystem. This project was instrumental in helping me understand enterprise-level application development and the Microsoft technology stack. The system includes features such as room management, booking system functionality, customer management, and reservation tracking. Working with .NET and C# provided me with insights into object-oriented programming, database integration, and building robust web applications. This project helped me understand the importance of proper database design, user authentication, and creating intuitive user interfaces.',
      tech: ['.NET', 'C#', 'ASP.NET', 'SQL Server'],
      github: '#',
      live: '#',
      image: '🏨'
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Some of the projects I've worked on during my studies
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <div className="project-emoji">{project.image}</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

