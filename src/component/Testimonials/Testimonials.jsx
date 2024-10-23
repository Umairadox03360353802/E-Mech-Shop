import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Testimonials() {
  return (
    <div className='bg-[#c8d8e4]'>
         <h2 className="font-manrope font-serif font-bold shadow-2xl pb-5 text-5xl text-[#2b6777] mb-18 pt-10 text-center max-lg:text-center ">
         Testimonials
                    </h2>

  <div  className='container mx-auto mt-16'>
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      style={{"--swiper-navigation-color": "#2b6777", "--swiper-pagination-color": "#2b6777"}}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      
     
    >
      <SwiperSlide className=''>
      <div className="w-full lg:mb-0 mb-8 p-4">
        <div className="h-full text-center p-8">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://pagedone.io/asset/uploads/1696229969.png"/>
          <p className="leading-relaxed font-Pacifico font-medium  p-3">"Mech Shop is simply the best tool of investment in the market right now."</p>
          <span className="inline-block h-1 w-10 rounded bg-[#2b6777] mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font font-serif tracking-wider text-sm">Jane D</h2>
          <p className="text-gray-500 font-serif">CEO</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="w-full lg:mb-0 mb-8 p-4">
        <div className="h-full text-center p-8">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://pagedone.io/asset/uploads/1696229994.png"/>
          <p className="leading-relaxed font-Pacifico font-medium  p-3"> "I was hesitant to try Mech Shop at first, but I'm so glad I did - it's exceeded all of my
          expectations."</p>
          <span className="inline-block h-1 w-10 rounded bg-[#2b6777] mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font font-serif tracking-wider text-sm">Harris P.</h2>
          <p className="text-gray-500 font-serif">UI Develeoper</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="w-full lg:mb-0 mb-8 p-4">
        <div className="h-full text-center p-8">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://pagedone.io/asset/uploads/1696230027.png"/>
          <p className="leading-relaxed font-Pacifico font-medium  p-3">"Mech Shop stands out as the most user-friendly and effective solution I've ever used."</p>
          <span className="inline-block h-1 w-10 rounded bg-[#2b6777] mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font font-serif tracking-wider text-sm">ALEX K.</h2>
          <p className="text-gray-500 font-serif">Design Lead</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="w-full lg:mb-0 mb-8 p-4">
        <div className="h-full text-center p-8">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80"/>
          <p className="leading-relaxed font-Pacifico font-medium  p-3">"Mech Shop is an awesome landing page template I've seen. I would use this for anything."</p>
          <span className="inline-block h-1 w-10 rounded bg-[#2b6777] mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font font-serif tracking-wider text-sm">Gabrielle Winn</h2>
          <p className="text-gray-500 font-serif">Co-founder of Acme Inc.</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="w-full lg:mb-0 mb-8 p-4">
        <div className="h-full text-center p-8">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
          <p className="leading-relaxed font-Pacifico font-medium  p-3">"Make sure you only pick the right sentence to keep it short and simple."</p>
          <span className="inline-block h-1 w-10 rounded bg-[#2b6777] mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font font-serif tracking-wider text-sm">Dylan Ambrose</h2>
          <p className="text-gray-500 font-serif">Lead marketer at Netflix</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="w-full lg:mb-0 mb-8 p-4">
        <div className="h-full text-center p-8">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100"/>
          <p className="leading-relaxed font-Pacifico font-medium  p-3">"Share a testimonial that hits some of your benefits from one of your popular customers."</p>
          <span className="inline-block h-1 w-10 rounded bg-[#2b6777] mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font font-serif tracking-wider text-sm">Sarah Steiner</h2>
          <p className="text-gray-500 font-serif">VP Sales at Google</p>
        </div>
      </div>
      </SwiperSlide>
      
      ...
    </Swiper>

  </div>
    </div>
  )
}

export default Testimonials