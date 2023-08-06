import React from 'react'
import {HiOutlineCheck, HiOutlineCheckCircle} from "react-icons/hi"
import { Link } from 'react-router-dom'

const SignupStart = () => {
  return (
    <>
        <div className='h-[90vh] flex justify-center items-center'>
        <div className='flex flex-col text-white justify-center items-center gap-10'>
            {/* head */}
            <div className='flex flex-col gap-8 justify-center items-center'>
                <HiOutlineCheckCircle className='text-6xl text-[#004E96]'/>
               <div>
               <p className='text-center text-base pb-3'>STEP 1 OF 3</p>
                <p className='text-4xl font-bold'>Choose your plan.</p>
               </div>
            </div>

            {/* details */}

            <div className='flex flex-col gap-6 justify-center items-center  w-[100%]'>
                <div className='flex gap-4 w-[90%]'>
                    <HiOutlineCheck className='text-3xl text-[#004E96]'/>
                    <p className='text-lg '>No commitments, cancel anytime.</p>
                  
                </div>
                <div className='flex gap-4 w-[90%]'>
                    <HiOutlineCheck className='text-3xl text-[#004E96]'/>
                    <p className='text-lg '>Everything on Richstripe for one low price.</p>
                  
                </div>
                <div className='flex gap-4 w-[90%]'>
                    <HiOutlineCheck className='text-3xl text-[#004E96]'/>
                    <p className='text-lg '>No ads and no extra fees. Ever.</p>
                  
                </div>
        </div>

            {/* button */}

            <div className='w-[100%]'>
                <Link to="/signup/registration">
                <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-4 px-10  text-2xl w-[100%]">
              Next
            </button>
                </Link>
            </div>
        </div>
        </div>
       
    
    </>
  )
}

export default SignupStart