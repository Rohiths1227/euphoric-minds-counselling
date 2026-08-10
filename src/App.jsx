import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import FAQ from './pages/FAQ'
import Booking from './pages/Booking'

import Approach from './sections/ApproachPage'

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/approach" element={<Approach />} />

          <Route path="/faq" element={<FAQ />} />

          <Route path="/booking" element={<Booking />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  )
}

export default App