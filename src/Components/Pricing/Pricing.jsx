import React from 'react'

export default function Pricing() {
    return <>

        <div id='pricing' className=" max-w-[1140px] m-auto py-20  w-full ">
            <div className=" w-[10%] ms-4 sm:ms-0  pb-4 border-b-4 sm:w-[5%] border-green-800">
                <h2 className='text-black text-start font-bold text-4xl  '>Pricing

                </h2>
            </div>
            <p className=' text-gray-700 py-2 ms-4 sm:ms-0'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>



            <div className="  mx-auto  flex flex-col justify-center w-full h-full">

                <div className="w-full text-center   grid  grid-cols-1 sm:grid-cols-3 gap-5  py-8">
                    <div className="shadow-2xl card rounded-2xl h-[600px]  p-6 m-3   ">
                        <h3 className=' p-4 mt-3 text-lg font-semibold'>Free</h3>
                        <h4 className='text-[#009761] text-4xl font-medium'>
                            <sup className=' text-xl top-[-15px] left-[-3px]'>$</sup>0<span className='text-gray-400 text-base font-light'> / month</span></h4>
                        <ul className=' py-5 text-center text-sm'>
                            <li className='pb-4'>Aida dere</li>
                            <li className='pb-4'>Nec feugiat nisl</li>
                            <li className='pb-4'>Nulla at volutpat dola</li>
                            <li className='pb-4 text-gray-400 line-through'>Pharetra massa</li>
                            <li className='pb-4 text-gray-400 line-through'>Massa ultricies mi</li>
                        </ul>
                        <div class=" p-4 text-center">
                            <a href="#" class="px-10 py-3  rounded-full border-2 border-[#009761] text-[#009761] hover:bg-[#009761] hover:text-white ease-in duration-300">Buy Now</a>
                        </div>



                    </div>



                    
                    <div className="shadow-2xl card rounded-2xl h-[600px]  p-6 m-3   ">
                        <p className='text-[#009761] rounded-full  w-[50%] mx-auto mb-2 px-5 bg-green-200/20  '>Recommended</p>
                        <h3 className=' p-4 mt-3 text-lg font-semibold'>Business</h3>
                        <h4 className='text-[#009761] text-4xl font-medium'>
                            <sup className=' text-xl top-[-15px] left-[-3px]'>$</sup>19<span className='text-gray-400 text-base font-light'> / month</span></h4>
                        <ul className=' py-5 text-center text-sm'>
                            <li className='pb-4'>Aida dere</li>
                            <li className='pb-4'>Nec feugiat nisl</li>
                            <li className='pb-4'>Nulla at volutpat dola</li>
                            <li className='pb-4'>Pharetra massa</li>
                            <li className='pb-4 text-gray-400 line-through'>Massa ultricies mi</li>
                        </ul>
                        <div class=" p-4 text-center">
                            <a href="#" class="px-10 py-3 bg-[#009761] rounded-full hover:border-2 hover:border-[#009761] hover:text-[#009761] hover:bg-white text-white ease-in duration-300">Buy Now</a>
                        </div>



                    </div>
                    <div className="shadow-2xl card rounded-2xl h-[600px]  p-6 m-3   ">
                        <h3 className=' p-4 mt-3 text-lg font-semibold'>Developer</h3>
                        <h4 className='text-[#009761] text-4xl font-medium'>
                            <sup className=' text-xl top-[-15px] left-[-3px]'>$</sup>29<span className='text-gray-400 text-base font-light'> / month</span></h4>
                        <ul className=' py-5 text-center text-sm'>
                            <li className='pb-4'>Aida dere</li>
                            <li className='pb-4'>Nec feugiat nisl</li>
                            <li className='pb-4'>Nulla at volutpat dola</li>
                            <li className='pb-4'>Pharetra massa</li>
                            <li className='pb-4'>Massa ultricies mi</li>
                        </ul>
                        <div class=" p-4 text-center">
                            <a href="#" class="px-10 py-3  rounded-full border-2 border-[#009761] text-[#009761] hover:bg-[#009761] hover:text-white ease-in duration-300">Buy Now</a>
                        </div>



                    </div>


                   





                 












                </div>

            </div>
        </div>

    </>
}
