import React from 'react'
import { HeroSection } from '../../component/HeroSection/HeroSection'
import Services from '../../component/Services/Services'
import Gallery from '../../component/Gallery/Gallery'
import PopularProducts from '../../component/PopularProducts/PopularProducts'
import Testimonials from '../../component/Testimonials/Testimonials'

function Home({AddToCart}) {
  return (
    <>
      <HeroSection/>
      <Services/>
      <PopularProducts AddToCart={AddToCart}/>
      <Gallery/>
      <Testimonials/>
     </>
  )
}

export default Home