import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <h2>Euphoric Minds</h2>

          <p className="footer-tagline">
            Counselling & Psychological Support
          </p>

          <p className="footer-description">
            A safe and confidential space to understand,
            heal, and move forward.
          </p>

        </div>

        {/* Navigation */}
        <div className="footer-column">

          <h3>Explore</h3>

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#faq">FAQs</a>

        </div>

        {/* Contact */}
        <div className="footer-column">

          <h3>Get in Touch</h3>

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

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Euphoric Minds.
          All rights reserved.
        </p>

        <p>
          Harshavarthini Ravikumar
        </p>

      </div>

    </footer>
  )
}

export default Footer