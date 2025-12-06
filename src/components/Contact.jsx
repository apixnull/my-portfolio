import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your visions. Whether you're looking for 
            a collaborator, have a project idea, or just want to connect with a 
            fellow developer, feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="https://github.com/apixnull" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="#" className="contact-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:your.email@example.com" className="contact-link">
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

