import './BookingProcess.css'

const steps = [
  {
    number: '01',
    title: 'Book a Consultation',
    description:
      'Choose a convenient time for an initial conversation and take the first step towards getting support.',
  },
  {
    number: '02',
    title: 'Start the Conversation',
    description:
      'Talk openly about what you are experiencing, what has brought you here, and what you hope to work through.',
  },
  {
    number: '03',
    title: 'Find Your Way Forward',
    description:
      'Together, explore your concerns and identify a counselling approach that feels appropriate for you.',
  },
]

function BookingProcess() {
  return (
    <section className="booking-process" id="booking-process">

      <div className="booking-process-container">

        <div className="booking-process-header">

          <p className="booking-process-eyebrow">
            Your First Step
          </p>

          <h2>
            Starting therapy
            <span>doesn't have to feel complicated.</span>
          </h2>

          <p className="booking-process-intro">
            Reaching out for support can feel like a big step.
            The first conversation is simply a chance to talk,
            understand what you need, and see whether counselling
            feels right for you.
          </p>

        </div>

        <div className="booking-steps">

          {steps.map((step) => (
            <div className="booking-step" key={step.number}>

              <div className="booking-step-number">
                {step.number}
              </div>

              <div className="booking-step-content">

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

            </div>
          ))}

        </div>

        <div className="booking-process-bottom">

          <div>
            <p className="booking-process-quote">
              No pressure. No judgement.
            </p>

            <p className="booking-process-small">
              Just a conversation to begin.
            </p>
          </div>

          <a href="#booking-form" className="booking-process-button">
  Start Your Consultation
  <span>→</span>
</a>

        </div>

      </div>

    </section>
  )
}

export default BookingProcess