import Hero from '../sections/Hero'
import AboutPreview from '../sections/AboutPreview'
import ServicesPreview from '../sections/ServicesPreview'
import FAQPreview from '../sections/FAQPreview'
import BookingProcess from '../sections/BookingProcess'
import FinalCTA from '../sections/FinalCTA'

function Home() {
  return (
    <>
      <Hero />

      <AboutPreview />

      <ServicesPreview />

      <BookingProcess />

      <FAQPreview />

      <FinalCTA />
    </>
  )
}

export default Home