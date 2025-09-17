import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import {notfo}

const Username = ({ params }) => {
  return (
    <>
     
      <PaymentPage username = {params.username}/>


    </>
  )
}

export default Username
