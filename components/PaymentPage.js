"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import {fetchuser, fetchpayments, initiate} from '@/actions/useractions'
import {useSearchParams} from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'


const PaymentPage = ({username}) => {
    // const {data : session} = useSession()
    const [paymentform , setPaymentform] = useState({name:"",message:"",amount:""})
    const [currentUser , setcurrentUser] = useState({ })
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(()=>{
      getData()
    }, [])

    useEffect(()=> {
      if(searchParams.get("paymentdone") == "true"){
        toast('Payment Done', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
      router.push(`/${username}`)
    },[])

    const handleChange = (e) => {
        setPaymentform({ ...paymentform , [e.target.name]: e.target.value})
    }

    const getData = async () => {
      let u = await fetchuser(username)
      setcurrentUser(u)
      let dbpayments = await fetchpayments(username)
      setpayments(dbpayments)
    }

    const pay= async(amount)=>{
       
        let a =  await initiate(amount, username , paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get me a Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
   

}
  return (
   <>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />

   <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


<div className='text-white cover w-full bg-red-50 relative'>
      <img className='object-center object-cover w-full md:h-[350px] h-48' src={currentUser.coverpic}/>
      <div className='absolute md:right-[45%] right-[37%] -bottom-[30%] border-2 border-white rounded-full'>
        <img className='w-[150px] rounded-full transform transition-transform duration-5000 hover:scale-110' src={currentUser.profilepic}/>
      </div>
    </div>
    <div className='info flex flex-col justify-center md:mt-[116px] mt-[90px]  items-center gap-2'>
       <div className='font-bold text-lg'>@{username}</div>
       <div className='text-slate-400'>Lets help {username} get a chai.</div>
       <div className='text-slate-400'>{payments.length} Payments . ₹{payments.reduce((a , b) => a + b.amount , 0)} raised.</div>
       <div className='flex w-[80%] gap-4 m-8 flex-col md:flex-row'>
        <div className=' md:w-1/2 min-h-[300px] bg-slate-900 rounded-2xl p-4'>
          <h2 className='text-2xl text-center font-bold'>Supporters:</h2>
          <ul>
            {payments.length == 0 && <li>No Payments yet.</li>}
            {payments.map((p , i)=>{
              return  <li className='my-2'>{p.name} donates ₹{p.amount} with a message "{p.message}" </li>
            })}   
          </ul>
        </div>
        <div className='bg-slate-900 md:w-1/2 rounded-2xl p-4'>
        <h2 className='text-2xl text-center font-bold'>Make a Payment:</h2>
        <div className='flex flex-col gap-2 my-2'>
          <input onChange={handleChange} value={paymentform.name} name='name' type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name'/>
          <input onChange={handleChange} value={paymentform.message} name='message' type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message'/>
          <input onChange={handleChange} value={paymentform.amount} name='amount' type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount'/>
          <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 disabled:bg-slate-600 disabled:from-purple-500" disabled={paymentform.name?.length<3||paymentform.message?.length<4||paymentform.amount?.length<1}>Pay</button>
        </div>
        <div className='flex gap-2 mt-5'>
          <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(1000)}>Pay ₹10</button>
          <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(2000)}>Pay ₹20</button>
          <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(3000)}>Pay ₹30</button>
        </div>
        </div>
       </div>
    </div>
   </>
  )
}

export default PaymentPage
