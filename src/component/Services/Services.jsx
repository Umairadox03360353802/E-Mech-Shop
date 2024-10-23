import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";




const Services = () => {
  return (
    <div className='bg-[#c8d8e4] pt-20'>
      <h2 className="font-manrope shadow-2xl font-bold font-serif text-5xl text-[#2b6777] py-10 mb-5 text-center max-lg:text-center">
        Services
      </h2>
      <div className=' flex flex-wrap  p-5 justify-center items-center gap-8 mx-auto pb-15 pt-15'>

        <div className='w-[220px] shadow-xl px-4 py-3 rounded-md text-white flex flex-col items-center gap-2  bg-[#52ab98] 
        hover:scale-110 transform duration-700'>
          <FaShippingFast size={25} />
          <p>FREE SHIPPING</p>
        </div>

        <div className='w-[220px] shadow-xl px-4 py-3 rounded-md text-white flex flex-col items-center gap-2  bg-[#52ab98]
        hover:scale-110 transform duration-700'>
          <BsFillCartCheckFill size={25} />
          <p>AUTHENTIC PRODUCTS</p>
        </div>

        <div className='w-[220px] shadow-xl px-4 py-3 rounded-md text-white flex flex-col items-center gap-2  bg-[#52ab98]
       hover:scale-125 transform duration-500'>
          <TbTruckReturn size={25} />
          <p>EASY RETURN</p>
        </div>

        <div className='w-[220px] shadow-xl px-4 py-3 rounded-md text-white flex flex-col items-center gap-2  bg-[#52ab98]
        hover:scale-110 transform duration-700'>
          <MdOutlinePayment size={25} />
          <p>SECURE PAYMENT</p>
        </div>
      
      </div>
    </div>
  )
}

export default Services