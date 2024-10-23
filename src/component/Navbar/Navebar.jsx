import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';


import { Link } from "react-router-dom";
export default function Navebar({carts,userName ,handleLogout}) {
   
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='bg-[#c8d8e4] shadow-md border-b mx-auto  fixed top-0 z-10 w-full '>
      <div className='conatiner p-5 flex justify-between items-center   ' >
        <div >
          <Link to='/'>
          <h3 className='font-bold text-2xl '>
            Mech <span className='text-[#2b6777] font-serif s'>Shop</span>
          </h3>
          </Link>
        </div>
         
         <div className='hidden md:block '>

        <ul className='flex justify-center items-center text-lg font-serif font-semibold'>
          <Link to='/'><li className='mr-5 hover:text-[#52ab98] cursor-pointer'>Home</li></Link>
          <Link to='/allproducts'>
          <li className='mr-5 hover:text-[#52ab98]  cursor-pointer' >All Products</li>
          </Link>

          <Link to='/about'>
          <li className='mr-5 hover:text-[#52ab98] cursor-pointer'>About</li>
          </Link>

          <Link to='/contact'>
          <li className='mr-5 hover:text-[#52ab98] cursor-pointer'>Contact</li> 
          </Link>
        </ul>
         </div>

         {/* for responsiveness when hamburger shows */}
         {isOpen && 
         <div>

         <ul className='flex flex-col gap-10 absolute z-10 bg-blue-400 text-white  top-[72px] left-0 h-screen w-full justify-center
          items-center font-semibold text-3xl'>
           <Link to='/'><li className='mt-5 hover:text-red-500 cursor-pointer' onClick={()=>{setIsOpen(!isOpen)}}>Home</li></Link>
           
           <Link to='/allproducts'>
           <li className='mt-5 hover:text-red-500 cursor-pointer' onClick={()=>{setIsOpen(!isOpen)}} >All Products</li>
           </Link>
           <Link to='/about'>
           <li className='mt-5 hover:text-red-500 cursor-pointer' onClick={()=>{setIsOpen(!isOpen)}}>About</li>
           </Link>
           <Link to='/contact'>
           <li className='mt-5 hover:text-red-500 cursor-pointer' onClick={()=>{setIsOpen(!isOpen)}}>Contact</li> 
           </Link>
         </ul>
         <button className='absolute top-[76px] z-10 right-0 px-3 py-4 cursor-pointer' onClick={()=>{setIsOpen(!isOpen)}}>
           <RxCross2 size={30} color='white' />
           </button>
          </div>
         }

         

        <div className='flex justify-center items-center gap-3'>
          {userName? (<>
            <Link to='/login'>
          <button className=' bg-gray-100  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded 
          text-base text-[#52ab98] shadow-xl  font-bold font-serif' onClick={handleLogout}>Logout</button>
          </Link>
          <span>{userName}</span>
          </>):(
             <Link to='/login'>
             <button className=' hover:bg-gray-100  border-0 py-1 px-3 mx-7 focus:outline-none text-white bg-[#52ab98] rounded-md 
             text-base hover:text-[#52ab98] shadow-xl  font-bold font-serif'>Login</button>
             </Link>
             
          )}
         
          <Link to='/cart'> <button className=''>
            <div className='absolute top-[8px] shadow-xl  bg-[#52ab98] rounded-full w-5 h-5 flex justify-center items-center z-10 mx-4  '> 

          <span className='text-white text-[12px]   '>{carts.length}</span>
            </div>
            <FaShoppingCart className='relative  '  size={26}/></button> 
          </Link> 
         <button className='md:hidden' onClick={()=>{setIsOpen(!isOpen)}}>
            <GiHamburgerMenu size={25}/></button>
        </div>
      </div>
    </header>
  )
}
