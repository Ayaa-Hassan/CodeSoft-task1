import React from 'react'
import { BsBoundingBoxCircles } from 'react-icons/bs'
import { IoCalendarOutline, IoEaselOutline } from 'react-icons/io5'
import { LuActivity } from 'react-icons/lu'
import { MdOutlineChat } from 'react-icons/md'
import { PiBroadcastFill } from 'react-icons/pi'

export default function Services() {
    return <>
    
        <div id='services' className=" max-w-[1140px] m-auto py-20  w-full ">
            <div className=" w-[10%] ms-4 sm:ms-0  pb-4 border-b-4 sm:w-[5%] border-green-800">
                <h2 className='text-black text-start font-bold text-4xl  '>Services

                </h2>
            </div>
            <p className=' text-gray-700 py-2 ms-4 sm:ms-0'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>



            <div className="  mx-auto  flex flex-col justify-center w-full h-full">

            <div className="w-full  grid  grid-cols-1 sm:grid-cols-3 gap-5  py-8">
                <div className="shadow-2xl card rounded-2xl h-[300px]  p-6 m-3   ">
                        <div className=" ">
                           
                            <LuActivity className=' text-white my-2 p-4  rounded-full  bg-[#009761] ' size={60} />
                            
                       
                </div>
                    <h3 className='py-2'>Nesciunt Mete</h3>
                    <p>
                        Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>

            

           

            </div>
           
            
                <div className="shadow-2xl card rounded-2xl h-[300px]  p-6 m-3   ">
                    <div className="">
                            <PiBroadcastFill className=' text-white my-2 p-4  rounded-full  bg-[#009761] ' size={60} />
                </div>
                    <h3 className='py-2'>Eosle Commodi</h3>
                    <p>

                        Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>

            </div>

           

            
            
                <div className="shadow-2xl card rounded-2xl h-[300px]  p-6 m-3   ">
                    <div className="">
                            <IoEaselOutline className=' text-white my-2 p-4  rounded-full  bg-[#009761] ' size={60} />
                </div>
                    <h3 className='py-2'>Ledo Markt</h3>
                    <p>

                        Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>

            </div>

           

           
          
            
                <div className="shadow-2xl card rounded-2xl h-[300px]  p-6 m-3   ">
                    <div className="">
                            <BsBoundingBoxCircles className=' text-white my-2 p-4  rounded-full  bg-[#009761] ' size={60} />
                </div>
                    <h3 className='py-2'>Asperiores Commodit
                        
</h3>
                    <p>
                        Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.
</p>

            </div>

           

           
            
                <div className="shadow-2xl card rounded-2xl h-[300px]  p-6 m-3   ">
                    <div className="">
                            <IoCalendarOutline className=' text-white my-2 p-4  rounded-full  bg-[#009761] ' size={60} />
                </div>
                    <h3 className='py-2'>Velit Doloremque
                        
</h3>
                    <p>
                        Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.
</p>

            </div>

           

           
            
                <div className="shadow-2xl card rounded-2xl h-[300px]  p-6 m-3   ">
                    <div className="">
                            <MdOutlineChat className=' text-white my-2 p-4  rounded-full  bg-[#009761] ' size={60} />
                </div>
                    <h3 className='py-2'>Dolori Architecto
                       
</h3>
                    <p>
                        Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.
</p>

            </div>

                    












                </div>  

            </div>
        </div>
    
    </>
}
