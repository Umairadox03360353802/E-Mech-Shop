import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import loginBg from '../../assets/login-bg.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../FirebaseAuth/FirebaseAuth';


export const SignUp = () => {

  const navigates = useNavigate()

  const [UserSignUp, setUserSignUp] = useState({ username: '', email: '', password: '' })

  const handleChange = (e) => {
    setUserSignUp({ ...UserSignUp, [e.target.name]: e.target.value })
    // console.log(UserSignUp)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (UserSignUp.username || UserSignUp.email || UserSignUp.password) {
      createUserWithEmailAndPassword(auth, UserSignUp.email, UserSignUp.password)
        .then(async(res) => {
          const user = res.user;
         await updateProfile(user, {
            displayName: UserSignUp.username
          });
          navigates('/login')
          
        })
        .catch((error) => toast.error(error.message))

    } else {
      return toast.error('Handle submit is not working ')
    }
  }





  return (
    <>
      <div>
        <div className='relative' >
          <img src={loginBg} alt=" waite....." className='object-cover object-center w-full h-[300px]' />
          <div className='w-full h-[300px] bg-black absolute top-0 opacity-45'></div>
          <h2 className='absolute text-white top-[50%] left-[10%] font-bold font-serif text-5xl'>SignUp</h2>
        </div>


        {/* SignUp form */}
        <div className="bg-[#c8d8e4] h-screen overflow-hidden flex items-center justify-center">
          <div className="bg-[#f2f2f2] lg:w-6/12 md:7/12 w-8/12 font-serif shadow-2xl rounded-xl mt-12">
            <div className="bg-[#2b6777] text-white absolute left-1/2 shadow-2xl transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 md:p-8">
              <RiContactsLine size={30} />

            </div >
            <form className="p-12 md:p-24 shadow-2xl  ">
              <div className="flex items-center text-lg mb-6 md:mb-4">
                <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                  <path className='fill-[#2b6777]' d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 
                          1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09
                          4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                </svg>
                <input type="text" name='username' autoComplete='off' value={UserSignUp.username} onChange={handleChange}
                  className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" />
              </div>
              <div className="flex items-center text-lg mb-6 md:mb-4">
                <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                  <MdEmail size={24} className='fill-[#2b6777]' />
                </svg>
                <input type="email" name='email' autoComplete='off' value={UserSignUp.email} onChange={handleChange}
                  className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" />
              </div>
              <div className="flex items-center text-lg mb-6 md:mb-4">
                <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                  <path className='fill-[#2b6777]' d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24
                       0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 
                       0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
                </svg>
                <input type="password" name='password' autoComplete='off' value={UserSignUp.password} onChange={handleChange}
                  className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
              </div>
              <button className="bg-[#2b6777] to-gray-900 font-medium p-2 md:p-4 text-white  w-full rounded"
                onClick={handleSubmit}>SignUp</button>
              <p className='text-xs text-black mt-5'>Do you have an account?
                <Link to='/login'>
                  <button className='cursor-pointer  hover:text-blue-400 '>Login</button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
