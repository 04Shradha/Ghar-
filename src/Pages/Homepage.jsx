import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Services from '../components/services.jsx'
import Poster from '../components/poster.jsx'
import Carsoule from '../components/Carsoule.jsx'
import Footer from '../components/Footer'; 
import Testimonial from '../components/testimonial.jsx'

function Homepage() {

  return (      
    <>
      <Navbar/>
      <Carsoule/>
      <Poster/>
      <Services/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default Homepage