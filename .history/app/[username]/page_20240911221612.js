import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = ({ params }) => {
  return (
    <>
     
      <PaymentPage username = {params.username}/>


    </>
  )
}

export default Username
