"use client"
import React, { useEffect , useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser , updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'

const Dashboard = () => {
  const {data:session} = useSession()
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(()=> {
    if (!session) {
      router.push('/login')
    }
    else{
      getData()
    }
  }, [router,session])

  const getData = async ()=> {
    let u = await fetchuser(session.user.name)
    setform(u) 
  }

  const handleChange = (e) => {
    setform({...form , [e.target.name]: e.target.value})
  }
  const handleSubmit = async(e) => {
    let a = await updateProfile(e, session.user.name)
    toast('Profile Updated', {
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

    <div className="flex justify-center">
      <form action={handleSubmit} className="p-8 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">User Dashboard</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            placeholder="Enter Name"
            id="name"
            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            name="email"
            value={form.email || ""}
            onChange={handleChange}
            placeholder="Enter Email"
            id="email"
            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
          <input
            type="text"
            name="username"
            value={form.username || ""}
            onChange={handleChange}
            placeholder="Enter Username"
            id="username"
            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="profilepic" className="block text-sm font-medium text-white">Profile Picture</label>
          <input
            type="text"
            name="profilepic"
            value={form.profilepic || ""}
            onChange={handleChange}
            placeholder="Upload Picture"
            id="profilepic"
             className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="coverpic" className="block text-sm font-medium text-white">Cover Picture</label>
          <input
            type="text"
            name="coverpic"
            value={form.coverpic || ""}
            onChange={handleChange}
            placeholder="Upload Cover Picture"
            id="coverpic"
            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="razorpayid" className="block text-sm font-medium text-white">Razorpay Id</label>
          <input
            type="text"
            name="razorpayid"
            value={form.razorpayid || ""}
            onChange={handleChange}
            placeholder="Enter Razorpay Id"
            id="razorpayid"
            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="razorpaysecret" className="block text-sm font-medium text-white">Razorpay Secret</label>
          <input
            type="text"
            name="razorpaysecret"
            value={form.razorpaysecret || ""}
            onChange={handleChange}
            placeholder="Enter Secret"
            id="razorpaysecret"
            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex justify-center">
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  </>
  )
}

export default Dashboard

