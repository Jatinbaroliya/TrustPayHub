import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = ({ params }) => {
  //if the username is not present in the databasse then show 404 error
  return (
    <>
     
      <PaymentPage username = {params.username}/>


    </>
  )
}

export default Username
