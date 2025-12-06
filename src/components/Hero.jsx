import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Jasper Niño B. Cesa</span>
          </h1>
          <h2 className="hero-subtitle">You can call me Apix • BSIT Student & Aspiring Developer</h2>
          <p className="hero-description">
            A 4th year BSIT student at University of Cebu, passionate about building web applications 
            and learning new technologies. Currently working on my capstone project RentEase and 
            continuously expanding my skills in modern development. I believe in continuous learning 
            and creating solutions that make a difference.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/apixnull" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="#" className="social-link">
              <FaLinkedin />
            </a>
            <a href="#contact" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img src="/my-pic.png" alt="Jasper Niño B. Cesa (Apix)" className="hero-profile-img" />
            <div className="avatar-glow"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero

