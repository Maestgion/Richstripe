import React from 'react'
import {MdOutlineDevices} from "react-icons/md"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
     <div className='h-[90vh]  flex justify-center items-center'>
        <div className='flex flex-col text-white justify-center items-center gap-10 w-[30%]'>
            {/* head */}
            <div className='flex flex-col gap-8 justify-center items-center'>
                <MdOutlineDevices className='text-7xl text-[#004E96] text-center'/>
               <div>
               <p className='text-center text-base pb-3'>STEP 2 OF 3</p>
                <p className='text-4xl font-bold text-center'>Finish setting up your account.</p>
               </div>
            </div>

            {/* details */}

            <div className='text-center text-xl px-20'>
              <p>
              Netflix is personalised for you. Create a password to watch on any device at any time.
              </p>
                </div>
                
            {/* button */}

                <div className='w-[100%]'>
                <Link to="/signup/regform">
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

export default Register