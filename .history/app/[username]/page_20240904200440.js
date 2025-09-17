import React from 'react'

const Username = ({params}) => {
  return (
    <>
      {params.username}

       <div className='cover w-full bg-red-50 relative'>

        <img className='h-[250] w-full object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2369690/f9dedd3ede47400aa951056c3484d4ee/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/5.png?token-time=1728000000&token-hash=NiV044x2GC2EX8j71t9e2ffN0-uZb1OAbNB008Usd7U%3D" alt="" />
        
        <div className='absolute bottom-20 right-[46%] border-white border-2'>
           <img className='' width={100} height={100} src="http://4.bp.blogspot.com/-mT0wj-X5KPU/T3LpIEndWoI/AAAAAAAAAEs/fZGHU92o1MI/s1600/Funny_dog_2_bis_by_Cathita.jpg" alt="" />
        </div>
    
       </div>
    </>
  )
}

export default Username
