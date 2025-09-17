import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = async ({ params }) => {
  const awaitedParams = await params;
  const username = awaitedParams.username;

  //if the username is not present in the database then show a 404 error
  const checkUser = async() =>{
    await connectDb()
    let u = await User.findOne({username: username})

    if(!u)
    {
       return notFound()
    }

  }

  await checkUser()

  return (
    <>

      <PaymentPage username = {username}/>


    </>
  )
}

export default Username

export async function generateMetadata({params}){
   const awaitedParams = await params;
   return{
    title: ` Support ${awaitedParams.username} - TrustPayHub`,
   }
}
