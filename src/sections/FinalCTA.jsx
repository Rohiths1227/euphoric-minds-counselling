import './FinalCTA.css'

const whatsappMessage =
  'Hello Harshavarthini, I would like to know more about counselling and consultation.'

const whatsappLink =
  `https://wa.me/919385470080?text=${encodeURIComponent(whatsappMessage)}`

function FinalCTA() {
  return (
    <section className="final-cta" id="booking">

      <div className="final-cta-container">

        <p className="final-cta-eyebrow">
          Take the First Step
        </p>

        <h2>
          You don't have to
          <span>figure it all out alone.</span>
        </h2>

        <p className="final-cta-description">
          If something has been weighing on you, reaching out
          can be the beginning of a different way forward.
          Book a confidential consultation with Harshavarthini
          and start the conversation.
        </p>

        <div className="final-cta-actions">

          <a
            href="tel:+919385470080"
            className="final-cta-phone"
          >
            Call +91 93854 70080
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="final-cta-whatsapp"
          >
            Message on WhatsApp
            <span>↗</span>
          </a>

          <a
            href="mailto:therapiezbyharsha@gmail.com"
            className="final-cta-email"
          >
            Send an Email
            <span>→</span>
          </a>

        </div>

        <div className="final-cta-note">
          <span></span>
          Online & Offline Counselling
        </div>

      </div>

    </section>
  )
}

export default FinalCTA