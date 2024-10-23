import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";




function Footer() {
  return (
    <footer className='bg-[#52ab98] text-white font-serif'>
      <div className='conatainer px-5 py-24 mx-auto flex flex-col flex-wrap md:items-center md:flex-nowrap
       md:flex-row lg:items-start'>

        <div className='w-64 md:mx-0 mx-auto md:text-left text-center'>
          <h3 className='font-bold text-2xl'>Mech <span>Shop</span></h3>
        </div>


        <div className='flex flex-grow flex-wrap md:pl-20 mb-10 md:mt-0 mt-10 md:text-left text-center'>

          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium tracking-widest mb-3'>Menu</h2>
            <ul className='list-none mb-10'>
              <li className='mt-1'>Features</li>
              <li className='mt-1'>Info Centre</li>
              <li className='mt-1'>News Blog</li>
              <li className='mt-1'>Login</li>
            </ul>
          </div>

          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium tracking-widest mb-3'>Company</h2>
            <ul className='list-none mb-10'>
              <li className='mt-1'>About Us</li>
              <li className='mt-1'>Privacy Policy</li>
              <li className='mt-1'>Terms & Conditions</li>
              <li className='mt-1'>Login</li>
            </ul>
          </div>

          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium tracking-widest mb-3'>Contact</h2>
            <ul className='list-none mb-10'>
              <li className='mt-1'>Contact Sales</li>
              <li className='mt-1'>+235378745</li>
              <li className='mt-1'>News Blog</li>
              <li className='mt-1'>+345845974</li>
            </ul>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium tracking-widest mb-3'>Tech Support</h2>
            <ul className='list-none mb-10'>
              <li className='mt-1'>Contact Support</li>
              <li className='mt-1'>Info Centre</li>
              <li className='mt-1'>Activate</li>

            </ul>
          </div>
        </div>
      </div>
      <div className='bg-gray-500 text-white'>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>

          <p className='text-sm text-center sm:text-left'> @ 2024 MechShop -<span>@Copyright</span></p>
          <p className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
            <span className='mr-2'><FaFacebook size={30} /></span>
             <span className='mr-2'><FaInstagramSquare size={30} /></span>
            <span><FaTwitterSquare size={30}/></span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer