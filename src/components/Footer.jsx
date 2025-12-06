import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Jasper Niño B. Cesa (Apix). Built with React & Vite</p>
        <p className="footer-subtitle">Made with ❤️ by a passionate developer</p>
      </div>
    </footer>
  )
}

export default Footer

