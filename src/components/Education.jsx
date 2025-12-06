import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      institution: 'University of Cebu',
      degree: 'Bachelor of Science in Information Technology (BSIT)',
      period: 'Present - 4th Year',
      description: 'Currently pursuing my degree in Information Technology, focusing on software development, web technologies, and system design. This university experience has been transformative, providing me with structured learning in various aspects of information technology, software development methodologies, database management, system design, and web development. The curriculum has exposed me to various programming languages, development frameworks, and industry-standard practices essential for a career in software development.',
      type: 'college'
    },
    {
      institution: 'Bantayan National Highschool',
      degree: 'Senior High School',
      period: 'Previous',
      description: 'Completed senior high school education. This period marked an important transition in my educational path, where I began to explore more advanced subjects and started to seriously consider a career in technology and software development.',
      type: 'highschool'
    },
    {
      institution: 'Botigues Integrated School',
      degree: 'Elementary & High School',
      period: 'Previous',
      description: 'Completed both elementary and high school education. This foundational period was crucial in developing my interest in technology and problem-solving. During these formative years, I was exposed to basic computer concepts and began to develop a curiosity about how software and applications work.',
      type: 'school'
    },
  ]

  return (
    <section id="education" className="education">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          My educational journey and academic background
        </p>
      </div>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <div className="timeline-period">{edu.period}</div>
              <h3 className="timeline-title">{edu.institution}</h3>
              <p className="timeline-degree">{edu.degree}</p>
              <p className="timeline-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

