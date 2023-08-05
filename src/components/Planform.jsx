import React from 'react'
import {HiOutlineCheck} from "react-icons/hi"
import PricingTable from './PricingTable'

const Planform = () => {
  return (
    <>  

        <div className='my-4 flex flex-col items-start bg-red-500 mx-72 gap-10'>
        {/* header */}

        <div className='flex flex-col gap-4 justify-center items-start text-white'>
               <div>
               <p className='text-base'>STEP 1 OF 3</p>
                <p className='text-4xl font-bold'>Choose the right plan for you.</p>
               </div>

               <div className='flex flex-col justify-center items-start '>
                <div className='flex gap-4'>
                    <HiOutlineCheck className='text-3xl text-[#004E96]'/>
                    <p className='text-lg '>Watch all you want. Ad-free.</p>
                  
                </div>
                <div className='flex gap-4 '>
                    <HiOutlineCheck className='text-3xl text-[#004E96]'/>
                    <p className='text-lg '>Recommendations just for you.</p>
                  
                </div>
                <div className='flex gap-4'>
                    <HiOutlineCheck className='text-3xl text-[#004E96]'/>
                    <p className='text-lg '>Change or cancel your plan anytime.</p>
                  
                </div>
            </div>
            </div>

        {/* pricing details */}

        <div >
            <PricingTable/>
        </div>
 
        {/* button */}
        </div>
    </>
  )
}

export default Planform