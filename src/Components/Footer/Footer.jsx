import React from 'react'


export default function Footer() {
    return <>
        <div className=" w-full py-8 m-auto bg-black border-t-4">
            <div className="  m-auto  text-center">
              
                <h1 className=' text-4xl font-bold mb-4 text-white'>KnightOne</h1>
                <div className=' pt-6 border-t-2  mx-auto text-white max-w-[1000px]'>
                    <span>Copyright</span> <strong class="px-1 ">KnightOne</strong> <span>All Rights Reserved</span>
                </div>
                <div className=' text-lg  text-white pt-1'>
                     Designed by <a href=""><span className=' text-[#009761]'>AYA.Hassan</span></a>
                </div>
            </div>
        </div>

    </>
}