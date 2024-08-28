import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import { HiArrowNarrowRight } from 'react-icons/hi'




export default function About() {
    return <>
        <div id='about' className=" max-w-[1140px] m-auto py-20 ">
            <div className=" w-[10%] ms-4 sm:ms-0  pb-4 border-b-4 sm:w-[5%] border-green-800">
                <h2 className='text-black text-start font-bold text-4xl  '>About

                </h2>
            </div>
            <p className=' text-gray-700 py-2 ms-4 sm:ms-0'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>





            <div className=" ms-4 sm:ms-0 grid md:grid-cols-2 my-4">
                <div className=" mt-6 w-full md:h-full">
                    <p className=' text-base font-medium mb-4 text-[#444]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className=' text-base font-medium  text-[#444] flex items-center '><BsCheck2Circle  className='ms-0 me-3 text-[#009961]' size={20}  />
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className=' text-base font-medium  text-[#444] flex items-center '><BsCheck2Circle  className='ms-0 me-3 text-[#009961]' size={20} />
                        Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                    <p className=' text-base font-medium  text-[#444] flex items-center '><BsCheck2Circle  className='ms-0 me-3 text-[#009961]' size={20} />
                        Ullamco laboris nisi ut aliquip ex ea commodo.</p>
                </div>
               <div className="">
                    <div className=" mt-6 ms-4 grid grid-cols-2  ">
                        <p className=' text-base font-medium mb-4 text-[#444]  col-span-2'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className=' w-[75%]  px-6   group text-white border-2  py-3 my-2 flex items-center'>Read More
                            <span className=' group-hover:translate-x-[5px] duration-300'>

                        <HiArrowNarrowRight className='ml-3 ' />
                    </span>
                        </button>
                    </div>
                </div>
            </div>
    </div>
    
    
    
    
    </>
}

