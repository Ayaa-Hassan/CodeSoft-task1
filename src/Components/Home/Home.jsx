import React from 'react'
import bgHome from "../../assets/hero-bg.jpg";
import { FaPlay } from 'react-icons/fa';







export default function Home() {
  return (
      <>
          <div id='home'>

              <div className=" w-full h-screen bg-black/65 absolute z-10"> </div>
              <div className=" w-full h-[100vh] ">

                  <img src={bgHome} alt=" hero bg"
                      className="w-full h-full object-cover " />

              </div>
              <div className=" max-w-[1140px] m-auto">
                  <div className=" absolute top-[45%] w-full md:[55%]  max-w-[1140px]   flex flex-col  z-10 text-white p-4 text-center">
                      <h1 className='font-bold text-5xl mb-4'>Welcome to Our Website</h1>
                      <p className='text-2xl  text-gray-300'>We are team of talented designers making websites with Tailwind</p>
                      <button className='w-[80px] h-[80px]  text-center mx-auto my-2  bg-green-800'>
                          <FaPlay className='text-white text-center m-auto' size={30} />
                      </button>

                  </div>
              </div>


          </div>
      
      
      </>
  )
}
