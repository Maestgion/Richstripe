import React from 'react'

const DashboardPage = () => {
  return (
    <div className='h-[90vh] flex flex-col justify-center items-center gap-10'>
        <div>
            <p className='text-white text-4xl font-bold '>Subscriptions</p>
        </div>

        <div className='w-[50%] p-4 text-white text-lg flex justify-between  items-center'>
        <p>Hello</p>
                <button className="outline-none rounded-md bg-[#004E96] text-white hover:bg-[#035fb5] py-2 px-4  text-base">
              Cancel
            </button>
        </div>

    </div>
  )
}

export default DashboardPage