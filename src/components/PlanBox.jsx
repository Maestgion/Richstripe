import React from 'react'

const PlanBox = ({title}) => {

    const [showTriangle, setShowTriangle] = useState(false)

    const toggleTriangle = ()=>{
        setShowTriangle(!showTriangle)
    }

  return (
    <>
        <div className='relative w-40 h-40 bg-[#4274a3]' onClick={toggleTriangle}>
            {
                showTriangle && (
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-solid border-t-5 border-transparent border-white' >{title}</div>
                )
            }
        </div>
    </>
  )
}

export default PlanBox