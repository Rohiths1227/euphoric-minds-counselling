import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Brand */}
        <Link to="/" className="navbar-brand">

          <span className="brand-name">
            Euphoric Minds
          </span>

          <span className="brand-tagline">
            Be who you are and say what you feel
          </span>

        </Link>


        {/* Navigation */}
        <nav className="navbar-links">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/approach">Approach</Link>
          <Link to="/faq">FAQs</Link>

        </nav>


        {/* Booking Button */}
        <Link
          to="/booking"
          className="navbar-button"
        >
          Book a Consultation
        </Link>

      </div>

    </header>
  )
}

export default Navbar