import React from 'react'
import HeroSection from '../HeroSection'
import '../../App.css'
import OurItem from '../OurItem'
import Service from '../Service'
import Expereince from '../Expereince'
import Contanct from '../Contanct'
import Footer from '../Footer'



function Home() {
  return (
    <>
      <HeroSection />
      <OurItem />
      <Service />
      <Expereince/>
      <Contanct />
      <Footer />
    </>
  )
}

export default Home
