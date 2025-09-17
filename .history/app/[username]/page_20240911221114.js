import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import {not}

const Username = ({ params }) => {
  return (
    <>
     
      <PaymentPage username = {params.username}/>


    </>
  )
}

export default Username
