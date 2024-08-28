import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'

export default function Contact() {
    return <>
    

        <div id='contact' className=" max-w-[1140px] m-auto py-20  w-full ">
            <div className=" w-[10%] ms-4 sm:ms-0  pb-4 border-b-4 sm:w-[5%] border-green-800">
                <h2 className='text-black text-start font-bold text-4xl  '>Contact

                </h2>
            </div>
            <p className=' text-gray-700 py-2 ms-4 sm:ms-0'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

            <div className=" grid md:grid-cols-2 my-4 ms-4 sm:ms-0">
                <div className="">
                    <div className=" flex mt-10  ">
                        <div >
                            <CiLocationOn className=" my-2 me-2    text-center text-[#009761] " size={30} />
                        </div>
                        <div>
                            <h3 className=' text-lg font-bold mb-1'>Address</h3>
                            <p className=' text-sm'>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <div className=" ">
                            <FiPhone className=" my-2 me-2    text-center text-[#009761] " size={30} />
                        </div>
                        <div>
                            <h3 className=' text-lg font-bold mb-1'>Call Us</h3>
                            <p className=' text-sm'>+1 5589 55488 55</p>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <div className=" ">
                            <MdOutlineEmail className=" my-2 me-2    text-center text-[#009761] " size={30} />
                        </div>
                        <div>
                            <h3 className=' text-lg font-bold mb-1'>Email Us</h3>
                            <p className=' text-sm'>info@example.com</p>
                        </div>
                    </div>
              </div>
                <form>
                    <div className=" grid grid-cols-2">
                        <input className=' border m-2 p-2 ' type="text" placeholder='First' />
                        <input className=' border m-2 p-2 ' type="text" placeholder='Last' />
                        <input className=' border m-2 p-2 ' type="email" placeholder='Email' />
                        <input className=' border m-2 p-2 ' type="tel" placeholder='Phone' />
                        <input className=' border m-2 p-2 col-span-2 ' type="text" placeholder='Address' />
                        <textarea className=' border  m-2 p-2 col-span-2' cols="30" rows="10"></textarea>
                        <button className=' col-span-2 m-2 '>Submit</button>
                    </div>
                </form>
            </div>
</div>
    
    </>
}
