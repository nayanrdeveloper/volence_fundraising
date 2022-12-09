import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner/Banner'
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
      <Banner />
    </div>
  )
}

export default Home
