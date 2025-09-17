import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import con

const Username = ({ params }) => {
  return (
    <>
     
      <PaymentPage username = {params.username}/>


    </>
  )
}

export default Username
