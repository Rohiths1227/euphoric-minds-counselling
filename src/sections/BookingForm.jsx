import { useState } from 'react'
import './BookingForm.css'

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mode: '',
    support: '',
    date: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
  event.preventDefault()

  const whatsappMessage = `
Hello Harshavarthini,

I would like to request a counselling consultation.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Counselling Mode: ${formData.mode}
Support Required: ${formData.support}
Preferred Date: ${formData.date || 'Not specified'}
Message: ${formData.message || 'Not provided'}

Thank you.
  `

  const whatsappUrl =
    `https://wa.me/919385470080?text=${encodeURIComponent(
      whatsappMessage
    )}`

  window.open(whatsappUrl, '_blank')

  setSubmitted(true)
}

  return (
    <section className="booking-form-section" id="booking-form">

      <div className="booking-form-container">

        {/* Left Content */}

        <div className="booking-form-content">

          <p className="booking-form-eyebrow">
            Book a Consultation
          </p>

          <h2>
            Let's start
            <span>the conversation.</span>
          </h2>

          <p className="booking-form-intro">
            Taking the first step can feel difficult. You don't
            need to have everything figured out before reaching out.
            Share a little about what you're looking for, and
            Harshavarthini can connect with you about the next step.
          </p>

          <div className="booking-contact">

            <div className="booking-contact-item">
              <span>Phone</span>

              <a href="tel:+919385470080">
                +91 93854 70080
              </a>
            </div>

            <div className="booking-contact-item">
              <span>Email</span>

              <a href="mailto:therapiezbyharsha@gmail.com">
                therapiezbyharsha@gmail.com
              </a>
            </div>

            <div className="booking-contact-item">
              <span>Sessions</span>

              <p>
                Online & Offline
              </p>
            </div>

          </div>

        </div>

        {/* Form */}

        <div className="booking-form-card">

          {submitted ? (

            <div className="booking-success">

              <div className="success-icon">
                ✓
              </div>

              <h3>
                Thank you for reaching out.
              </h3>

              <p>
                Your consultation details have been prepared in WhatsApp.
                Please send the message to complete your request.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="booking-reset"
              >
                Submit another request
              </button>

            </div>

          ) : (

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Preferred Counselling Mode
                </label>

                <div className="mode-options">

                  <label className="mode-option">

                    <input
                      type="radio"
                      name="mode"
                      value="Online"
                      checked={formData.mode === 'Online'}
                      onChange={handleChange}
                      required
                    />

                    <span>Online</span>

                  </label>

                  <label className="mode-option">

                    <input
                      type="radio"
                      name="mode"
                      value="Offline"
                      checked={formData.mode === 'Offline'}
                      onChange={handleChange}
                    />

                    <span>Offline</span>

                  </label>

                </div>

              </div>

              <div className="form-group">

                <label htmlFor="support">
                  What would you like support with?
                </label>

                <select
                  id="support"
                  name="support"
                  value={formData.support}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select an area
                  </option>

                  <option value="Anxiety & Stress">
                    Anxiety & Stress
                  </option>

                  <option value="Relationship & Marital">
                    Relationship & Marital Counselling
                  </option>

                  <option value="Family">
                    Family Counselling
                  </option>

                  <option value="School">
                    School Counselling
                  </option>

                  <option value="Trauma">
                    Trauma Counselling
                  </option>

                  <option value="Personal Growth">
                    Personal Growth
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="date">
                    Preferred Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="message">
                    Anything you'd like to share?
                  </label>

                  <input
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Optional"
                    value={formData.message}
                    onChange={handleChange}
                  />

                </div>

              </div>

              <button
                type="submit"
                className="booking-submit"
              >
                Request a Consultation
                <span>→</span>
              </button>

              <p className="form-note">
  Your details will be prepared in WhatsApp for you
  to review and send to Harshavarthini.
</p>

            </form>

          )}

        </div>

      </div>

    </section>
  )
}

export default BookingForm