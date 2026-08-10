import { useState } from 'react'
import './FAQPreview.css'

const faqs = [
  {
    question: 'What happens during the first consultation?',
    answer:
      'The first conversation is an opportunity to talk about what you are experiencing, what brought you to counselling, and what kind of support you may be looking for. It is also a chance to understand whether counselling feels right for you.',
  },
  {
    question: 'Do you offer online and offline counselling?',
    answer:
      'Yes. Counselling services are available through both online and offline sessions, depending on your preference and requirements.',
  },
  {
    question: 'What areas can counselling help with?',
    answer:
      'Support is available for concerns including anxiety, stress, relationships, marital concerns, family challenges, school-related concerns, trauma, and personal growth.',
  },
  {
    question: 'Is counselling confidential?',
    answer:
      'Counselling is provided in a respectful and private setting. During your consultation, you can discuss any questions you have about privacy and confidentiality.',
  },
  {
    question: 'How do I book a consultation?',
    answer:
      'You can contact Harshavarthini by phone or email to discuss your requirements and arrange a suitable consultation.',
  },
]

function FAQPreview() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-preview" id="faq">

      <div className="faq-container">

        {/* Header */}
        <div className="faq-header">

          <p className="faq-eyebrow">
            Frequently Asked Questions
          </p>

          <h2>
            Questions you
            <span>might have.</span>
          </h2>

          <p className="faq-intro">
            Starting counselling can bring up questions.
            Here are a few answers to help you feel more
            comfortable taking the first step.
          </p>

        </div>

        {/* FAQ List */}
        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                openIndex === index ? 'faq-item-open' : ''
              }`}
              key={faq.question}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >

                <span>
                  {faq.question}
                </span>

                <span className="faq-icon">
                  {openIndex === index ? '−' : '+'}
                </span>

              </button>

              <div className="faq-answer">

                <p>
                  {faq.answer}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default FAQPreview