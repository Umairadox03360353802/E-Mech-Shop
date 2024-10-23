import React from 'react'
import  banner  from "../../assets/banner.jpg";

export const HeroSection = () => {
  return (
    <div className='relative mt-24'>
        <div>
            <img src={banner} alt="image...." className='w-full h-auto object-cover object-center'/>
        </div>
        <div className='absolute top-[25%] w-full text-end right-5'>
            <h1 className='text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#52ab98] font-serif font-bold'>Discover Your Next Advanture</h1>
            <p className='text-[15px] lg:text-2xl  font-light font-Pacifico mt-2 lg:mt-5'>Shop Our Latest Arrival & Unleash Your Style </p>
        </div>
    </div>
  )
}
