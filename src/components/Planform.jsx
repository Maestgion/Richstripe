import React from 'react'
import {HiOutlineCheck} from "react-icons/hi"
import PricingTable from './PricingTable'
import { Link } from 'react-router-dom'

const Planform = () => {
  return (
    <>  
    <div className='bg-[#0F1014]'>
        
    <div className='pt-8 flex flex-col items-start  mx-60 gap-16 bg-[#0F1014]'>
        {/* header */}

        <div className='flex flex-col gap-4 justify-center items-start text-white'>
               <div>
               <p className='text-base'>STEP 3 OF 3</p>
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

        {/* <div className='w-full text-center pb-20'>
          <Link to="/signup/registration">
            <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-4 px-6 w-[40%] text-xl" >
              Next
            </button>
          </Link>
        </div> */}
        </div>
    </div>
    </>
  )
}

export default Planform