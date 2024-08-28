import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handelNav = () => {
        setNav(!nav);
        }





  return  <>
      <div id='nav' className=' w-full min-h-[50px] flex items-center absolute z-20 text-white justify-between bg-black/60'>
          <div className="px-4 ">
              <h2 className=' text-white font-bold '>KnightOne</h2>
              
          </div>
          <ul className=' hidden sm:flex px-4 '>
              <li>
                  <a href="/">Home</a>
              </li>
              <li>
                  <a href="#about">About</a>
              </li>
              <li>
                  <a href="#services">Services</a>
              </li>
              <li>
                  <a href="#pricing">Pricing</a>
              </li>
              <li>
                  <a href="#contact">Contact</a>
              </li>
          </ul>
          <div className="px-4 font-bold hidden  md:flex">
              <button className=' ' >Get Started</button>
          </div>
          {/* Hamburger Icon */}
          <div onClick={handelNav} className=" sm:hidden z-20">
              <FaBars className=' mr-4 cursor-pointer' size={30}/>
          </div>
          {/* Mobile Menu */}
          <div onClick={handelNav} className={nav ? " overflow-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
              : " absolute top-0 h-screen left-[-100%] ease-in duration-500"}>
              <ul className=' h-full w-full   text-center pt-12'>
                  <li className='text-2xl py-8'>
                      <a href="/">Home</a>
                  </li>
                  <li className='text-2xl py-8'>
                      <a href="#about">About</a>
                  </li>
                  <li className='text-2xl py-8'>
                      <a href="#services">Services</a>
                  </li>
                  <li className='text-2xl py-8'>
                      <a href="#pricing">Pricing</a>
                  </li>
                  <li className='text-2xl py-8'>
                      <a href="#contact">Contact</a>
                  </li>
              </ul>   
              



          </div>

     </div>
      
      
      
      
      
      
      
      
      
      
      
      </>
}
