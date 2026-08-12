import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <h2>
            Euphoric Minds
          </h2>

          <p className="footer-tagline">
            Be who you are and say what you feel
          </p>

          <p className="footer-description">
            A safe and confidential space to understand,
            <br />
            heal, and move forward.
          </p>

        </div>


        {/* Explore */}
        <div className="footer-column">

          <h3>
            Explore
          </h3>

          <Link to="/about">
            About
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/approach">
            Approach
          </Link>

          <Link to="/faq">
            FAQs
          </Link>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>
            Get in Touch
          </h3>

          <a href="tel:+919385470080">
            +91 93854 70080
          </a>

          <a href="mailto:therapiezbyharsha@gmail.com">
            therapiezbyharsha@gmail.com
          </a>

          <p>
            Online & Offline Counselling
          </p>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Euphoric Minds. All rights reserved.
        </p>

        <p>
          Harshavarthini Ravikumar
        </p>

      </div>

    </footer>
  )
}

export default Footer