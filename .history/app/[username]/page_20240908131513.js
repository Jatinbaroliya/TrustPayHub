import React from 'react'
import PaymentPage from '@/components/PaymentaPage'

const Username = ({ params }) => {
  return (
    <>
     
      <PaymentPage username = {params.username}/>


    </>
  )
}

export default Username
