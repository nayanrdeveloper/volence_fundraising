import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Causes from '../components/Causes/Causes'
import Feature from '../components/Feature/Feature'
import HeroSection from '../components/HeroSection/HeroSection'
import Team from '../components/Team/Team'
import Testimonial from '../components/Testimonial/Testimonial'

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <Feature />
      <Causes />
      <Team />
      <Testimonial /> 
    </div>
  )
}

export default Home
