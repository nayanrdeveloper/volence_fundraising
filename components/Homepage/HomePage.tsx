import React from 'react'
import Banner from '../Banner/Banner'
import Causes from '../Causes/Causes'
import Feature from '../Feature/Feature'
import HeroSection from '../HeroSection/HeroSection'
import Team from '../Team/Team'
import Testimonial from '../Testimonial/Testimonial'

function HomePage() {
  return (
    <div>
        <HeroSection />
        <Feature />
        <Causes />
        <Team/>
        <Testimonial />
        <Banner />
    </div>
  )
}

export default HomePage