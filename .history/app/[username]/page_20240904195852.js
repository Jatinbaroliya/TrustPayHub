import React from 'react'

const Username = ({params}) => {
  return (
    <>
      {params.username}

       <div className='cover w-full bg-red-50 relative'>

        <img className='h-[350] w-full object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/855806/4b1d8480ee2f4b27ad0b8a2279dd6301/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/22.jpg?token-time=1728000000&token-hash=XDD2hP65UnTpBERUvc2EhPI4TqFhGYDT-8UgyOdIVJI%3D" alt="" />
        
        <div className='absolute bottom-20 right-[46%] border-white border-2'>
        <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/10082635/e363fa56263d4b0a88604048a4c8d0b3/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/2.jpg?token-time=1726704000&amp;token-hash=LcJf2fzvWB7e-DHv4T9iCs8ut_EGPsQA_OJr3MO3chw%3D" alt="" data-tag="creator-public-page-avatar" class="sc-bdvvtL iFMLae">>
        </div>
    
       </div>
    </>
  )
}

export default Username
