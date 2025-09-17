import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = async ({ params }) => {
  //if the username is not present in the database then show a 404 error
  const checkUser = async() =>{
    await connectDb()
    let u = await User.findOne({username: params.username})

    if(!u)
    {
       return notFound()
    }

  }

  await checkUser()

  return (
    <>
     
      <PaymentPage username = {params.username}/>


    </>
  )
}

export default Username

export async function generateMetadata({params}){
   return{
    title: `{params} - Get Me A Chai',
   }
}
