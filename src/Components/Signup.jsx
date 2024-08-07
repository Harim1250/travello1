import React from 'react'
import Signuppage from '../assets/singupimage.jpg'



function Signup() {
  return (
    <div className='w-full h-screen flex items-start'>

        <div className='relative w-1/2 h-full flex flex-col'>
        <div className="absolute top-[20%] left-[10%] flex flex-col">
            <h1 className='text-3xl text-red-400 font-bold'>LOGIN TO YOUR DREAM DESTINATION</h1>
            <p className='text-xl text-white front-semibold p-1'>Start for Free and get Attractive offers from the Community</p>
        </div>
          <img src={Signuppage} alt="loginimage" className=' w-full h-full object-cover' />
        </div>
{/* text area */}
        <div className='w-1/2 h-full bg-white flex flex-col p-14'>
         <h1 className='text-base text-red-300 font-semibold'>TRAVELLO</h1>
          

          <div className='w-full flex flex-col'>
            <h3 className='text-2xl font-semibold mb-4'>Login</h3>
            <p className='text-sm mb-2'>Welcome Back! plesee enter your Details</p>
          
          </div>
        </div>
    </div>
  )
}

export default Signup