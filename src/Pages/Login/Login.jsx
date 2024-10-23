import React from 'react'
import loginBg from '../../assets/login-bg.jpg'
import { RiContactsLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../FirebaseAuth/FirebaseAuth';


export const Login = () => {

  const navigate = useNavigate()

  const [UserLogIn, setUserLogIn] = useState({  email: '', password: '' })

  const handleChange = (e) => {
    setUserLogIn({ ...UserLogIn, [e.target.name]: e.target.value })
    console.log(UserLogIn)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( UserLogIn.email || UserLogIn.password) {
       signInWithEmailAndPassword(auth, UserLogIn.email, UserLogIn.password)
        .then((res) => 
         
         navigate('/'),
        
        toast.success('You are logged in now')
        )
        .catch((error) => toast.error(error.message))

    } else {
      return toast.error('Handle submit is not working ')
    }
  }



  return (
    <>
        <div>
            <div className='relative' >
                   <img src={loginBg} alt=" waite....." className='object-cover object-center w-full h-[300px]'/>
                   <div className='w-full h-[300px] bg-black absolute top-0 opacity-45'></div>
                   <h2 className='absolute text-white top-[50%] left-[10%] font-bold font-serif text-5xl'>Login</h2>
            </div>

            {/* Login form */}
            <div className="bg-[#c8d8e4]  h-screen overflow-hidden flex items-center justify-center">
  <div className="bg-[#f2f2f2] font-serif lg:w-6/12 md:7/12 w-8/12 shadow-2xl rounded-xl">
    <div className="bg-[#2b6777] text-white absolute left-1/2 shadow-2xl  transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
    <RiContactsLine size={30}  />

    </div>
    <form className="p-12 md:p-24 shadow-2xl ">
    <div className="flex items-center text-lg mb-6 md:mb-4">
                <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                  <MdEmail size={24} className='fill-[#2b6777]' />
                </svg>
                <input type="email" name='email' autoComplete='off'  value={UserLogIn.email} onChange={handleChange}
                  className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" />
              </div>
      <div className="flex items-center text-lg mb-6 md:mb-8">
        <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
          <path className='fill-[#2b6777]' d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
        </svg>
        <input type="password" name='password' autoComplete='off' value={UserLogIn.password} onChange={handleChange} className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
      </div>
      <button className="bg-[#2b6777] font-medium p-2 md:p-4 text-white uppercase w-full rounded" 
      onClick={handleSubmit}>Login</button>
      <p className='text-xs text-black mt-5'>Don't have an account? 
        <Link to='/signup'>
      <button className='cursor-pointer  hover:text-blue-400'>Sign Up</button>
        </Link>
        </p>
    </form>
  </div>
 </div>
        </div>
    </>
  )
}
