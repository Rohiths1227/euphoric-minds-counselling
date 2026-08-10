import './Hero.css'

import therapistImage from '../assets/images/therapist-color.jpg'

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-eyebrow">
            Counselling • Support • Growth
          </p>

          <h1>
            You don't have to
            <span> figure it all out alone.</span>
          </h1>

          <p className="hero-description">
            A calm, confidential space to understand what you're
            experiencing, find clarity, and move forward with
            greater confidence.
          </p>

          <div className="hero-actions">

            <a href="#booking" className="primary-btn">
              Book a Consultation
            </a>

            <a href="#about" className="hero-link">
              Meet Your Counsellor
              <span>→</span>
            </a>

          </div>

          <div className="hero-note">
            <span>●</span>
            Confidential & judgement-free
          </div>

        </div>

        <div className="hero-image-wrapper">

          <div className="hero-image-frame">
            <img
              src={therapistImage}
              alt="Counsellor"
              className="hero-image"
            />
          </div>

          <div className="hero-image-caption">
            <span>01</span>
            A space to pause.
          </div>

        </div>

      </div>

      <div className="hero-bottom-text">
        <span>Scroll to explore</span>
        <span className="scroll-line"></span>
      </div>

    </section>
  )
}

export default Hero