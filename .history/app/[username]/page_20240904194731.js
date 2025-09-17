import React from 'react'

const Username = ({params}) => {
  return (
    <>
      {params.username}

       <div className='cover w-full bg-red-50 relative'>

        <img src="h-[350]" alt="" />

    
       </div>
    </>
  )
}

export default Username
