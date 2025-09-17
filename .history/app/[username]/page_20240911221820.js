import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = ({ params }) => {
  //if the username is not present in the database then show a 404 error
  const checkUser = async() =>{
    await connectDb
    
  }
  return (
    <>
     
      <PaymentPage username = {params.username}/>


    </>
  )
}

export default Username
