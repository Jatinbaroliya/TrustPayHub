import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = ({ params }) => {
  //if the username is not avail
  return (
    <>
     
      <PaymentPage username = {params.username}/>


    </>
  )
}

export default Username
