import React from 'react'

const Username = ({params}) => {
  return (
    <>
      {params.username}

       <div className='cover w-full bg-red-50 relative'>

        <img className='h-[350] w-full object-cover' src="" alt="" />

    
       </div>
    </>
  )
}

export default Username
