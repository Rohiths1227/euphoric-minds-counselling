import './AboutPreview.css'
import { Link } from 'react-router-dom'

import therapistBw from '../assets/images/therapist-bw.jpg'

function AboutPreview() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* =========================
            IMAGE
        ========================= */}

        <div className="about-image-area">

          <div className="about-image-frame">

            <img
              src={therapistBw}
              alt="Harshavarthini Ravikumar"
              className="about-image"
            />

          </div>

          <div className="about-image-label">
            <span>02</span>
            Euphoric Minds
          </div>

        </div>


        {/* =========================
            CONTENT
        ========================= */}

        <div className="about-content">

          <p className="about-eyebrow">
            About Euphoric Minds
          </p>


          <h2>
            Where there is healing,
            <span>there is hope.</span>
          </h2>


          <p className="about-intro">
            Sometimes the stories we carry begin to play on repeat —
            in our relationships, careers, families, and in the way
            we see ourselves.
          </p>


          <p className="about-description">
            Understanding these patterns can be the first step towards
            creating a different way forward. At Euphoric Minds,
            counselling offers a safe and confidential space to explore
            what you're experiencing, understand yourself more deeply,
            and work towards meaningful change.
          </p>


          {/* Divider */}

          <div className="about-divider"></div>


          {/* Profile */}

          <div className="about-profile">

            <h3>
              Harshavarthini Ravikumar
            </h3>

            <p className="about-role">
              Counselling Psychologist
            </p>

            <p className="about-qualification">
              M.Sc. Applied Psychology
              <br />
              P.G. Diploma in School, Corporate & Family Counselling
            </p>

          </div>


          {/* CTA */}

          <Link
            to="/booking"
            className="about-preview-button"
          >
            <span className="about-button-text">
              Take the First Step
            </span>

            <span className="about-button-arrow">
              →
            </span>

          </Link>

        </div>

      </div>

    </section>
  )
}

export default AboutPreview