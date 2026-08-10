import './ServicesPreview.css'
import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Anxiety & Stress',
    description:
      'Support for managing persistent worry, stress, emotional overwhelm, and the thoughts that can feel difficult to switch off.',
  },
  {
    number: '02',
    title: 'Relationship & Marital Counselling',
    description:
      'A supportive space to understand relationship patterns, improve communication, and work through challenges together.',
  },
  {
    number: '03',
    title: 'Family Counselling',
    description:
      'Helping families navigate communication, emotional challenges, changing dynamics, and difficult situations with greater understanding.',
  },
  {
    number: '04',
    title: 'School Counselling',
    description:
      'Support for children and adolescents dealing with emotional, social, behavioural, and school-related challenges.',
  },
  {
    number: '05',
    title: 'Trauma Counselling',
    description:
      'A safe and sensitive space to explore difficult experiences and work towards understanding, healing, and emotional wellbeing.',
  },
  {
    number: '06',
    title: 'Personal Growth',
    description:
      'Develop greater self-awareness, understand recurring patterns, build confidence, and create healthier ways of moving forward.',
  },
]

function ServicesPreview() {
  return (
    <section className="services-preview" id="services">

      <div className="services-container">

        {/* Header */}
        <div className="services-header">

          <div>
            <p className="services-eyebrow">
              How I Can Help
            </p>

            <h2>
              Support for where
              <span>you are right now.</span>
            </h2>
          </div>

          <p className="services-intro">
            Everyone's experience is different. Counselling is
            shaped around your individual needs, concerns, and
            goals.
          </p>

        </div>

        {/* Services List */}
        <div className="services-list">

          {services.map((service) => (
            <article
              className="service-row"
              key={service.number}
            >

              <div className="service-number">
                {service.number}
              </div>

              <div className="service-title">
                <h3>{service.title}</h3>
              </div>

              <div className="service-description">
                <p>{service.description}</p>
              </div>

              <div className="service-arrow">
                →
              </div>

            </article>
          ))}

        </div>

        {/* CTA */}
        <div className="services-footer">

          <p>
            Not sure where to begin?
          </p>

          <Link to="/booking" className="services-button">
  Let's Talk
  <span>→</span>
</Link>

        </div>

      </div>

    </section>
  )
}

export default ServicesPreview