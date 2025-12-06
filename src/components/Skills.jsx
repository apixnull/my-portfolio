import React from 'react'
import { FaNodeJs, FaReact, FaPython } from 'react-icons/fa'
import { SiDotnet, SiTypescript, SiFlask } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skills = [
    { 
      name: 'Node.js', 
      icon: <FaNodeJs />, 
      level: 'Beginner',
      description: 'Learning server-side JavaScript development for building backend services and APIs. Used in my RentEase capstone project.'
    },
    { 
      name: 'React + TypeScript', 
      icon: <FaReact />, 
      level: 'Beginner',
      description: 'Developing modern, interactive user interfaces with type safety. Essential for building responsive web applications.'
    },
    { 
      name: '.NET / C#', 
      icon: <SiDotnet />, 
      level: 'Beginner',
      description: 'Experience building enterprise-level applications. Used in my Hotel Reservation System project, learning object-oriented programming principles.'
    },
    { 
      name: 'Python Flask', 
      icon: <SiFlask />, 
      level: 'Beginner',
      description: 'Learning Python web development with Flask\'s lightweight and flexible framework for building web applications and APIs.'
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Technologies I'm currently learning and working with
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-level">
              <span className="level-badge">{skill.level}</span>
            </div>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '60%' }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

