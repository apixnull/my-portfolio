import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            My name is Jasper Niño B. Cesa, though I prefer to be called Apix. I'm a 4th year 
            BSIT student at University of Cebu, passionate about software development and web 
            technologies. My educational journey began at Botigues Integrated School, where I 
            completed both elementary and high school, followed by Bantayan National Highschool, 
            before continuing to University of Cebu.
          </p>
          <p>
            My journey in programming started with curiosity and has evolved into a passion for 
            creating solutions that make a difference. I approach programming with a growth mindset, 
            recognizing that technology is constantly evolving and staying current requires continuous 
            learning. I'm particularly interested in full-stack development, as it allows me to 
            understand both the frontend user experience and the backend logic that powers applications.
          </p>
          <p>
            I'm currently working on my capstone project RentEase, a comprehensive rental management 
            platform, and have experience building web applications using various technologies including 
            React with TypeScript, Node.js, .NET/C#, and Python Flask. I believe that building real 
            projects provides the most valuable learning experiences, as they require problem-solving, 
            debugging, and implementing solutions to actual challenges.
          </p>
          <p>
            I value collaboration and believe that the best software is often built through teamwork 
            and diverse perspectives. I'm always open to feedback, code reviews, and learning from 
            others' experiences. My goal is to build a career in software development where I can 
            create innovative solutions, solve complex problems, and continue learning throughout my 
            professional journey.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">4+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">Major Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4th</div>
            <div className="stat-label">Year BSIT</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

