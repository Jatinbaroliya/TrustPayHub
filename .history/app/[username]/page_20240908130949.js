import React from 'react'
import PaymentaPage from '@/components/PaymentaPage'

const Username = ({ params }) => {
  return (
    <>
     
      <PaymentPage username = {params.username}/>


    </>
  )
}

export default Username
